'use client'

import { Amenity, PDPData } from '@/lib/pdpData';
import { Users, Wifi, UtensilsCrossed, ParkingCircle, Wifi as GbpsIcon, Waves } from 'lucide-react';

export function PDPPropertyDetails({ data }: { data: PDPData['details'] }) {
  return (
    <section className="min-h-screen bg-[#FFF6EB] px-10 py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-anth text-[140px] text-[#294023] leading-none mb-2 uppercase">
          {data.title}
        </h1>
        <p className="text-[#294023] text-[36px] font-bold ml-6 font-area mb-[109px] uppercase">{data.location}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-2 mt-[90px]">
            {data.description.map((paragraph, i) => (
              <p key={i} className="text-[#294023] text-xl leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 !mt-[70px]">
              {data.amenities.map((amenity, i) => (
                <div key={i} className="border border-[#294023] rounded-[20px] p-6 flex flex-col gap-4">
                  <div className="text-2xl">{getAmenityIcon(amenity.icon)}</div>
                  <div className="text-[#294023] font-medium text-[18px] font-area">{amenity.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-px bg-[#294023] h-full"></div>
        </div>
      </div>
    </section>
  );
}

function getAmenityIcon(type: Amenity['icon']) {
  const icons = {
    users: <Users className="w-6 h-6" />,
    wifi: <Wifi className="w-6 h-6" />,
    pool: <Waves className="w-6 h-6" />,
    restaurant: <UtensilsCrossed className="w-6 h-6" />,
    parking: <ParkingCircle className="w-6 h-6" />,
    gbps: <GbpsIcon className="w-6 h-6" />
  };
  return icons[type];
}