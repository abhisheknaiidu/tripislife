import Image, { StaticImageData } from 'next/image';
import { Nav } from '@/components/Nav';

type HeroProps = {
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export function Hero({ image, title, subtitle }: HeroProps) {
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