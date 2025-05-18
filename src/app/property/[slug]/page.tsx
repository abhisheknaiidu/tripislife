import PDPHero from '@/app/modules/PDPHero';
import { getPDPData, PDPData } from '@/lib/pdpData';
import { PDPPropertyDetails } from '@/app/modules/PDPPropertyDetails';
import PDPImages from '@/app/modules/PDPImages';
import PDPTestimonial from '@/app/modules/PDPTestimonial';
import PDPFaq from '@/app/modules/PDPFaq';
import { Footer } from '@/app/modules/Footer';
import { Properties } from '@/components/Properties';
import { SurfPromo, SurfPromoProps } from '@/components/SurfPromo';
import { StaticImageData } from 'next/image';


export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getPDPData(params.slug);
  
  // Ensure data is properly typed
  if (!data || !data.details) {
    return <div>Property details not found</div>;
  }
  
  // Create a properly typed version of the details
  const typedDetails: PDPData['details'] = {
    ...data.details,
    // Ensure amenities are properly typed
    amenities: data.details.amenities as PDPData['details']['amenities'],
    // Transform amenityImages to match the expected structure
    amenityImages: data.details.amenityImages ? 
      data.details.amenityImages.map((img: StaticImageData) => ({
        src: img,
        alt: "Property amenity"
      })) : undefined
  };
  
  return (
    <>
    <PDPHero data={data} />
    <PDPPropertyDetails data={typedDetails} />
    <PDPImages images={data.hero.images} />
    <PDPTestimonial testimonials={data.details.testimonials} />
    <PDPFaq data={data.faq} />
    <Properties items={data.properties} />
    <SurfPromo {...data.surfPromo as unknown as SurfPromoProps} />
    <Footer data={data.footer} />
    </>
  );
}