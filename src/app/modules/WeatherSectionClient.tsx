'use client';

import Image from 'next/image';
import WeatherBg from '@/app/assets/weather_section.png';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  time: string;
  date: string;
  windSpeeds: number[];
  times: string[];
}

export function WeatherSectionClient({ weatherData }: { weatherData: WeatherData }) {
  return (
    <section className="relative w-full h-[770px] bg-black text-yellow-300 overflow-hidden">
      {/* Background image - ocean/beach aerial view */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image 
          src={WeatherBg}
          alt="Aerial view of beach" 
          fill 
          className="object-cover grayscale"
          priority
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          {/* Location name */}
          <h2 className="text-[168px] font-anton leading-none pt-[100px]">
            {weatherData.location}
          </h2>
          
          {/* Temperature and conditions */}
          <div className="text-right">
            <div className="text-[180px] font-anton leading-none">
              {weatherData.temperature}°C
            </div>
            <div className="text-[48px] font-ivypresto leading-tight">
              {weatherData.date}, {weatherData.time}<br />
              {weatherData.condition}
            </div>
          </div>
        </div>
        
        {/* Wind forecast */}
        <div className="mt-auto">
          <div className="grid grid-cols-8 gap-2 text-center mb-2">
            {weatherData.windSpeeds.map((speed, index) => (
              <div key={index} className="text-lg">{speed} km/h</div>
            ))}
          </div>
          
          <div className="grid grid-cols-8 gap-2 text-center">
            {weatherData.windSpeeds.map((speed, index) => (
              <div key={index} className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 5L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-8 gap-2 text-center mt-2">
            {weatherData.times.map((time, index) => (
              <div key={index} className="text-lg">{time}</div>
            ))}
          </div>
        </div>
        
        {/* Message at bottom */}
        <p className="text-center text-xl mt-8 font-mono">
          ideal weather for your evening surf sessions and coffee
        </p>
      </div>
    </section>
  );
} 