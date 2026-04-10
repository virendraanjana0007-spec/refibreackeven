interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 min-h-[44px] px-6 py-3';
  
  const variantClasses = variant === 'primary'
    ? 'bg-primary text-white hover:bg-primary-hover disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg'
    : 'bg-white text-primary border-2 border-primary hover:bg-primary-light disabled:opacity-50';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
