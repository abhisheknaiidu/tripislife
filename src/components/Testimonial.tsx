import { SurfPromo } from "./SurfPromo";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  surfPromo: any;
};

export function Testimonial({ quote, author, role, surfPromo }: TestimonialProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 bg-[#FFF6EB]">
      <h2 className="text-[#294023] text-[64px] mb-[150px] text-center font-anth">
        pack your bags and leave now!
      </h2>
      <SurfPromo {...surfPromo} />
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-[#294023] text-[48px] leading-tight mb-8">
          "{quote}"
        </blockquote>
        <div className="text-[#294023]">
          <p className="text-xl font-medium">{author}</p>
          <p className="text-lg">{role}</p>
        </div>
      </div>
    </section>
  );
}