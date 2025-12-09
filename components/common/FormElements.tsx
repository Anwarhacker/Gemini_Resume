import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<InputProps> = ({ label, className = '', ...props }) => (
  <label className="flex flex-col gap-1.5 w-full">
    <span className="text-sm font-semibold text-slate-700">{label}</span>
    <input 
      className={`form-input rounded-lg border-slate-300 focus:ring-primary focus:border-primary placeholder:text-slate-400 ${className}`} 
      {...props} 
    />
  </label>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FormTextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => (
  <label className="flex flex-col gap-1.5 w-full">
    <span className="text-sm font-semibold text-slate-700">{label}</span>
    <textarea 
      className={`form-textarea rounded-lg border-slate-300 focus:ring-primary focus:border-primary placeholder:text-slate-400 min-h-[100px] leading-relaxed ${className}`} 
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
      className={`form-checkbox rounded text-primary focus:ring-primary border-slate-300 ${className}`} 
      {...props} 
    />
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </label>
);
