import { useState, useEffect, useCallback, useRef } from 'react';
import { ResumeData, initialResumeState } from '../types';
import { EXAMPLE_DATA } from '../data/exampleData';
import { STORAGE_KEY, STORAGE_DEBOUNCE_DELAY } from '../constants';

export const useResume = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialResumeState;
    } catch (e) {
      console.error('Failed to load resume data', e);
      return initialResumeState;
    }
  });

  // Use ref to store the debounce timer
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced localStorage save
  useEffect(() => {
    // Clear existing timer
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new timer
    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
      } catch (e) {
        console.error('Failed to save resume data', e);
      }
    }, STORAGE_DEBOUNCE_DELAY);

    // Cleanup on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [resumeData]);

  const updateResume = useCallback((newData: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...newData }));
  }, []);

  const loadDemoData = useCallback(() => {
    // Preserve template and font settings when loading demo data
    setResumeData(prev => ({
      ...structuredClone(EXAMPLE_DATA),
      templateId: prev.templateId,
      font: prev.font
    }));
  }, []);

  const clearResumeData = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      const confirmed = window.confirm("Are you sure you want to clear all data? This cannot be undone.");
      if (confirmed) {
        setResumeData(prev => ({
          ...structuredClone(initialResumeState),
          templateId: prev.templateId,
          font: prev.font
        }));
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }, []);

  const setTemplate = useCallback((templateId: string) => {
    setResumeData(prev => ({ ...prev, templateId }));
  }, []);

  const setFont = useCallback((font: 'sans' | 'serif' | 'mono') => {
    setResumeData(prev => ({ ...prev, font }));
  }, []);

  const importJson = useCallback((json: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(json);

      // Enhanced validation
      if (!parsed.personalInfo || typeof parsed.personalInfo !== 'object') {
        return { success: false, error: 'Invalid file structure: missing personalInfo' };
      }

      if (!Array.isArray(parsed.education)) {
        return { success: false, error: 'Invalid file structure: education must be an array' };
      }

      if (!Array.isArray(parsed.experience)) {
        return { success: false, error: 'Invalid file structure: experience must be an array' };
      }

      setResumeData(parsed);
      return { success: true };
    } catch (e) {
      if (e instanceof SyntaxError) {
        return { success: false, error: 'Invalid JSON format' };
      }
      return { success: false, error: 'Failed to import data' };
    }
  }, []);

  return {
    resumeData,
    updateResume,
    loadDemoData,
    clearResumeData,
    setTemplate,
    setFont,
    importJson,
    setResumeData // Exposed for edge cases if needed
  };
};
