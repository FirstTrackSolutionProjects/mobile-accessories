import React from 'react';

const Button = ({ onClick, children, variant = "primary" }) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none transition";
  const variantClasses = variant === "outline" 
    ? "border border-blue-500 text-blue-500 hover:bg-blue-100"
    : variant === "destructive"
    ? "bg-red-500 text-white hover:bg-red-600"
    : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

export default Button ;
