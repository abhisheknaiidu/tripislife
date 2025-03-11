import Image, { StaticImageData } from 'next/image';

export function Magazine({ 
  title, 
  subtitle,
  coverImage,
}: { 
  title: string;
  subtitle: string;
  coverImage: StaticImageData;
}) {
  return (
    <section className="bg-[#FFF6EB] py-16 relative">
      {/* Main content container */}
      <div className="w-full mx-auto">
        {/* Image with overlay text */}
        <div className="relative">
          {/* Image container */}
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={coverImage}
              alt="Magazine cover"
              fill
              className="object-cover"
            />
            
            
          </div>
        </div>
        {/* Large MAGAZINE title overlay */}
        <div className="absolute w-full z-[10]">
              <h1 className="font-anton text-center text-[18vw] md:text-[22vw] mt-[-130px] leading-[0.8] text-[#E73D00]">
                {title}
              </h1>
            </div>
        {/* Subtitle and article section */}
        <div className="mt-[250px]">
          {/* Subtitle */}
          <div className="text-center">
            <h2 className="text-[#294023] text-[64px] font-vvds-rashfield">
              {subtitle}
            </h2>
          </div>
          
          {/* Article title */}
          <div className="text-center mt-12 mb-12">
            <p className="text-[#294023] text-2xl md:text-3xl font-ivy italic">
              parking lot d&apos;elegance:
            </p>
            <p className="text-[#294023] text-2xl md:text-3xl font-ivy italic">
              air-cooled porsche edition
            </p>
          </div>
          
          {/* Read More button */}
          <div className="flex justify-center">
            <a 
              href="#" 
              className="inline-block bg-[#B0F940] text-[#294023] border border-black font-medium py-3 px-16 rounded-full hover:bg-[#b1ef62] transition-colors"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 