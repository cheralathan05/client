// Photography data repository for Studio Green Photography

export const STUDIO_INFO = {
  name: "Studio Green Photography",
  badge: "POP PHOTOGRAPHY AESTHETICS",
  tagline: "We Capture What Time Cannot.",
  subTagline: "Luxury Wedding Stories • Cinematic Films • Editorial Portraits",
  location: "Cuddalore, Tamil Nadu, India",
  address: "Studio Green Building, Beach Road, Cuddalore - 607001, Tamil Nadu",
  phone: "090921 41112",
  phoneFormatted: "+91 90921 41112",
  whatsapp: "https://wa.me/919092141112?text=Hi%20Studio%20Green%20Photography!%20I%20would%20like%20to%20enquire%20about%20booking%20a%20wedding%20photography%20session.",
  instagram: "https://instagram.com",
  instagramHandle: "@studiogreen_photography",
  email: "bookings@studiogreenphotography.com",
  stats: [
    { label: "Years of Craft", value: "10+", suffix: "Years" },
    { label: "Weddings Captured", value: "520+", suffix: "Weddings" },
    { label: "Master Awards", value: "18", suffix: "Awards" },
    { label: "Smiles Preserved", value: "100%", suffix: "Pure Emotion" },
  ],
  gear: [
    { name: "Sony FX3 Full-Frame Cinema", type: "Cinema 4K 120fps" },
    { name: "Sony A7R V 61MP", type: "High-Resolution Stills" },
    { name: "Sony G-Master 85mm f/1.4 GM II", type: "Dreamy Bokeh & Portraits" },
    { name: "Sony G-Master 35mm f/1.4 GM", type: "Intimate Candid Moments" },
    { name: "DJI Mavic 3 Pro Cine", type: "Aerial Grandeur" },
    { name: "Profoto & Godox Lighting Kits", type: "Editorial Studio & Mandap Light" }
  ]
};

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Stories' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'baby', label: 'Baby & Maternity' },
  { id: 'films', label: 'Cinematic Films' },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "The Golden Mandapam Rituals",
    category: "weddings",
    couple: "Arun & Priya",
    location: "Silver Beach Resort, Cuddalore",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: true,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 85mm f/1.4 GM",
      shutter: "1/800s",
      aperture: "f/1.4",
      iso: "ISO 100",
      focalLength: "85mm"
    },
    story: "Under the fragrance of fresh jasmine and the rhythmic nadaswaram chants, Priya looked up at Arun. A timeless moment of sacred vows bathed in morning temple rays."
  },
  {
    id: 2,
    title: "Shoreline Sunset Symphony",
    category: "pre-wedding",
    couple: "Karthik & Sneha",
    location: "Silver Beach, Cuddalore Coast",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    featured: true,
    exif: {
      camera: "Sony FX3",
      lens: "FE 35mm f/1.4 GM",
      shutter: "1/1600s",
      aperture: "f/1.6",
      iso: "ISO 80",
      focalLength: "35mm"
    },
    story: "Golden hour reflection on the wet sands of Cuddalore. The breeze carrying their laughter across the Bay of Bengal horizon."
  },
  {
    id: 3,
    title: "Kanchipuram Silk & Solitary Grace",
    category: "portraits",
    couple: "Divya Venkat",
    location: "Heritage Chettinad Courtyard",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: true,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 50mm f/1.2 GM",
      shutter: "1/500s",
      aperture: "f/1.2",
      iso: "ISO 100",
      focalLength: "50mm"
    },
    story: "The bride taking a solitary breath right before the thali ceremony. Pure royal elegance draped in antique gold jewellery."
  },
  {
    id: 4,
    title: "Pondicherry French Quarter Romance",
    category: "pre-wedding",
    couple: "Vignesh & Keerthi",
    location: "White Town, Pondicherry",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    aspect: "square",
    featured: false,
    exif: {
      camera: "Sony FX3 Cinema",
      lens: "FE 24-70mm f/2.8 GM II",
      shutter: "1/1000s",
      aperture: "f/2.8",
      iso: "ISO 160",
      focalLength: "48mm"
    },
    story: "Pastel yellow colonial walls and bougainvillea blossoms framing a spontaneous laugh."
  },
  {
    id: 5,
    title: "The Grand Royal Muhurtham",
    category: "weddings",
    couple: "Kavin & Ananya",
    location: "Grand Palace Mandapam, Chidambaram",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: true,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 85mm f/1.4 GM",
      shutter: "1/640s",
      aperture: "f/1.8",
      iso: "ISO 400",
      focalLength: "85mm"
    },
    story: "Yellow akshatai shower frozen mid-air as the holy knot was tied. Raw, electric family celebration."
  },
  {
    id: 6,
    title: "Couture Velvet & Gold",
    category: "fashion",
    couple: "Meera Krishnan",
    location: "Studio Green Private Bay, Cuddalore",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: false,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 90mm f/2.8 Macro G",
      shutter: "1/250s",
      aperture: "f/4.0",
      iso: "ISO 100",
      focalLength: "90mm"
    },
    story: "Editorial jewelry spread combining vintage South Indian temple motifs with high-fashion lighting."
  },
  {
    id: 7,
    title: "First Breath of Pure Wonder",
    category: "baby",
    couple: "Baby Aarav (12 Days Old)",
    location: "Studio Green Newborn Suite, Cuddalore",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    featured: false,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 50mm f/1.2 GM",
      shutter: "1/320s",
      aperture: "f/2.0",
      iso: "ISO 200",
      focalLength: "50mm"
    },
    story: "Peaceful slumber nestled in organic cotton wraps, wrapped in warm maternal glow."
  },
  {
    id: 8,
    title: "Cinematic Emerald Mangroves",
    category: "films",
    couple: "Harish & Pooja",
    location: "Pichavaram Mangrove Forest",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    featured: true,
    exif: {
      camera: "DJI Mavic 3 Cine ProRes",
      lens: "24mm Hasselblad Sensor",
      shutter: "1/2000s",
      aperture: "f/2.8",
      iso: "ISO 100",
      focalLength: "24mm"
    },
    story: "A wooden boat cutting through the world's second largest mangrove system at dawn. Cinematic film still."
  },
  {
    id: 9,
    title: "Tears of Joy & Father's Blessing",
    category: "weddings",
    couple: "Swetha & Gokul",
    location: "Le Pondy Resort, Pondicherry",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: false,
    exif: {
      camera: "Sony FX3",
      lens: "FE 135mm f/1.8 GM",
      shutter: "1/1000s",
      aperture: "f/1.8",
      iso: "ISO 320",
      focalLength: "135mm"
    },
    story: "The tender split-second when her father whispered blessings into her ear before giving her away."
  },
  {
    id: 10,
    title: "Golden Hour Garland Exchange",
    category: "weddings",
    couple: "Raghav & Janani",
    location: "Silver Beach Mandapam, Cuddalore",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    featured: true,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 50mm f/1.2 GM",
      shutter: "1/1250s",
      aperture: "f/1.2",
      iso: "ISO 100",
      focalLength: "50mm"
    },
    story: "Rose petals hovering in mid-air as the couple exchanged heavy South Indian jasmine and lotus garlands."
  },
  {
    id: 11,
    title: "Temple Chariot Street Pre-Wedding",
    category: "pre-wedding",
    couple: "Manoj & Deepa",
    location: "Car Street, Chidambaram Nataraja Temple",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: false,
    exif: {
      camera: "Sony FX3",
      lens: "FE 35mm f/1.4 GM",
      shutter: "1/800s",
      aperture: "f/1.6",
      iso: "ISO 200",
      focalLength: "35mm"
    },
    story: "Towering ancient stone gopurams framing an intimate moment between the young couple."
  },
  {
    id: 12,
    title: "Editorial Bridal Solitude",
    category: "portraits",
    couple: "Soundarya R.",
    location: "Studio Green Private Suite, Cuddalore",
    date: "September 2026",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: true,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 85mm f/1.4 GM II",
      shutter: "1/400s",
      aperture: "f/1.4",
      iso: "ISO 64",
      focalLength: "85mm"
    },
    story: "Directional Rembrandt lighting emphasizing pure zari borders and intricate antique gold jhumkas."
  },
  {
    id: 13,
    title: "High-Fashion Kanchipuram Lookbook",
    category: "fashion",
    couple: "Lakshmi Atelier Edition",
    location: "Heritage French Quarter Villa, Pondicherry",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85",
    aspect: "portrait",
    featured: false,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 70-200mm f/2.8 GM II",
      shutter: "1/640s",
      aperture: "f/2.8",
      iso: "ISO 100",
      focalLength: "135mm"
    },
    story: "Haute couture bridal campaign combining deep jewel-toned silks with dramatic architectural shadows."
  },
  {
    id: 14,
    title: "Innocence in Mother's Embrace",
    category: "baby",
    couple: "Baby Ananya & Meenakshi",
    location: "Studio Green Maternity Suite",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    featured: false,
    exif: {
      camera: "Sony A7R V",
      lens: "FE 50mm f/1.2 GM",
      shutter: "1/320s",
      aperture: "f/2.0",
      iso: "ISO 160",
      focalLength: "50mm"
    },
    story: "Natural window light illuminating the divine tranquility between mother and child."
  },
  {
    id: 15,
    title: "4K Cinema Aerial Wave Symphony",
    category: "films",
    couple: "Arun & Priya",
    location: "Silver Beach Coastal Sanctuary",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    featured: true,
    exif: {
      camera: "DJI Mavic 3 Cine ProRes",
      lens: "24mm f/2.8",
      shutter: "1/1000s",
      aperture: "f/4.0",
      iso: "ISO 100",
      focalLength: "24mm"
    },
    story: "Aerial birds-eye still of the coastline as the couple walked along the foam line at sunset."
  }
];

export const FEATURED_STORIES = [
  {
    id: 'story-1',
    title: "ARUN × PRIYA",
    subtitle: "A Coastal Cuddalore Sunset Wedding",
    date: "24 August 2026",
    location: "Silver Beach Resort & Grand Mandapam, Cuddalore",
    cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    quote: "“Studio Green didn't merely photograph our wedding — they bottled the exact warmth, nervous smiles, and tears into art we will treasure for three generations.”",
    chapters: [
      {
        title: "The Dawn Muhurtham",
        text: "The morning light filtered through the seaside coconut palms as traditional nadaswaram melodies heralded the sacred vows. Our cameras stayed invisible, capturing candid tears and spontaneous embraces.",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Twilight on Silver Beach",
        text: "As dusk settled in hues of amber and violet, the couple escaped the banquet for ten quiet minutes along the Cuddalore shore. Just two souls, the sea breeze, and eternal frames.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: 'story-2',
    title: "KAVIN × ANANYA",
    subtitle: "Sacred Chettinad Grandeur & Royal Reception",
    date: "14 July 2026",
    location: "Chidambaram Heritage Hall & Pondicherry",
    cover: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85",
    quote: "“Every single photograph looks like a vintage Vogue editorial crossed with genuine South Indian heritage.”",
    chapters: [
      {
        title: "Heirloom Silks & Antiques",
        text: "Handwoven pure zari silks from Kanchipuram and heirloom temple jewelry handed down over three generations.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "The Royal Sangeet Night",
        text: "Strobes, dhol beats, laughter, and high-energy family dance battles captured with cinematic prime lenses.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: 'story-3',
    title: "KARTHIK × SNEHA",
    subtitle: "Twilight Along Pondicherry French Quarter",
    date: "18 June 2026",
    location: "Promenade Beach & White Town, Pondicherry",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    quote: "“The cinematic quality of their work is unmatched. Watching our teaser reel felt like stepping straight into a Cannes festival romance film.”",
    chapters: [
      {
        title: "Bougainvillea & Colonial Pastel Alleys",
        text: "Pastel yellow French colonial arches and quiet cobblestone streets formed the dreamlike backdrop as dawn broke over Pondicherry.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Seaside Lantern Serenade",
        text: "An intimate twilight beach dinner lit with hundreds of paper lanterns, serenaded by gentle waves.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: 'story-4',
    title: "HARISH × POOJA",
    subtitle: "Pichavaram Mangrove Dawn & Coastal Mandapam",
    date: "09 February 2026",
    location: "Pichavaram Mangroves & Silver Beach Resort",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    quote: "“They woke up at 4:30 AM to take us on a wooden boat through the misty mangroves. That photograph now hangs 6 feet wide in our living room.”",
    chapters: [
      {
        title: "The Misty Mangrove Canals",
        text: "Gliding through the emerald waterways of the world's second-largest mangrove system as morning mist lifted into golden sunbeams.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "The Sacred Muhurtham by the Waves",
        text: "Bathed in the auspicious morning muhurtham hour with the rhythmic crash of seaside waves in the background.",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  }
];

export const PACKAGES = [
  {
    id: "essential",
    name: "Essential Celebration",
    badge: "For Intimate Weddings & Engagements",
    desc: "Crafted for single-day intimate weddings, temple unions, or grand engagement celebrations.",
    features: [
      "1 Senior Candid Photographer + 1 Traditional Photographer",
      "1 Cinematographer (4K Highlight Reel)",
      "Up to 8 Hours Comprehensive Event Coverage",
      "350+ Master Color-Graded High-Resolution Images",
      "Private Online Client Gallery with 1-Year Cloud Storage",
      "1 Handcrafted Flush-Mount Premium Photo Album (40 Pages)"
    ],
    priceNote: "Starting from ₹65,000",
    popular: false
  },
  {
    id: "signature",
    name: "Signature Wedding Experience",
    badge: "Most Cherished by Couples",
    desc: "Our hallmark package delivering editorial brilliance across pre-wedding and complete 2-day wedding celebrations.",
    features: [
      "Full Studio Green Master Lead Photography Team (2 Candid + 2 Traditional)",
      "2 Senior Cinema Directors (FX3 Cinema Rig + Gimbal)",
      "Licensed 4K Drone Aerial Cinematography",
      "2 Full Days Event Coverage (Reception + Muhurtham + Haldi)",
      "Complimentary Pre-Wedding Shoot (Cuddalore Coast or Pondicherry)",
      "600+ Editorial Retouched Stills + Full 4K Documentary Wedding Film",
      "2 Luxury Hand-Stitched Italian Leather Albums + 2 Parent Miniature Books",
      "Same-Day Teaser Reel (9:16 for Instagram within 24h)"
    ],
    priceNote: "Starting from ₹1,35,000",
    popular: true
  },
  {
    id: "luxury",
    name: "Royal Destination & Multi-Day",
    badge: "The Ultimate Royal Production",
    desc: "For grand destination weddings requiring zero compromises, dedicated lighting engineers, and bespoke storytelling.",
    features: [
      "Exclusive Coverage by Founder & Principal Master Photographer",
      "Comprehensive 6-Camera Production Crew + Dual Drone Operators",
      "Multi-day celebrations: Sangeet, Mehendi, Haldi, Muhurtham, Grand Reception",
      "Dedicated On-Site Same-Night Video Editor (Trailer screened at Reception)",
      "1,000+ Master High-Res Edited Photos + Cinematic 4K Feature Film (30-45 mins)",
      "3 Bespoke Velvet/Leather Master Albums with Custom Engraved Wooden Box",
      "Full Uncompressed RAW Stills Delivered on Custom Studio Green SSD Drive",
      "All-Inclusive Travel & Accommodation Support Pan-South India"
    ],
    priceNote: "Custom Luxury Quote",
    popular: false
  }
];

export const CLIENT_DEMO_DATA = {
  accessCode: "STUDIO2026",
  altCode: "ARUNPRIYA",
  clientName: "Arun & Priya",
  eventName: "The Wedding Celebration & Reception",
  eventDate: "August 24, 2026",
  location: "Silver Beach Resort, Cuddalore",
  totalPhotos: 42,
  selectedForAlbum: 14,
  maxAlbumSelection: 50,
  galleryPhotos: [
    {
      id: "cp-1",
      thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=90",
      name: "SG_RAW_0014_Muhurtham_FirstLook.jpg",
      tags: ["Muhurtham", "Ceremony"],
      fav: true
    },
    {
      id: "cp-2",
      thumb: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=90",
      name: "SG_RAW_0089_Sacred_Fire_Rituals.jpg",
      tags: ["Ceremony", "Candid"],
      fav: true
    },
    {
      id: "cp-3",
      thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90",
      name: "SG_RAW_0211_Cuddalore_Beach_Sunset.jpg",
      tags: ["Portraits", "Couple"],
      fav: true
    },
    {
      id: "cp-4",
      thumb: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=90",
      name: "SG_RAW_0045_Bridal_Kanchipuram.jpg",
      tags: ["Bride", "Details"],
      fav: false
    },
    {
      id: "cp-5",
      thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90",
      name: "SG_RAW_0332_Laughter_Mandapam.jpg",
      tags: ["Candid", "Family"],
      fav: false
    },
    {
      id: "cp-6",
      thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      full: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=90",
      name: "SG_RAW_0198_Emotional_Blessings.jpg",
      tags: ["Emotions", "Ceremony"],
      fav: true
    }
  ]
};

export const REVIEWS = [
  {
    id: 1,
    couple: "Arun & Priya",
    event: "Cuddalore Beach Resort Wedding",
    rating: 5,
    date: "September 2026",
    text: "Studio Green Photography was the absolute best decision of our entire wedding! From the pre-wedding shoot at Silver Beach to the fast 24-hour teaser reel, their eye for genuine emotion is unmatched. 090921 41112 was the first number my father called, and they treated us like royalty.",
    photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    couple: "Dr. Kavin & Ananya",
    event: "Heritage Wedding, Chidambaram",
    rating: 5,
    date: "July 2026",
    text: "The lighting, colors, and discreet presence of the team made us feel so comfortable. Our Italian leather album arrived in a custom engraved wooden box that blew our whole family away.",
    photo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    couple: "Siddharth & Keerthi",
    event: "Destination Wedding, Pondicherry",
    rating: 5,
    date: "May 2026",
    text: "If you want photographs that look like timeless cinema rather than stiff staged poses, hire Studio Green without thinking twice. Worth every single rupee.",
    photo: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    q: "Where is Studio Green Photography based and do you travel?",
    a: "We are proudly based in Cuddalore, Tamil Nadu. While we shoot extensively in Cuddalore, Pondicherry, Chidambaram, Villupuram, and Chennai, our team regularly travels for destination weddings across South India and internationally."
  },
  {
    q: "How early should we book our wedding date?",
    a: "Because we take only a limited number of weddings each month to maintain bespoke editorial quality, auspicious Tamil wedding dates (muhurtham dates) are often booked 4 to 8 months in advance. We recommend checking your date immediately via our online checker or WhatsApp (+91 090921 41112)."
  },
  {
    q: "How soon do we receive our photos and cinematic wedding film?",
    a: "You receive your 20-30 Master Teaser images and Instagram 9:16 highlight reel within 48 to 72 hours of your wedding! The complete master color-graded high-resolution gallery is delivered within 3 to 4 weeks via our private cloud portal, and handcrafted albums within 5 to 6 weeks."
  },
  {
    q: "What camera and cinema gear do you use?",
    a: "We shoot with top-of-the-line Sony FX3 Cinema full-frame rigs, 61-megapixel Sony A7R V bodies, Sony G-Master prime glass (f/1.2 & f/1.4), DJI Mavic Cine drones, and professional studio lighting to ensure crystal-sharp low-light mandapam perfection."
  }
];
