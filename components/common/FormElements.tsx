import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<InputProps> = ({ label, className = '', ...props }) => (
  <label className="flex flex-col gap-1.5 w-full">
    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</span>
    <input 
      className={`form-input rounded-lg border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-primary focus:border-primary dark:focus:border-primary p-2 placeholder:text-slate-400 dark:placeholder:text-slate-500 ${className}`} 
      {...props} 
    />
  </label>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FormTextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => (
  <label className="flex flex-col gap-1.5 w-full">
    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</span>
    <textarea 
      className={`form-textarea rounded-lg border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-primary focus:border-primary dark:focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-500 min-h-[100px] leading-relaxed ${className}`} 
      {...props} 
    />
  </label>
);

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormCheckbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input 
      type="checkbox" 
      className={`form-checkbox rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 p-2 dark:bg-slate-700 ${className}`} 
      {...props} 
    />
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
  </label>
);
