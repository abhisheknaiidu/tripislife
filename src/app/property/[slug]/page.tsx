import PDPHero from '@/app/modules/PDPHero';
import { getPDPData, PDPData } from '@/lib/pdpData';
import { PDPPropertyDetails } from '@/app/modules/PDPPropertyDetails';
import PDPImages from '@/app/modules/PDPImages';
import PDPTestimonial from '@/app/modules/PDPTestimonial';
import PDPFaq from '@/app/modules/PDPFaq';
import { Footer } from '@/app/modules/Footer';
import { Properties } from '@/components/Properties';
import { SurfPromo } from '@/components/SurfPromo';


export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getPDPData(params.slug);
  return (
    <>
    <PDPHero data={data} />
    <PDPPropertyDetails data={data?.details as PDPData['details']} />
    <PDPImages images={data.hero.images} />
    <PDPTestimonial testimonials={data?.details.testimonials} />
    <PDPFaq data={data?.faq} />
    <Properties items={data?.properties} />
    <SurfPromo {...data?.surfPromo} />
    <Footer data={data?.footer} />
    </>
  );
}