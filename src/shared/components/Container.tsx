import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-350 px-6 w-full ${className}`}>
      {children}
    </div>
  );
}
