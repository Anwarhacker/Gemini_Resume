import { useState, useEffect, useCallback } from 'react';
import { ResumeData, initialResumeState } from '../types';
import { EXAMPLE_DATA } from '../data/exampleData';

const STORAGE_KEY = 'resume_craft_data_v1';

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

  // Persist to local storage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    } catch (e) {
      console.error('Failed to save resume data', e);
    }
  }, [resumeData]);

  const updateResume = useCallback((newData: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...newData }));
  }, []);

  const loadDemoData = useCallback(() => {
    // Preserve template and font settings when loading demo data
    setResumeData(prev => ({
      ...JSON.parse(JSON.stringify(EXAMPLE_DATA)),
      templateId: prev.templateId,
      font: prev.font
    }));
  }, []);

  const clearResumeData = useCallback(() => {
    if (window.confirm("Are you sure you want to clear all data? This cannot be undone.")) {
      setResumeData(prev => ({
        ...JSON.parse(JSON.stringify(initialResumeState)),
        templateId: prev.templateId,
        font: prev.font
      }));
    }
  }, []);

  const setTemplate = useCallback((templateId: string) => {
    console.log('🎨 Setting template to:', templateId);
    setResumeData(prev => {
      const newData = { ...prev, templateId };
      console.log('✅ Template updated. New templateId:', newData.templateId);
      return newData;
    });
  }, []);

  const setFont = useCallback((font: 'sans' | 'serif' | 'mono') => {
    setResumeData(prev => ({ ...prev, font }));
  }, []);

  const importJson = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json);
      if (parsed.personalInfo && Array.isArray(parsed.education)) {
        setResumeData(parsed);
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
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
