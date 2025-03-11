"use client"
import { useState } from 'react';

export function Varkala() {
  // State for form fields
  const [selectedProperty, setSelectedProperty] = useState('cliff stories');
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [checkInDate, setCheckInDate] = useState('aug 20, 2024');
  const [checkOutDate, setCheckOutDate] = useState('aug 20, 2024');
  const [adultCount, setAdultCount] = useState('1 adult');
  const [kidCount, setKidCount] = useState('1 kid');

  // Available properties
  const properties = ['cliff stories', 'beach house', 'mountain retreat', 'forest cabin'];

  // Handle property selection
  const handlePropertySelect = (property: string) => {
    setSelectedProperty(property);
    setShowPropertyDropdown(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-10 text-center bg-[#FFF6EB]">
      <div className="text-center mb-8 sm:mb-16 mt-[70px]">
        <p className="text-[36px] leading-[50px] font-mono mb-4">o</p>
        <p className="text-[36px] leading-[50px] font-mono">8.7239731649145244</p>
        <p className="text-[36px] leading-[50px] font-mono mb-8 sm:mb-16">76.71287693459008</p>
        
        <h1 className="font-vvds-rashfield text-[80px] sm:text-[188px]  leading-none text-[#E73D00]">
          sanctuary
        </h1>
        
        <div className="mt-4 ">
          <p className="font-ivypresto-regular-italic sm:mt-8 text-[#294023] text-xl sm:text-2xl md:text-[60px] mx-auto font-ivy-headline ">We invite you to disconnect from the noise</p>
          <p className="font-ivypresto-regular-italic sm:mt-8 text-[#294023] text-xl sm:text-2xl md:text-[60px] mx-auto font-ivy-headline !font-light
">believe in the healing power of place.</p>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center text-[#294023] text-sm leading-relaxed mb-8 sm:mb-16 px-4">
        <p>
          trip is life is an invitation to a world where time slows down and every moment is
          curated with meticulous care. we are purveyors of refined living, offering you a space
          where every detail is thoughtfully considered. our strong belief that travel is an art
          form has shaped our role as artisans of masterpieces that inspire and revitalise.
        </p>
      </div>
      
      <div className="border border-[#294023] p-4 sm:p-8 max-w-xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-left">
            <p className="mb-4">i want to stay at</p>
            <div 
              className="border-b border-[#294023] pb-1 flex items-center justify-between cursor-pointer"
              onClick={() => setShowPropertyDropdown(!showPropertyDropdown)}
            >
              <span>{selectedProperty}</span>
              <span>{showPropertyDropdown ? '∧' : 'v'}</span>
            </div>
            {showPropertyDropdown && (
              <div className="absolute bg-[#FFF6EB] border border-[#294023] mt-1 w-[calc(100%-2rem)] sm:w-auto z-10">
                {properties.map((property) => (
                  <div 
                    key={property}
                    className="px-3 py-2 hover:bg-[#E73D00]/10 cursor-pointer"
                    onClick={() => handlePropertySelect(property)}
                  >
                    {property}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-4 text-center">dates</p>
              <input 
                type="text" 
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="border-b border-[#294023] pb-1 text-center bg-transparent w-full focus:outline-none"
                placeholder="check-in date"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  e.target.type = 'text';
                  if (!e.target.value) setCheckInDate('aug 20, 2024');
                }}
              />
              <input 
                type="text" 
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="border-b border-[#294023] pb-1 mt-4 text-center bg-transparent w-full focus:outline-none"
                placeholder="check-out date"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  e.target.type = 'text';
                  if (!e.target.value) setCheckOutDate('aug 20, 2024');
                }}
              />
            </div>
            
            <div>
              <p className="mb-4 text-center">with</p>
              <select 
                value={adultCount}
                onChange={(e) => setAdultCount(e.target.value)}
                className="border-b border-[#294023] pb-1 text-center bg-transparent w-full focus:outline-none appearance-none"
              >
                {Array.from({length: 10}, (_, i) => (
                  <option key={i} value={`${i + 1} adult${i !== 0 ? 's' : ''}`}>
                    {i + 1} adult{i !== 0 ? 's' : ''}
                  </option>
                ))}
              </select>
              <select 
                value={kidCount}
                onChange={(e) => setKidCount(e.target.value)}
                className="border-b border-[#294023] pb-1 mt-4 text-center bg-transparent w-full focus:outline-none appearance-none"
              >
                <option value="0 kids">0 kids</option>
                {Array.from({length: 10}, (_, i) => (
                  <option key={i} value={`${i + 1} kid${i !== 0 ? 's' : ''}`}>
                    {i + 1} kid{i !== 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <button 
          className="bg-[#B0F940] text-[#294023] py-3 px-6 hover:bg-[#B1E462] font-mono rounded-[80px] w-[396px] transition-colors duration-300 focus:outline-none"
          onClick={() => alert(`Checking availability for ${selectedProperty} from ${checkInDate} to ${checkOutDate} with ${adultCount} and ${kidCount}`)}
        >
          CHECK AVAILABILITY
        </button>
      </div>
    </section>
  );
}