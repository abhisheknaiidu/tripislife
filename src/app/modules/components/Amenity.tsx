import React, { forwardRef } from 'react';

interface AmenityProps {
  label: string;
  isVisible: boolean;
  imageSrc?: string;
  onHover?: (imageSrc: string | undefined) => void;
}

const Amenity = forwardRef<HTMLDivElement, AmenityProps>(
  ({ label, isVisible, imageSrc, onHover }, ref) => {
    return (
      <div 
        ref={ref}
        className={`transition-all duration-700 ease-in-out w-full ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        onMouseEnter={() => onHover && imageSrc && onHover(imageSrc)}
        data-src={imageSrc}
      >
        <div className="text-[#294023] text-xl font-medium text-center hover:text-[#1a2a17] cursor-pointer">
          {label}
        </div>
      </div>
    );
  }
);

Amenity.displayName = 'Amenity';

export default Amenity; 