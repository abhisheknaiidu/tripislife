"use client"
import { BookingWidget } from '../components/BookingWidget';

export default function BookingWidgetExample() {
  const handleBookingSubmit = (data: {
    property: string;
    checkInDate: Date;
    checkOutDate: Date;
    adultCount: string;
    kidCount: string;
  }) => {
    console.log('Booking data:', data);
    alert(`Booking submitted for ${data.property} from ${data.checkInDate.toLocaleDateString()} to ${data.checkOutDate.toLocaleDateString()} with ${data.adultCount} and ${data.kidCount}`);
  };

  // Custom properties for one of our examples
  const cityProperties = [
    'downtown apartment',
    'city penthouse',
    'urban loft',
    'skyline suite'
  ];

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">Booking Widget Examples</h1>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Default Implementation</h2>
        <BookingWidget onSubmit={handleBookingSubmit} />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Custom Properties</h2>
        <BookingWidget 
          properties={cityProperties}
          defaultProperty="urban loft"
          onSubmit={handleBookingSubmit} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <BookingWidget 
          className="bg-gray-100 border-gray-300 shadow-lg rounded-lg"
          onSubmit={handleBookingSubmit} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sidebar Widget</h2>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h3 className="text-xl mb-4">Related Content</h3>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            <BookingWidget 
              className="max-w-full border-gray-300" 
              onSubmit={handleBookingSubmit}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Widget in Modal-like Context</h2>
          <div className="bg-white shadow-2xl rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Quick Booking</h3>
            <p className="text-gray-600 mb-4">Find availability for your next trip</p>
            <BookingWidget 
              className="max-w-full border-0" 
              onSubmit={handleBookingSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 