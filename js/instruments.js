// ============================================
//  WOKL MUSIC STUDIO — Instruments Data
// ============================================

const instrumentsData = [
  {
    id: 1,
    name: 'Fender Stratocaster American Professional II',
    slug: 'fender-stratocaster',
    category: 'Guitar',
    price: 500,
    priceUnit: 'day',
    shortDesc: 'Iconic electric guitar with versatile tone, perfect for rock, blues, and pop sessions.',
    description: 'The American Professional II Stratocaster draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player. Our popular Deep "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register.',
    features: ['V-Mod II single-coil Stratocaster pickups', 'Deep "C" neck profile', '22 narrow-tall frets', 'Treble bleed circuit', 'Includes premium hardshell case'],
    image: 'images/instruments/stratocaster.png'
  },
  {
    id: 2,
    name: 'Martin D-28 Acoustic Guitar',
    slug: 'martin-d28',
    category: 'Guitar',
    price: 600,
    priceUnit: 'day',
    shortDesc: 'The legendary acoustic standard, known for its rich, resonant bass and clear highs.',
    description: 'Sometimes innovation is in the details and this is certainly true with Martin’s re-imagined D-28. After nearly a century at the helm, and as the quintessential workhorse of music legends like Hank Williams, The Beatles, Johnny Cash, Neil Young, Bob Dylan, and so many more, Martin\'s legendary D-28 has been lovingly and artfully enhanced.',
    features: ['Sitka spruce top', 'East Indian rosewood back and sides', 'Forward-shifted bracing', 'Ebony fingerboard', 'High-performance neck taper'],
    image: 'images/instruments/martin-d28.png'
  },
  {
    id: 3,
    name: 'Nord Stage 3 88-Key',
    slug: 'nord-stage-3',
    category: 'Keyboard & Piano',
    price: 1200,
    priceUnit: 'day',
    shortDesc: 'Industry-standard stage keyboard featuring top-tier piano, organ, and synth engines.',
    description: 'The Nord Stage 3 is the fifth generation of our successful Stage series continuing our vision of the ultimate instrument for the performing musician. Our outstanding new flagship instrument features our latest award-winning technologies including the Nord Lead A1 Synth Engine with sample playback, our acclaimed Nord C2D organ, a greatly enhanced Piano Section and extensive hands-on Effects.',
    features: ['88-note fully weighted hammer action keybed', '2 GB memory for Nord Piano Library', 'Nord Lead A1 Synth Engine', 'Nord C2D Organ simulations', 'Seamless transitions when changing programs'],
    image: 'images/instruments/nord-stage-3.png'
  },
  {
    id: 4,
    name: 'Moog Subsequent 37',
    slug: 'moog-subsequent-37',
    category: 'Keyboard & Piano',
    price: 800,
    priceUnit: 'day',
    shortDesc: 'Paraphonic analog synthesizer with aggressive lead tones and sub-shaking bass.',
    description: 'The Subsequent 37 is a (2-note) paraphonic analog synthesizer that builds upon the award-winning design of the ultra-powerful Sub 37 Tribute Edition. Its control panel is home to 40 knobs and 74 switches, placing a vast array of analog sound-design tools and onboard sequencing options immediately at your command.',
    features: ['2-note Paraphonic functionality', 'Upgraded Multidrive circuit', 'High-powered headphone amplifier', '256 presets - 16 banks of 16 patches', 'Arpeggiator & Step Sequencer'],
    image: 'images/instruments/moog-sub37.png'
  },
  {
    id: 5,
    name: 'Ludwig Classic Maple Drum Kit',
    slug: 'ludwig-classic-maple',
    category: 'Drums & Percussion',
    price: 1500,
    priceUnit: 'day',
    shortDesc: 'Premium 5-piece maple drum kit offering explosive attack and rich warmth.',
    description: 'Preferred by professionals for its tonal versatility, Ludwig Classic Maple drums are the ideal choice for any performance application. Its high sensitivity, wide dynamic tuning range, and sharp attack make it the ideal choice for live performance. Featuring 7-ply Cross-Laminated North American Maple shells.',
    features: ['7-ply North American Maple shells', '45-degree bearing edges', 'Includes Zildjian K Custom cymbal pack', 'Includes heavy-duty hardware', 'Kick pedal and hi-hat stand included'],
    image: 'images/instruments/ludwig-drums.png'
  },
  {
    id: 6,
    name: 'Neumann U 87 Ai',
    slug: 'neumann-u87',
    category: 'Studio Equipment',
    price: 1000,
    priceUnit: 'day',
    shortDesc: 'The definitive industry-standard studio microphone for vocals and voice-over.',
    description: 'The Neumann U 87 Ai is probably the best-known and most widely used studio microphone in the world. Its smooth and refined sound is as iconic as its elegant exterior design. The U 87 Ai is the standard microphone for speech and vocals. Three polar patterns plus pad and low cut options make it adaptable to a wide range of applications.',
    features: ['Classic large diaphragm capsule', 'Omnidirectional, cardioid, figure-8 patterns', 'Switchable low cut and pad', 'Classic Neumann sound', 'Includes shock mount and pop filter'],
    image: 'images/instruments/neumann-u87.png'
  },
  {
    id: 7,
    name: 'Pioneer CDJ-3000 & DJM-900NXS2 Setup',
    slug: 'pioneer-dj-setup',
    category: 'DJ Setup',
    price: 2500,
    priceUnit: 'day',
    shortDesc: 'Club-standard DJ setup featuring two CDJ-3000 media players and DJM-900 mixer.',
    description: 'Take your performance to the next level with this industry-standard DJ setup. The CDJ-3000 offers an MPU (microprocessor unit) driven engine with an advanced high-resolution touch screen. Paired with the DJM-900NXS2, which features a 64-bit mixing processor for a warmer, more nuanced sound.',
    features: ['2x Pioneer CDJ-3000 multi-players', '1x Pioneer DJM-900NXS2 4-channel mixer', 'Pro DJ Link compatible', 'High-res audio support', 'Includes all necessary cables'],
    image: 'images/instruments/pioneer-dj.png'
  },
  {
    id: 8,
    name: 'Universal Audio Apollo x8p',
    slug: 'apollo-x8p',
    category: 'Studio Equipment',
    price: 800,
    priceUnit: 'day',
    shortDesc: 'Elite-class audio interface with 8 Unison mic preamps and HEXA Core processing.',
    description: 'The Apollo x8p allows music engineers, producers, and project studios to track, overdub, and mix with elite-class A/D and D/A conversion, HEXA Core UAD plug-in processing, and 8 Unison-enabled mic preamps — all in a sleek rackmount Thunderbolt 3 audio interface.',
    features: ['8 Unison mic preamps', 'HEXA Core UAD processing', 'Elite-class A/D and D/A conversion', 'Select UAD plugins included', 'Thunderbolt 3 connectivity'],
    image: 'images/instruments/apollo-x8p.png'
  }
];

window.instrumentsData = instrumentsData;
window.getInstrumentBySlug = (slug) => instrumentsData.find(i => i.slug === slug);
window.getRelatedInstruments = (slug, category) => {
  return instrumentsData.filter(i => i.category === category && i.slug !== slug).slice(0, 3);
};
