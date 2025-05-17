import { useEffect, useRef, useState } from 'react';
import Amenity from './Amenity';

interface Amenity {
  label: string;
  imageSrc?: string;
  [key: string]: string | undefined;
}

interface AmenitiesListProps {
  amenities: Amenity[];
  onImageHover?: (imageSrc: string | undefined) => void;
}

const AmenitiesList = ({ amenities, onImageHover }: AmenitiesListProps) => {
  const [visibleAmenities, setVisibleAmenities] = useState<number[]>([]);
  const amenityRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = amenityRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1 && !visibleAmenities.includes(index)) {
            setTimeout(() => {
              setVisibleAmenities(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    // Store a copy of the current refs for cleanup
    const currentRefs = [...amenityRefs.current];

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleAmenities]);

  const handleAmenityHover = (imageSrc: string | undefined) => {
    if (onImageHover) {
      onImageHover(imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {amenities.map((amenity, i) => (
        <Amenity
          key={i}
          ref={el => amenityRefs.current[i] = el}
          label={amenity.label}
          isVisible={visibleAmenities.includes(i)}
          imageSrc={amenity.imageSrc}
          onHover={handleAmenityHover}
        />
      ))}
    </div>
  );
};

export default AmenitiesList; 