import React from 'react';
import { MaterialIcon } from './MaterialIcon';
import { Toast as ToastType } from '../../hooks/useToast';

interface ToastProps {
  toast: ToastType;
  onDismiss: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return 'info';
    }
  };

  const getStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-600 dark:text-green-200';
      case 'error':
        return 'bg-red-50 border-red-500 text-red-800 dark:bg-red-900/30 dark:border-red-600 dark:text-red-200';
      case 'warning':
        return 'bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-900/30 dark:border-amber-600 dark:text-amber-200';
      case 'info':
        return 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-200';
      default:
        return 'bg-gray-50 border-gray-500 text-gray-800 dark:bg-gray-900/30 dark:border-gray-600 dark:text-gray-200';
    }
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 shadow-lg backdrop-blur-sm mb-3 animate-in slide-in-from-right duration-300 ${getStyles()}`}
      role="alert"
      aria-live="polite"
    >
      <MaterialIcon name={getIcon()} className="text-xl fill" />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button
        onClick={() => onDismiss(toast.id)}
        className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        aria-label="Dismiss"
      >
        <MaterialIcon name="close" className="text-base" />
      </button>
    </div>
  );
};

export default Toast;
