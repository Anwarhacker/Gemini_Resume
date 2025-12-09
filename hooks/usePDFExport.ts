import { useState, useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ResumeData } from '../types';

export interface PDFExportProgress {
  stage: 'preparing' | 'capturing' | 'generating' | 'complete';
  progress: number; // 0-100
}

export const usePDFExport = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState<PDFExportProgress | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const downloadPDF = useCallback(async (elementId: string, resumeData: ResumeData): Promise<{ success: boolean; error?: string }> => {
    const element = document.getElementById(elementId);
    if (!element) {
      return { success: false, error: 'Could not find resume preview element' };
    }

    // Create abort controller for cancellation support
    abortControllerRef.current = new AbortController();
    setIsGenerating(true);
    setProgress({ stage: 'preparing', progress: 10 });

    // Scroll to top to ensure no scroll offsets affect capture
    window.scrollTo(0, 0);

    try {
      // 1. Ensure fonts are loaded
      setProgress({ stage: 'preparing', progress: 20 });
      if (document.fonts) {
        await document.fonts.ready;
      }

      if (abortControllerRef.current.signal.aborted) {
        return { success: false, error: 'Export cancelled' };
      }

      // 2. Clone the element for off-screen rendering
      setProgress({ stage: 'preparing', progress: 30 });
      const clone = element.cloneNode(true) as HTMLElement;

      // Reset transform and set fixed width for A4 (210mm @ 96DPI ~= 794px)
      clone.style.transform = 'none';
      clone.style.width = '794px';
      clone.style.minHeight = '1123px';
      clone.style.position = 'fixed'; // Use fixed to remove it from flow
      clone.style.left = '-9999px';   // Move off-screen
      clone.style.top = '0';
      clone.style.zIndex = '-9999';
      clone.style.margin = '0';
      clone.style.overflow = 'visible'; // Allow content to overflow without clipping

      document.body.appendChild(clone);

      // 3. Inject CSS to fix font clipping
      const style = document.createElement('style');
      style.innerHTML = `
        * {
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          text-rendering: geometricPrecision !important;
        }
        h1, h2, h3, h4, h5, h6, p, span, li, div {
           padding-bottom: 3px !important; /* Safety buffer */
           background-clip: padding-box;
        }
        /* Ensure specific elements don't collapse */
        .material-symbols-outlined {
           padding-bottom: 0 !important;
           vertical-align: middle;
        }
      `;
      clone.appendChild(style);

      // 4. Wait for rendering using requestAnimationFrame (better than arbitrary timeout)
      setProgress({ stage: 'capturing', progress: 40 });
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(resolve, 500); // Small additional delay for complex layouts
          });
        });
      });

      if (abortControllerRef.current.signal.aborted) {
        document.body.removeChild(clone);
        return { success: false, error: 'Export cancelled' };
      }

      // 5. Capture with high quality settings
      setProgress({ stage: 'capturing', progress: 60 });
      const canvas = await html2canvas(clone, {
        scale: 2.5, // Good balance of quality and file size
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 794,
        allowTaint: true
      });

      document.body.removeChild(clone);

      if (abortControllerRef.current.signal.aborted) {
        return { success: false, error: 'Export cancelled' };
      }

      // 6. Generate PDF
      setProgress({ stage: 'generating', progress: 80 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;

      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Additional pages if content overflows
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      setProgress({ stage: 'generating', progress: 95 });

      const fileName = `${resumeData.personalInfo.fullName.replace(/\s+/g, '_') || 'resume'}.pdf`;
      pdf.save(fileName);

      setProgress({ stage: 'complete', progress: 100 });

      // Clear progress after a short delay
      setTimeout(() => setProgress(null), 1000);

      return { success: true };

    } catch (e) {
      console.error("PDF generation failed", e);
      return {
        success: false,
        error: e instanceof Error ? e.message : 'Failed to generate PDF. Please try again.'
      };
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null;
    }
  }, []);

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return { downloadPDF, isGenerating, progress, cancel };
};
