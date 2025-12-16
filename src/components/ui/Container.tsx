interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

const sizeStyles = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-screen-2xl',
};

export function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
}
