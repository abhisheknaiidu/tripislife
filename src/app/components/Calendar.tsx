"use client"
import { useState } from 'react';

interface CalendarProps {
  value: Date;
  onChange: (date: Date) => void;
  onClose?: () => void;
}

export function Calendar({ value, onChange, onClose }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  
  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun', 
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];
  
  const days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  
  const getYear = (date: Date) => date.getFullYear();
  const getMonth = (date: Date) => date.getMonth();
  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };
  
  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    onChange(newDate);
    if (onClose) onClose();
  };
  
  const renderCalendarDays = () => {
    const year = getYear(currentDate);
    const month = getMonth(currentDate);
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-6 h-6"></div>);
    }
    
    // Add cells for days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = 
        date.getDate() === value.getDate() &&
        date.getMonth() === value.getMonth() &&
        date.getFullYear() === value.getFullYear();
      
      calendarDays.push(
        <div 
          key={day}
          onClick={() => handleDateClick(day)}
          className={`w-6 h-6 flex items-center justify-center cursor-pointer text-xs
            ${isSelected ? 'rounded-full ring-1 ring-[#294023]' : 'hover:bg-[#F0E7D7]'}`}
        >
          {day}
        </div>
      );
    }
    
    return calendarDays;
  };
  
  return (
    <div className="calendar bg-[#FFF6EB] border border-[#294023] p-4 w-[190px]">
      <div className="header flex justify-between items-center mb-1">
        <div className="month-year font-mono text-xs">
          <span className="mr-1">{months[getMonth(currentDate)]}</span>
          <span>{getYear(currentDate)}</span>
        </div>
        <div className="nav-buttons flex space-x-4">
          <button 
            onClick={handlePrevMonth}
            className="text-xs font-mono"
          >
            &lt;
          </button>
          <button 
            onClick={handleNextMonth}
            className="text-xs font-mono"
          >
            &gt;
          </button>
        </div>
      </div>
      
      <div className="days-header grid grid-cols-7 gap-1">
        {days.map(day => (
          <div key={day} className="w-6 h-6 flex items-center justify-center text-[10px] font-mono">
            {day}
          </div>
        ))}
      </div>
      
      <div className="days-grid grid grid-cols-7 gap-1 text-xs font-mono">
        {renderCalendarDays()}
      </div>
    </div>
  );
} 