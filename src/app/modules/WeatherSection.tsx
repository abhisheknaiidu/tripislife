'use server';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  time: string;
  date: string;
  windSpeeds: number[];
  times: string[];
}

// Export the getWeatherData function
export async function getWeatherData(): Promise<WeatherData> {
  try {
    // Fetch real-time weather data
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    // If no API key is available, use mock data
    if (!apiKey) {
      console.warn('No OpenWeather API key found. Using mock data.');
      throw new Error('No API key available');
    }
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Varkala,in&units=metric&appid=${apiKey}`,
      { next: { revalidate: 900 } } // Revalidate every 15 minutes
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
    
    return {
      location: 'VARKALA',
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      time: timeString,
      date: dayOfWeek,
      windSpeeds,
      times
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
    // Generate current time for mock data
    const now = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const timeString = now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    }).toLowerCase();
    
    // Generate times for the forecast
    const times = [];
    let hour = now.getHours();
    for (let i = 0; i < 8; i++) {
      const timeLabel = hour % 12 === 0 ? '12' : (hour % 12).toString();
      times.push(`${timeLabel} ${hour < 12 ? 'am' : 'pm'}`);
      hour = (hour + 3) % 24;
    }
    
    // Fallback to mock data if API fails
    return {
      location: 'VARKALA',
      temperature: 33,
      condition: 'Partly Cloudy',
      time: timeString,
      date: dayOfWeek,
      windSpeeds: [6, 18, 13, 5, 5, 5, 6, 8],
      times
    };
  }
}

// Export an async component to comply with server actions requirements
export default async function WeatherSection() {
  // This component is no longer needed, but we'll keep it for backward compatibility
  return null;
} 