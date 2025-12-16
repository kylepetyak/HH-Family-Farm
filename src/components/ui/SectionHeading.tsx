interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const alignmentStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignmentStyles[alignment]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
