import { Partner1, Partner2, Partner3, Editing, Speed, Vector, Winner, Boost, Video, Testi1, Testi2, Testi3, CTA, Tutorial1, Tutorial2, Tutorial3 } from "../assets";


export const Navigation = [
  { name: 'Home', path: "home" },
  { name: 'Features', path: 'features' },
  { name: 'Testimonials', path: 'testimonials' },
  { name: 'Tutorials', path: 'tutorials' },
];


export const SponsorsData = [
  {
    id: 1,
    path: '#',
    image: Partner1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: Partner2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: Partner3,
    title: 'dropbox',
  },
];

export const FeaturesData = [
  {
    id: 1,
    subTitle: 'Quality Features',
    MainTitle: 'Meet exciting feature of app',
    features: [
      {
        id: 1,
        imgSrc: Editing,
        altText: 'Customization',
        title: 'Unlimited Customization',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 2,
        imgSrc: Speed,
        altText: 'Editing',
        title: 'Editing freedom',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 3,
        imgSrc: Vector,
        altText: 'Vector',
        title: 'Vector shape & resizable',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 4,
        imgSrc: Winner,
        altText: 'Winner',
        title: 'Fast Performance',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
    ]
  }
];


export const AgencyData = [
  {
    MainTitle: 'Boost your agencies by choosing Ninja Developers',
    subTitle: 'Create custom landing pages with Shades that convert more visitors than any website, no coding required.',
    CTA: 'Learn more',
    features: [
      {
        id: 1,
        text: 'Unlimited design possibility',
      },
      {
        id: 2,
        text: 'Completely responsive features',
      },
      {
        id: 3,
        text: 'Easy to customize plugins',
      },
    ],
    img: [
      {
        id: 1,
        imgSrc: Boost,
        altText: "Boost Img",
      }
    ],
  }
];

export const ExploreData = [
  {
    MainTitle: 'Leading companies trust us to develop software',
    subTitle: 'We believe its important for everyone to have access to software especially when it comes to digital learning be navigate.',
    CTA: 'Explore Details',
    img: [
      {
        id: 1,
        imgSrc: Video,
        alt: "Details Video",
      },
    ],
  }
];

export const TestimonialData = [
  {
    subTitle: 'Customer Comments',
    MainTitle: 'Why customers love us',
    reviews: [
      {
        id: 1,
        description:
          'Leverage agile frameworks to provide a robust synopis for high level overviews. Grow works with scale big products and kettle. Iterative approaches to corporate strategy foster.',
        avatar: Testi1,
        name: 'Natalia Sanz',
        designation: 'Head of Technology',
      },
      {
        id: 2,
        description:
          'Bring to the table win-win survival strategies to ensure proactive domination.  Grow works with scale big products and kettle. At the end of the day, going forward, a new normal.',
        avatar: Testi2,
        name: 'Ece Akman',
        designation: 'Senior Marketer',
      },
      {
        id: 3,
        description:
          'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.  Grow works with scale big products and kettle. Override the digital divide with additional.',
        avatar: Testi3,
        name: 'Denny Hilguston',
        designation: 'Head of Technology',
      },
      {
        id: 3,
        description:
          'They are doing amazing job with hundred percent customer satisfaction. Grow works with scale big products and kettle. Love their work and would like to work with them again',
        avatar: Testi2,
        name: 'Pierre Hackett',
        designation: 'VP of Engineering',
      },
    ],
  }
];

export const SupportData = [
  {
    title: 'Free Customer Support to ensure what you like to expect',
    subTitle: 'We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.',
    text: 'If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.',
    CTA: 'Learn more',
    img: [
      {
        id: 1,
        imgSrc: CTA,
        altText: "Customer Support Img",
      }
    ],
  }
];

export const TutorialData = [
  {
    subTitle: 'Quality Features',
    MainTitle: 'Tutorials that people love most',
    features: [
      {
        image: Tutorial1,
        title: 'How to work with prototype design with adobe xd featuring tools',
        comments: '22 Comments',
        path: '/',
      },
      {
        image: Tutorial2,
        title: 'Create multiple artboard by using figma prototyping development',
        comments: '15 Comments',
        path: '/',
      },
      {
        image: Tutorial3,
        title:
          'Convert your web layout theming easily with sketch zeplin extension',
        comments: '12 Comments',
        path: '/',
      },
    ]
  }
];

export const FooterNavData = [
  { name: 'Home', href: "/" },
  { name: 'Advertise', href: '/' },
  { name: 'Supports', href: '/' },
  { name: 'Marketing', href: '/' },
  { name: 'FAQ', href: '/' },
];
