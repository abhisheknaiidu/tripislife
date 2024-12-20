import Image, { StaticImageData } from 'next/image';

export function Magazine({ 
  title, 
  subtitle,
  coverImage,
  coverTitle,
}: { 
  title: string;
  subtitle: string;
  coverImage: StaticImageData;
  coverTitle: string;
}) {
  return (
    <section className="bg-[#FFF6EB] py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
        <h1 className="font-anton text-[300px] leading-none text-[#E73D00] mb-2">
            {title}
          </h1>
          <p className="text-[#294023] text-2xl font-area">{subtitle}</p>
        </div>

      </div>

      <div className="relative aspect-[16/9] mb-8 overflow-hidden">
                <Image
                src={coverImage}
                alt={coverTitle}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
                   <h3 
          className="text-[#FFF6EB] font-bold font-anth absolute bottom-0 left-1/2 -translate-x-1/2 text-[64px] italic mb-14 text-center w-full leading-[60px]"
          dangerouslySetInnerHTML={{ __html: coverTitle }}
                   />
            </div>
    </section>
  );
} 