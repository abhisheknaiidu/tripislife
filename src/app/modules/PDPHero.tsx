import { PropertyCarousel } from './PropertyCarousel';
import { Nav } from '@/components/Nav';
import { StaticImageData } from 'next/image';



const PDPHero = ({ data }: { data: {hero: {images: StaticImageData[]}} }) => {
  return (
    <div>
    <section className="relative h-screen">
      <Nav />
      <PropertyCarousel images={data.hero.images} />
    </section>
  </div>
  )
}

export default PDPHero