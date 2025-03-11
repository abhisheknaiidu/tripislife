import { Hero } from '@/components/Hero';
import { Properties } from '@/components/Properties';
import { Testimonial } from '@/components/Testimonial';
import { Magazine } from '@/components/Magazine';
import { getMockData } from '@/lib/getData';
import { Varkala } from './modules/Varkala';
import { Footer } from './modules/Footer';
import { ReadMore } from './modules/ReadMore';

// Import the WeatherSectionClient component directly
import { WeatherSectionClient } from './modules/WeatherSectionClient';

// Import the getWeatherData function
import { getWeatherData } from './modules/WeatherSection';

export default async function Home() {
  const data = await getMockData();
  const weatherData = await getWeatherData();

  return (
    <main>
      <Hero {...data.hero} />
      <Varkala />
      <Properties items={data.properties} />
      <WeatherSectionClient weatherData={weatherData} />
      <Testimonial {...data.testimonial} surfPromo={data.surfPromo} />
      <Magazine 
        title={data.magazine.title} 
        subtitle={data.magazine.subtitle}
        coverImage={data.magazine.coverImage}
      />
      <ReadMore />
      <Footer data={data.footer} />
    </main>
  );
}
