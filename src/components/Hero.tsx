import Image, { StaticImageData } from 'next/image';
import { Nav } from '@/components/Nav';

type HeroProps = {
  image: StaticImageData;
};

export function Hero({ image }: HeroProps) {
  return (
    <section className="relative h-screen">
      <Nav />
      <Image
        src={image}
        alt="Luxury villa with pool"
        fill
        className="object-cover"
        priority
        quality={100}
      />
    </section>
  );
} 