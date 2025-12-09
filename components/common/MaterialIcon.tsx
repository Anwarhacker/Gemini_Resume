import React from 'react';

export const MaterialIcon = ({ name, className = "", fill = false }: { name: string, className?: string, fill?: boolean }) => (
  <span className={`material-symbols-outlined ${fill ? 'fill' : ''} ${className}`}>
    {name}
  </span>
);