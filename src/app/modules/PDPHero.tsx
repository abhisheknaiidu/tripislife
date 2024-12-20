import { PropertyCarousel } from './PropertyCarousel';
import { Nav } from '@/components/Nav';



const PDPHero = ({ data }: { data: any }) => {
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