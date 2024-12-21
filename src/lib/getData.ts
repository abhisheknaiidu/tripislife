import heroImage from '@/app/assets/hero.jpg';
import propertyOne from '@/app/assets/property_1.png';
import propertyTwo from '@/app/assets/property_2.png';
import propertyThree from '@/app/assets/property_3.png';
import propertyFour from '@/app/assets/property_4.png';
import testimonialPoster from '@/app/assets/testimonial_poster.png';
import magazinePorsche from '@/app/assets/porche.png';

export async function getMockData() {
  return {
    hero: {
      image: heroImage,
      title: 'VARKALA',
      subtitle: `Varkala is more than just a feeling. It's a deep connect to nature and more things`
    },
    varkala: {
      title: 'VARKALA',
      location: 'KERALA, INDIA',
      mainText: 'Kerala is more than just a feeling, It\'s a deep connect to nature and more things',
      description: [
        'trip is life group of properties is a hitelier based out of Varkala india and is one of the leading,',
        'trip is a hitelier based out of Varkala india and is one of the leading',
        'trip is life of Varkala india and is one of the leading',
        'and is one of the leading'
      ]
    },
    properties: [
      {
        title: 'Cliff',
        image: propertyOne,
        slug: 'cliff',
        subtitle: 'Beachfront Villa'
      },
      {
        title: 'Hope',
        image: propertyTwo,
        slug: 'hope'
      },
      {
        title: 'Underline',
        image: propertyThree,
        slug: 'underline'
      },
      {
        title: 'Underline',
        image: propertyFour,
        slug: 'underline'
      }
    ],
    surfPromo: {
      image: testimonialPoster,
      title: 'surf lessons from 999/-',
      ctaText: 'KNOW MORE'
    },
    testimonial: {
      quote: `we've had the best of all experiences here at trip is life in Varkala. I'm definitely gonna come back!`,
      author: 'NICOLE LE BREUS',
      role: 'C.E.O - Ogilvy Global'
    },
    readMore: {
      title: 'read more of these stories?',
      collection: {
        title: 'COLLECTION',
        subtitle: 'by trip is life'
      },
      experiences: {
        prefix: 'til',
        title: 'experiences'
      }
    },
    footer: {
      links: [
        { title: 'FAQ', href: '/faq' },
        { title: 'ABOUT', href: '/about' },
        { title: 'PRIVACY POLICY', href: '/privacy' },
        { title: 'TERMS & CONDITIONS', href: '/terms' },
        { title: 'LICENSES', href: '/licenses' },
        { title: 'VOLUNTEERING', href: '/volunteering' },
        { title: 'CONTACT', href: '/contact' }
      ],
      brandName: 'trip is life'
    },
    magazine: {
        title: 'MAGAZINE',
        subtitle: 'by trip is life',
        coverImage: magazinePorsche,
        coverTitle: 'Parking Lot delegance: <br/> Air-cooled Porsche Edition',
    }
  };
} 