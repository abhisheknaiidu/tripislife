import { StaticImageData } from 'next/image';
import { Nav } from '@/components/Nav';
import { PropertyCarousel } from '@/app/modules/PropertyCarousel';

type HeroProps = {
  image: StaticImageData | StaticImageData[];
};

export function Hero({ image }: HeroProps) {
  const images = Array.isArray(image) ? image : [image];
  
  return (
    <section className="relative h-[calc(100vh-250px)]">
      <Nav />
      <PropertyCarousel images={images} />
    </section>
  );
} 