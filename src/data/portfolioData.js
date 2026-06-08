// ============================================================
// PORTFOLIO DATA — Edit this file to add/remove/update work items
// Each item has: name, type, date, tags, description, highlights, images, documents
// Images and documents are optional arrays — leave empty [] if none
// ============================================================

import kishBankAd from '../assets/images/Client Work/Client Work/Collegiate Client Work/Graphics/KishBankPosterPNG.png';
import biziAppPoster from '../assets/images/Client Work/Client Work/Collegiate Client Work/Graphics/TheBiziAppPosterPNG.png';
import sunMotorCarsAd from '../assets/images/Client Work/Client Work/Collegiate Client Work/Graphics/SunMotorCarsMagAdPNG.png';
import jcKitchenGraphic from '../assets/images/Esports and MoG Club-20260522T001802Z-3-001/Esports and MoG Club/Esports Athletics/JCKitchenPNG.png';
import mogLogoW from '../assets/images/Esports and MoG Club-20260522T001802Z-3-001/Esports and MoG Club/Ministry of Games Club/MoGLogoW.png';
import mogLogoB from '../assets/images/Esports and MoG Club-20260522T001802Z-3-001/Esports and MoG Club/Ministry of Games Club/MoGLogoB.png';

export { kishBankAd, biziAppPoster, sunMotorCarsAd, jcKitchenGraphic, mogLogoW, mogLogoB };

export const categories = [
  {
    id: 'client-work',
    title: 'Client & Brand Work',
    description: 'Strategic marketing consultation, audience analysis, and branding for diverse clients.',
    items: [
      {
        id: 'kish-bank',
        name: 'Kish Bank',
        type: 'IMC Analysis',
        date: '2023',
        tags: ['Banking', 'Brand Audit'],
        description: 'Conducted a comprehensive Integrated Marketing Communication (IMC) analysis for Kish Bank, evaluating their existing campaigns, audience engagement strategies, and overall brand positioning in the regional banking market.',
        highlights: [
          'Evaluated multi-channel marketing campaigns across digital and print',
          'Analyzed audience engagement metrics and brand perception',
          'Presented strategic, actionable recommendations to stakeholders',
        ],
        images: [
          { src: kishBankAd, alt: 'Kish Bank print advertisement — "Your Kish. Your Way."', caption: 'Print ad designed as part of the IMC campaign deliverable — navy and gold brand palette.' },
        ],
        documents: [],
      },
      {
        id: 'sun-motor-cars',
        name: 'Sun Motor Cars',
        type: 'Marketing Strategy',
        date: '2023',
        tags: ['Automotive', 'Digital'],
        description: 'Developed a strategic marketing plan for Sun Motor Cars, focusing on digital optimization and audience targeting to strengthen their online presence and dealership visibility.',
        highlights: [
          'Delivered recommendations on digital optimization and brand consistency',
          'Developed multimedia assets including social content and print materials',
          'Identified marketing gaps and translated analysis into measurable strategies',
        ],
        images: [
          { src: sunMotorCarsAd, alt: 'Sun Motor Cars magazine advertisement for collision repair center', caption: 'Magazine-format print ad created as part of the broader marketing strategy deliverable.' },
        ],
        documents: [],
      },
      {
        id: 'standing-stone-coffee',
        name: 'Standing Stone Coffee Co.',
        type: 'Brand Development',
        date: '2023',
        tags: ['Local Business', 'Content'],
        description: 'Provided brand development and content strategy for Standing Stone Coffee Co., a local coffee shop looking to strengthen their community presence and social media engagement.',
        highlights: [
          'Created promotional content aligned with brand voice and marketing goals',
          'Advised on growth opportunities and community engagement strategies',
          'Developed social content strategy for increased local visibility',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'thebiziapp',
        name: 'TheBiziApp',
        type: 'Startup Consultation',
        date: '2024',
        tags: ['Tech', 'Growth Strategy'],
        description: 'Provided marketing consultation and branding strategy for TheBiziApp, a tech startup focused on connecting local businesses with their communities.',
        highlights: [
          'Conducted audience analysis to identify target market segments',
          'Developed branding strategy and promotional content',
          'Advised on growth opportunities and user acquisition strategies',
        ],
        images: [
          { src: biziAppPoster, alt: 'TheBiziApp promotional poster — "By the Students, For the Students"', caption: 'Promotional poster developed to drive campus awareness and app downloads among college students.' },
        ],
        documents: [],
      },
      {
        id: 'reclamere',
        name: 'Reclamere',
        type: 'Brand & Outreach',
        date: '2023',
        tags: ['Data Security', 'B2B'],
        description: 'Collaborated with Reclamere, a data security company, to enhance their B2B marketing presence, brand consistency, and outreach to enterprise clients.',
        highlights: [
          'Supported clients in enhancing online presence and messaging clarity',
          'Developed multimedia assets ensuring alignment with brand voice',
          'Translated analysis into measurable strategies for short- and long-term impact',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'jana-marie-foundation',
        name: 'Jana Marie Foundation',
        type: 'Nonprofit Marketing',
        date: '2023',
        tags: ['Mental Health', 'Community'],
        description: 'Partnered with the Jana Marie Foundation, a nonprofit focused on mental health awareness, to develop marketing materials and community outreach strategies.',
        highlights: [
          'Developed community engagement and awareness campaigns',
          'Created print and digital materials for mental health initiatives',
          'Presented strategic pitches to foundation stakeholders',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'chow-korral',
        name: 'Chow Korral Coffee Co.',
        type: 'Brand Strategy',
        date: '2023',
        tags: ['Food & Beverage', 'Local'],
        description: 'Provided branding and marketing consultation for Chow Korral Coffee Co., helping them establish a cohesive brand identity and marketing approach.',
        highlights: [
          'Evaluated existing brand positioning and audience engagement',
          'Recommended digital optimization strategies',
          'Created content aligned with brand voice and business goals',
        ],
        images: [],
        documents: [],
      },
    ]
  },
  {
    id: 'design',
    title: 'Graphics & Design',
    description: 'Posters, magazine ads, social content, and multimedia assets aligned with brand voice.',
    items: [
      {
        id: 'event-posters',
        name: 'Event Posters',
        type: 'Print Design',
        date: '2021 — 2024',
        tags: ['Adobe Suite', 'Layout'],
        description: 'Designed a series of event posters for campus organizations, esports tournaments, and community events using Adobe Creative Cloud tools.',
        highlights: [
          'Created visually compelling layouts for print and digital distribution',
          'Maintained brand consistency across multiple event campaigns',
          'Designed for both large-format print and social media sizing',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'social-media-content',
        name: 'Social Media Content',
        type: 'Digital Design',
        date: '2021 — Present',
        tags: ['Canva', 'Engagement'],
        description: 'Created and managed social media content strategies across multiple platforms, designing engaging visual content that drives audience interaction and brand visibility.',
        highlights: [
          'Developed content calendars and posting strategies',
          'Designed graphics optimized for Instagram, Twitter, and LinkedIn',
          'Tracked engagement metrics to refine content approach',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'brand-guidelines',
        name: 'Brand Guidelines',
        type: 'Identity Systems',
        date: '2023 — 2024',
        tags: ['Consistency', 'Style'],
        description: 'Developed comprehensive brand guideline documents for client organizations, establishing visual identity systems that ensure consistency across all touchpoints.',
        highlights: [
          'Defined color palettes, typography, and logo usage rules',
          'Created style guides for social media, print, and web',
          'Ensured brand voice consistency across all materials',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'promotional-videos',
        name: 'Promotional Videos',
        type: 'Multimedia',
        date: '2022 — 2024',
        tags: ['Content', 'Storytelling'],
        description: 'Produced promotional video content for campus events, esports tournaments, and client projects, combining visual storytelling with strategic messaging.',
        highlights: [
          'Scripted, filmed, and edited promotional content',
          'Created highlight reels for esports tournaments and events',
          'Developed video assets aligned with marketing campaign goals',
        ],
        images: [],
        documents: [],
      },
    ]
  },
  {
    id: 'esports',
    title: 'Esports & Community',
    description: 'Marketing leadership for collegiate esports — events, sponsorships, and community growth.',
    items: [
      {
        id: 'juniata-esports',
        name: 'Juniata Esports',
        type: 'Director of Marketing',
        date: 'Aug 2021 — Jan 2025',
        tags: ['14-Person Team', '50+ Athletes'],
        description: 'Led all marketing and community relations efforts for Juniata College Esports, directing a 14-member staff and supporting 50+ student athletes across multiple competitive teams.',
        highlights: [
          'Directed a 14-member marketing and community relations staff',
          'Managed social media strategy across all platforms',
          'Strengthened partnerships with sponsors and university stakeholders',
          'Grew community engagement and program visibility significantly',
        ],
        images: [
          { src: jcKitchenGraphic, alt: 'Juniata College Esports branded kitchen rules graphic', caption: 'Branded internal communications graphic — maintaining program culture and identity across the facility.' },
        ],
        documents: [],
      },
      {
        id: 'event-coordination',
        name: 'Event Coordination',
        type: '10+ Events',
        date: '2021 — 2025',
        tags: ['Watch Parties', 'Sponsors'],
        description: 'Coordinated over 10 major events for the Juniata Esports program, including watch parties, sponsor collaborations, and community tournaments.',
        highlights: [
          'Planned and executed watch parties for major esports tournaments',
          'Coordinated sponsor activations and brand collaborations',
          'Managed event logistics including venues, catering, and A/V setup',
          'Created promotional materials and social media campaigns for each event',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'ministry-of-games',
        name: 'Ministry of Games',
        type: 'President — RSO',
        date: '2021 — 2024',
        tags: ['100+ Members', 'Campus Events'],
        description: 'Served as President of the Ministry of Games, Juniata College\'s largest gaming RSO with 100+ members, organizing campus events that fostered inclusivity and connection.',
        highlights: [
          'Led event planning, marketing, and member engagement',
          'Organized regular campus gaming events and tournaments',
          'Built an inclusive community for gamers of all levels',
          'Managed a 100+ member organization with cross-campus reach',
        ],
        images: [
          { src: mogLogoW, alt: 'Ministry of Games official club logo', caption: 'Official MoG brand identity — controller-shaped logo with tabletop dice, representing the club\'s dual board game and video game identity.' },
          { src: mogLogoB, alt: 'Ministry of Games logo — dark variant', caption: 'Dark-background logo variant used across event materials and social media.' },
        ],
        documents: [],
      },
      {
        id: 'lcs-fan-fest',
        name: 'LCS Fan Fest (TSM)',
        type: 'Staff — Newark, NJ',
        date: 'August 2023',
        tags: ['Fan Experience', 'Merch'],
        description: 'Supported TSM\'s booth during the League of Legends Championship Series Fan Fest in Newark, NJ, managing crowd control, merchandise, and ensuring a positive attendee experience.',
        highlights: [
          'Represented TSM at one of NA\'s largest esports events',
          'Managed merchandise organization and sales',
          'Supported crowd control and fan engagement activities',
          'Ensured a positive, memorable experience for attendees',
        ],
        images: [],
        documents: [],
      },
      {
        id: 'pax-east',
        name: 'PAX East (VGCUSA)',
        type: 'Table Staff — Boston, MA',
        date: 'March 2023',
        tags: ['Gaming Convention', 'Education'],
        description: 'Represented VGCUSA at PAX East, one of the largest gaming conventions in the U.S., promoting gaming education initiatives and managing merchandise for attendees.',
        highlights: [
          'Promoted gaming education initiatives at a national convention',
          'Managed booth operations and merchandise sales',
          'Engaged with thousands of convention attendees',
          'Represented the mission of video game education in schools',
        ],
        images: [],
        documents: [],
      },
    ]
  }
];

export const timeline = [
  {
    role: 'Freelance Brand & Business Consultant',
    org: 'Self-Employed',
    period: 'Jan 2024 — Present',
    depth: '1200m',
    highlights: [
      'Marketing consultation, audience analysis, and branding strategy for startups',
      'Promotional content creation, outreach management, and growth advising',
    ]
  },
  {
    role: 'Director of Marketing & Community Relations',
    org: 'Juniata College Esports',
    period: 'Aug 2021 — Jan 2025',
    depth: '1800m',
    highlights: [
      'Directed 14-member staff supporting 50+ student athletes',
      'Coordinated 10+ events including watch parties & sponsor collaborations',
      'Managed social media strategy to strengthen visibility & partnerships',
    ]
  },
  {
    role: 'Fashion Team Associate',
    org: 'Walmart',
    period: 'Jun 2025 — Feb 2026',
    depth: '2200m',
    highlights: [
      'Customer styling support and visual merchandising',
      'Maintained organized, appealing displays during high-volume hours',
    ]
  },
];

export const certifications = [
  { name: 'Digital Marketing', issuer: 'HubSpot', date: 'Mar 2025' },
  { name: 'Digital Advertising', issuer: 'HubSpot', date: 'Mar 2025' },
  { name: 'Social Media Marketing I & II', issuer: 'HubSpot', date: 'Mar 2025' },
  { name: 'Graphic Communications', issuer: 'NOCTI', date: 'Dec 2020' },
  { name: 'Apple Search Ads', issuer: 'Apple', date: 'May 2024' },
];

export const education = [
  {
    school: 'Juniata College',
    degree: 'Bachelor of Science: Psychology, Marketing & Integrated Media Arts',
    meta: 'Graduated Dec 2024 · GPA: 3.6',
  },
  {
    school: 'Franklin County Career & Technology Center',
    degree: 'Technical Certification: Graphic Communications',
    meta: 'Completed Jan 2020 · GPA: 4.0',
  },
];
