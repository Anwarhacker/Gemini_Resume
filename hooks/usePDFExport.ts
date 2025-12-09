import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ResumeData } from '../types';

export const usePDFExport = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async (elementId: string, resumeData: ResumeData) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setIsGenerating(true);
    
    // Scroll to top to ensure no scroll offsets affect capture
    window.scrollTo(0, 0);

    try {
      // 1. Ensure fonts are loaded
      if (document.fonts) {
        await document.fonts.ready;
      }

      // 2. Clone the element for off-screen rendering
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
      // This adds padding to the bottom of text elements so descenders (g, j, y, etc.) aren't cut off
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

      // 4. Wait a bit for the clone to render completely
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 5. Capture with high quality settings
      const canvas = await html2canvas(clone, {
        scale: 2.5, // Good balance of quality and file size
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 794,
        allowTaint: true
      });

      document.body.removeChild(clone);

      // 6. Generate PDF
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

      const fileName = `${resumeData.personalInfo.fullName.replace(/\s+/g, '_') || 'resume'}.pdf`;
      pdf.save(fileName);

    } catch(e) { 
        console.error("Download failed", e);
        alert("Could not download resume. Please try again.");
    } finally {
        setIsGenerating(false);
    }
  };

  return { downloadPDF, isGenerating };
};
