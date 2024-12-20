import { Hero } from '@/components/Hero';
import { Properties } from '@/components/Properties';
import { CallToAction } from '@/components/CallToAction';
import { Testimonial } from '@/components/Testimonial';
import { Magazine } from '@/components/Magazine';
import { getMockData } from '@/lib/getData';
import { Varkala } from './modules/Varkala';
import { Footer } from './modules/Footer';
import { ReadMore } from './modules/ReadMore';

export default async function Home() {
  const data = await getMockData();

  return (
    <main>
      <Hero {...data.hero} />
      <Varkala />
      <Properties items={data.properties} />
      <Testimonial {...data.testimonial} surfPromo={data.surfPromo} />
      <Magazine 
        title={data.magazine.title} 
        subtitle={data.magazine.subtitle}
        coverImage={data.magazine.coverImage}
        coverTitle={data.magazine.coverTitle}
      />
      <ReadMore />
      <Footer data={data.footer} />
    </main>
  );
}
