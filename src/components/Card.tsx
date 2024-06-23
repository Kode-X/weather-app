import React from 'react';

interface CardProps {
  className?: string; // Optional className prop to allow additional classes
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const defaultClasses = 'p-5 bg-white bg-opacity-50 rounded-lg shadow-md mb-5';

  return (
    <div className={`${defaultClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
