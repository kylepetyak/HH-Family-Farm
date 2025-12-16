interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  text?: string;
  className?: string;
}

export function ImagePlaceholder({
  width,
  height,
  aspectRatio = '16/9',
  text = 'Image',
  className = '',
}: ImagePlaceholderProps) {
  const style: React.CSSProperties = {
    aspectRatio: !height ? aspectRatio : undefined,
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
    height: height
      ? typeof height === 'number'
        ? `${height}px`
        : height
      : undefined,
  };

  return (
    <div
      className={`bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center rounded-lg ${className}`}
      style={style}
    >
      <div className="text-center text-cream-600">
        <svg
          className="w-12 h-12 mx-auto mb-2 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm font-medium opacity-75">{text}</span>
      </div>
    </div>
  );
}
