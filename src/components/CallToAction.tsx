import Image from 'next/image';

export function CallToAction({ image, text }: { image: string; text: string }) {
  return (
    <section className="relative h-[400px] my-16">
      <Image
        src={image}
        alt="Call to action"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl font-light">{text}</h2>
      </div>
    </section>
  );
} 