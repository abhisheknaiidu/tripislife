import { useEffect, useState } from 'react';
import Image from 'next/image';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  time: string;
  date: string;
  windSpeeds: number[];
  times: string[];
}

export function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch real-time weather data
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Varkala,in&units=metric&appid=' + 
          process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        
        // Get current time and format it
        const now = new Date();
        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
        const timeString = now.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        }).toLowerCase();
        
        // Generate mock wind speeds for the next few hours
        const baseWindSpeed = Math.round(data.wind.speed);
        const windSpeeds = Array(8).fill(0).map(() => 
          Math.max(5, Math.min(18, baseWindSpeed + Math.floor(Math.random() * 6) - 2))
        );
        
        // Generate times for the forecast
        const times = [];
        let hour = now.getHours();
        for (let i = 0; i < 8; i++) {
          const timeLabel = hour % 12 === 0 ? '12' : (hour % 12).toString();
          times.push(`${timeLabel} ${hour < 12 ? 'am' : 'pm'}`);
          hour = (hour + 3) % 24;
        }
        
        setWeatherData({
          location: 'VARKALA',
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          time: timeString,
          date: dayOfWeek,
          windSpeeds,
          times
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Fallback to mock data if API fails
        setWeatherData({
          location: 'VARKALA',
          temperature: 33,
          condition: 'Partly Cloudy',
          time: '11:00am',
          date: 'Tuesday',
          windSpeeds: [6, 18, 13, 5, 5, 5, 6, 8],
          times: ['12 pm', '3 pm', '6 pm', '9 pm', '12 am', '3 am', '6 am', '9 am']
        });
        setLoading(false);
      }
    };

    fetchWeatherData();
    
    // Refresh weather data every 15 minutes
    const intervalId = setInterval(fetchWeatherData, 15 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div className="h-[600px] bg-black flex items-center justify-center">
      <p className="text-yellow-300 text-2xl">Loading weather data...</p>
    </div>;
  }

  return (
    <section className="relative w-full h-[770px] bg-black text-yellow-300 overflow-hidden">
      {/* Background image - ocean/beach aerial view */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image 
          src="/images/beach-aerial.jpg" 
          alt="Aerial view of beach" 
          fill 
          className="object-cover grayscale"
          priority
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          {/* Location name */}
          <h2 className="text-[168px] font-cofo-gothic leading-none">
            {weatherData?.location}
          </h2>
          
          {/* Temperature and conditions */}
          <div className="text-right">
            <div className="text-[180px] font-anton leading-none">
              {weatherData?.temperature}°C
            </div>
            <div className="text-[48px] font-ivypresto leading-tight">
              {weatherData?.date}, {weatherData?.time}<br />
              {weatherData?.condition}
            </div>
          </div>
        </div>
        
        {/* Wind forecast */}
        <div className="mt-auto">
          <div className="grid grid-cols-8 gap-2 text-center mb-2">
            {weatherData?.windSpeeds.map((speed, index) => (
              <div key={index} className="text-lg">{speed} km/h</div>
            ))}
          </div>
          
          <div className="grid grid-cols-8 gap-2 text-center">
            {weatherData?.windSpeeds.map((speed, index) => (
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
            {weatherData?.times.map((time, index) => (
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