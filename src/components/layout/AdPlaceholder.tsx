interface AdPlaceholderProps {
  slot?: string;
  format?: 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

export default function AdPlaceholder({
  slot = 'default',
  format = 'horizontal',
  className = '',
}: AdPlaceholderProps) {
  const formatClasses = {
    horizontal: 'w-full h-[90px] md:h-[90px]',
    vertical: 'w-[300px] h-[600px]',
    rectangle: 'w-full h-[250px] md:w-[300px] md:h-[250px]',
  };

  return (
    <div className={`ad-placeholder ${formatClasses[format]} ${className} rounded-lg my-6`}>
      <div>
        <p className="font-medium">Ad Space</p>
        <p className="text-sm mt-1">Google AdSense / Adsterra</p>
        <p className="text-xs mt-2 text-gray-500">Slot: {slot}</p>
      </div>
    </div>
  );
}
