import { Hero } from '@/components/Hero';
import { Properties } from '@/components/Properties';
import { Testimonial } from '@/components/Testimonial';
import { Magazine } from '@/components/Magazine';
import { getMockData } from '@/lib/getData';
import { Varkala } from './modules/Varkala';
import { Footer } from './modules/Footer';
import Carousel1 from '@/app/assets/carousel_1.jpg'
import Carousel2 from '@/app/assets/carousel_2.jpg'
// Import the WeatherSectionClient component directly
import { WeatherSectionClient } from './modules/WeatherSectionClient';

// Import the getWeatherData function
import { getWeatherData } from './modules/WeatherSection';

export default async function Home() {
  const data = await getMockData();
  const weatherData = await getWeatherData();

  return (
    <main>
      <Hero image={[Carousel1, Carousel2]} />
      <Varkala />
      <Properties items={data.properties} />
      <WeatherSectionClient weatherData={weatherData} />
      <Testimonial {...data.testimonial} surfPromo={data.surfPromo} />
      <Magazine 
        title={data.magazine.title} 
        subtitle={data.magazine.subtitle}
        coverImage={data.magazine.coverImage}
      />
      {/* <ReadMore /> */}
      <Footer data={data.footer} />
    </main>
  );
}
