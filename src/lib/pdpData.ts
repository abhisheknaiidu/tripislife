import PropertyOne from '@/app/assets/property_1.png'
import PropertyTwo from '@/app/assets/property_2.png'
import PropertyThree from '@/app/assets/property_3.png'
import testimonialPoster from '@/app/assets/testimonial_poster.png'
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
        PropertyOne,
        PropertyTwo,
        PropertyThree,
      ],
    },
    details: {
      title: 'cliff stories',
      location: 'Varkala, Kerala, India',
      description: ['trip is life group of properties is a hitelier based out of Varkala india and is one of the leading, trip is  a hitelier based out of Varkala india and is one of the leading', 'trip is lifut of Varkala india and is one of the leading  and is one of the leading'],
      amenities: [
        { icon: 'users', label: '4 guests' },
        { icon: 'wifi', label: 'Free WiFi' },
        { icon: 'pool', label: 'Pool' },
        { icon: 'restaurant', label: 'Restaurant' },
        { icon: 'parking', label: 'Parking' },
        { icon: 'gbps', label: 'GBPS' },
      ],
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
          title: 'Cliff',
          image: PropertyOne,
          slug: 'cliff',
          subtitle: 'Beachfront Villa'
        },
        {
          title: 'Hope',
          image: PropertyTwo,
          slug: 'hope'
        },
        {
          title: 'Underline',
          image: PropertyThree,
          slug: 'underline'
        },
        {
          title: 'Underline',
          image: PropertyOne,
          slug: 'underline'
        }
      ],
      surfPromo: {
        image: testimonialPoster,
        title: 'Surf Promo from 100',
        ctaText: 'KNOW MORE'
      }
  };
} 