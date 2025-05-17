"use client"
import { useState, useEffect, useRef } from 'react';
import { Calendar } from './Calendar';

interface BookingWidgetProps {
  defaultProperty?: string;
  properties?: string[];
  onSubmit?: (data: {
    property: string;
    checkInDate: Date;
    checkOutDate: Date;
    adultCount: string;
    kidCount: string;
  }) => void;
  className?: string;
  variant?: 'default' | 'pdp';
  price?: string | number;
}

export function BookingWidget({
  defaultProperty = 'cliff stories',
  properties = ['cliff stories', 'beach house', 'mountain retreat', 'forest cabin'],
  onSubmit,
  className = '',
  variant = 'default',
  price,
}: BookingWidgetProps) {
  // State for form fields
  const [selectedProperty, setSelectedProperty] = useState(defaultProperty);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date('2025-02-08'));
  const [checkOutDate, setCheckOutDate] = useState(new Date('2025-02-15'));
  const [checkInDateText, setCheckInDateText] = useState('feb 8, 2025');
  const [checkOutDateText, setCheckOutDateText] = useState('feb 15, 2025');
  const [adultCount, setAdultCount] = useState('1 adult');
  const [kidCount, setKidCount] = useState('1 kid');
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [showAdultDropdown, setShowAdultDropdown] = useState(false);
  const [showKidDropdown, setShowKidDropdown] = useState(false);
  
  // Refs for click outside handling
  const checkInCalendarRef = useRef<HTMLDivElement>(null);
  const checkOutCalendarRef = useRef<HTMLDivElement>(null);
  const adultDropdownRef = useRef<HTMLDivElement>(null);
  const kidDropdownRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Format date as "mmm d, yyyy"
  const formatDate = (date: Date): string => {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Handle property selection
  const handlePropertySelect = (property: string) => {
    setSelectedProperty(property);
    setShowPropertyDropdown(false);
  };

  // Handle date changes
  const handleCheckInDateChange = (date: Date) => {
    setCheckInDate(date);
    setCheckInDateText(formatDate(date));
    setShowCheckInCalendar(false);
  };

  const handleCheckOutDateChange = (date: Date) => {
    setCheckOutDate(date);
    setCheckOutDateText(formatDate(date));
    setShowCheckOutCalendar(false);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({
        property: selectedProperty,
        checkInDate,
        checkOutDate,
        adultCount,
        kidCount
      });
    } else {
      alert(`Checking availability for ${selectedProperty} from ${checkInDateText} to ${checkOutDateText} with ${adultCount} and ${kidCount}`);
    }
  };

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      // Close property dropdown if clicking outside
      if (showPropertyDropdown && 
          !widgetRef.current?.querySelector('.property-dropdown-trigger')?.contains(event.target as Node) && 
          !widgetRef.current?.querySelector('.property-dropdown')?.contains(event.target as Node)) {
        setShowPropertyDropdown(false);
      }
      
      // Close calendars if clicking outside
      if (showCheckInCalendar && 
          checkInCalendarRef.current && 
          !checkInCalendarRef.current.contains(target) &&
          !(event.target as HTMLElement).closest('.check-in-input')) {
        setShowCheckInCalendar(false);
      }
      
      if (showCheckOutCalendar && 
          checkOutCalendarRef.current && 
          !checkOutCalendarRef.current.contains(target) &&
          !(event.target as HTMLElement).closest('.check-out-input')) {
        setShowCheckOutCalendar(false);
      }

      // Close dropdowns if clicking outside
      if (showAdultDropdown && 
          adultDropdownRef.current && 
          !adultDropdownRef.current.contains(target) &&
          !(event.target as HTMLElement).closest('.adult-dropdown-trigger')) {
        setShowAdultDropdown(false);
      }

      if (showKidDropdown && 
          kidDropdownRef.current && 
          !kidDropdownRef.current.contains(target) &&
          !(event.target as HTMLElement).closest('.kid-dropdown-trigger')) {
        setShowKidDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPropertyDropdown, showCheckInCalendar, showCheckOutCalendar, showAdultDropdown, showKidDropdown]);

  // PDP variant layout
  if (variant === 'pdp') {
    return (
      <div ref={widgetRef} className={`border border-[#294023] p-6 sm:p-8 w-full bg-[#FFF6EB] ${className}`}>
        <div className="text-center mb-6">
          <p className="text-[#294023] text-lg">starting from</p>
          <h3 className="text-[#294023] text-5xl font-medium my-4">{price || '24,999'}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 max-w-[400px] mx-auto">
          <div className="relative">
            <p className="text-[#294023] mb-2">dates</p>
            <div 
              className="check-in-input border-b border-[#294023] pb-1 bg-transparent w-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowCheckInCalendar(!showCheckInCalendar);
                setShowCheckOutCalendar(false);
              }}
            >
              {checkInDateText}
            </div>
            {showCheckInCalendar && (
              <div 
                ref={checkInCalendarRef} 
                className="absolute left-0 top-[70px] mt-1 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar 
                  value={checkInDate} 
                  onChange={handleCheckInDateChange}
                  onClose={() => setShowCheckInCalendar(false)}
                />
              </div>
            )}
          </div>
          
          <div className="relative">
            <p className="text-[#294023] mb-2">with</p>
            <div 
              className="adult-dropdown-trigger border-b border-[#294023] pb-1 bg-transparent w-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowAdultDropdown(!showAdultDropdown);
                setShowKidDropdown(false);
              }}
            >
              {adultCount}
            </div>
            {showAdultDropdown && (
              <div 
                ref={adultDropdownRef}
                className="absolute left-0 top-[70px] w-full z-20 border border-[#294023] bg-[#FFF6EB]"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  {Array.from({length: 4}, (_, i) => (
                    <div 
                      key={i} 
                      className="px-3 py-3 hover:bg-[#E73D00]/10 cursor-pointer text-left"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAdultCount(`${i + 1} adult${i !== 0 ? 's' : ''}`);
                        setShowAdultDropdown(false);
                      }}
                    >
                      {i + 1} adult{i !== 0 ? 's' : ''}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <div 
              className="check-out-input border-b border-[#294023] pb-1 bg-transparent w-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowCheckOutCalendar(!showCheckOutCalendar);
                setShowCheckInCalendar(false);
              }}
            >
              {checkOutDateText}
            </div>
            {showCheckOutCalendar && (
              <div 
                ref={checkOutCalendarRef}
                className="absolute left-0 top-[45px] mt-1 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar 
                  value={checkOutDate} 
                  onChange={handleCheckOutDateChange}
                  onClose={() => setShowCheckOutCalendar(false)}
                />
              </div>
            )}
          </div>
          
          <div className="relative">
            <div 
              className="kid-dropdown-trigger border-b border-[#294023] pb-1 bg-transparent w-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowKidDropdown(!showKidDropdown);
                setShowAdultDropdown(false);
              }}
            >
              {kidCount}
            </div>
            {showKidDropdown && (
              <div 
                ref={kidDropdownRef}
                className="absolute left-0 top-[45px] w-full z-20 border border-[#294023] bg-[#FFF6EB]"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  {Array.from({length: 3}, (_, i) => (
                    <div 
                      key={i} 
                      className="px-3 py-3 hover:bg-[#E73D00]/10 cursor-pointer text-left"
                      onClick={(e) => {
                        e.stopPropagation();
                        setKidCount(`${i + 1} kid${i !== 0 ? 's' : ''}`);
                        setShowKidDropdown(false);
                      }}
                    >
                      {i + 1} kid{i !== 0 ? 's' : ''}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="bg-[#B0F940] text-[#294023] py-3 px-12 border border-black font-medium rounded-full hover:bg-[#B1E462] transition-colors focus:outline-none text-center"
            onClick={handleSubmit}
          >
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    );
  }

  // Default layout
  return (
    <div ref={widgetRef} className={`border border-[#294023] p-4 sm:p-8 max-w-[700px] w-full bg-[#FFF6EB] ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="text-left relative">
          <p className="mb-4">i want to stay at</p>
          <div 
            className="property-dropdown-trigger border-b border-[#294023] pb-1 flex items-center justify-between cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowPropertyDropdown(!showPropertyDropdown);
            }}
          >
            <span>{selectedProperty}</span>
            <span>{showPropertyDropdown ? '∧' : 'v'}</span>
          </div>
          {showPropertyDropdown && (
            <div className="absolute bg-[#FFF6EB] border border-[#294023] mt-1 z-10 w-full property-dropdown">
              {properties.map((property) => (
                <div 
                  key={property}
                  className="px-3 py-2 hover:bg-[#E73D00]/10 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePropertySelect(property);
                  }}
                >
                  {property}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <p className="mb-4 text-center">dates</p>
            <div 
              className="check-in-input border-b border-[#294023] pb-1 text-center bg-transparent w-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowCheckInCalendar(!showCheckInCalendar);
                setShowCheckOutCalendar(false);
              }}
            >
              {checkInDateText}
            </div>

            {showCheckInCalendar && (
              <div 
                ref={checkInCalendarRef} 
                className="absolute left-0 top-[70px] mt-1 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar 
                  value={checkInDate} 
                  onChange={handleCheckInDateChange}
                  onClose={() => setShowCheckInCalendar(false)}
                />
              </div>
            )}
            
            <div 
              className="check-out-input border-b border-[#294023] pb-1 mt-4 text-center bg-transparent w-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowCheckOutCalendar(!showCheckOutCalendar);
                setShowCheckInCalendar(false);
              }}
            >
              {checkOutDateText}
            </div>

            {showCheckOutCalendar && (
              <div 
                ref={checkOutCalendarRef} 
                className="absolute left-0 bottom-[-190px] mt-1 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar 
                  value={checkOutDate} 
                  onChange={handleCheckOutDateChange}
                  onClose={() => setShowCheckOutCalendar(false)}
                />
              </div>
            )}
          </div>
          
          <div>
            <p className="mb-4 text-center font-mono">with</p>
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <div 
                  className="adult-dropdown-trigger border-b border-[#294023] pb-1 text-left bg-transparent w-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAdultDropdown(!showAdultDropdown);
                    setShowKidDropdown(false);
                  }}
                >
                  {adultCount}
                </div>
                {showAdultDropdown && (
                  <div 
                    ref={adultDropdownRef}
                    className="absolute left-0 top-full w-full z-20 border border-[#294023] bg-[#FFF6EB]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      {Array.from({length: 4}, (_, i) => (
                        <div 
                          key={i} 
                          className="px-3 py-3 hover:bg-[#E73D00]/10 cursor-pointer text-left"
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdultCount(`${i + 1} adult${i !== 0 ? 's' : ''}`);
                            setShowAdultDropdown(false);
                          }}
                        >
                          {i + 1} adult{i !== 0 ? 's' : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <div 
                  className="kid-dropdown-trigger border-b border-[#294023] pb-1 text-left bg-transparent w-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowKidDropdown(!showKidDropdown);
                    setShowAdultDropdown(false);
                  }}
                >
                  {kidCount}
                </div>
                {showKidDropdown && (
                  <div 
                    ref={kidDropdownRef}
                    className="absolute left-0 top-full w-full z-20 border border-[#294023] bg-[#FFF6EB]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      {Array.from({length: 3}, (_, i) => (
                        <div 
                          key={i} 
                          className="px-3 py-3 hover:bg-[#E73D00]/10 cursor-pointer text-left"
                          onClick={(e) => {
                            e.stopPropagation();
                            setKidCount(`${i + 1} kid${i !== 0 ? 's' : ''}`);
                            setShowKidDropdown(false);
                          }}
                        >
                          {i + 1} kid{i !== 0 ? 's' : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="bg-[#B0F940] text-[#294023] py-3 px-6 hover:bg-[#B1E462] font-mono rounded-[80px] w-full sm:w-[396px] mx-auto transition-colors duration-300 focus:outline-none block"
        onClick={handleSubmit}
      >
        CHECK AVAILABILITY
      </button>
    </div>
  );
} 