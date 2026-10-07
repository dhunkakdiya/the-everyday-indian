import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import {
  Clock,
  Sun,
  Eye,
  Sliders,
  BookOpen,
  Info,
  Users,
  Volume2,
  VolumeX,
  Layers,
  Sparkles,
  ArrowRight,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
  Headphones,
  Pause,
  Compass,
  ShieldCheck,
  Award
} from 'lucide-react';

export const TEAM_PORTRAITS = {
  dhairya: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
    <rect width="400" height="450" fill="%2314110E"/>
    <defs>
      <linearGradient id="dhairyaSkin" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%23c68a5c"/><stop offset="100%" stopColor="%239e6538"/></linearGradient>
      <linearGradient id="dhairyaSuit" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%231a1a1c"/><stop offset="100%" stopColor="%230c0c0e"/></linearGradient>
    </defs>
    <path d="M70,450 L110,260 L160,270 L200,340 L240,270 L290,260 L330,450 Z" fill="url(%23dhairyaSuit)"/>
    <polygon points="160,265 200,345 240,265 215,220 185,220" fill="%23fdfdfd"/>
    <polygon points="175,230 195,290 160,250" fill="%23ececec"/>
    <polygon points="225,230 205,290 240,250" fill="%23ececec"/>
    <rect x="180" y="200" width="40" height="50" fill="url(%23dhairyaSkin)" rx="8"/>
    <ellipse cx="200" cy="155" rx="56" ry="68" fill="url(%23dhairyaSkin)"/>
    <path d="M140,140 Q130,90 170,75 Q200,65 230,75 Q270,90 260,140 Q240,110 200,110 Q160,110 140,140 Z" fill="%23161311"/>
    <circle cx="150" cy="90" r="14" fill="%23161311"/>
    <circle cx="170" cy="78" r="15" fill="%23161311"/>
    <circle cx="200" cy="74" r="16" fill="%23161311"/>
    <circle cx="230" cy="78" r="15" fill="%23161311"/>
    <circle cx="250" cy="92" r="14" fill="%23161311"/>
    <path d="M152,155 Q150,215 200,222 Q250,215 248,155 Q240,185 200,190 Q160,185 152,155 Z" fill="%231a1410" opacity="0.85"/>
    <ellipse cx="180" cy="145" rx="6" ry="4" fill="%23221b16"/>
    <ellipse cx="220" cy="145" rx="6" ry="4" fill="%23221b16"/>
    <path d="M178,178 Q200,200 222,178 Z" fill="%23ffffff"/>
    <path d="M178,178 Q200,192 222,178" stroke="%23852b2b" stroke-width="2" fill="none"/>
  </svg>`,

  dhun: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
    <rect width="400" height="450" fill="%2314110E"/>
    <defs>
      <linearGradient id="dhunSkin" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%23caa07a"/><stop offset="100%" stopColor="%23a47953"/></linearGradient>
      <linearGradient id="dhunGreenBlazer" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%231c382f"/><stop offset="100%" stopColor="%230f221c"/></linearGradient>
    </defs>
    <path d="M60,450 L100,260 L155,270 L200,380 L245,270 L300,260 L340,450 Z" fill="url(%23dhunGreenBlazer)"/>
    <polygon points="100,260 160,265 195,350 145,290" fill="%23274d41"/>
    <polygon points="300,260 240,265 205,350 255,290" fill="%23274d41"/>
    <rect x="165" y="215" width="70" height="60" fill="%23111113" rx="10"/>
    <path d="M185,250 Q200,285 215,250" stroke="%23e5b869" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect x="180" y="195" width="40" height="40" fill="url(%23dhunSkin)" rx="6"/>
    <ellipse cx="200" cy="150" rx="52" ry="64" fill="url(%23dhunSkin)"/>
    <path d="M142,135 Q135,70 190,62 Q240,60 258,105 Q262,135 258,150 Q240,95 200,95 Q160,95 142,135 Z" fill="%231c1815"/>
    <rect x="150" y="130" width="44" height="28" rx="7" fill="%230a0a0c" stroke="%23252528" stroke-width="2"/>
    <rect x="206" y="130" width="44" height="28" rx="7" fill="%230a0a0c" stroke="%23252528" stroke-width="2"/>
    <line x1="194" y1="140" x2="206" y2="140" stroke="%23252528" stroke-width="3"/>
    <line x1="140" y1="138" x2="150" y2="140" stroke="%23252528" stroke-width="2"/>
    <line x1="250" y1="140" x2="260" y2="138" stroke="%23252528" stroke-width="2"/>
    <path d="M165,175 Q200,218 235,175 Q225,200 200,205 Q175,200 165,175 Z" fill="%231a1410" opacity="0.6"/>
    <path d="M185,182 Q200,192 215,182" stroke="%23853838" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  jay: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
    <rect width="400" height="450" fill="%2314110E"/>
    <defs>
      <linearGradient id="jaySkin" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%23cba07c"/><stop offset="100%" stopColor="%23a87854"/></linearGradient>
      <linearGradient id="jaySuit" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%2318181c"/><stop offset="100%" stopColor="%230c0c0e"/></linearGradient>
    </defs>
    <path d="M65,450 L105,255 L160,265 L200,345 L240,265 L295,255 L335,450 Z" fill="url(%23jaySuit)"/>
    <polygon points="160,260 200,345 240,260 215,220 185,220" fill="%23ffffff"/>
    <polygon points="175,225 195,285 160,248" fill="%23eeeeee"/>
    <polygon points="225,225 205,285 240,248" fill="%23eeeeee"/>
    <rect x="180" y="200" width="40" height="45" fill="url(%23jaySkin)" rx="8"/>
    <ellipse cx="200" cy="155" rx="55" ry="66" fill="url(%23jaySkin)"/>
    <path d="M142,135 Q130,80 170,68 Q200,58 230,68 Q270,80 258,135 Q240,90 200,90 Q160,90 142,135 Z" fill="%2314110f"/>
    <ellipse cx="190" cy="72" rx="22" ry="14" fill="%2314110f"/>
    <ellipse cx="220" cy="76" rx="20" ry="14" fill="%2314110f"/>
    <path d="M178,166 Q200,163 222,166 Q200,172 178,166 Z" fill="%23191310"/>
    <path d="M160,165 Q160,212 200,218 Q240,212 240,165 Q230,195 200,200 Q170,195 160,165 Z" fill="%23191310" opacity="0.8"/>
    <ellipse cx="180" cy="144" rx="6" ry="4" fill="%23221b16"/>
    <ellipse cx="220" cy="144" rx="6" ry="4" fill="%23221b16"/>
    <path d="M182,176 Q200,190 218,176" stroke="%23853838" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  richa: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
    <rect width="400" height="450" fill="%2314110E"/>
    <defs>
      <linearGradient id="richaSkin" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%23d6a988"/><stop offset="100%" stopColor="%23b88460"/></linearGradient>
      <linearGradient id="richaSaree" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%237b1123"/><stop offset="100%" stopColor="%234d0b16"/></linearGradient>
    </defs>
    <path d="M60,450 L110,270 L200,320 L260,280 L340,450 Z" fill="url(%23richaSaree)"/>
    <path d="M220,310 L280,270 L340,450 L250,450 Z" fill="%23ede5d8"/>
    <g fill="%23f7f4ee" stroke="%23d1c7b7" stroke-width="1">
      <circle cx="160" cy="275" r="5"/><circle cx="172" cy="285" r="5.5"/><circle cx="186" cy="292" r="6"/>
      <circle cx="200" cy="294" r="6"/><circle cx="214" cy="292" r="6"/><circle cx="228" cy="285" r="5.5"/><circle cx="240" cy="275" r="5"/>
    </g>
    <rect x="180" y="210" width="40" height="50" fill="url(%23richaSkin)" rx="8"/>
    <ellipse cx="200" cy="160" rx="55" ry="65" fill="url(%23richaSkin)"/>
    <path d="M135,160 Q125,75 190,65 Q245,65 265,110 Q280,180 270,260 Q255,200 250,150 Q235,95 200,95 Q165,95 150,150 Q145,200 130,260 Z" fill="%231f1816"/>
    <circle cx="200" cy="132" r="4.5" fill="%23b81414"/>
    <ellipse cx="178" cy="150" rx="6" ry="4" fill="%232b1f1a"/>
    <ellipse cx="222" cy="150" rx="6" ry="4" fill="%232b1f1a"/>
    <path d="M178,182 Q200,204 222,182 Z" fill="%23ffffff"/>
    <path d="M178,182 Q200,194 222,182" stroke="%239c2738" stroke-width="2.5" fill="none"/>
  </svg>`
};

export const FACULTY_MENTOR = {
  name: "Dr. Richa Mishra",
  id: "richa.mishra@nirmauni.ac.in",
  department: "Department of Humanities & Social Sciences",
  university: "Institute of Technology, Nirma University",
  image: "/images/richa.png",
  embeddedArtwork: TEAM_PORTRAITS.richa
};

export const STUDENT_TEAM = [
  {
    name: "Dhairya Patel",
    id: "23BCE063",
    role: "Research & Historical Content",
    focus: "Archival gazetteer analysis, regional folklore curation, and verifying historical evidence.",
    image: "/images/dhairya.png",
    embeddedArtwork: TEAM_PORTRAITS.dhairya
  },
  {
    name: "Dhun Kakdiya",
    id: "23BCE068",
    role: "Design & Development",
    focus: "Visual design system, interactive 3D layout, color harmony, and user experience.",
    image: "/images/dhun.png",
    embeddedArtwork: TEAM_PORTRAITS.dhun
  },
  {
    name: "Jay Patel",
    id: "23BCE112",
    role: "Technical Architecture & 3D Systems",
    focus: "Three.js procedural lighting engines, audio synthesis, and interactive components.",
    image: "/images/jay.png",
    embeddedArtwork: TEAM_PORTRAITS.jay
  }
];

export const TIMELINE_ERAS = [
  {
    year: "1500",
    eraTag: "Sultanate Guilds",
    title: "Sultanate Era & Guild Communities",
    description: "Centuries before modern factories, everyday life centered on craft guilds (Mahajans), rainwater harvesting stepwells (vavs), and communal walled neighborhoods.",
    home: "Single and double-story lime-mortar and brick houses with wooden internal pillars and cool ground-floor store rooms.",
    food: "Bajra (pearl millet) rotla, lentils, unrefined jaggery, fresh curd, and seasonal wild greens cooked on clay mud hearths (chulhas).",
    clothing: "Handspun tree-cotton dhotis and odhanis dyed with organic madder root, indigo, and turmeric.",
    work: "Guild-based hand weaving, bell-metal bronze casting, terracotta pottery, farming, and caravan trading.",
    transport: "Walking, pack bullocks, camel carts for merchants, and small river country boats along the Sabarmati and Narmada."
  },
  {
    year: "1600",
    eraTag: "Mughal Subah",
    title: "Mughal Subah & Global Textile Trade",
    description: "Gujarat became an international trade hub. Everyday artisans produced world-renowned calicos, muslins, and patolas while maintaining austere domestic routines.",
    home: "Expansion of multi-level timber-framed Pol courtyard homes with carved decorative brackets (todla) and light-wells (chowk).",
    food: "Staple khichdi, kadhi, slow-stewed papad, pickles preserved in glazed jars, and hand-ground spices.",
    clothing: "Block-printed chintz for local wear, bandhani tie-dye headscarves, and coarse cotton angarkhas.",
    work: "Pit-loom silk and cotton weaving, wood block-carving, indigo vat fermentation, and grain accounting.",
    transport: "Heavy wooden bullock carts with iron-rimmed wheels, pack horses, and river barges."
  },
  {
    year: "1700",
    eraTag: "Maratha Pols",
    title: "Maratha Period & Pol Fortification",
    description: "A time of regional power shifts led ordinary families to tightly enclose urban neighborhoods with security gates (pols) and built-in underground rainwater tanks (tankas).",
    home: "Densely packed townhouses with shared walls, narrow 8-foot shaded lanes, and rooftop terraces for sleeping.",
    food: "Hand-milled grain breads, seasonal mango pulp preservation, buttermilk stored in porous clay matkas.",
    clothing: "Durable homespun khadi, heavy woven turbans providing insulation against sunstroke, silver amulet ornaments.",
    work: "Artisan metalcraft, family accounting registers (bahi khata), leather saddle and vessel stitching.",
    transport: "Pedestrian corridors, hand-pulled carts, and Kathiawari horse travel for long-distance messengers."
  },
  {
    year: "1800",
    eraTag: "Pre-Colonial",
    title: "Early 19th Century & Traditional Zenith",
    description: "The peak era of traditional handcrafted everyday material culture before modern steam machinery changed urban life.",
    home: "Three-to-four-story wooden pol dwellings with carved bird-feeders (chabutros) in the communal courtyards.",
    food: "Rotli baked on earthenware griddles (tavdi), lentil dal tempered in brass vagharia, seasonal vegetables kept in cool terracotta pots.",
    clothing: "Hand-loomed cotton saris, dhotis, and cotton jackets with concealed internal coin pockets.",
    work: "Handicrafts, wood carving for house lintels, and fetching water from community stepwells.",
    transport: "Ornately painted wooden bullock carriages (shigrams), camel caravans, and pedestrian porterage."
  },
  {
    year: "1900",
    eraTag: "Industrial Mills",
    title: "The Industrial Mill Dawn",
    description: "The rise of steam-powered cotton textile mills in Ahmedabad and Bombay transformed rural artisans into an urban factory working class, creating dense chawls.",
    home: "Rise of industrial mill chawls: single-room tenements facing shared balconies with common municipal water standposts.",
    food: "Introduction of factory-refined sugar, commercial tea stalls, mechanized flour mills, and metal tiffin boxes.",
    clothing: "Mill-woven calico shirts, factory dhotis, introduction of rubber slippers and manufactured cotton.",
    work: "Shift work in textile spinning sheds, railway shunting, printing presses, and colonial clerical jobs.",
    transport: "Metre-gauge steam locomotives, horse-drawn tramways, early bicycles, and iron-wheeled carts."
  },
  {
    year: "1950",
    eraTag: "Independence",
    title: "Post-Independence Reconstruction",
    description: "The early decades of independent India brought cooperative dairying (Amul), basic civic infrastructure, and neighborhood housing societies.",
    home: "Cooperative brick-and-cement housing societies replacing pols; introduction of ceiling fans and incandescent bulbs.",
    food: "Expansion of cooperative milk delivery, kerosene stove cooking, early pressure cookers, and stainless-steel cookware.",
    clothing: "Khadi wear as a badge of civic pride alongside synthetic rayon, handloom saris, and rubber chappals.",
    work: "Government administration, cooperative dairy farming, small engineering workshops, and school teaching.",
    transport: "State transport (ST) diesel buses, Hercules bicycles, three-wheeled auto-rickshaws, and passenger trains."
  },
  {
    year: "2000",
    eraTag: "Millennium",
    title: "Millennium Urbanization & Connectivity",
    description: "Economic liberalization brought television into almost every living room, scooters into narrow alleys, and the dawn of mobile phones.",
    home: "Concrete apartment blocks with personal borewells, overhead plastic water tanks, and LPG cylinder kitchens.",
    food: "Packaged spices, refrigerated dairy, quick breakfast snacks, alongside traditional evening hot rotlis.",
    clothing: "Ready-made denim jeans, synthetic salwar suits, formal shirts, and mass-market footwear.",
    work: "IT and computer centres, engineering workshops, retail markets, coaching classes, and logistics.",
    transport: "Two-wheeler motorbikes, motorized auto-rickshaws, family hatchback cars, and suburban trains."
  },
  {
    year: "2026",
    eraTag: "Hyper-Connected",
    title: "Modern Digital Everyday Life",
    description: "Modern ordinary Indian life blends age-old family customs with instant digital services: UPI payments, online groceries, and rooftop solar power.",
    home: "Gated multi-story residential apartments with piped cooking gas, high-speed fiber internet, and induction cooktops.",
    food: "Instant app-delivered groceries alongside traditional multigrain rotlis and a revival of ancient millets.",
    clothing: "Everyday casual athleisure and denim alongside sustainable handloom cotton for family festivals.",
    work: "Software engineering, digital services, logistics, cloud healthcare, and creative entrepreneurship.",
    transport: "Electric metro rail, battery electric scooters (EVs), app-based ride cabs, and expanding expressways."
  }
];

export const HISTORICAL_OBJECTS = [
  {
    id: "matka",
    displayName: "Matka",
    name: "Earthen Water Matka",
    gujaratiName: "માટીનું માટલું / ઘડો",
    period: "Antiquity to Present (1800s focus)",
    region: "Gujarat & Western India",
    material: "Porous Terracotta Clay with Mica Slip",
    category: "Domestic Culinary & Climate Adaptation",
    dimensions: "36 cm height × 32 cm diameter",
    usage: "Natural evaporative cooling of drinking water. Microscopic pores in the unglazed fired river silt allow tiny amounts of moisture to seep through and evaporate, naturally chilling the water by 6°C to 10°C without any electricity.",
    culturalContext: "Placed on an elevated lime-rendered alcove near the kitchen called the 'Paniara'. It was cleaned every single morning by the household as a reverent daily chore.",
    evolutionNotes: "Gradually supplemented by refrigerators in modern flats, yet still cherished in millions of homes for its gentle, earth-cooled sweetness.",
    evidenceBadge: "MUSEUM SPECIMEN",
    evidenceDetails: "Preserved in Calico Museum of Textiles & CEPT Vernacular Heritage Archives. Documented in Campbell's Bombay Gazetteer (1879)."
  },
  {
    id: "charpai",
    displayName: "Charpai",
    name: "Woven Coir Charpai Cot",
    gujaratiName: "ખાટલો / ખાટ",
    period: "1500 to Present",
    region: "Western & Northern India",
    material: "Solid Shisham / Teak Timber with Natural Coir Rope",
    category: "Domestic Furniture & Social Gathering",
    dimensions: "185 cm length × 90 cm width × 45 cm height",
    usage: "The multi-purpose furniture of the Indian household. Used as a comfortable bed at night, a daytime seat for guests in the courtyard, and a flat bench for drying grains or spices in the afternoon sun.",
    culturalContext: "Lightweight and easy to carry. Taken up to the rooftop terrace (agasi) during sultry summer nights to sleep under the cool open sky.",
    evolutionNotes: "Replaced in modern apartments by heavy plywood box beds and foam mattresses, though celebrated today in eco-friendly sustainable furniture.",
    evidenceBadge: "DOCUMENTED ARTIFACT",
    evidenceDetails: "Documented in domestic inventory tax registers of Ahmedabad Pol households and regional ethnographic studies."
  },
  {
    id: "diya",
    displayName: "Diya",
    name: "Cast Brass Oil Diya",
    gujaratiName: "પિત્તળનો દીવો / દીવી",
    period: "1600 to Early 1900s",
    region: "Patan & Ahmedabad, Gujarat",
    material: "Heavy Cast Brass with Etched Base",
    category: "Illumination & Domestic Sacred Space",
    dimensions: "24 cm height × 12 cm base diameter",
    usage: "Evening home lighting using unrefined sesame or mustard oil and hand-rolled raw cotton wicks.",
    culturalContext: "Placed in small wall niches (gokhlas) at sunset (sandhya) to light up dark corridors and entryways while welcoming good fortune.",
    evolutionNotes: "Replaced by kerosene lanterns in the late 19th century and tungsten light bulbs in the 20th century; preserved today for prayers and Diwali.",
    evidenceBadge: "DOCUMENTED SPECIMEN",
    evidenceDetails: "Historical brass craft registers from the Sihor and Patan Kansara brass-smith guilds."
  },
  {
    id: "kansa",
    displayName: "Kansa Thali",
    name: "Bell-Metal Kansa Dining Thali",
    gujaratiName: "કાંસાની થાળી અને વાટકા",
    period: "1500 to 1950",
    region: "Sihor, Bhavnagar & Patan, Gujarat",
    material: "Bell-metal Bronze Alloy (approx. 78% Copper, 22% Tin)",
    category: "Culinary & Traditional Health",
    dimensions: "30 cm diameter × 3.5 cm rim",
    usage: "Standard platter for serving daily meals. Traditional Indian medical wisdom recommended bell-metal because its subtle mineral properties helped balance food acidity and aid digestion.",
    culturalContext: "Carefully handed down across generations as a prized bridal wedding gift, washed daily with wood ash and lemon or tamarind rind to keep its golden sheen.",
    evolutionNotes: "Largely replaced after 1960 by affordable, easy-to-clean industrial stainless steel cookware.",
    evidenceBadge: "TRADITIONAL ARTIFACT",
    evidenceDetails: "Surviving pieces cataloged in the Baroda Museum and Gujarati folk craft surveys."
  },
  {
    id: "charkha",
    displayName: "Charkha",
    name: "Traditional Wooden Box Charkha",
    gujaratiName: "લાકડાનો રેંટિયો",
    period: "1700 to 1950",
    region: "Gujarat, Maharashtra & Bengal",
    material: "Rosewood / Teak Timber, Steel Spindle, Cotton Drive Band",
    category: "Textile Craft & Cottage Industry",
    dimensions: "50 cm length × 28 cm width × 22 cm height",
    usage: "Hand-spinning raw cotton fibers into smooth yarn ready for the village weaver's loom.",
    culturalContext: "Operated by family members during quiet afternoon hours between daily cooking and evening tasks; later became the worldwide symbol of self-reliance and freedom.",
    evolutionNotes: "Transitioned from an essential household necessity to a respected artisanal tradition and educational heritage piece.",
    evidenceBadge: "ARCHIVAL CRAFT ARTIFACT",
    evidenceDetails: "Sabarmati Ashram Historical Collections and National Handloom Museum archives."
  },
  {
    id: "wheel",
    displayName: "Cart Wheel",
    name: "Iron-Rimmed Bullock Cart Wheel",
    gujaratiName: "લાકડાના ગાડાનું પૈડું",
    period: "1500 to 1960",
    region: "Rural Gujarat & Saurashtra",
    material: "Babool Heartwood Hub, Teak Spokes, Heavy Wrought-Iron Outer Ring",
    category: "Agrarian Transport & Trade",
    dimensions: "115 cm diameter × 14 cm hub width",
    usage: "Carried tons of harvested cotton, grain sacks, and family travelers through sandy farm tracks, mud roads, and village markets.",
    culturalContext: "Hand-built by local village carpenters (suthars) and ironsmiths (luhars). Greasing the axle with castor oil was an essential weekend ritual.",
    evolutionNotes: "Replaced in the late 20th century by tractors, rubber tyres, and diesel pick-up trucks.",
    evidenceBadge: "AGRARIAN HERITAGE SPECIMEN",
    evidenceDetails: "Gujarat Agricultural Heritage Records and regional rural implement surveys."
  }
];

export const DIURNAL_SCHEDULE = [
  {
    time: "5:30 AM",
    title: "Brahma Muhurta: Awakening & Water Drawing",
    skyColor: "from-[#0D1117] via-[#161B22] to-[#0A0D12]",
    sunElevation: "Pre-dawn twilight (Horizon -8°)",
    description: "The sound of distant temple chimes and sweeping brooms fills the quiet Pol lane. The household matriarch draws fresh rainwater from the underground cistern (tanka) and lights the sacred courtyard lamp.",
    sounds: "Morning sparrows, clinking brass vessels, broom brushing stone floor, soft devotional humming.",
    primaryArtifact: "Brass Lota & Well Pulley"
  },
  {
    time: "7:30 AM",
    title: "Chulha Fire & Morning Fresh Rotla",
    skyColor: "from-[#2A1B0E] via-[#1E150F] to-[#0D1016]",
    sunElevation: "Low golden morning sun (Elevation 15°)",
    description: "Clay hearths (chulhas) are sparked with dry firewood and cow-dung cakes. Thick pearl-millet rotlas bake on earthenware griddles (tavdi) and are eaten warm with fresh homemade white butter and jaggery.",
    sounds: "Firewood crackling, rhythmic wooden buttermilk churn, bubbling milk in brass pot.",
    primaryArtifact: "Earthen Tavdi & Wooden Churn"
  },
  {
    time: "10:30 AM",
    title: "Guild Workshops & Bazaar Trade",
    skyColor: "from-[#2A2315] via-[#1D1A14] to-[#0B0D11]",
    sunElevation: "Bright morning sun (Elevation 45°)",
    description: "Weavers, coppersmiths, and grain merchants open their street verandas. Handloom shuttles clack rhythmically while shopkeepers balance their red cloth-bound accounts (bahi khata).",
    sounds: "Clacking handlooms, coppersmith hammers tapping brass, shouts of vegetable sellers.",
    primaryArtifact: "Bahi Khata Accounting Ledger"
  },
  {
    time: "1:30 PM",
    title: "Midday Heat & Shaded Courtyard Rest",
    skyColor: "from-[#352817] via-[#211B14] to-[#0C0E14]",
    sunElevation: "Direct overhead sun (Elevation 78°)",
    description: "Golden sunlight streams down through the narrow open courtyard light-well (chowk). Wooden window shutters are drawn shut to block the dry heat. Elders rest on coir charpais cooled by woven grass mats.",
    sounds: "Soft whirr of cicadas, gentle pigeon flutter at the bird feeder (chabutro), ticking pendulum clock.",
    primaryArtifact: "Woven Coir Charpai"
  },
  {
    time: "5:00 PM",
    title: "Veranda Otla Gathering & Evening Haat",
    skyColor: "from-[#301D11] via-[#1E1714] to-[#0C0E14]",
    sunElevation: "Warm amber sunset light (Elevation 20°)",
    description: "As the sun dips, neighbors step outside onto their raised house plinths (otlas). Fresh spiced tea is shared, local news is discussed, and children play games in the peaceful car-free lane.",
    sounds: "Friendly neighborhood chatter, clinking tea glasses, children laughing, bicycle bells.",
    primaryArtifact: "Otla Plinth & Stone Game Board"
  },
  {
    time: "8:30 PM",
    title: "Diya Lighting & Cool Rooftop Sleep",
    skyColor: "from-[#080B10] via-[#0E131A] to-[#06080C]",
    sunElevation: "Starlit night canopy",
    description: "Brass oil lamps flicker softly in stone wall niches. After a simple dinner of khichdi and buttermilk, family members carry their light charpais to the open flat rooftop (agasi) to sleep under the breeze.",
    sounds: "Night crickets, distant night-watchman footsteps, cool breeze rustling neem leaves.",
    primaryArtifact: "Brass Diya & Cotton Quilt"
  }
];

export const PHOTO_ARTWORKS = {
  polCourtyard: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%233a7bd5"/><stop offset="100%" stopColor="%238fbdf4"/></linearGradient>
      <linearGradient id="wallBeige" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="%23e8dec8"/><stop offset="100%" stopColor="%23c2b294"/></linearGradient>
      <linearGradient id="woodTeak" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%2368482f"/><stop offset="100%" stopColor="%23432b1a"/></linearGradient>
      <linearGradient id="corrugated" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="%23555e69"/><stop offset="25%" stopColor="%23828d9b"/><stop offset="50%" stopColor="%23555e69"/><stop offset="75%" stopColor="%23828d9b"/><stop offset="100%" stopColor="%23555e69"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="%232d261e"/>
    <polygon points="260,0 540,0 460,240 220,240" fill="url(%23skyGrad)"/>
    <path d="M280,40 Q320,25 360,45 Q400,30 440,40 Q420,60 380,55 Z" fill="%23ffffff" opacity="0.8"/>
    <rect x="0" y="0" width="280" height="600" fill="url(%23wallBeige)"/>
    <rect x="20" y="50" width="60" height="110" rx="30" fill="%23d6cbb1" stroke="%238b7355" stroke-width="3"/>
    <rect x="100" y="50" width="70" height="120" rx="35" fill="%23d6cbb1" stroke="%238b7355" stroke-width="4"/>
    <rect x="190" y="70" width="50" height="90" rx="25" fill="%23d6cbb1" stroke="%238b7355" stroke-width="3"/>
    <line x1="20" y1="100" x2="80" y2="100" stroke="%238b7355" stroke-width="2"/>
    <line x1="100" y1="110" x2="170" y2="110" stroke="%238b7355" stroke-width="2"/>
    <line x1="135" y1="50" x2="135" y2="170" stroke="%238b7355" stroke-width="2"/>
    <rect x="0" y="240" width="280" height="24" fill="url(%23woodTeak)"/>
    <polygon points="120,264 150,264 120,330" fill="url(%23woodTeak)"/>
    <polygon points="210,264 240,264 210,330" fill="url(%23woodTeak)"/>
    <rect x="115" y="320" width="30" height="260" fill="url(%23woodTeak)"/>
    <rect x="105" y="310" width="50" height="18" fill="%23b88b4a"/>
    <rect x="100" y="560" width="60" height="30" fill="%238b7355"/>
    <polygon points="400,0 800,0 800,600 360,600" fill="%23d3c7ad"/>
    <polygon points="340,60 760,0 800,40 370,120" fill="url(%23corrugated)"/>
    <g fill="%23eeddbb" stroke="%235c3c1e" stroke-width="2.5">
      <rect x="420" y="140" width="40" height="80"/><rect x="465" y="130" width="40" height="80"/>
      <rect x="510" y="120" width="40" height="80"/><rect x="555" y="110" width="40" height="80"/>
      <rect x="600" y="100" width="40" height="80"/><rect x="645" y="90" width="40" height="80"/>
    </g>
    <polygon points="0,520 800,480 800,600 0,600" fill="%2343362a"/>
    <circle cx="280" cy="540" r="18" fill="%231a1a1a"/>
    <circle cx="330" cy="540" r="18" fill="%231a1a1a"/>
    <path d="M270,525 Q300,500 340,525 Z" fill="%234a708b"/>
    <rect x="0" y="460" width="800" height="140" fill="%23000000" opacity="0.45"/>
    <text x="40" y="575" fill="%23f5eedc" font-family="serif" font-size="20" font-weight="bold">Ahmedabad Vernacular Pol Courtyard (Chowk)</text>
  </svg>`,

  chulhaHearth: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <radialGradient id="fireGlow" cx="50%" cy="60%" r="50%"><stop offset="0%" stopColor="%23ffeedd"/><stop offset="30%" stopColor="%23ff9900"/><stop offset="70%" stopColor="%23cc3300"/><stop offset="100%" stopColor="%231a0800"/></radialGradient>
      <linearGradient id="clayPot" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="%23c4572c"/><stop offset="50%" stopColor="%23e37142"/><stop offset="100%" stopColor="%23782e12"/></linearGradient>
      <linearGradient id="darkClay" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="%232b2520"/><stop offset="50%" stopColor="%23453b32"/><stop offset="100%" stopColor="%231c1713"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="%23120d09"/>
    <rect x="0" y="0" width="800" height="300" fill="%23211b15"/>
    <circle cx="180" cy="140" r="110" fill="url(%23darkClay)"/>
    <ellipse cx="640" cy="120" rx="90" ry="80" fill="%23716a62"/>
    <ellipse cx="640" cy="180" rx="120" ry="70" fill="url(%23darkClay)"/>
    <path d="M80,340 Q250,290 400,340 Q550,290 720,340 L720,600 L80,600 Z" fill="%238a7c6a"/>
    <path d="M140,560 C140,430 180,380 250,380 C320,380 350,430 350,560 Z" fill="%23120401"/>
    <path d="M480,560 C480,410 520,360 610,360 C690,360 720,410 720,560 Z" fill="%23120401"/>
    <ellipse cx="610" cy="510" rx="90" ry="70" fill="url(%23fireGlow)"/>
    <polygon points="560,540 600,410 630,490 660,390 680,540" fill="%23ffbb00"/>
    <polygon points="580,530 610,430 630,500 645,420 660,530" fill="%23ffffff" opacity="0.8"/>
    <polygon points="550,580 610,480 640,490 580,600" fill="%23382718"/>
    <polygon points="620,590 640,470 665,480 650,600" fill="%2324180d"/>
    <ellipse cx="250" cy="520" rx="80" ry="60" fill="url(%23fireGlow)"/>
    <polygon points="210,540 240,450 260,510 280,440 300,540" fill="%23ff9900"/>
    <ellipse cx="240" cy="330" rx="110" ry="85" fill="url(%23clayPot)"/>
    <ellipse cx="240" cy="255" rx="65" ry="20" fill="%23421d0d"/>
    <ellipse cx="610" cy="270" rx="125" ry="100" fill="url(%23clayPot)"/>
    <ellipse cx="610" cy="180" rx="80" ry="22" fill="%235c240d"/>
    <path d="M500,240 Q610,270 720,240" stroke="%23ffc299" stroke-width="5" fill="none"/>
    <text x="50" y="575" fill="%23ffffff" font-family="serif" font-size="20" font-weight="bold">Mud Chulha with Terracotta Cooking Pots</text>
  </svg>`,

  pitLoom: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="%23baa284"/>
    <rect x="0" y="0" width="800" height="340" fill="%239c8365"/>
    <ellipse cx="440" cy="480" rx="180" ry="90" fill="%233d2e1f"/>
    <line x1="160" y1="120" x2="220" y2="520" stroke="%235a3d24" stroke-width="26" stroke-linecap="round"/>
    <line x1="680" y1="80" x2="720" y2="480" stroke="%235a3d24" stroke-width="24" stroke-linecap="round"/>
    <line x1="140" y1="150" x2="700" y2="110" stroke="%236b482b" stroke-width="22"/>
    <polygon points="260,400 480,180 570,220 370,440" fill="%23f2f0ea" opacity="0.85"/>
    <g stroke="%23e8e2d3" stroke-width="1.5">
      <line x1="280" y1="410" x2="500" y2="190"/>
      <line x1="300" y1="420" x2="520" y2="200"/>
      <line x1="320" y1="430" x2="540" y2="210"/>
      <line x1="340" y1="440" x2="560" y2="220"/>
    </g>
    <line x1="420" y1="130" x2="420" y2="280" stroke="%233a2514" stroke-width="2"/>
    <line x1="460" y1="128" x2="460" y2="275" stroke="%233a2514" stroke-width="2"/>
    <rect x="360" y="270" width="120" height="24" fill="%235c3c1e" rx="4"/>
    <ellipse cx="380" cy="240" rx="38" ry="42" fill="%238a5a3a"/>
    <circle cx="365" cy="220" r="28" fill="%23221c16"/>
    <path d="M320,290 Q410,270 420,380 Q350,440 280,380 Z" fill="%234d5830"/>
    <path d="M310,320 Q370,300 400,380" stroke="%23c44b31" stroke-width="12" fill="none"/>
    <line x1="370" y1="330" x2="440" y2="340" stroke="%238a5a3a" stroke-width="14" stroke-linecap="round"/>
    <text x="40" y="575" fill="%23ffffff" font-family="serif" font-size="20" font-weight="bold">Artisan Operating Domestic Pit Loom</text>
  </svg>`,

  camelCart: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="desertSky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%232979ff"/><stop offset="100%" stopColor="%2380d8ff"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="%23c2b294"/>
    <rect x="0" y="0" width="800" height="250" fill="url(%23desertSky)"/>
    <rect x="120" y="30" width="680" height="420" fill="%23e8dec8"/>
    <g fill="%23544637" opacity="0.8">
      <rect x="220" y="60" width="35" height="70" rx="10"/><rect x="280" y="60" width="35" height="70" rx="10"/>
      <rect x="340" y="60" width="35" height="70" rx="10"/><rect x="400" y="60" width="35" height="70" rx="10"/>
      <rect x="460" y="60" width="35" height="70" rx="10"/><rect x="520" y="60" width="35" height="70" rx="10"/>
      <rect x="580" y="60" width="35" height="70" rx="10"/><rect x="640" y="60" width="35" height="70" rx="10"/>
      <rect x="220" y="160" width="35" height="80"/><rect x="280" y="160" width="35" height="80"/>
      <rect x="340" y="160" width="35" height="80"/><rect x="400" y="160" width="35" height="80"/>
      <rect x="460" y="160" width="35" height="80"/><rect x="520" y="160" width="35" height="80"/>
      <rect x="580" y="160" width="35" height="80"/><rect x="640" y="160" width="35" height="80"/>
    </g>
    <rect x="0" y="440" width="800" height="160" fill="%233e3832"/>
    <rect x="10" y="400" width="220" height="35" fill="%23473121"/>
    <ellipse cx="120" cy="390" rx="100" ry="30" fill="%232b2119"/>
    <circle cx="50" cy="460" r="38" fill="%231a1a1a"/>
    <circle cx="50" cy="460" r="30" fill="%23705030"/>
    <circle cx="180" cy="460" r="38" fill="%231a1a1a"/>
    <circle cx="180" cy="460" r="30" fill="%23705030"/>
    <path d="M230,420 L350,420 Q440,360 480,410 Q500,320 530,260 Q560,260 550,290 Q510,380 520,440 L530,550 L500,550 L480,470 L430,470 L420,550 L390,550 L410,440 Z" fill="%23b8895b"/>
    <line x1="220" y1="410" x2="440" y2="400" stroke="%23332014" stroke-width="8"/>
    <ellipse cx="730" cy="480" rx="40" ry="20" fill="%230f141a"/>
    <circle cx="680" cy="510" r="24" fill="%23111111"/>
    <circle cx="780" cy="510" r="24" fill="%23111111"/>
    <circle cx="700" cy="430" r="14" fill="%23c46231"/>
    <text x="30" y="575" fill="%23ffffff" font-family="serif" font-size="20" font-weight="bold">Camel Cart &amp; Haveli Street Scene</text>
  </svg>`,

  otlaGathering: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="%231a1a1a"/>
    <rect x="20" y="0" width="140" height="600" fill="%232b2b2b"/>
    <line x1="40" y1="0" x2="40" y2="600" stroke="%23444" stroke-width="4"/>
    <line x1="70" y1="0" x2="70" y2="600" stroke="%23444" stroke-width="4"/>
    <line x1="100" y1="0" x2="100" y2="600" stroke="%23444" stroke-width="4"/>
    <line x1="130" y1="0" x2="130" y2="600" stroke="%23444" stroke-width="4"/>
    <rect x="660" y="0" width="140" height="600" fill="%23222222"/>
    <rect x="630" y="320" width="170" height="140" fill="%23383838" rx="8"/>
    <rect x="120" y="320" width="560" height="240" fill="%233a3a3a"/>
    <rect x="110" y="305" width="580" height="25" fill="%23555555"/>
    <rect x="110" y="520" width="580" height="40" fill="%23252525"/>
    <polygon points="380,0 520,0 520,320 280,320" fill="%23888888" opacity="0.35"/>
    <circle cx="340" cy="210" r="28" fill="%23111111"/>
    <path d="M280,260 Q340,230 400,280 L390,440 L280,440 Z" fill="%235e5e5e"/>
    <path d="M280,380 L230,420 L270,520 L320,500 Z" fill="%23484848"/>
    <circle cx="430" cy="225" r="26" fill="%23dedede"/>
    <path d="M410,260 Q460,250 480,340 L450,440 L390,420 Z" fill="%23e8e8e8"/>
    <text x="40" y="575" fill="%23e0e0e0" font-family="serif" font-size="20" font-weight="bold">Evening Otla Gathering on Raised Veranda (B&amp;W)</text>
  </svg>`,

  smartMetropolis: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%232b5876"/><stop offset="50%" stopColor="%23e88b4d"/><stop offset="100%" stopColor="%23ffd194"/></linearGradient>
      <linearGradient id="metroTrain" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="%23dce8f2"/><stop offset="40%" stopColor="%230277bd"/><stop offset="100%" stopColor="%23f5f5f5"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(%23sunsetSky)"/>
    <rect x="580" y="120" width="60" height="280" fill="%237e8c99" opacity="0.6"/>
    <rect x="660" y="80" width="80" height="320" fill="%23687785" opacity="0.7"/>
    <rect x="750" y="160" width="40" height="240" fill="%23536270" opacity="0.5"/>
    <rect x="0" y="240" width="800" height="24" fill="%23cfd8dc"/>
    <rect x="180" y="264" width="40" height="150" fill="%23b0bec5"/>
    <rect x="420" y="264" width="45" height="150" fill="%23b0bec5"/>
    <rect x="680" y="264" width="45" height="150" fill="%23b0bec5"/>
    <path d="M40,160 Q140,140 240,140 L520,140 Q540,140 560,180 L540,240 L40,240 Z" fill="url(%23metroTrain)"/>
    <rect x="70" y="170" width="60" height="35" rx="5" fill="%231a237e"/>
    <rect x="150" y="170" width="70" height="35" rx="5" fill="%231a237e"/>
    <rect x="240" y="170" width="70" height="35" rx="5" fill="%231a237e"/>
    <rect x="330" y="170" width="70" height="35" rx="5" fill="%231a237e"/>
    <path d="M440,240 Q530,130 640,240 Z" fill="%2337474f" opacity="0.85"/>
    <rect x="440" y="300" width="160" height="60" rx="6" fill="%231b5e20" stroke="%23ffffff" stroke-width="3"/>
    <text x="460" y="338" fill="%23ffffff" font-family="sans-serif" font-size="18" font-weight="bold">↑ Ring Road ↑</text>
    <polygon points="0,420 800,420 800,600 0,600" fill="%2337474f"/>
    <rect x="420" y="470" width="180" height="70" rx="20" fill="%23ffffff"/>
    <polygon points="450,470 480,440 550,440 575,470" fill="%23263238"/>
    <circle cx="460" cy="540" r="20" fill="%23212121"/>
    <circle cx="560" cy="540" r="20" fill="%23212121"/>
    <rect x="490" y="525" width="40" height="12" fill="%2300c853"/>
    <circle cx="140" cy="540" r="26" fill="%23212121"/>
    <rect x="110" y="460" width="50" height="60" rx="10" fill="%23ffffff"/>
    <circle cx="135" cy="420" r="16" fill="%2337474f"/>
    <text x="30" y="575" fill="%23ffffff" font-family="sans-serif" font-size="20" font-weight="bold">Golden-Hour Smart Mobility Metropolis (2026)</text>
  </svg>`,

  digitalLife: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <radialGradient id="neonBlue" cx="40%" cy="30%" r="60%"><stop offset="0%" stopColor="%2300e5ff"/><stop offset="100%" stopColor="%23002244"/></radialGradient>
      <linearGradient id="warmStall" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%23ff9100"/><stop offset="100%" stopColor="%233e2723"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="%230a1118"/>
    <rect x="340" y="60" width="80" height="280" fill="%231a2936"/>
    <rect x="440" y="40" width="90" height="300" fill="%2316222d"/>
    <rect x="550" y="80" width="80" height="260" fill="%23131c24"/>
    <rect x="540" y="240" width="260" height="150" fill="%231e3345" stroke="%2300b0ff" stroke-width="2"/>
    <text x="560" y="275" fill="%23ffffff" font-family="sans-serif" font-size="14" font-weight="bold">Digital Citizen Services</text>
    <rect x="0" y="220" width="240" height="380" fill="url(%23warmStall)"/>
    <text x="40" y="255" fill="%23ffd54f" font-family="serif" font-size="22" font-weight="bold">INDIA CHAI</text>
    <rect x="220" y="80" width="90" height="120" rx="8" fill="url(%23neonBlue)" stroke="%2300e5ff" stroke-width="3"/>
    <text x="226" y="110" fill="%23ffffff" font-family="sans-serif" font-size="10" font-weight="bold">High-Speed</text>
    <text x="226" y="125" fill="%23ffffff" font-family="sans-serif" font-size="10" font-weight="bold">Fiber Wi-Fi</text>
    <circle cx="265" cy="155" r="14" fill="none" stroke="%23ffffff" stroke-width="3"/>
    <circle cx="265" cy="155" r="8" fill="none" stroke="%23ffffff" stroke-width="3"/>
    <circle cx="265" cy="155" r="3" fill="%23ffffff"/>
    <rect x="30" y="420" width="100" height="130" rx="6" fill="%23ffffff" stroke="%23004d40" stroke-width="4"/>
    <rect x="45" y="435" width="70" height="25" fill="%2300b0ff" rx="4"/>
    <text x="55" y="452" fill="%23ffffff" font-family="sans-serif" font-size="14" font-weight="bold">UPI</text>
    <rect x="52" y="470" width="56" height="56" fill="%23000000"/>
    <rect x="58" y="476" width="16" height="16" fill="%23ffffff"/>
    <rect x="86" y="476" width="16" height="16" fill="%23ffffff"/>
    <rect x="58" y="504" width="16" height="16" fill="%23ffffff"/>
    <ellipse cx="210" cy="460" rx="28" ry="32" fill="%23795548"/>
    <rect x="170" y="480" width="35" height="65" rx="6" fill="%231a237e" stroke="%2300e5ff" stroke-width="2"/>
    <rect x="420" y="410" width="170" height="110" rx="6" fill="%23212121" stroke="%2390a4ae" stroke-width="3"/>
    <rect x="430" y="420" width="150" height="90" fill="%23e0f2f1"/>
    <circle cx="480" cy="465" r="18" fill="%238d6e63"/>
    <circle cx="530" cy="465" r="18" fill="%23a1887f"/>
    <rect x="660" y="340" width="125" height="240" rx="18" fill="%23ffffff" stroke="%23263238" stroke-width="6"/>
    <rect x="680" y="355" width="85" height="22" rx="4" fill="%23f57c00"/>
    <text x="695" y="370" fill="%23ffffff" font-family="sans-serif" font-size="10" font-weight="bold">UMANG</text>
    <g fill="%2300897b"><rect x="675" y="390" width="40" height="35" rx="6"/><rect x="730" y="390" width="40" height="35" rx="6"/><rect x="675" y="435" width="40" height="35" rx="6"/><rect x="730" y="435" width="40" height="35" rx="6"/></g>
    <text x="30" y="575" fill="%23ffffff" font-family="sans-serif" font-size="20" font-weight="bold">Connected Digital Citizen Life (2026)</text>
  </svg>`,

  modernApartment: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="skyBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="%231e3c72"/><stop offset="100%" stopColor="%232a5298"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(%23skyBlueGrad)"/>
    <rect x="180" y="40" width="440" height="560" fill="%23f5f5f5" rx="6"/>
    <g fill="%23263238" stroke="%2390a4ae" stroke-width="2">
      <rect x="220" y="80" width="90" height="60" rx="3"/><rect x="350" y="80" width="90" height="60" rx="3"/><rect x="480" y="80" width="90" height="60" rx="3"/>
      <rect x="220" y="170" width="90" height="60" rx="3"/><rect x="350" y="170" width="90" height="60" rx="3"/><rect x="480" y="170" width="90" height="60" rx="3"/>
      <rect x="220" y="260" width="90" height="60" rx="3"/><rect x="350" y="260" width="90" height="60" rx="3"/><rect x="480" y="260" width="90" height="60" rx="3"/>
      <rect x="220" y="350" width="90" height="60" rx="3"/><rect x="350" y="350" width="90" height="60" rx="3"/><rect x="480" y="350" width="90" height="60" rx="3"/>
      <rect x="220" y="440" width="90" height="60" rx="3"/><rect x="350" y="440" width="90" height="60" rx="3"/><rect x="480" y="440" width="90" height="60" rx="3"/>
    </g>
    <g fill="%2381d4fa" opacity="0.6">
      <rect x="220" y="120" width="90" height="20"/><rect x="350" y="120" width="90" height="20"/><rect x="480" y="120" width="90" height="20"/>
      <rect x="220" y="210" width="90" height="20"/><rect x="350" y="210" width="90" height="20"/><rect x="480" y="210" width="90" height="20"/>
      <rect x="220" y="300" width="90" height="20"/><rect x="350" y="300" width="90" height="20"/><rect x="480" y="300" width="90" height="20"/>
      <rect x="220" y="390" width="90" height="20"/><rect x="350" y="390" width="90" height="20"/><rect x="480" y="390" width="90" height="20"/>
    </g>
    <rect x="200" y="24" width="80" height="16" fill="%231565c0"/>
    <rect x="520" y="16" width="60" height="24" rx="4" fill="%23212121"/>
    <text x="40" y="575" fill="%23ffffff" font-family="sans-serif" font-size="20" font-weight="bold">Modern Multi-Story Residential Apartment (2026)</text>
  </svg>`,

  modularKitchen: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="countertop" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="%232c3e50"/><stop offset="100%" stopColor="%231a252f"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="%23eceff1"/>
    <rect x="80" y="40" width="640" height="150" fill="%2337474f" rx="6"/>
    <line x1="240" y1="40" x2="240" y2="190" stroke="%23cfd8dc" stroke-width="2"/>
    <line x1="400" y1="40" x2="400" y2="190" stroke="%23cfd8dc" stroke-width="2"/>
    <line x1="560" y1="40" x2="560" y2="190" stroke="%23cfd8dc" stroke-width="2"/>
    <rect x="80" y="190" width="640" height="160" fill="%23ffffff"/>
    <g stroke="%23e0e0e0" stroke-width="1.5">
      <line x1="80" y1="230" x2="720" y2="230"/><line x1="80" y1="270" x2="720" y2="270"/><line x1="80" y1="310" x2="720" y2="310"/>
    </g>
    <rect x="60" y="350" width="680" height="30" fill="url(%23countertop)" rx="4"/>
    <rect x="160" y="344" width="180" height="12" fill="%23111111" rx="2"/>
    <circle cx="210" cy="350" r="14" fill="none" stroke="%23e53935" stroke-width="3"/>
    <circle cx="280" cy="350" r="14" fill="none" stroke="%23e53935" stroke-width="3"/>
    <rect x="540" y="120" width="180" height="480" fill="%23b0bec5" rx="8" stroke="%2378909c" stroke-width="3"/>
    <line x1="540" y1="320" x2="720" y2="320" stroke="%2378909c" stroke-width="3"/>
    <rect x="560" y="240" width="8" height="60" rx="3" fill="%2337474f"/>
    <rect x="560" y="340" width="8" height="60" rx="3" fill="%2337474f"/>
    <rect x="80" y="380" width="440" height="220" fill="%23455a64" rx="4"/>
    <rect x="120" y="420" width="140" height="6" rx="3" fill="%23eceff1"/>
    <rect x="120" y="500" width="140" height="6" rx="3" fill="%23eceff1"/>
    <rect x="340" y="420" width="140" height="6" rx="3" fill="%23eceff1"/>
    <rect x="340" y="500" width="140" height="6" rx="3" fill="%23eceff1"/>
    <text x="40" y="575" fill="%23263238" font-family="sans-serif" font-size="20" font-weight="bold">Contemporary Modular Kitchen with Piped Gas (2026)</text>
  </svg>`,

  modernApparel: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="%231a202c"/>
    <rect x="80" y="40" width="640" height="520" fill="%232d3748" rx="12"/>
    <rect x="140" y="120" width="140" height="200" rx="12" fill="%232b6cb0"/>
    <path d="M140,120 L210,160 L280,120 L260,100 L210,120 L160,100 Z" fill="%231a365d"/>
    <text x="175" y="220" fill="%23ebf8ff" font-family="sans-serif" font-size="14" font-weight="bold">Cotton Denim</text>
    <rect x="330" y="120" width="140" height="200" rx="12" fill="%2338a169"/>
    <path d="M330,120 L400,160 L470,120 L450,100 L400,120 L350,100 Z" fill="%2322543d"/>
    <text x="355" y="220" fill="%23f0fff4" font-family="sans-serif" font-size="14" font-weight="bold">Activewear</text>
    <rect x="520" y="120" width="140" height="200" rx="12" fill="%23d69e2e"/>
    <path d="M520,120 L590,160 L660,120 L640,100 L590,120 L540,100 Z" fill="%23744210"/>
    <text x="540" y="220" fill="%23fffff0" font-family="sans-serif" font-size="14" font-weight="bold">Handloom Fusion</text>
    <line x1="100" y1="80" x2="700" y2="80" stroke="%23cbd5e0" stroke-width="8" stroke-linecap="round"/>
    <text x="40" y="575" fill="%23ffffff" font-family="sans-serif" font-size="20" font-weight="bold">Everyday Modern Attire &amp; Sustainable Blends (2026)</text>
  </svg>`
};

export const EVOLUTION_VISUALS = {
  home: {
    title: "Homes & Architecture",
    past: {
      period: "1800 CE — Traditional Pol Courtyard",
      fileName: "1a.jpg",
      image: "/images/1a.jpg",
      artworkFallback: PHOTO_ARTWORKS.polCourtyard,
      caption: "Timber-framed vernacular Pol townhouses built with teakwood columns, open central light-wells (chowk), and deep underground rainwater tanks (tankas) that kept rooms naturally cool.",
      features: ["Carved Teakwood Brackets", "Cool Underground Rainwater Tanka", "Open Central Courtyard Chowk"]
    },
    present: {
      period: "2026 CE — Modern High-Rise Apartment",
      fileName: "1b.jpg",
      image: "/images/1b.jpg",
      artworkFallback: PHOTO_ARTWORKS.modernApartment,
      caption: "Reinforced concrete multi-story residential towers fitted with split air-conditioning, elevators, modular balconies, and piped utility lines.",
      features: ["Energy-Efficient Split ACs", "Overhead Polyethylene Tanks", "Gated Security & Elevators"]
    }
  },
  food: {
    title: "Kitchens & Water",
    past: {
      period: "1800 CE — Mud Chulha Hearth & Clay Matka",
      fileName: "2a.jpg",
      image: "/images/2a.jpg",
      artworkFallback: PHOTO_ARTWORKS.chulhaHearth,
      caption: "Meals cooked over clay hearths fueled by dried babool twigs; fresh drinking water chilled naturally without electricity in porous terracotta pots on the Paniara.",
      features: ["Clay Mud Firewood Hearth", "Porous Terracotta Water Cooling", "Handmade Bell-Metal Utensils"]
    },
    present: {
      period: "2026 CE — Modular Kitchen & Cold Storage",
      fileName: "2b.jpg",
      image: "/images/2b.jpg",
      artworkFallback: PHOTO_ARTWORKS.modularKitchen,
      caption: "Contemporary modular kitchen with piped natural gas (PNG), induction stoves, multi-door frost-free refrigerators, and RO water purification.",
      features: ["Piped Clean Natural Gas (PNG)", "Multi-Stage RO Water Purifier", "Frost-Free Smart Refrigerator"]
    }
  },
  clothing: {
    title: "Textiles & Clothing",
    past: {
      period: "1800 CE — Handspun Khadi & Domestic Pit-Looms",
      fileName: "3a.jpg",
      image: "/images/3a.jpg",
      artworkFallback: PHOTO_ARTWORKS.pitLoom,
      caption: "Pure hand-spun indigenous tree cotton, woven on domestic pit-looms and colored with natural plant dyes from madder roots, turmeric, and fermented indigo leaves.",
      features: ["Charkha Handspun Cotton", "Domestic Pit-Loom Weaving", "Naturally Breathable Drapes"]
    },
    present: {
      period: "2026 CE — Modern Apparel & Mixed Blends",
      fileName: "3b.jpg",
      image: "/images/3b.jpg",
      artworkFallback: PHOTO_ARTWORKS.modernApparel,
      caption: "Comfortable everyday attire combining denim jeans, cotton-poly blend shirts, breathable sportswear, and ethically produced modern handloom fabrics.",
      features: ["Durable Stretch Denim", "Breathable Cotton-Poly Blends", "Machine Washable Everyday Wear"]
    }
  },
  transport: {
    title: "Streets & Travel",
    past: {
      period: "1800 CE — Bullock & Camel Carts in Vernacular Streets",
      fileName: "4a.jpg",
      image: "/images/4a.jpg",
      artworkFallback: PHOTO_ARTWORKS.camelCart,
      caption: "Handcrafted wooden carts with sturdy iron rims, pack camels, and narrow, shaded walking alleys designed to stay cool in scorching summer afternoons.",
      features: ["Iron-Rimmed Wooden Carts", "Shaded Pedestrian Lanes", "Zero Carbon Footprint"]
    },
    present: {
      period: "2026 CE — Smart Mobility & Clean Rapid Transit",
      fileName: "4b.png",
      image: "/images/4b.png",
      artworkFallback: PHOTO_ARTWORKS.smartMetropolis,
      caption: "Air-conditioned elevated metro rail trains, electric two-wheelers, wide ring roads, and fast app-hailed electric cab networks.",
      features: ["Air-Conditioned Metro Rail", "Electric 2-Wheelers & EVs", "Real-Time App Navigation"]
    }
  },
  communication: {
    title: "Information & Social Ties",
    past: {
      period: "1800 CE — Courtyard Otla Gatherings & Veranda Talks",
      fileName: "5a.jpg",
      image: "/images/5a.jpg",
      artworkFallback: PHOTO_ARTWORKS.otlaGathering,
      caption: "Daily evening gatherings on front house verandas (otlas), conversations at the community well, village messengers, and handwritten family accounts.",
      features: ["Face-to-Face Veranda Talks", "Community Well Gatherings", "Handwritten Paper Letters"]
    },
    present: {
      period: "2026 CE — High-Speed Fiber & Digital Citizen Life",
      fileName: "5b.png",
      image: "/images/5b.png",
      artworkFallback: PHOTO_ARTWORKS.digitalLife,
      caption: "High-speed optical fiber internet, instant UPI barcode payments for everyday tea stalls, video calls with distant family, and digital citizen services.",
      features: ["Instant QR-Code UPI Payments", "High-Definition Video Calling", "5G Cloud Connectivity"]
    }
  }
};

export const ACADEMIC_SOURCES = [
  {
    id: 1,
    title: "Architecture of the Pols of Ahmedabad: Form, Space and Community",
    author: "Kulbhushan Jain & Minakshi Jain",
    institution: "CEPT University Press, Ahmedabad",
    year: "2007",
    category: "ARCHITECTURAL STUDY",
    focus: "Measured architectural drawings of traditional timber beams, underground tanka rainwater cisterns, and community courtyard gate plans."
  },
  {
    id: 2,
    title: "Gazetteer of the Bombay Presidency: Ahmedabad and Saurashtra (Vol. IV)",
    author: "James M. Campbell (Compiler)",
    institution: "Government Central Press, Bombay",
    year: "1879",
    category: "HISTORICAL GAZETTEER",
    focus: "Detailed occupational surveys, daily food habits, grain consumption, wages, and craft guild (Mahajan) organizational records."
  },
  {
    id: 3,
    title: "Urbanization and Social Change in Gujarat",
    author: "Prof. Makrand Mehta",
    institution: "Gujarat University Heritage Series",
    year: "1982",
    category: "SOCIAL HISTORY",
    focus: "The transition from traditional home workshops to early steam-driven cotton textile mills and the rise of urban working-class neighborhoods."
  },
  {
    id: 4,
    title: "The Earthen Drum: Material Culture and Traditional Craft Traditions",
    author: "Pupul Jayakar",
    institution: "National Institute of Design & Crafts Council",
    year: "1980",
    category: "CRAFT & MATERIAL CULTURE",
    focus: "Everyday terracotta utensils, chulha hearth forms, natural vegetable dyeing, and rural domestic tool making."
  },
  {
    id: 5,
    title: "The Archaeology and Material Heritage of Western India",
    author: "Dr. H.D. Sankalia",
    institution: "Deccan College Postgraduate & Research Institute",
    year: "1977",
    category: "ARCHAEOLOGY & TOOL HERITAGE",
    focus: "Excavated domestic implements, water storage pottery, and traditional metal alloys from Gujarat and Saurashtra settlements."
  }
];

function useAmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  const startSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(380, ctx.currentTime);
      bandpass.Q.setValueAtTime(3.0, ctx.currentTime);

      whiteNoise.connect(bandpass);
      bandpass.connect(masterGain);
      whiteNoise.start();

      intervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = audioCtxRef.current.currentTime;
        const osc = audioCtxRef.current.createOscillator();
        const bellGain = audioCtxRef.current.createGain();
        const freqs = [587.33, 659.25, 880.0, 1046.5];
        const pickFreq = freqs[Math.floor(Math.random() * freqs.length)];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(pickFreq, now);

        bellGain.gain.setValueAtTime(0.001, now);
        bellGain.gain.exponentialRampToValueAtTime(0.025, now + 0.05);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

        osc.connect(bellGain);
        bellGain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 3.2);
      }, 5000);

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  }, []);

  const stopSound = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const toggleSound = useCallback(() => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  }, [isPlaying, startSound, stopSound]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return { isPlaying, toggleSound };
}

function createHistoricalMesh(modelType, isWireframe = false) {
  const group = new THREE.Group();

  const matClay = new THREE.MeshStandardMaterial({
    color: 0xB5653C,
    roughness: 0.85,
    metalness: 0.05,
    wireframe: isWireframe
  });

  const matClayDark = new THREE.MeshStandardMaterial({
    color: 0x8A4322,
    roughness: 0.9,
    metalness: 0.02,
    wireframe: isWireframe
  });

  const matTeak = new THREE.MeshStandardMaterial({
    color: 0x5C381E,
    roughness: 0.75,
    metalness: 0.08,
    wireframe: isWireframe
  });

  const matCoirRope = new THREE.MeshStandardMaterial({
    color: 0xC8A26A,
    roughness: 0.95,
    metalness: 0.0,
    wireframe: isWireframe
  });

  const matBrassGold = new THREE.MeshStandardMaterial({
    color: 0xE2B84D,
    roughness: 0.28,
    metalness: 0.85,
    wireframe: isWireframe
  });

  const matBronzeKansa = new THREE.MeshStandardMaterial({
    color: 0xBA9355,
    roughness: 0.32,
    metalness: 0.8,
    wireframe: isWireframe
  });

  const matWroughtIron = new THREE.MeshStandardMaterial({
    color: 0x2A272A,
    roughness: 0.65,
    metalness: 0.8,
    wireframe: isWireframe
  });

  if (modelType === 'matka') {
    const bodyGeo = new THREE.SphereGeometry(0.72, 36, 28);
    bodyGeo.scale(1, 1.15, 1);
    const body = new THREE.Mesh(bodyGeo, matClay);
    group.add(body);

    const neckGeo = new THREE.CylinderGeometry(0.35, 0.46, 0.32, 36);
    const neck = new THREE.Mesh(neckGeo, matClay);
    neck.position.y = 0.82;
    group.add(neck);

    const rimGeo = new THREE.TorusGeometry(0.38, 0.065, 16, 36);
    rimGeo.rotateX(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, matClayDark);
    rim.position.y = 0.98;
    group.add(rim);

    const bandGeo = new THREE.TorusGeometry(0.725, 0.02, 16, 36);
    bandGeo.rotateX(Math.PI / 2);
    const band = new THREE.Mesh(bandGeo, matClayDark);
    band.position.y = 0.25;
    group.add(band);

  } else if (modelType === 'charpai') {
    const legGeo = new THREE.CylinderGeometry(0.06, 0.045, 0.5, 16);
    const legPositions = [
      [-0.8, -0.25, -0.45],
      [0.8, -0.25, -0.45],
      [-0.8, -0.25, 0.45],
      [0.8, -0.25, 0.45]
    ];
    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, matTeak);
      leg.position.set(pos[0], pos[1], pos[2]);
      group.add(leg);
    });

    const sideLongGeo = new THREE.BoxGeometry(1.68, 0.08, 0.07);
    const side1 = new THREE.Mesh(sideLongGeo, matTeak);
    side1.position.set(0, 0.0, -0.45);
    const side2 = new THREE.Mesh(sideLongGeo, matTeak);
    side2.position.set(0, 0.0, 0.45);
    group.add(side1);
    group.add(side2);

    const sideShortGeo = new THREE.BoxGeometry(0.07, 0.08, 0.94);
    const end1 = new THREE.Mesh(sideShortGeo, matTeak);
    end1.position.set(-0.8, 0.0, 0);
    const end2 = new THREE.Mesh(sideShortGeo, matTeak);
    end2.position.set(0.8, 0.0, 0);
    group.add(end1);
    group.add(end2);

    const bedGeo = new THREE.BoxGeometry(1.56, 0.025, 0.84);
    const bed = new THREE.Mesh(bedGeo, matCoirRope);
    bed.position.y = 0.01;
    group.add(bed);

  } else if (modelType === 'diya') {
    const baseGeo = new THREE.CylinderGeometry(0.48, 0.54, 0.12, 32);
    const base = new THREE.Mesh(baseGeo, matBrassGold);
    base.position.y = -0.55;
    group.add(base);

    const stemGeo = new THREE.CylinderGeometry(0.08, 0.16, 0.75, 24);
    const stem = new THREE.Mesh(stemGeo, matBrassGold);
    stem.position.y = -0.15;
    group.add(stem);

    const bowlGeo = new THREE.CylinderGeometry(0.62, 0.35, 0.18, 32);
    const bowl = new THREE.Mesh(bowlGeo, matBrassGold);
    bowl.position.y = 0.3;
    group.add(bowl);

    const flameGeo = new THREE.ConeGeometry(0.09, 0.28, 16);
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xFFB347,
      emissive: 0xFF7A00,
      emissiveIntensity: 1.8,
      wireframe: isWireframe
    });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.y = 0.52;
    group.add(flame);

  } else if (modelType === 'kansa') {
    const plateGeo = new THREE.CylinderGeometry(0.88, 0.85, 0.04, 48);
    const plate = new THREE.Mesh(plateGeo, matBronzeKansa);
    group.add(plate);

    const rimGeo = new THREE.TorusGeometry(0.87, 0.035, 16, 48);
    rimGeo.rotateX(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, matBronzeKansa);
    rim.position.y = 0.02;
    group.add(rim);

    const bowlGeo = new THREE.CylinderGeometry(0.22, 0.15, 0.14, 24);
    const bowlPositions = [
      [-0.42, 0.08, -0.38],
      [0.0, 0.08, -0.52],
      [0.42, 0.08, -0.38]
    ];
    bowlPositions.forEach(bPos => {
      const katori = new THREE.Mesh(bowlGeo, matBronzeKansa);
      katori.position.set(bPos[0], bPos[1], bPos[2]);
      group.add(katori);
    });

  } else if (modelType === 'charkha') {
    const baseGeo = new THREE.BoxGeometry(1.65, 0.07, 0.42);
    const base = new THREE.Mesh(baseGeo, matTeak);
    base.position.y = -0.35;
    group.add(base);

    const postGeo = new THREE.BoxGeometry(0.06, 0.55, 0.06);
    const post1 = new THREE.Mesh(postGeo, matTeak);
    post1.position.set(-0.48, -0.05, -0.12);
    const post2 = new THREE.Mesh(postGeo, matTeak);
    post2.position.set(-0.48, -0.05, 0.12);
    group.add(post1);
    group.add(post2);

    const wheelRimGeo = new THREE.TorusGeometry(0.48, 0.025, 16, 36);
    const wheelRim = new THREE.Mesh(wheelRimGeo, matTeak);
    wheelRim.position.set(-0.48, 0.18, 0);
    group.add(wheelRim);

    for (let i = 0; i < 4; i++) {
      const spokeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.94, 8);
      const spoke = new THREE.Mesh(spokeGeo, matTeak);
      spoke.position.set(-0.48, 0.18, 0);
      spoke.rotation.z = (Math.PI / 4) * i;
      group.add(spoke);
    }

    const spindleGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.45, 8);
    spindleGeo.rotateZ(Math.PI / 2);
    const spindle = new THREE.Mesh(spindleGeo, matWroughtIron);
    spindle.position.set(0.55, -0.12, 0);
    group.add(spindle);

  } else if (modelType === 'wheel') {
    const hubGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.28, 24);
    hubGeo.rotateX(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeo, matTeak);
    group.add(hub);

    const capGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.32, 16);
    capGeo.rotateX(Math.PI / 2);
    const cap = new THREE.Mesh(capGeo, matWroughtIron);
    group.add(cap);

    const felloeGeo = new THREE.TorusGeometry(0.82, 0.07, 16, 36);
    const felloe = new THREE.Mesh(felloeGeo, matTeak);
    group.add(felloe);

    const tireGeo = new THREE.TorusGeometry(0.87, 0.022, 16, 36);
    const tire = new THREE.Mesh(tireGeo, matWroughtIron);
    group.add(tire);

    for (let i = 0; i < 10; i++) {
      const spokeGeo = new THREE.CylinderGeometry(0.032, 0.022, 0.72, 8);
      const spoke = new THREE.Mesh(spokeGeo, matTeak);
      const angle = (Math.PI * 2 / 10) * i;
      spoke.position.set(Math.cos(angle) * 0.46, Math.sin(angle) * 0.46, 0);
      spoke.rotation.z = angle - Math.PI / 2;
      group.add(spoke);
    }
  }

  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  group.position.x = -center.x;
  group.position.y = -center.y;
  group.position.z = -center.z;

  const wrapper = new THREE.Group();
  wrapper.add(group);
  return wrapper;
}

function ObjectInspectorCanvas({
  selectedObject,
  isWireframe,
  lightingPreset,
  isAutoRotate,
  zoomLevel
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const meshGroupRef = useRef(null);
  const lightsRef = useRef({});
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0.005 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.35, 3.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const pedestalGeo = new THREE.CylinderGeometry(1.3, 1.4, 0.08, 48);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x18151D,
      roughness: 0.85,
      metalness: 0.15
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.95;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    const ambientLight = new THREE.AmbientLight(0xFFF3E2, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFE2B0, 2.2);
    keyLight.position.set(3, 4, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xB4C6E7, 1.0);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xF4B251, 1.8);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    lightsRef.current = { ambientLight, keyLight, fillLight, rimLight };

    const meshWrapper = createHistoricalMesh(selectedObject.id, isWireframe);
    scene.add(meshWrapper);
    meshGroupRef.current = meshWrapper;

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (meshGroupRef.current) {
        if (isAutoRotate && !isDraggingRef.current) {
          meshGroupRef.current.rotation.y += 0.005;
        } else if (!isDraggingRef.current) {
          meshGroupRef.current.rotation.y += rotationVelocityRef.current.y;
          meshGroupRef.current.rotation.x += rotationVelocityRef.current.x;
          rotationVelocityRef.current.x *= 0.92;
          rotationVelocityRef.current.y *= 0.92;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      previousMousePositionRef.current = { x: clientX, y: clientY };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current || !meshGroupRef.current) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = clientX - previousMousePositionRef.current.x;
      const deltaY = clientY - previousMousePositionRef.current.y;

      meshGroupRef.current.rotation.y += deltaX * 0.008;
      meshGroupRef.current.rotation.x += deltaY * 0.008;

      rotationVelocityRef.current = { x: deltaY * 0.004, y: deltaX * 0.004 };
      previousMousePositionRef.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onPointerDown);
    domEl.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    domEl.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onPointerDown);
      domEl.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domEl.removeEventListener('touchstart', onPointerDown);
      domEl.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      renderer.dispose();
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [selectedObject.id]);

  useEffect(() => {
    if (!sceneRef.current || !meshGroupRef.current) return;
    sceneRef.current.remove(meshGroupRef.current);
    const newMesh = createHistoricalMesh(selectedObject.id, isWireframe);
    sceneRef.current.add(newMesh);
    meshGroupRef.current = newMesh;
  }, [isWireframe, selectedObject.id]);

  useEffect(() => {
    const lights = lightsRef.current;
    if (!lights.ambientLight) return;

    if (lightingPreset === 'daylight') {
      lights.ambientLight.intensity = 1.4;
      lights.keyLight.intensity = 2.3;
      lights.fillLight.intensity = 1.0;
      lights.rimLight.intensity = 1.6;
    } else if (lightingPreset === 'courtyard') {
      lights.ambientLight.intensity = 0.8;
      lights.keyLight.intensity = 3.0;
      lights.fillLight.intensity = 0.5;
      lights.rimLight.intensity = 2.2;
    } else if (lightingPreset === 'spotlight') {
      lights.ambientLight.intensity = 0.4;
      lights.keyLight.intensity = 3.5;
      lights.fillLight.intensity = 0.4;
      lights.rimLight.intensity = 2.6;
    }
  }, [lightingPreset]);

  useEffect(() => {
    if (meshGroupRef.current) {
      meshGroupRef.current.scale.set(zoomLevel, zoomLevel, zoomLevel);
    }
  }, [zoomLevel]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[460px] md:min-h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
    />
  );
}

function HeritageLogo({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heritageGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9DF98" />
          <stop offset="50%" stopColor="#E5B869" />
          <stop offset="100%" stopColor="#AA7932" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="104" height="104" rx="24" fill="#13141C" stroke="url(#heritageGoldGrad)" strokeWidth="2.5" />
      <path d="M30 84 V56 Q30 34 60 34 Q90 34 90 56 V84 Z" fill="none" stroke="url(#heritageGoldGrad)" strokeWidth="3" />
      <path d="M42 84 V62 Q42 46 60 46 Q78 46 78 62 V84 Z" fill="none" stroke="url(#heritageGoldGrad)" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="60" cy="58" r="4.5" fill="url(#heritageGoldGrad)" />
      <line x1="20" y1="84" x2="100" y2="84" stroke="url(#heritageGoldGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="26" y1="92" x2="94" y2="92" stroke="url(#heritageGoldGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('objects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedObjectId, setSelectedObjectId] = useState('matka');
  const [isWireframe, setIsWireframe] = useState(false);
  const [lightingPreset, setLightingPreset] = useState('daylight');
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1.0);

  const [selectedEraIndex, setSelectedEraIndex] = useState(3);
  const [diurnalIndex, setDiurnalIndex] = useState(1);
  const [evolutionCategory, setEvolutionCategory] = useState('home');


  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioLabel, setAudioLabel] = useState('');

  const { isPlaying, toggleSound } = useAmbientSoundscape();

  const selectedObject = useMemo(() => {
    return HISTORICAL_OBJECTS.find(o => o.id === selectedObjectId) || HISTORICAL_OBJECTS[0];
  }, [selectedObjectId]);

  const currentEra = TIMELINE_ERAS[selectedEraIndex];
  const currentDiurnal = DIURNAL_SCHEDULE[diurnalIndex];

  const handleSpeakText = (textToSpeak, titleLabel) => {
    if ('speechSynthesis' in window) {
      if (isAudioPlaying) {
        window.speechSynthesis.cancel();
        setIsAudioPlaying(false);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsAudioPlaying(false);
      utterance.onerror = () => setIsAudioPlaying(false);
      setAudioLabel(titleLabel);
      setIsAudioPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F3EFE6] font-sans antialiased flex flex-col selection:bg-[#E5B869] selection:text-[#08090D]">
      <header className="sticky top-0 z-50 bg-[#08090D]/90 backdrop-blur-md border-b border-[#E5B869]/20 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
              <HeritageLogo className="w-10 h-10 drop-shadow-[0_2px_8px_rgba(229,184,105,0.25)]" />
            </div>
            <div>
              <span className="font-serif font-extrabold tracking-wider text-base md:text-lg block leading-none text-white group-hover:text-[#E5B869] transition-colors">
                THE EVERYDAY INDIAN
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C2A26F] font-mono">
                3D Digital Humanities Platform
              </span>
            </div>
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {[
            { id: 'objects', label: '3D Objects', icon: Eye },
            { id: 'timemachine', label: 'Time Machine', icon: Clock },
            { id: 'dayinlife', label: 'A Day in the Life', icon: Sun },
            { id: 'evolution', label: 'Cultural Evolution', icon: Sliders },
            { id: 'sources', label: 'Sources', icon: BookOpen },
            { id: 'about', label: 'About', icon: Info },
            { id: 'team', label: 'Our Team', icon: Users }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = currentPage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentPage(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E5B869] to-[#D4A373] text-[#08090D] font-bold shadow-md shadow-[#E5B869]/20'
                    : 'text-[#B8B4AC] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#08090D]' : 'text-[#C2A26F]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            title={isPlaying ? 'Mute ambient courtyard sound' : 'Enable ambient courtyard sound'}
            className={`p-2 rounded-full border transition-all ${
              isPlaying
                ? 'bg-[#E5B869] text-[#08090D] border-[#E5B869] shadow-md shadow-[#E5B869]/30'
                : 'bg-[#12141C] border-[#E5B869]/20 text-[#C2A26F] hover:text-white hover:border-[#E5B869]/50'
            }`}
          >
            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#12141C] border border-[#E5B869]/20 text-[#C2A26F]"
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>
      </header>

      {isAudioPlaying && (
        <div className="bg-gradient-to-r from-[#17130E] via-[#241A0E] to-[#17130E] border-b border-[#E5B869]/30 px-4 py-2 flex items-center justify-between text-xs font-mono text-[#F3EFE6]">
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#E5B869] animate-pulse" />
            <span className="font-bold uppercase tracking-wider text-[11px] text-[#E5B869]">
              Oral Narration Playing:
            </span>
            <span className="truncate max-w-xs md:max-w-md text-[#D8D2C6]">{audioLabel}</span>
          </div>
          <button
            onClick={() => {
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              setIsAudioPlaying(false);
            }}
            className="p-1 rounded-full bg-[#E5B869] text-[#08090D] hover:bg-[#D4A373] font-bold"
          >
            <Pause className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F17] border-b border-[#E5B869]/20 px-4 py-3 space-y-1 z-40">
          {[
            { id: 'objects', label: '3D Objects' },
            { id: 'timemachine', label: 'Time Machine' },
            { id: 'dayinlife', label: 'A Day in the Life' },
            { id: 'evolution', label: 'Cultural Evolution' },
            { id: 'sources', label: 'Sources & Bibliography' },
            { id: 'about', label: 'About the Project' },
            { id: 'team', label: 'Our Team & Faculty' }
          ].map(m => (
            <button
              key={m.id}
              onClick={() => {
                setCurrentPage(m.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-md text-xs font-mono tracking-wide ${
                currentPage === m.id
                  ? 'bg-[#E5B869] text-[#08090D] font-bold'
                  : 'text-[#B8B4AC] hover:bg-white/5'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}

      {}
      <main className="flex-1 flex flex-col">
        {/* VIEW 1: 3D OBJECTS MUSEUM */}
        {currentPage === 'objects' && (
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-6 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5B869]/15 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] border border-[#E5B869]/30">
                    Interactive 3D Material Archive
                  </span>
                  <span className="text-[#8F8A7E] text-xs font-mono">
                    Gujarat & Western India Focus
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl font-serif font-extrabold text-[#F8F5EE]">
                  3D Everyday Objects Museum
                </h1>
                <p className="text-[#B8B2A6] text-xs md:text-sm mt-1 max-w-2xl">
                  Inspect the physical tools of ordinary life. Positioned directly in the optical center with warm 3-point museum lighting and orbital controls.
                </p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                {HISTORICAL_OBJECTS.map(obj => {
                  const isSel = obj.id === selectedObjectId;
                  return (
                    <button
                      key={obj.id}
                      onClick={() => {
                        setSelectedObjectId(obj.id);
                        setZoomLevel(1.0);
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        isSel
                          ? 'bg-[#E5B869] text-[#08090D] font-bold shadow-lg shadow-[#E5B869]/20'
                          : 'bg-[#12141D] text-[#C2A26F] hover:text-white border border-[#E5B869]/20'
                      }`}
                    >
                      <span>{obj.displayName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
              <div className="lg:col-span-7 flex flex-col bg-[#0F111A] rounded-2xl border border-[#E5B869]/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <div className="pointer-events-auto flex items-center gap-2 bg-[#08090D]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5B869]/30 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#E5B869] animate-pulse" />
                    <span className="text-[#F8F5EE] font-medium">{selectedObject.name}</span>
                  </div>

                  <div className="pointer-events-auto flex items-center gap-1.5 bg-[#08090D]/85 backdrop-blur-md p-1 rounded-full border border-[#E5B869]/30 text-xs font-mono">
                    <button
                      onClick={() => setIsWireframe(!isWireframe)}
                      className={`px-2.5 py-1 rounded-full transition-colors ${
                        isWireframe
                          ? 'bg-[#E5B869] text-[#08090D] font-bold'
                          : 'text-[#B8B2A6] hover:text-white'
                      }`}
                      title="Toggle structural wireframe mesh"
                    >
                      {isWireframe ? 'Wireframe ON' : 'Solid'}
                    </button>
                    <button
                      onClick={() => setIsAutoRotate(!isAutoRotate)}
                      className={`px-2.5 py-1 rounded-full transition-colors ${
                        isAutoRotate
                          ? 'bg-[#221C16] text-[#E5B869] border border-[#E5B869]/30'
                          : 'text-[#B8B2A6] hover:text-white'
                      }`}
                      title="Toggle orbital auto-spin"
                    >
                      {isAutoRotate ? 'Orbiting' : 'Paused'}
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full min-h-[460px] md:min-h-[540px] flex items-center justify-center relative bg-radial-at-c from-[#181A28] via-[#0F111A] to-[#08090D]">
                  <ObjectInspectorCanvas
                    selectedObject={selectedObject}
                    isWireframe={isWireframe}
                    lightingPreset={lightingPreset}
                    isAutoRotate={isAutoRotate}
                    zoomLevel={zoomLevel}
                  />

                  <div className="absolute bottom-4 left-4 pointer-events-none text-[11px] font-mono text-[#8F8A7E] flex items-center gap-2 bg-[#08090D]/70 px-2.5 py-1 rounded-md border border-white/5">
                    <RotateCcw className="w-3.5 h-3.5 text-[#E5B869]" />
                    <span>Click & drag to rotate 360° | Perfectly centered</span>
                  </div>
                </div>

                <div className="p-4 bg-[#08090D]/95 backdrop-blur-md border-t border-[#E5B869]/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 bg-[#12141D] px-2.5 py-1 rounded-lg border border-[#E5B869]/20">
                    <span className="text-[#8F8A7E] text-[10px] uppercase mr-1">Zoom:</span>
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(0.65, prev - 0.15))}
                      className="p-1 hover:text-[#E5B869] text-[#B8B2A6] transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[#E5B869] font-bold min-w-[36px] text-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(1.6, prev + 0.15))}
                      className="p-1 hover:text-[#E5B869] text-[#B8B2A6] transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(1.0)}
                      className="p-1 ml-1 hover:text-[#E5B869] text-[#B8B2A6] transition-colors"
                      title="Reset View"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1 bg-[#12141D] p-1 rounded-lg border border-[#E5B869]/20">
                    <span className="text-[#8F8A7E] text-[10px] uppercase px-1.5">Light:</span>
                    {[
                      { id: 'daylight', label: 'Day' },
                      { id: 'courtyard', label: 'Diya' },
                      { id: 'spotlight', label: 'Studio' }
                    ].map(lt => (
                      <button
                        key={lt.id}
                        onClick={() => setLightingPreset(lt.id)}
                        className={`px-2.5 py-0.5 rounded text-[11px] transition-all ${
                          lightingPreset === lt.id
                            ? 'bg-[#E5B869] text-[#08090D] font-bold'
                            : 'text-[#B8B2A6] hover:text-white'
                        }`}
                      >
                        {lt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col bg-[#0F111A] rounded-2xl border border-[#E5B869]/20 p-6 shadow-xl space-y-5 overflow-y-auto max-h-[700px]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#E5B869] font-semibold tracking-wider">
                      {selectedObject.gujaratiName}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1A1612] text-[#E5B869] border border-[#E5B869]/30">
                      <CheckCircle2 className="w-3 h-3 text-[#E5B869]" />
                      {selectedObject.evidenceBadge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-[#F8F5EE] leading-tight">
                    {selectedObject.name}
                  </h2>
                  <p className="text-[#B8B2A6] text-xs font-mono mt-1">
                    Era: <span className="text-white">{selectedObject.period}</span> | Region:{' '}
                    <span className="text-white">{selectedObject.region}</span>
                  </p>
                </div>

                <div className="p-3 bg-[#131622] rounded-xl border border-[#E5B869]/20 flex items-center justify-between">
                  <div className="text-xs font-mono">
                    <span className="font-bold block text-[#E5B869]">Audio Narration</span>
                    <span className="text-[11px] text-[#A6A094]">Listen to its story in history</span>
                  </div>
                  <button
                    onClick={() =>
                      handleSpeakText(
                        `${selectedObject.name}, known in Gujarati as ${selectedObject.gujaratiName}. ${selectedObject.usage}. ${selectedObject.culturalContext}`,
                        selectedObject.name
                      )
                    }
                    className="px-3.5 py-1.5 rounded-lg bg-[#E5B869] text-[#08090D] font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-[#D4A373] transition-colors shadow-md shadow-[#E5B869]/10"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>Listen</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-[#08090D] p-3.5 rounded-xl border border-[#E5B869]/15 font-mono">
                  <div>
                    <span className="text-[#8F8A7E] block text-[10px] uppercase">Material</span>
                    <span className="text-[#F8F5EE] font-medium">{selectedObject.material}</span>
                  </div>
                  <div>
                    <span className="text-[#8F8A7E] block text-[10px] uppercase">Category</span>
                    <span className="text-[#F8F5EE] font-medium">{selectedObject.category}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-white/5">
                    <span className="text-[#8F8A7E] block text-[10px] uppercase">Dimensions</span>
                    <span className="text-[#D8D2C6]">{selectedObject.dimensions}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#E5B869] font-bold mb-1.5 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    How Was It Used?
                  </h3>
                  <p className="text-[#D8D2C6] text-xs md:text-sm leading-relaxed bg-[#08090D] p-3 rounded-lg border border-[#E5B869]/10">
                    {selectedObject.usage}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#E5B869] font-bold mb-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Cultural Context in the Home
                  </h3>
                  <p className="text-[#D8D2C6] text-xs md:text-sm leading-relaxed">
                    {selectedObject.culturalContext}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#131622] border border-[#E5B869]/20 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-[#E5B869] text-[11px] uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Historical Verification
                  </div>
                  <p className="text-[#D8D2C6] leading-relaxed text-[11px]">
                    {selectedObject.evidenceDetails}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#8F8A7E] font-bold mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Evolution into Modern Times
                  </h3>
                  <p className="text-[#A6A094] text-xs leading-relaxed italic">
                    {selectedObject.evolutionNotes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: TIME MACHINE */}
        {currentPage === 'timemachine' && (
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8 flex flex-col gap-8">
            <div className="border-b border-[#E5B869]/20 pb-5">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] px-3 py-1 rounded-full border border-[#E5B869]/30">
                Centuries of Everyday Living
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-black text-[#F8F5EE] mt-2">
                The Time Machine
              </h1>
              <p className="text-[#B8B2A6] text-xs md:text-sm max-w-2xl mt-1">
                Travel across 500 years of ordinary Indian transformations. Observe how homes, cooking, clothing, and transport evolved between 1500 and 2026.
              </p>
            </div>

            <div className="bg-[#0F111A] p-6 rounded-2xl border border-[#E5B869]/20 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#A6A094]">
                <span>Timeline Span</span>
                <span className="text-[#E5B869] font-bold">1500 CE → 2026 CE</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {TIMELINE_ERAS.map((era, idx) => {
                  const isCur = idx === selectedEraIndex;
                  return (
                    <button
                      key={era.year}
                      onClick={() => setSelectedEraIndex(idx)}
                      className={`py-3 px-2 rounded-xl text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        isCur
                          ? 'bg-[#E5B869] text-[#08090D] font-bold scale-105 shadow-xl shadow-[#E5B869]/20'
                          : 'bg-[#12141D] text-[#C2A26F] hover:bg-[#1A1E2C] hover:text-white border border-[#E5B869]/20'
                      }`}
                    >
                      <span className="text-lg md:text-xl font-serif font-black">{era.year}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-mono font-medium block truncate max-w-full ${isCur ? 'text-[#08090D]' : 'text-[#8F8A7E]'}`}>
                        {era.eraTag}
                      </span>
                    </button>
                  );
                })}
              </div>

              <input
                type="range"
                min="0"
                max={TIMELINE_ERAS.length - 1}
                value={selectedEraIndex}
                onChange={e => setSelectedEraIndex(parseInt(e.target.value))}
                className="w-full accent-[#E5B869] h-2 bg-[#1A1E2C] rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#0F111A] p-6 rounded-2xl border border-[#E5B869]/20 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-mono uppercase text-[#E5B869] font-bold tracking-wider">
                    {currentEra.eraTag} Overview
                  </span>
                  <h2 className="text-4xl font-serif font-black text-[#F8F5EE] mt-1">
                    Year {currentEra.year}
                  </h2>
                  <h3 className="text-lg font-serif text-[#E5B869] mt-1">{currentEra.title}</h3>
                  <p className="text-[#D8D2C6] text-xs md:text-sm mt-3 leading-relaxed">
                    {currentEra.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5B869]/15 text-xs font-mono text-[#A6A094] flex items-center justify-between">
                  <span>Focus: Gujarat & Western India</span>
                  <button
                    onClick={() =>
                      handleSpeakText(
                        `Year ${currentEra.year}. ${currentEra.title}. ${currentEra.description}`,
                        `Year ${currentEra.year}`
                      )
                    }
                    className="p-2 rounded-lg bg-[#1A1612] text-[#E5B869] border border-[#E5B869]/30 hover:bg-[#E5B869] hover:text-[#08090D] transition-colors"
                    title="Listen to Era Overview"
                  >
                    <Headphones className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Homes & Living Spaces', content: currentEra.home, icon: Layers },
                  { title: 'Food & Cooking Routine', content: currentEra.food, icon: Sun },
                  { title: 'Everyday Attire & Fabric', content: currentEra.clothing, icon: Compass },
                  { title: 'Work & Daily Livelihood', content: currentEra.work, icon: BookOpen },
                  { title: 'Transportation & Travel', content: currentEra.transport, icon: Clock }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`p-5 rounded-2xl bg-[#0F111A] border border-[#E5B869]/15 hover:border-[#E5B869]/40 transition-all ${
                        i === 4 ? 'md:col-span-2' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 text-[#E5B869] font-mono text-xs font-bold uppercase">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[#D8D2C6] text-xs md:text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: A DAY IN THE LIFE */}
        {currentPage === 'dayinlife' && (
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8 flex flex-col gap-6">
            <div className="border-b border-[#E5B869]/20 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] px-3 py-1 rounded-full border border-[#E5B869]/30">
                  Diurnal Rhythm Simulator
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-black text-[#F8F5EE] mt-2">
                  A Day in the Life
                </h1>
                <p className="text-[#B8B2A6] text-xs md:text-sm max-w-2xl mt-1">
                  Follow a 24-hour diurnal cycle in an 1800s urban courtyard house. Experience how changing natural daylight and heat determined household tasks, bazaar work, and resting hours.
                </p>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {DIURNAL_SCHEDULE.map((s, idx) => (
                  <button
                    key={s.time}
                    onClick={() => setDiurnalIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                      idx === diurnalIndex
                        ? 'bg-[#E5B869] text-[#08090D] font-bold shadow-md shadow-[#E5B869]/20'
                        : 'bg-[#12141D] text-[#C2A26F] hover:text-white border border-[#E5B869]/20'
                    }`}
                  >
                    {s.time}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`w-full rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-700 bg-gradient-to-r ${currentDiurnal.skyColor} border border-[#E5B869]/30 relative overflow-hidden flex flex-col justify-between min-h-[380px]`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-white/90">
                <span className="bg-[#08090D]/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5B869]/30 font-bold text-[#E5B869]">
                  STAGE {diurnalIndex + 1} OF {DIURNAL_SCHEDULE.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleSpeakText(
                        `At ${currentDiurnal.time}: ${currentDiurnal.title}. ${currentDiurnal.description}.`,
                        currentDiurnal.title
                      )
                    }
                    className="bg-[#08090D]/75 hover:bg-[#08090D] px-3 py-1 rounded-full border border-[#E5B869]/30 flex items-center gap-1.5 text-[#E5B869]"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>Listen</span>
                  </button>
                  <span className="bg-[#08090D]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#E5B869]/20 text-[#D8D2C6]">
                    {currentDiurnal.sunElevation}
                  </span>
                </div>
              </div>

              <div className="my-6 max-w-3xl bg-[#08090D]/75 backdrop-blur-md p-6 rounded-2xl border border-[#E5B869]/20 space-y-3">
                <span className="text-[#E5B869] font-mono text-sm tracking-widest uppercase font-bold block">
                  {currentDiurnal.time}
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-black text-white">
                  {currentDiurnal.title}
                </h2>
                <p className="text-[#E2DDD3] text-xs md:text-base leading-relaxed">
                  {currentDiurnal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#08090D]/70 backdrop-blur-md p-3.5 rounded-xl border border-[#E5B869]/20">
                  <span className="text-[#E5B869] block text-[10px] uppercase font-bold">
                    Acoustic Atmosphere & Sounds:
                  </span>
                  <span className="text-[#F3EFE6] font-medium">{currentDiurnal.sounds}</span>
                </div>
                <div className="bg-[#08090D]/70 backdrop-blur-md p-3.5 rounded-xl border border-[#E5B869]/20">
                  <span className="text-[#E5B869] block text-[10px] uppercase font-bold">
                    Associated Everyday Object:
                  </span>
                  <span className="text-[#F3EFE6] font-medium">{currentDiurnal.primaryArtifact}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 bg-[#0F111A] p-4 rounded-2xl border border-[#E5B869]/20">
              <button
                disabled={diurnalIndex === 0}
                onClick={() => setDiurnalIndex(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-lg bg-[#12141D] hover:bg-[#1A1E2C] disabled:opacity-30 text-xs font-mono font-bold text-[#E5B869] border border-[#E5B869]/20"
              >
                ← Earlier Hour
              </button>
              <span className="text-xs font-mono text-[#A6A094]">
                Cycle through pre-dawn water drawing, noon siestas, and starlit rooftop sleep
              </span>
              <button
                disabled={diurnalIndex === DIURNAL_SCHEDULE.length - 1}
                onClick={() => setDiurnalIndex(prev => Math.min(DIURNAL_SCHEDULE.length - 1, prev + 1))}
                className="px-4 py-2 rounded-lg bg-[#E5B869] text-[#08090D] hover:bg-[#D4A373] disabled:opacity-30 text-xs font-mono font-bold shadow-md shadow-[#E5B869]/20"
              >
                Later Hour →
              </button>
            </div>
          </div>
        )}

        {/* VIEW 4: CULTURAL EVOLUTION */}
        {currentPage === 'evolution' && (
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8 flex flex-col gap-6">
            <div className="border-b border-[#E5B869]/20 pb-5">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] px-3 py-1 rounded-full border border-[#E5B869]/30">
                Comparative Material Humanities
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-black text-[#F8F5EE] mt-2">
                Cultural Evolution: 1800 vs 2026
              </h1>
              <p className="text-[#B8B2A6] text-xs md:text-sm max-w-2xl mt-1">
                Visualizing how ordinary Indian life shifted across 200+ years. Compare historical records directly with the fixed project images for each era and category.
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {[
                { id: 'home', label: 'Homes & Architecture' },
                { id: 'food', label: 'Kitchens & Water' },
                { id: 'clothing', label: 'Textiles & Clothing' },
                { id: 'transport', label: 'Streets & Travel' },
                { id: 'communication', label: 'Information & Social Ties' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setEvolutionCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                    evolutionCategory === cat.id
                      ? 'bg-[#E5B869] text-[#08090D] font-bold shadow-md shadow-[#E5B869]/20'
                      : 'bg-[#12141D] text-[#C2A26F] hover:text-white border border-[#E5B869]/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {(() => {
              const currentVisual = EVOLUTION_VISUALS[evolutionCategory] || EVOLUTION_VISUALS.home;
              const pastSrc = currentVisual.past.image;
              const presentSrc = currentVisual.present.image;

              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  <div className="bg-[#0F111A] rounded-2xl border border-[#E5B869]/25 p-6 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span className="text-[#E5B869] uppercase tracking-widest font-bold">
                          Historical Reality (1800)
                        </span>
                        <span className="bg-[#1A1612] text-[#E5B869] px-2.5 py-0.5 rounded text-[10px] border border-[#E5B869]/30">
                          Handcrafted & Communal
                        </span>
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-[#F8F5EE] mb-3">
                        {currentVisual.past.period}
                      </h3>

                      <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden mb-3 border border-[#E5B869]/20 bg-[#08090D] relative group flex items-center justify-center">
                        <img
                          src={pastSrc}
                          alt={currentVisual.past.period}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            if (e.target.src !== currentVisual.past.artworkFallback) {
                              e.target.src = currentVisual.past.artworkFallback;
                            }
                          }}
                        />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-mono text-[#F8F5EE] bg-[#08090D]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#E5B869]/30 truncate max-w-[260px]">
                            {currentVisual.past.fileName}
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#F8F5EE] bg-[#08090D]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[#E5B869]/30">
                            Embedded Archive (1800)
                          </span>
</div>
                      </div>

                      <p className="text-[#D8D2C6] text-xs md:text-sm leading-relaxed mb-4">
                        {currentVisual.past.caption}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E5B869]/15">
                        {currentVisual.past.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#131622] text-[#E5B869] border border-[#E5B869]/20"
                          >
                            ✓ {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5B869]/15 text-xs font-mono text-[#A6A094] flex items-center justify-between">
                      <div>
                        <span className="text-[#E5B869] font-bold">Key Persistence: </span>
                        Natural climate adaptation and community cooperation.
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0F111A] rounded-2xl border border-[#E5B869]/25 p-6 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span className="text-[#E5B869] uppercase tracking-widest font-bold">
                          Contemporary Reality (2026)
                        </span>
                        <span className="bg-[#1A1612] text-[#E5B869] px-2.5 py-0.5 rounded text-[10px] border border-[#E5B869]/30">
                          Connected & Electrified
                        </span>
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-[#F8F5EE] mb-3">
                        {currentVisual.present.period}
                      </h3>

                      <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden mb-3 border border-[#E5B869]/20 bg-[#08090D] relative group flex items-center justify-center">
                        <img
                          src={presentSrc}
                          alt={currentVisual.present.period}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            if (e.target.src !== currentVisual.present.artworkFallback) {
                              e.target.src = currentVisual.present.artworkFallback;
                            }
                          }}
                        />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-mono text-[#F8F5EE] bg-[#08090D]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#E5B869]/30 truncate max-w-[260px]">
                            {currentVisual.present.fileName}
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#F8F5EE] bg-[#08090D]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[#E5B869]/30">
                            Embedded Archive (2026)
                          </span>
</div>
                      </div>

                      <p className="text-[#D8D2C6] text-xs md:text-sm leading-relaxed mb-4">
                        {currentVisual.present.caption}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E5B869]/15">
                        {currentVisual.present.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#131622] text-[#E5B869] border border-[#E5B869]/20"
                          >
                            ✓ {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5B869]/15 text-xs font-mono text-[#A6A094] flex items-center justify-between">
                      <div>
                        <span className="text-[#E5B869] font-bold">Key Evolution: </span>
                        Mechanization reduced strenuous physical labor while changing communal closeness.
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* VIEW 5: SOURCES & BIBLIOGRAPHY */}
        {currentPage === 'sources' && (
          <div className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-8 flex flex-col gap-6">
            <div className="border-b border-[#E5B869]/20 pb-5">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] px-3 py-1 rounded-full border border-[#E5B869]/30">
                Academic Pedigree
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-black text-[#F8F5EE] mt-2">
                Sources & Historical References
              </h1>
              <p className="text-[#B8B2A6] text-xs md:text-sm max-w-2xl mt-1">
                Every object dimension, daily schedule, and cultural transition shown on this website is drawn from published architectural gazetteers, museum collections, and academic research.
              </p>
            </div>

            <div className="space-y-4">
              {ACADEMIC_SOURCES.map(source => (
                <div
                  key={source.id}
                  className="bg-[#0F111A] p-5 rounded-2xl border border-[#E5B869]/20 hover:border-[#E5B869]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1A1612] text-[#E5B869] border border-[#E5B869]/30">
                        {source.category}
                      </span>
                      <span className="text-[#8F8A7E] text-xs font-mono">{source.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-serif font-bold text-[#F8F5EE]">
                      {source.title}
                    </h3>
                    <p className="text-[#C2A26F] text-xs font-mono">
                      {source.author} — <span className="text-[#D8D2C6]">{source.institution}</span>
                    </p>
                    <p className="text-[#A6A094] text-xs pt-1">{source.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 6: ABOUT PROJECT */}
        {currentPage === 'about' && (
          <div className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-8 flex flex-col gap-6">
            <div className="border-b border-[#E5B869]/20 pb-5">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] px-3 py-1 rounded-full border border-[#E5B869]/30">
                Digital Humanities Initiative
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-black text-[#F8F5EE] mt-2">
                Why "The Everyday Indian"?
              </h1>
              <p className="text-[#B8B2A6] text-xs md:text-sm mt-1">
                A simple and honest look into how ordinary people lived, worked, and rested over the centuries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-[#D8D2C6] leading-relaxed">
              <div className="bg-[#0F111A] p-6 rounded-2xl border border-[#E5B869]/20 space-y-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#1A1612] border border-[#E5B869]/30 flex items-center justify-center text-[#E5B869]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F8F5EE]">The Gap in History</h3>
                <p>
                  Most history textbooks teach us about powerful rulers, battles, empires, and grand monuments. But what about the farmers, weavers, homemakers, carpenters, and shopkeepers who actually built society?
                </p>
                <p>
                  Their daily stories—how they baked rotlas on clay stoves, cooled water in summer, slept under open skies, and kept communities together—are rarely shown in a museum format.
                </p>
              </div>

              <div className="bg-[#0F111A] p-6 rounded-2xl border border-[#E5B869]/20 space-y-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#1A1612] border border-[#E5B869]/30 flex items-center justify-center text-[#E5B869]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F8F5EE]">What We Built</h3>
                <p>
                  We created an interactive 3D digital museum that lets you touch and explore real historical objects.
                </p>
                <p>
                  Instead of reading dry text, you can rotate a 360-degree 3D model of a village bullock cart wheel, experience a 24-hour day in an 1800s courtyard, and compare past everyday life directly with 2026.
                </p>
              </div>

              <div className="bg-[#0F111A] p-6 rounded-2xl border border-[#E5B869]/20 space-y-3 shadow-xl md:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#1A1612] border border-[#E5B869]/30 flex items-center justify-center text-[#E5B869]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F8F5EE]">Our Core Philosophy</h3>
                <p>
                  History isn't just about what happened hundreds of years ago. It is about how human beings adapted to heat, cooked their food, loved their families, and handed down their traditions. By seeing how our great-grandparents lived, we understand ourselves better.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 7: OUR TEAM & FACULTY MENTOR */}
        {currentPage === 'team' && (
          <div className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-8 flex flex-col gap-8">
            <div className="border-b border-[#E5B869]/20 pb-5 text-center max-w-2xl mx-auto">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1A1612] text-[#E5B869] px-3 py-1 rounded-full border border-[#E5B869]/30">
                Digital Humanities Project Team
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-black text-[#F8F5EE] mt-2">
                The Student Creators
              </h1>
              <p className="text-[#B8B2A6] text-xs md:text-sm mt-1">
                Built as a collaborative undergraduate Digital Humanities initiative at Nirma University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STUDENT_TEAM.map((student) => {
                const activeSrc = student.image;

                return (
                  <div
                    key={student.id}
                    className="bg-[#0F111A] rounded-2xl border border-[#E5B869]/20 p-6 flex flex-col justify-between hover:border-[#E5B869]/50 transition-all shadow-xl group"
                  >
                    <div>
                      <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-4 border border-[#E5B869]/25 bg-[#08090D] relative group-hover:border-[#E5B869]/60 transition-colors shadow-lg flex items-center justify-center">
                        <img
                          src={activeSrc}
                          alt={student.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            if (e.currentTarget.src !== student.embeddedArtwork) {
                              e.currentTarget.src = student.embeddedArtwork;
                            }
                          }}
                        />

                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5B869] font-bold block">
                        {student.role}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#F8F5EE] mt-0.5">
                        {student.name}
                      </h3>
                      <span className="inline-block text-xs font-mono text-[#C2A26F] bg-[#1A1612] px-2.5 py-0.5 rounded border border-[#E5B869]/30 mt-1">
                        Roll No: {student.id}
                      </span>
                      <p className="text-[#A6A094] text-xs mt-3 leading-relaxed">{student.focus}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5B869]/15 text-[10px] font-mono text-[#8F8A7E]">
                      B.Tech Computer Science &amp; Engineering
                    </div>
                  </div>
                );
              })}
            </div>

            {(() => {
              const mentorSrc = FACULTY_MENTOR.image;

              return (
                <div className="bg-[#0F111A] rounded-2xl border border-[#E5B869]/30 p-8 shadow-xl max-w-3xl mx-auto w-full text-center space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1612] border border-[#E5B869]/30 text-[#E5B869] text-xs font-mono font-bold uppercase">
                    <Award className="w-3.5 h-3.5" />
                    Project Mentorship &amp; Academic Guidance
                  </div>

                  <div className="w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-2 border-[#E5B869] shadow-xl shadow-[#E5B869]/20 relative group flex items-center justify-center bg-[#08090D]">
                    <img
                      src={mentorSrc}
                      alt={FACULTY_MENTOR.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        if (e.currentTarget.src !== FACULTY_MENTOR.embeddedArtwork) {
                          e.currentTarget.src = FACULTY_MENTOR.embeddedArtwork;
                        }
                      }}
                    />

                  </div>

                  <div>
                    <h2 className="text-3xl font-serif font-extrabold text-[#F8F5EE]">{FACULTY_MENTOR.name}</h2>
                    <span className="inline-block text-xs font-mono text-[#E5B869] bg-[#12141D] px-3.5 py-1 rounded-full border border-[#E5B869]/30 mt-1">
                      Faculty ID: {FACULTY_MENTOR.id}
                    </span>
                  </div>

                  <p className="text-[#D8D2C6] text-xs md:text-sm max-w-xl mx-auto pt-1 leading-relaxed">
                    Head of Department &amp; Senior Assistant Professor at {FACULTY_MENTOR.university}. Guiding student research in Digital Humanities, design thinking, and historiographical methodology.
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* VIEW 8: HOME LANDING HERO */}
        {currentPage === 'home' && (
          <div className="flex-1 flex flex-col">
            <div className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-8 overflow-hidden bg-radial-at-c from-[#181B2B] via-[#0F111A] to-[#08090D]">
              <div className="max-w-4xl mx-auto text-center space-y-6 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1612] border border-[#E5B869]/30 text-[#E5B869] font-mono text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>500 Years of Ordinary Life, Experienced Through Time</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#F8F5EE] leading-tight">
                  THE EVERYDAY INDIAN
                </h1>

                <p className="text-[#C2BEB5] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Step inside the uncelebrated courtyards, kitchens, trade looms, and rooftop terracottas of ordinary Indian history.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => setCurrentPage('objects')}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E5B869] to-[#D4A373] hover:from-[#F0C57A] hover:to-[#E5B869] text-[#08090D] font-bold font-mono text-xs md:text-sm tracking-wide transition-all shadow-lg shadow-[#E5B869]/25 flex items-center gap-2"
                  >
                    <span>Inspect 3D Objects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('evolution')}
                    className="px-6 py-3 rounded-full bg-[#12141D] hover:bg-[#1A1E2C] text-[#E5B869] font-mono text-xs md:text-sm tracking-wide border border-[#E5B869]/30 transition-colors flex items-center gap-2"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>Cultural Evolution</span>
                  </button>
                  <button
                    onClick={() => setCurrentPage('timemachine')}
                    className="px-6 py-3 rounded-full bg-[#08090D] hover:bg-[#12141D] text-[#D8D2C6] font-mono text-xs md:text-sm tracking-wide border border-[#E5B869]/20 transition-colors"
                  >
                    Launch Time Machine (1500–2026)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {}
      <footer className="bg-[#050608] border-t border-[#E5B869]/20 px-4 md:px-8 py-8 mt-auto text-xs font-mono text-[#8F8A7E]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-[#E5B869] tracking-wider">THE EVERYDAY INDIAN</span>
            <span>|</span>
            <span>Digital Humanities Initiative</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[#A6A094]">
            <span>Dhairya Patel (23BCE063)</span>
            <span>•</span>
            <span>Dhun Kakdiya (23BCE068)</span>
            <span>•</span>
            <span>Jay Patel (23BCE112)</span>
            <span>•</span>
            <span className="text-[#E5B869]">Mentor: {FACULTY_MENTOR.name} ({FACULTY_MENTOR.id})</span>
          </div>

          <div className="text-[#686359]">
            © 2026 The Everyday Indian. Open Digital Humanities Archive.
          </div>
        </div>
      </footer>
    </div>
  );
}