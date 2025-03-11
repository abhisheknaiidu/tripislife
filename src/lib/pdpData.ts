import PropertyOne from '@/app/assets/property_1.png'
import PropertyTwo from '@/app/assets/property_2.png'
import PropertyThree from '@/app/assets/property_3.png'
import Carousel1 from '@/app/assets/carousel_1.jpg'
import Carousel2 from '@/app/assets/carousel_2.jpg'
import testimonialPoster from '@/app/assets/testimonial_poster.png'
import { StaticImageData } from 'next/image';

export type Amenity = {
    icon: 'users' | 'wifi' | 'pool' | 'restaurant' | 'parking' | 'gbps';
    label: string;
  };
  
  export type PDPData = {
    // ... existing hero types
    details: {
      title: string;
      location: string;
      description: string[];
      amenities: Amenity[];
      amenityImages?: {
        src: StaticImageData | string;
        alt: string;
      }[];
      booking: {
        checkIn: string;
        checkOut: string;
        guests: number;
        price: {
          amount: number;
          currency: string;
        };
      };
      testimonials: {
        quote: string
        author: string
        role: string
      }[]
    };
    faq: {
      title: string
      questions: {
        question: string
        answer: string
      }[]
      subtitle: string
    }
    footer: {
      links: { title: string; href: string }[]
      brandName: string
    }
    properties: {
      title: string
      image: string
      slug: string
      subtitle: string
    }[]
    surfPromo: {
      image: string
      title: string
      price: string
      ctaText: string
    }
  };

export async function getPDPData(slug: string) {
    console.log('slug', slug)
  return {
    hero: {
      images: [
        Carousel1,
        Carousel2,
        PropertyThree,
      ],
    },
    details: {
      title: 'cliff stories',
      location: 'Varkala, Kerala, India',
      description: [
        'cliff stories, perched on the secluded tranquility of south cliff in varkala, is an invitation to live out your own narrative. ten thoughtfully designed rooms, each a haven of comfort and character, complete with its own living room hall and air conditioning.',
        'start your day with a quiet dip in the infinity pool, as the first rays of the sun kisses the ocean. afternoons are for unwinding in deck chairs, soaking up the peace that envelops the space. the on-site restaurant, a cosy space of culinary delight, is always open: whether you crave a continental feast or the vibrant local flavours of varkala, our kitchen delivers with flair. as night falls, retreat to your private space, where the sound of waves crashing against the cliffs lulls you to sleep.'
      ],
      amenities: [
        { icon: 'pool', label: 'exclusive beach access' },
        { icon: 'pool', label: 'hidden infinity plunge pool & jacuzzi' },
        { icon: 'pool', label: 'sprawling private lawn' },
        { icon: 'restaurant', label: 'gourmet dining, on call' },
        { icon: 'pool', label: 'signature a frame cabin design' },
        { icon: 'pool', label: 'al fresco bathroom experience' },
        { icon: 'pool', label: 'one-of-a-kind sunset views' },
      ],
      amenityImages: [PropertyOne, testimonialPoster],
      booking: {
        checkIn: '2024-01-01',
        checkOut: '2024-01-02',
        guests: 4,
        price: {
          amount: 100,
          currency: 'USD',
        },
      },
      testimonials: [
        {
          quote: "we've had the best of all experiences here at trip is life in Varkala. I'm definitely gonna come back!",
          author: "NICOLE LE BREUS",
          role: "C.E.O - Ogilvy Global"
        },
        {
          quote: "Amazing experience, will definitely return!",
          author: "JOHN DOE",
          role: "Travel Blogger" 
        },
        {
          quote: "Nice place, will definitely return!",
          author: "Amy Jackson",
          role: "Influencer" 
        }
      ],
      // Add this to your existing getMockData return object

    },
    faq: {
        title: "FAQ",
        questions: [
          {
            question: "is my place right in Varkala ?",
            answer: "Yes, our property is located in the heart of Varkala, offering stunning views and easy access to local attractions."
          },
          {
            question: "is my place right in Varkala ?",
            answer: "We're situated just minutes from Varkala Beach, making it an ideal location for beach lovers and surfers."
          },
          {
            question: "is my place right in Varkala ?",
            answer: "The property is perfectly positioned near restaurants, shops, and cultural sites in Varkala."
          }
        ],
        subtitle: "not the right one?  <br/> explore more",
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
    properties: [
        {
          title: 'Cliff Stories',
          image: PropertyOne,
          slug: 'cliff',
          subtitle: 'Beachfront Villa'
        },
        {
          title: 'TRIP IS LIFE',
          image: PropertyTwo,
          slug: 'hope'
        },
        {
          title: 'UNDER THE SKY',
          image: PropertyThree,
          slug: 'underline'
        },
        {
          title: 'UNDER THE SKY',
          image: PropertyOne,
          slug: 'underline'
        }
      ],
      surfPromo: {
        image: testimonialPoster,
        title: 'surf lessons from 999/-',
        ctaText: 'KNOW MORE'
      }
  };
} 