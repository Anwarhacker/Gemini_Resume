// Shared constants across the application

// Storage keys
export const STORAGE_KEY = 'resume_craft_data_v1';

// Font options
export interface FontOption {
  id: 'sans' | 'serif' | 'mono';
  label: string;
  class: string;
}

export const fontOptions: FontOption[] = [
  { id: 'sans', label: 'Sans', class: 'font-sans' },
  { id: 'serif', label: 'Serif', class: 'font-serif' },
  { id: 'mono', label: 'Mono', class: 'font-mono' }
];

// Template colors for editor
export interface TemplateColor {
  id: string;
  name: string;
  color: string;
}

export const availableTemplates: TemplateColor[] = [
  { id: 'modern', name: 'Modern', color: 'bg-slate-800' },
  { id: 'simple', name: 'Simple', color: 'bg-slate-400' },
  { id: 'swiss', name: 'Swiss', color: 'bg-red-600' },
  { id: 'coral', name: 'Coral', color: 'bg-orange-400' },
  { id: 'urban', name: 'Urban', color: 'bg-stone-500' },
  { id: 'onyx', name: 'Onyx', color: 'bg-slate-900' },
  { id: 'serif', name: 'Serif', color: 'bg-amber-700' },
  { id: 'creative', name: 'Creative', color: 'bg-blue-600' },
  { id: 'clean', name: 'Clean', color: 'bg-slate-200 border border-slate-400' },
  { id: 'minimalist', name: 'Minimalist', color: 'bg-emerald-600' },
  { id: 'compact', name: 'Compact', color: 'bg-slate-600' },
  { id: 'classic', name: 'Classic', color: 'bg-indigo-900' },
  { id: 'bold', name: 'Bold', color: 'bg-black' },
  { id: 'executive', name: 'Executive', color: 'bg-slate-900' },
  { id: 'elegant', name: 'Elegant', color: 'bg-[#fdfbf7] border border-slate-300' },
  { id: 'tech', name: 'Tech', color: 'bg-teal-600' },
  { id: 'academic', name: 'Academic', color: 'bg-gray-500' },
  { id: 'designer', name: 'Designer', color: 'bg-pink-500' }
];

// localStorage debounce delay in milliseconds
export const STORAGE_DEBOUNCE_DELAY = 500;

// Max file size for JSON import (5MB)
export const MAX_IMPORT_FILE_SIZE = 5 * 1024 * 1024;
