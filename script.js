/**
 * =========================================================================
 * INCREDIBLE EXPLORER — CORE PLATFORM JAVASCRIPT
 * Tourism discovery platform for Andhra Pradesh & Telangana
 * Pure Vanilla JavaScript (ES6+), LocalStorage persistence, Zero external frameworks.
 * =========================================================================
 */

// ==========================================
// 1. DATA ARCHITECTURE: 31 CURATED DESTINATIONS
// ==========================================
const DESTINATIONS = [
  // --- ANDHRA PRADESH (16 DESTINATIONS) ---
  {
    id: 1,
    name: "Araku Valley",
    state: "Andhra Pradesh",
    district: "Alluri Sitharama Raju",
    category: "Hills",
    rating: 4.8,
    reviewsCount: 248,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    description: "Nestled in the lush Eastern Ghats at 910 meters above sea level, Araku Valley is renowned for aromatic organic coffee plantations, indigenous tribal culture, misty valleys, and the subterranean Borra Caves.",
    bestTime: "October - March",
    budget: "₹2,500 - ₹5,000 / day",
    budgetMin: 2500,
    budgetMax: 5000,
    entryFee: "Free (Caves ₹80, Museum ₹40)",
    duration: "2 - 3 Days",
    thingsToDo: [
      "Stroll through organic coffee plantations & taste fresh brew",
      "Explore million-year-old Borra Caves and limestone stalactites",
      "Experience tribal dances & handicrafts at Araku Tribal Museum",
      "Ride the scenic Vistadome train through 58 mountain tunnels",
      "Picnic by the crystal cascades of Chaparai and Katiki Waterfalls"
    ],
    nearbyPlaces: ["Borra Caves", "Katiki Waterfalls", "Padmapuram Botanical Gardens", "Chaparai Waterfalls", "Tyda Jungle Bells"],
    famousFood: ["Araku Organic Arabica Coffee", "Bongu Chicken (Tribal Bamboo Chicken)", "Madugula Halwa", "Hot Mirchi Bajji"],
    tags: ["Hills", "Coffee", "Nature", "Scenic", "Tribal", "Caves"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter", "monsoon"]
  },
  {
    id: 2,
    name: "Visakhapatnam (RK Beach & Coast)",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    category: "Beaches",
    rating: 4.7,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description: "The 'City of Destiny' merges the golden sands of the Bay of Bengal with verdant Eastern Ghat hillocks. Home to Asia's first submarine museum, thrilling coastal drives, and serene Buddhist heritage sites.",
    bestTime: "October - March",
    budget: "₹2,200 - ₹4,800 / day",
    budgetMin: 2200,
    budgetMax: 4800,
    entryFee: "Free (Submarine Museum ₹70, TU-142 Aircraft ₹70)",
    duration: "2 - 3 Days",
    thingsToDo: [
      "Walk the bustling Ramakrishna (RK) Beach promenade at sunset",
      "Step aboard the INS Kursura Submarine Museum",
      "Ride the ropeway to Kailasagiri hilltop park for coastal vistas",
      "Surf or relax at Rushikonda Beach water sports center",
      "Drive along the scenic Bheemili beach highway"
    ],
    nearbyPlaces: ["Kailasagiri Hill", "Rushikonda Beach", "INS Kursura Museum", "Yarada Beach", "Dolphin's Nose Lighthouse"],
    famousFood: ["Vizag Seafood Platter", "Crispy Punugulu with ginger chutney", "Bamboo Biryani", "Bobbattu"],
    tags: ["Beaches", "Coast", "Submarine", "Family", "City"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 3,
    name: "Tirupati (Tirumala Venkateswara Temple)",
    state: "Andhra Pradesh",
    district: "Tirupati",
    category: "Temples",
    rating: 4.9,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    description: "The world's most visited sacred pilgrimage shrine, perched on the sacred Seven Hills of Tirumala. Dedicated to Lord Sri Venkateswara (Balaji), offering divine darshan, spiritual serenity, and ancient stone architecture.",
    bestTime: "September - February",
    budget: "₹1,800 - ₹4,000 / day",
    budgetMin: 1800,
    budgetMax: 4000,
    entryFee: "Free (Special Entry Darshan ₹300)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Seek blessings at the golden Ananda Nilayam Tirumala Temple",
      "Witness the Silathoranam natural geological rock arch",
      "Trek the sacred pedestrian stairway trail (Alipiri or Srivari Mettu)",
      "Visit Kapila Theertham sacred waterfall temple at mountain base",
      "Explore historic Chandragiri Fort and sound-and-light show"
    ],
    nearbyPlaces: ["Chandragiri Fort", "Kapila Theertham", "Sri Venkateswara National Park", "Srikalahasti Temple", "Kanipakam Temple"],
    famousFood: ["GI-Tagged Tirupati Laddu Prasadam", "Traditional Ghee Andhra Meals", "Tamarind Pulihora", "Chittoor Pot Curd"],
    tags: ["Temples", "Spiritual", "Pilgrimage", "Heritage", "Sacred"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 4,
    name: "Gandikota (The Grand Canyon of India)",
    state: "Andhra Pradesh",
    district: "YSR Kadapa",
    category: "Adventure",
    rating: 4.8,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    description: "A geological wonder carved over millennia by the Pennar River cutting through the Erramala hills. Crowned by a 12th-century stone fortress, Jama Masjid, and breathtaking cliffside panoramas.",
    bestTime: "October - February",
    budget: "₹1,800 - ₹3,600 / day",
    budgetMin: 1800,
    budgetMax: 3600,
    entryFee: "Free (Camping tents ₹1,000 - ₹1,800 / night)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Watch dramatic sunrise over the towering Pennar River Gorge",
      "Camp cliffside under starlit night skies with bonfires",
      "Explore 12th-century medieval fort ruins, granaries & Jama Masjid",
      "Kayak in the tranquil waters below the river canyon",
      "Trek down the canyon boulders to the river bank"
    ],
    nearbyPlaces: ["Belum Caves", "Mylavaram Dam & Reservoir", "Rayalaseema Rock Formations", "Tadipatri Temples"],
    famousFood: ["Rayalaseema Ragi Mudda with Natukodi Pulusu", "Kadapa Karam Dosa", "Spicy Gongura Chutney", "Jowar Roti"],
    tags: ["Adventure", "Canyon", "Camping", "Forts", "Stargazing", "Geological"],
    isPopular: true,
    isHiddenGem: true,
    seasons: ["winter"]
  },
  {
    id: 5,
    name: "Vijayawada (Kanaka Durga & Krishna River)",
    state: "Andhra Pradesh",
    district: "NTR (Krishna)",
    category: "Temples",
    rating: 4.6,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    description: "Vibrant city on the banks of Krishna River, crowned by the revered Sri Durga Malleswara Swamy Varla Devasthanam atop Indrakeeladri hill, the colossal Prakasam Barrage, and rock-cut cave shrines.",
    bestTime: "October - March",
    budget: "₹2,000 - ₹4,200 / day",
    budgetMin: 2000,
    budgetMax: 4200,
    entryFee: "Free (Special Temple Entry ₹100 - ₹300)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Darshan at the sacred Kanaka Durga Temple atop Indrakeeladri",
      "Evening stroll along illuminated Prakasam Barrage",
      "Boat ride to eco-tourism resort at Bhavani Island on Krishna River",
      "Marvel at 7th-century rock-cut Undavalli Caves with reclining Vishnu",
      "Shop for authentic Kondapalli wooden toys and handicrafts"
    ],
    nearbyPlaces: ["Undavalli Caves", "Bhavani Island", "Prakasam Barrage", "Kondapalli Fort & Toy Village", "Amaravati"],
    famousFood: ["Authentic Andhra Thali", "Crispy Mirchi Bajji on the ghats", "Kakinada Gottam Kaja", "Pesarattu with Upma"],
    tags: ["Temples", "River", "Heritage", "Family", "Caves"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 6,
    name: "Srisailam (Mallikarjuna Jyotirlinga)",
    state: "Andhra Pradesh",
    district: "Nandyal",
    category: "Temples",
    rating: 4.8,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80",
    description: "Ancient sanctuary hidden amidst the dense Nallamala forests along the Krishna River. Unique as both one of the 12 sacred Jyotirlingas and one of the 18 Maha Shakti Peethas (Bhramaramba Devi).",
    bestTime: "October - February",
    budget: "₹1,800 - ₹3,800 / day",
    budgetMin: 1800,
    budgetMax: 3800,
    entryFee: "Free (Special Darshan ₹100 - ₹500)",
    duration: "2 Days",
    thingsToDo: [
      "Seek sacred Jyotirlinga blessings at Mallikarjuna Swamy Temple",
      "Take the ropeway and boat ride across Pathalaganga to Akkamahadevi Caves",
      "View the roaring crest gates of the massive Srisailam Dam",
      "Drive through the scenic Tiger Reserve forest safari routes",
      "Visit Sakshi Ganapathi Temple to register pilgrimage witness"
    ],
    nearbyPlaces: ["Akkamahadevi Caves", "Srisailam Dam", "Pathalaganga", "Nagarjunasagar-Srisailam Tiger Reserve", "Shikharam Viewpoint"],
    famousFood: ["Temple Prasadam Laddus", "Pure Forest Honey", "Andhra Pulihora", "Annadanam Ghee Meals"],
    tags: ["Temples", "Jyotirlinga", "Forest", "Spiritual", "Wildlife"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 7,
    name: "Lepakshi (Veerabhadra Temple & Monoliths)",
    state: "Andhra Pradesh",
    district: "Sri Sathya Sai",
    category: "Heritage",
    rating: 4.7,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    description: "A 16th-century Vijayanagara architectural masterpiece famous for the enigmatic Hanging Pillar that defies gravity, India's largest monolithic Nandi bull, and intricate ceiling frescoes.",
    bestTime: "October - March",
    budget: "₹1,500 - ₹3,000 / day",
    budgetMin: 1500,
    budgetMax: 3000,
    entryFee: "Free (ASI Protected)",
    duration: "1 Day",
    thingsToDo: [
      "Slide a cloth under the famous architectural Hanging Pillar",
      "Photograph the giant 15-foot high monolithic Nandi carved from single granite",
      "Admire 500-year-old Vijayanagara ceiling frescoes & murals",
      "Behold the 7-hooded monolithic Naga Linga shrine",
      "Explore the open-air carved Kalyana Mandapam pillars"
    ],
    nearbyPlaces: ["Hindupur Silk Centers", "Penukonda Fort", "Puttaparthi Prashanti Nilayam"],
    famousFood: ["Rayalaseema Ragi Sankati", "Jowar Roti with Brinjal Gravy", "Doddaballapur Peda"],
    tags: ["Heritage", "Architecture", "Art", "Historical", "Temples"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["winter"]
  },
  {
    id: 8,
    name: "Belum Caves (Subterranean Marvel)",
    state: "Andhra Pradesh",
    district: "Nandyal",
    category: "Adventure",
    rating: 4.6,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
    description: "The second longest cave network in the Indian subcontinent, spanning 3.2 kilometers of subterranean passages, surreal limestone stalactites, musical stone columns, and deep sinkholes.",
    bestTime: "November - February",
    budget: "₹1,500 - ₹3,200 / day",
    budgetMin: 1500,
    budgetMax: 3200,
    entryFee: "₹65 / Adult, ₹45 / Child",
    duration: "1 Day",
    thingsToDo: [
      "Descend 150 feet underground into artificially illuminated passages",
      "Visit Pataalaganga, a mysterious perennial underground stream",
      "Examine stalactites resembling banyan trees and Shiva Lingas",
      "Marvel at musical limestone columns producing resonant notes",
      "Photograph the serene 40-foot white Buddha statue at the cave entrance"
    ],
    nearbyPlaces: ["Gandikota Gorge", "Oravakallu Rock Garden", "Banaganapalle Fort", "Yaganti Temple"],
    famousFood: ["Kurnool Uggani Bajji", "Gongura Pachadi", "Kadapa Karam Dosa"],
    tags: ["Adventure", "Caves", "Geological", "Family", "Exploration"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["winter"]
  },
  {
    id: 9,
    name: "Papikondalu (Godavari Gorges Cruise)",
    state: "Andhra Pradesh",
    district: "Alluri Sitharama Raju",
    category: "Wildlife",
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    description: "An awe-inspiring river canyon where the mighty Godavari narrows into a serpentine gorge between towering emerald green hills. Accessible exclusively via scenic cruise boats.",
    bestTime: "October - February",
    budget: "₹2,500 - ₹5,500 / day",
    budgetMin: 2500,
    budgetMax: 5500,
    entryFee: "Cruise Package ₹1,200 - ₹3,500 (incl. food & guide)",
    duration: "2 Days (Overnight River Camp)",
    thingsToDo: [
      "Cruise on the tranquil Godavari through towering granite cliffs",
      "Overnight stay in traditional bamboo huts on river sandbars",
      "Witness traditional Dhimsa tribal dance around campfire",
      "Visit riverside Gandi Pochamma Temple by boat",
      "Watch morning fog lifting over virgin forest valleys"
    ],
    nearbyPlaces: ["Maredumilli Rainforest", "Rajahmundry Pushkar Ghats", "Bhadrachalam Temple", "Perantapalli Hermitage"],
    famousFood: ["Godavari Chepala Pulusu (Fish Curry)", "Bamboo Chicken", "Atreyapuram Pootharekulu", "Mamidi Tandra"],
    tags: ["Wildlife", "River", "Cruise", "Scenic", "Nature", "Hills"],
    isPopular: true,
    isHiddenGem: true,
    seasons: ["winter"]
  },
  {
    id: 10,
    name: "Konaseema (Emerald Backwaters & Delta)",
    state: "Andhra Pradesh",
    district: "Konaseema (East Godavari)",
    category: "Cultural",
    rating: 4.7,
    reviewsCount: 178,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    description: "Often celebrated as Andhra's own Kerala, Konaseema is an oasis of emerald paddy fields, swaying coconut palm groves, serene Godavari delta backwaters, and coastal confluence beaches.",
    bestTime: "November - February",
    budget: "₹2,200 - ₹4,800 / day",
    budgetMin: 2200,
    budgetMax: 4800,
    entryFee: "Free (Houseboat cruise ₹4,000 - ₹8,000 / night)",
    duration: "2 Days",
    thingsToDo: [
      "Relax on a luxury houseboat cruise through Dindi backwaters",
      "Walk through boundless coconut orchards and village canals",
      "Visit Antarvedi where the Godavari river meets the Bay of Bengal",
      "Explore historic Ainavilli Vinayaka Temple and Muramalla Temple",
      "Taste genuine home-cooked delta delicacies with fresh farm spices"
    ],
    nearbyPlaces: ["Dindi Resorts", "Antarvedi Beach", "Ainavilli Temple", "Rajahmundry", "Kakinada Beach"],
    famousFood: ["Clay-pot Crab Curry", "Royyala Biryani (Prawns)", "Atreyapuram Pootharekulu (Paper Sweet)", "Madatha Kaja"],
    tags: ["Cultural", "Backwaters", "Nature", "Relaxation", "Family"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 11,
    name: "Rajahmundry (Cultural Capital of Andhra)",
    state: "Andhra Pradesh",
    district: "East Godavari",
    category: "Cultural",
    rating: 4.5,
    reviewsCount: 205,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
    description: "Steeped in Telugu literature and history, Rajahmundry sits grandly along the holy Godavari, renowned for the iconic Godavari Arch Bridge, riverside Pushkar ghats, and Asia's largest flowering nurseries at Kadiyam.",
    bestTime: "October - March",
    budget: "₹1,800 - ₹3,600 / day",
    budgetMin: 1800,
    budgetMax: 3600,
    entryFee: "Free",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Attend the evening Godavari Maha Harathi ceremony at Pushkar Ghat",
      "Drive or walk along the iconic Godavari Fourth Arch Bridge",
      "Tour thousands of plant varieties in Kadiyapulanka floral nurseries",
      "Enjoy a sunset boat cruise along the tranquil river bends",
      "Visit the grand ISKCON temple complex by the river bank"
    ],
    nearbyPlaces: ["Papi Hills Cruise Launch", "Dindi Backwaters", "Kotilingeswara Temple", "Kadiyam Nurseries"],
    famousFood: ["Legendary Rajahmundry Rose Milk", "Goli Soda & Hot Punugulu", "Madatha Kaja", "Pot Curd"],
    tags: ["Cultural", "River", "Heritage", "Temples", "Family"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 12,
    name: "Maredumilli (Rainforest & Eco-Tourism)",
    state: "Andhra Pradesh",
    district: "Alluri Sitharama Raju",
    category: "Wildlife",
    rating: 4.8,
    reviewsCount: 230,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    description: "A pristine biodiversity hotspot in the Eastern Ghats. Shrouded in dense semi-evergreen forests with perennial cascades, herbal conservation sanctuaries, and legendary bamboo chicken stalls.",
    bestTime: "July - February",
    budget: "₹2,000 - ₹4,500 / day",
    budgetMin: 2000,
    budgetMax: 4500,
    entryFee: "₹30 - ₹50 per eco-tourism site",
    duration: "2 Days",
    thingsToDo: [
      "Trek to the gushing Jalatarangini and Amruthadhara Waterfalls",
      "Stay in eco-friendly forest wooden cottages and jungle tents",
      "Feast on authentic tribal Bamboo Chicken cooked without oil",
      "Spot hornbills, giant squirrels, and rare orchids on nature trails",
      "Visit Polluru jungle waterfall and herbal plantations"
    ],
    nearbyPlaces: ["Jalatarangini Waterfall", "Amruthadhara Waterfall", "Rampa Waterfalls", "Rampachodavaram Village"],
    famousFood: ["Signature Bamboo Chicken", "Bamboo Biryani", "Wild Forest Honey", "Medicinal Herbal Teas"],
    tags: ["Wildlife", "Waterfalls", "Forest", "Adventure", "Nature", "Rainforest"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["monsoon", "winter"]
  },
  {
    id: 13,
    name: "Amaravati (Dhyana Buddha & Buddhist Relics)",
    state: "Andhra Pradesh",
    district: "Guntur (Palnadu)",
    category: "Heritage",
    rating: 4.5,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    description: "Historic cradle of Mahayana Buddhism dating to the 3rd century BCE, crowned by a breathtaking 125-foot Dhyana Buddha statue on Krishna river banks and the ancient Amaralingeswara Temple.",
    bestTime: "October - March",
    budget: "₹1,600 - ₹3,200 / day",
    budgetMin: 1600,
    budgetMax: 3200,
    entryFee: "Free (Buddha Museum ₹25, ASI Museum ₹20)",
    duration: "1 Day",
    thingsToDo: [
      "Stand before the towering 125-foot Dhyana Buddha statue",
      "Explore ancient Mahastupa ruins and ASI Archaeological Museum",
      "Visit ancient Amaralingeswara Swamy Shiva Temple on river ghats",
      "Stroll the serene manicured Buddha theme park and meditation halls",
      "Learn about Emperor Ashoka and Acharya Nagarjuna's philosophy"
    ],
    nearbyPlaces: ["Vijayawada", "Kondaveedu Fort", "Mangalagiri Temple", "Undavalli Caves"],
    famousFood: ["Guntur Spicy Gongura Mutton / Pappu", "Mirchi Bajji", "Pesarattu", "Palnadu Ragi Mudda"],
    tags: ["Heritage", "Buddhist", "Historical", "Temples", "Cultural"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 14,
    name: "Horsley Hills (The Ooty of Andhra)",
    state: "Andhra Pradesh",
    district: "Annamayya",
    category: "Hills",
    rating: 4.6,
    reviewsCount: 190,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    description: "A tranquil hill station perched at 1,290 meters altitude, blanketed in aromatic eucalyptus and sandalwood trees. Known for cool mountain breezes, misty cliff viewpoints, and peaceful seclusion.",
    bestTime: "September - May",
    budget: "₹2,000 - ₹4,200 / day",
    budgetMin: 2000,
    budgetMax: 4200,
    entryFee: "Free",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Feel the brisk winds atop Gali Bandalu (Wind Rocks) viewpoint",
      "Marvel at 'Kalyani', a giant 150-year-old eucalyptus tree",
      "Indulge in adventure sports like zorbing, rappelling, and rope walking",
      "Visit the tranquil Yenugu Mallamma Temple atop the hill",
      "Take an excursion to nearby Kaigal Waterfalls"
    ],
    nearbyPlaces: ["Kaigal Waterfalls", "Wind Rocks (Gali Bandalu)", "Kalyani Eucalyptus Tree", "Madanapalle Town"],
    famousFood: ["Rayalaseema Kadapa Dosa", "Hot Tomato Rasam Rice", "Fresh eucalyptus herbal honey"],
    tags: ["Hills", "Nature", "Relaxation", "Family", "Adventure"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["summer", "winter"]
  },
  {
    id: 15,
    name: "Nellore (Mypadu Beach & Pulicat Flamingo Sanctuary)",
    state: "Andhra Pradesh",
    district: "Sri Potti Sriramulu Nellore",
    category: "Beaches",
    rating: 4.5,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80",
    description: "A coastal retreat celebrated for the uncrowded golden sands of Mypadu Beach, 12th-century Ranganatha Swamy Temple, and the vast Pulicat Lake sanctuary hosting tens of thousands of migratory pink flamingos.",
    bestTime: "October - March",
    budget: "₹1,600 - ₹3,500 / day",
    budgetMin: 1600,
    budgetMax: 3500,
    entryFee: "Free",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Spot thousands of Greater Flamingos during winter at Pulicat Lake",
      "Relax on the pristine shoreline of Mypadu Beach with coconut water",
      "Visit 12th-century Talpagiri Ranganatha Swamy Temple on Penna river",
      "Tour Nelapattu Bird Sanctuary, one of largest pelican habitats in SE Asia",
      "Take peaceful country boat rides in lagoon backwaters"
    ],
    nearbyPlaces: ["Pulicat Flamingo Sanctuary", "Nelapattu Bird Sanctuary", "Mypadu Beach", "Ranganatha Swamy Temple"],
    famousFood: ["World-Famous Nellore Chepala Pulusu (Fish Curry)", "Nellore Ghee Roast Karam Dosa", "Malai Khaja"],
    tags: ["Beaches", "Wildlife", "Flamingos", "Nature", "Temples"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 16,
    name: "Kurnool (Konda Reddy Buruju & Rock Gardens)",
    state: "Andhra Pradesh",
    district: "Kurnool",
    category: "Heritage",
    rating: 4.6,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80",
    description: "The historical gateway to Rayalaseema, boasting the iconic Konda Reddy Buruju circular fort bastion, the 3-billion-year-old quartz formations of Oravakallu Rock Garden, and Tungabhadra ghats.",
    bestTime: "October - February",
    budget: "₹1,600 - ₹3,200 / day",
    budgetMin: 1600,
    budgetMax: 3200,
    entryFee: "Free (Oravakallu ₹20)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Climb the legendary Konda Reddy Buruju circular bastion",
      "Explore 3-billion-year-old natural quartz rocks at Oravakallu Garden",
      "Enjoy boating in the reservoir lake enclosed by silica rocks",
      "Visit the sacred Tungabhadra river ghats at sunset",
      "Take a side trip to prehistoric Rollapadu Great Indian Bustard sanctuary"
    ],
    nearbyPlaces: ["Oravakallu Rock Garden", "Belum Caves", "Alampur Jogulamba Temple", "Rollapadu Wildlife Sanctuary"],
    famousFood: ["Kurnool Uggani with hot Mirchi Bajji", "Korra Roti", "Nawab Shawarma", "Pulla Reddy Ghee Sweets"],
    tags: ["Heritage", "Forts", "Rock Formations", "Historical", "Geological"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },

  // --- TELANGANA (15 DESTINATIONS) ---
  {
    id: 17,
    name: "Hyderabad (Charminar & Old City Heritage)",
    state: "Telangana",
    district: "Hyderabad",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 580,
    image: "https://images.unsplash.com/photo-1609137144822-45233c7c458a?auto=format&fit=crop&w=1000&q=80",
    description: "The iconic symbol of Hyderabad built in 1591 CE by Muhammad Quli Qutb Shah. Surrounded by the glittering pearl and lac bangle markets of Laad Bazaar, grand Mecca Masjid, and opulent Chowmahalla Palace.",
    bestTime: "October - March",
    budget: "₹2,500 - ₹6,000 / day",
    budgetMin: 2500,
    budgetMax: 6000,
    entryFee: "₹25 / Indian, ₹300 / Foreigner",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Climb to Charminar's upper minarets for panoramic old city views",
      "Shop for dazzling lacquer bangles, perfumes and pearls at Laad Bazaar",
      "Tour the royal Durbar Hall and vintage car fleet of Chowmahalla Palace",
      "Admire the granite craftsmanship of Mecca Masjid",
      "Feast on authentic Hyderabadi Dum Biryani at historic eateries"
    ],
    nearbyPlaces: ["Chowmahalla Palace", "Mecca Masjid", "Salar Jung Museum", "Laad Bazaar", "Golconda Fort"],
    famousFood: ["Authentic Hyderabadi Dum Biryani", "Irani Chai with Osmania Biscuits", "Mutton Haleem (Ramzan)", "Double Ka Meetha"],
    tags: ["Heritage", "City", "Historical", "Shopping", "Food", "Iconic"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 18,
    name: "Hyderabad (Golconda Fort & Qutb Shahi Tombs)",
    state: "Telangana",
    district: "Hyderabad",
    category: "Heritage",
    rating: 4.8,
    reviewsCount: 460,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    description: "A colossal medieval fortress famed for its ingenious acoustic engineering, impenetrable granite battlements, and vaults that once held the Koh-i-Noor diamond. Features a dramatic sound & light show.",
    bestTime: "October - March",
    budget: "₹1,800 - ₹4,000 / day",
    budgetMin: 1800,
    budgetMax: 4000,
    entryFee: "₹25 / Indian, ₹300 / Foreigner (Sound & Light ₹140)",
    duration: "1 Day",
    thingsToDo: [
      "Test the acoustic echo clapping point at Fateh Darwaza",
      "Climb 380 stone steps to the Bala Hissar royal palace summit",
      "Watch the evening Sound and Light Show narrated by Amitabh Bachchan",
      "Visit the adjacent Qutb Shahi Tombs domed garden mausoleums",
      "Explore ancient secret water conduits and armory vaults"
    ],
    nearbyPlaces: ["Qutb Shahi Tombs", "Taramati Baradari", "Durgam Cheruvu Cable Bridge", "Shilparamam Craft Village"],
    famousFood: ["Hyderabadi Marag Soup", "Pathar Ka Gosht", "Lukhmi", "Qubani Ka Meetha with cream"],
    tags: ["Heritage", "Forts", "Acoustics", "Historical", "Architecture"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 19,
    name: "Hyderabad (Hussain Sagar & Tank Bund)",
    state: "Telangana",
    district: "Hyderabad",
    category: "Family",
    rating: 4.6,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80",
    description: "Heart-shaped lake commissioned in 1562, crowned by an 18-meter-tall monolithic granite Buddha statue standing upon Gibraltar Rock. Features buzzing promenades, speedboat rides, and park attractions.",
    bestTime: "All Year (Evenings Best)",
    budget: "₹1,200 - ₹3,000 / day",
    budgetMin: 1200,
    budgetMax: 3000,
    entryFee: "Free (Speedboat / Ferry ₹75 - ₹150)",
    duration: "Half Day to 1 Day",
    thingsToDo: [
      "Take a ferry boat ride across the water to the monolithic Buddha Statue",
      "Stroll the illuminated Tank Bund boulevard lined with statues of Telugu icons",
      "Watch the musical laser water fountain show at Lumbini Park",
      "Visit the serene white-marble Birla Mandir temple on Naubat Pahad hill",
      "Sample street foods and desserts at Eat Street overlooking the lake"
    ],
    nearbyPlaces: ["Birla Mandir", "NTR Gardens", "Lumbini Park", "Sanjeevaiah Park", "Telangana Martyrs Memorial"],
    famousFood: ["Eat Street Chaat & Dosa", "Irani Chai & Bun Maska", "Pav Bhaji", "Kulfi Falooda"],
    tags: ["Family", "Lake", "Statue", "City", "Boating", "Evening"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter", "monsoon"]
  },
  {
    id: 20,
    name: "Warangal (Ramappa Temple & Kakatiya Marvels)",
    state: "Telangana",
    district: "Mulugu (Warangal Region)",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    description: "An 800-year-old Kakatiya engineering marvel and UNESCO World Heritage Site. Built with earthquake-resistant sandbox foundations and floating bricks, featuring intricately carved black basalt bracket figures.",
    bestTime: "October - March",
    budget: "₹1,800 - ₹3,800 / day",
    budgetMin: 1800,
    budgetMax: 3800,
    entryFee: "Free / ₹25 ASI Entry",
    duration: "2 Days",
    thingsToDo: [
      "Inspect the legendary lightweight bricks that float on water",
      "Admire the exquisite 12 sculpted dancing maiden bracket figures",
      "Take a peaceful boat cruise on Ramappa Lake adjacent to the temple",
      "Visit the Thousand Pillar Temple in neighboring Hanamkonda",
      "Walk beneath the iconic Kakatiya Kala Thorana stone gateways in Warangal Fort"
    ],
    nearbyPlaces: ["Ramappa Lake", "Thousand Pillar Temple", "Warangal Fort", "Bhadrakali Temple", "Laknavaram Lake"],
    famousFood: ["Telangana Sarva Pindi (Crispy rice pancake)", "Sakinalu", "Spicy Gongura Mutton", "Garijelu"],
    tags: ["Heritage", "UNESCO", "Architecture", "Kakatiya", "Temples"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 21,
    name: "Bogatha Waterfall (The Niagara of Telangana)",
    state: "Telangana",
    district: "Jayashankar Bhupalpally",
    category: "Waterfalls",
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    description: "Telangana's second-highest waterfall cascades across wide rock ledges into a scenic natural plunge pool. Enclosed by dense Chikupally reserve forests and wooden watchtowers.",
    bestTime: "July - November (Monsoon Peak)",
    budget: "₹1,600 - ₹3,200 / day",
    budgetMin: 1600,
    budgetMax: 3200,
    entryFee: "₹30 / person (Parking ₹50)",
    duration: "1 Day",
    thingsToDo: [
      "Take a safe supervised swim in the natural plunge pool below",
      "Trek along shaded forest trails leading to the upper crest",
      "Photograph the wide curtain falls from elevated wooden watchtowers",
      "Picnic in the shaded woodland groves by the stream",
      "Combine with an excursion to Laknavaram suspension bridge"
    ],
    nearbyPlaces: ["Laknavaram Suspension Bridge", "Kaleshwaram Temple Project", "Medaram Sammakka Sarakka Forest"],
    famousFood: ["Telangana Natu Kodi Pulusu with Jowar Roti", "Pachi Pulusu", "Crispy Makka Garelu"],
    tags: ["Waterfalls", "Adventure", "Nature", "Monsoon", "Photography"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["monsoon", "winter"]
  },
  {
    id: 22,
    name: "Ananthagiri Hills (Vikarabad Weekend Retreat)",
    state: "Telangana",
    district: "Vikarabad",
    category: "Hills",
    rating: 4.6,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    description: "A serene forest hill station located just 80 km from Hyderabad. Known as the birthplace of the Musi River, harboring ancient cave temples, tranquil reservoir lakes, and dense trekking trails.",
    bestTime: "July - February",
    budget: "₹1,400 - ₹3,200 / day",
    budgetMin: 1400,
    budgetMax: 3200,
    entryFee: "Free (Kayaking ₹150 - ₹250)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Trek through dense woodland trails from temple to Kerelli Viewpoint",
      "Camp cliffside under the stars near Kotepally Reservoir",
      "Kayak in the peaceful open waters of Kotepally Lake",
      "Visit the 400-year-old Sri Anantha Padmanabha Swamy Temple",
      "Enjoy sunrise tea amidst rolling mist on the hillside"
    ],
    nearbyPlaces: ["Kotepally Reservoir", "Anantha Padmanabha Temple", "Nagasamudram Lake", "Vikarabad Forest Reserve"],
    famousFood: ["Spicy Telangana Chicken Fry", "Jowar Roti with Gongura", "Fresh Field Corn Roasted over coals"],
    tags: ["Hills", "Trekking", "Adventure", "Camping", "Weekend Getaway"],
    isPopular: true,
    isHiddenGem: true,
    seasons: ["monsoon", "winter"]
  },
  {
    id: 23,
    name: "Bhadrachalam (Sri Sita Ramachandra Swamy)",
    state: "Telangana",
    district: "Bhadradri Kothagudem",
    category: "Temples",
    rating: 4.8,
    reviewsCount: 330,
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    description: "Sacred temple town nestled on the banks of holy Godavari river. Home to the legendary 17th-century shrine constructed by Bhakta Ramadasu, celebrating the epic Ramayana connection.",
    bestTime: "October - March (Sri Rama Navami Peak)",
    budget: "₹1,600 - ₹3,600 / day",
    budgetMin: 1600,
    budgetMax: 3600,
    entryFee: "Free (Special Darshan ₹100)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Offer prayers at the sanctum sanctorum of Sri Sita Ramachandra Swamy",
      "Take a sacred holy dip at the serene Godavari river ghats",
      "Visit Parnasala forest hermitage where Lord Rama and Sita resided",
      "Examine antique jewelry and Ramadasu's historic prison coin relics",
      "Board river cruises toward Papikondalu gorges from Bhadrachalam ghats"
    ],
    nearbyPlaces: ["Parnasala", "Godavari River Ghats", "Kinnerasani Wildlife Sanctuary & Dam", "Papikondalu"],
    famousFood: ["Temple Laddu & Pulihora Prasadam", "Godavari Pulasa Fish (Seasonal)", "Jowar Roti Thali"],
    tags: ["Temples", "Spiritual", "River", "Pilgrimage", "Heritage"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 24,
    name: "Adilabad (Kuntala & Pochera Waterfalls)",
    state: "Telangana",
    district: "Adilabad",
    category: "Waterfalls",
    rating: 4.7,
    reviewsCount: 190,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    description: "Telangana's highest waterfall plummets 150 feet down two rugged rock tiers inside dense Sahyadri mountain forests. Formed by the Kadam river and surrounded by wild teak jungles.",
    bestTime: "July - December",
    budget: "₹1,800 - ₹3,500 / day",
    budgetMin: 1800,
    budgetMax: 3500,
    entryFee: "₹20 / person",
    duration: "2 Days",
    thingsToDo: [
      "Descend 408 stone steps through teak forests to Kuntala's roaring base",
      "Visit picturesque Pochera Waterfall cascading over deep rock terraces",
      "Explore wildlife and tiger conservation trails in Kawal Tiger Reserve",
      "Shop for world-famous Nirmal lacquer toys and paintings nearby",
      "Visit historic Gnana Saraswathi temple at Basara on Godavari bank"
    ],
    nearbyPlaces: ["Pochera Waterfall", "Kawal Tiger Reserve", "Nirmal Toy & Craft Town", "Basara Saraswathi Temple"],
    famousFood: ["Adilabad Jowar Ghatka", "Nirmal Jowar Roti with Spicy Country Chicken", "River Fish Fry"],
    tags: ["Waterfalls", "Forest", "Adventure", "Nature", "Wildlife"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["monsoon", "winter"]
  },
  {
    id: 25,
    name: "Nagarjuna Sagar & Ethipothala Falls",
    state: "Telangana",
    district: "Nalgonda",
    category: "Adventure",
    rating: 4.7,
    reviewsCount: 300,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    description: "One of the world's largest masonry dams spanning the Krishna River, creating an immense emerald reservoir. Features a launch ferry to island Buddhist museums and the 70-foot Ethipothala Falls.",
    bestTime: "August - February",
    budget: "₹1,600 - ₹3,400 / day",
    budgetMin: 1600,
    budgetMax: 3400,
    entryFee: "Free (Island Boat Ferry ₹150 / person)",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Watch the roaring spectacle of 26 dam spillway gates during monsoon",
      "Ride a motor launch to Nagarjunakonda Island Buddhist archaeological museum",
      "Visit the 70-foot Ethipothala waterfall and crocodile breeding center",
      "Explore Anupu reconstructed 3rd-century Buddhist university site",
      "Enjoy river breeze at the hilltop viewpoint cottages"
    ],
    nearbyPlaces: ["Nagarjunakonda Island Museum", "Ethipothala Waterfall", "Anupu Buddhist Site", "Bhongir Fort"],
    famousFood: ["Fresh Krishna River Fish Fry", "Nalgonda Ragi Sangati with Natu Kodi", "Spicy Mutton Curry"],
    tags: ["Adventure", "Dam", "Buddhist", "Waterfalls", "Family"],
    isPopular: true,
    isHiddenGem: false,
    seasons: ["monsoon", "winter"]
  },
  {
    id: 26,
    name: "Khammam (Khammam Fort & Palair Lake)",
    state: "Telangana",
    district: "Khammam",
    category: "Heritage",
    rating: 4.5,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1000&q=80",
    description: "A 10th-century stone citadel constructed atop Stambhadri rock hill, fusing Kakatiya and Musunuri architectural aesthetics. Complementary with water sports resorts at Palair Lake.",
    bestTime: "October - February",
    budget: "₹1,500 - ₹3,000 / day",
    budgetMin: 1500,
    budgetMax: 3000,
    entryFee: "Free",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Climb Stambhadri hill to explore medieval battlements and gateways",
      "Enjoy boating and water sports at Palair Lake reservoir resort",
      "Visit Kinnerasani Deer Park and dam in adjacent forest reserve",
      "Explore ancient Nelakondapalli Buddhist Mahastupa site",
      "Capture sunset reflections over the Munneru river banks"
    ],
    nearbyPlaces: ["Palair Lake", "Nelakondapalli Buddhist Stupa", "Kinnerasani Dam & Sanctuary", "Bhadrachalam"],
    famousFood: ["Khammam Mirchi Bajji", "Telangana Sarva Pindi", "Spicy Natu Kodi Curry", "Bellam Jalebi"],
    tags: ["Heritage", "Forts", "Lakes", "Family", "Historical"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 27,
    name: "Medak (Medak Cathedral & Hill Fort)",
    state: "Telangana",
    district: "Medak",
    category: "Heritage",
    rating: 4.6,
    reviewsCount: 185,
    image: "https://images.unsplash.com/photo-1548625361-195b0e5052bb?auto=format&fit=crop&w=1000&q=80",
    description: "Home to Asia's second largest cathedral built in Gothic revival style with majestic 175-foot spires and stained-glass biblical windows, alongside the historic 12th-century Kakatiya hill fort.",
    bestTime: "October - February",
    budget: "₹1,400 - ₹2,800 / day",
    budgetMin: 1400,
    budgetMax: 2800,
    entryFee: "Free",
    duration: "1 Day",
    thingsToDo: [
      "Gaze at the radiant illuminated stained-glass windows inside Medak Cathedral",
      "Hike 500 stone steps to Medak Hill Fort and see the 17th-century brass cannon",
      "Embark on a wildlife safari at Pocharam Wildlife Sanctuary and Lake",
      "Observe migratory waterfowl along Pocharam reservoir bund",
      "Visit the sacred Edupayala Vana Durga Bhavani temple nearby"
    ],
    nearbyPlaces: ["Pocharam Wildlife Sanctuary", "Medak Hill Fort", "Edupayala Temple", "Singur Dam"],
    famousFood: ["Medak Bagara Rice & Dalcha", "Jowar Rotte with Country Chicken", "Pachi Pulusu", "Pot Curd"],
    tags: ["Heritage", "Cathedral", "Forts", "Wildlife", "Family"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 28,
    name: "Karimnagar (Elgandal Fort & Silver Filigree)",
    state: "Telangana",
    district: "Karimnagar",
    category: "Cultural",
    rating: 4.5,
    reviewsCount: 155,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    description: "Celebrated for its UNESCO-noted GI-tagged delicate Silver Filigree (Tarkasi) metal crafts, sprawling Lower Manair Dam water front, and the medieval hilltop fortress of Elgandal.",
    bestTime: "October - March",
    budget: "₹1,500 - ₹3,000 / day",
    budgetMin: 1500,
    budgetMax: 3000,
    entryFee: "Free",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Climb Elgandal Fort to see oscillating minarets and Alamgir mosque",
      "Watch master artisans create intricate Silver Filigree jewelry and artifacts",
      "Enjoy evening laser fountain shows and boating at Lower Manair Dam",
      "Pay respects at ancient Vemulawada Raja Rajeshwara Swamy Temple",
      "Visit the revered hilltop shrine of Kondagattu Anjaneya Swamy"
    ],
    nearbyPlaces: ["Lower Manair Dam", "Vemulawada Temple", "Kondagattu Temple", "Elgandal Fort"],
    famousFood: ["Karimnagar Sakinalu", "Crispy Sarva Pindi", "Karimnagar Garijalu", "Spicy Natu Kodi"],
    tags: ["Cultural", "Handicrafts", "Forts", "Temples", "Lakes"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 29,
    name: "Nizamabad (Alisagar Deer Park & Ashok Sagar)",
    state: "Telangana",
    district: "Nizamabad",
    category: "Family",
    rating: 4.5,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    description: "Historical city featuring the sprawling deer sanctuary of Alisagar island park, rock gardens around Ashok Sagar with an 18-foot rock Buddha statue, and the hilltop Nizamabad Fort.",
    bestTime: "October - February",
    budget: "₹1,400 - ₹2,900 / day",
    budgetMin: 1400,
    budgetMax: 2900,
    entryFee: "Free (Parks ₹20)",
    duration: "1 Day",
    thingsToDo: [
      "Boating and spotted deer viewing at Alisagar Deer Park island",
      "Walk through Ashok Sagar rock gardens and see the 18-ft rock Buddha statue",
      "Climb to the 10th-century Rashtrakuta fort and clock tower overlooking city",
      "Visit ancient Sri Neela Kantheswara Temple built by Satavahana rulers",
      "Picnic by the serene waters of Sri Ram Sagar Dam (Pochampad)"
    ],
    nearbyPlaces: ["Alisagar Deer Park", "Ashok Sagar", "Sri Ram Sagar Dam", "Dichpally Ramalayam"],
    famousFood: ["Nizamabad Spicy Dum Biryani", "Sarva Pindi", "Ambada Mutton", "Kalakand Sweet"],
    tags: ["Family", "Parks", "Lakes", "Forts", "Relaxation"],
    isPopular: false,
    isHiddenGem: false,
    seasons: ["winter"]
  },
  {
    id: 30,
    name: "Mahbubnagar (Pillalamarri 800-Year Banyan)",
    state: "Telangana",
    district: "Mahbubnagar",
    category: "Wildlife",
    rating: 4.5,
    reviewsCount: 170,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    description: "Home to the legendary 800-year-old Pillalamarri Great Banyan Tree whose aerial prop roots spread over 4 acres. Paired with rugged Koilkonda Fort and Jurala Dam across the Krishna River.",
    bestTime: "October - February",
    budget: "₹1,400 - ₹2,800 / day",
    budgetMin: 1400,
    budgetMax: 2800,
    entryFee: "₹15 at Pillalamarri park",
    duration: "1 Day",
    thingsToDo: [
      "Stand beneath the boundless 4-acre canopy of the 800-year Banyan Tree",
      "Visit the deer park, aviary, and archaeological museum at Pillalamarri",
      "Trek rugged boulders up to Koilkonda Fort across its suspension bridge",
      "Picnic and enjoy water views at the Jurala Dam barrage reservoir",
      "Take an excursion to the ancient 5th-century Alampur Jogulamba temple"
    ],
    nearbyPlaces: ["Pillalamarri Banyan Tree", "Koilkonda Fort", "Jurala Dam", "Manyamkonda Temple", "Alampur Temples"],
    famousFood: ["Mahbubnagar Jowar Roti", "Pachi Pulusu with Rice", "Spicy Gongura Pachadi", "Khaja"],
    tags: ["Wildlife", "Heritage", "Nature", "Forts", "Ancient Banyan"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["winter"]
  },
  {
    id: 31,
    name: "Pakhal Lake & Wildlife Sanctuary",
    state: "Telangana",
    district: "Mahabubabad (Warangal Region)",
    category: "Wildlife",
    rating: 4.7,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80",
    description: "A man-made lake constructed in 1213 CE by Kakatiya King Ganapathideva, spreading over 30 sq km amidst rolling deciduous hills harboring leopards, sloth bears, and thousands of migratory ducks.",
    bestTime: "October - March",
    budget: "₹1,500 - ₹3,000 / day",
    budgetMin: 1500,
    budgetMax: 3000,
    entryFee: "₹25 / person",
    duration: "1 - 2 Days",
    thingsToDo: [
      "Boating across the pristine waters of the 30 sq km historic Kakatiya lake",
      "Jeep jungle safari in the dense Pakhal Wildlife Sanctuary",
      "Spot migratory waterbirds, teals, and wild boars by the lake shores",
      "Camp on the peaceful lake bund under pristine starry skies",
      "Sunset photography of reflections over the Kakatiya forested hills"
    ],
    nearbyPlaces: ["Ramappa Temple", "Warangal City", "Laknavaram Lake", "Bhadrakali Lake"],
    famousFood: ["Telangana Sarva Pindi", "Natu Kodi Roast", "Makka Vada", "Jowar Rotte"],
    tags: ["Wildlife", "Lakes", "Nature", "Kakatiya", "Camping", "Scenic"],
    isPopular: false,
    isHiddenGem: true,
    seasons: ["winter", "monsoon"]
  }
];

// District mapping by state for cascading selection
const DISTRICTS_DATA = {
  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Visakhapatnam",
    "Tirupati",
    "YSR Kadapa",
    "NTR (Krishna)",
    "Nandyal",
    "Sri Sathya Sai",
    "Konaseema (East Godavari)",
    "East Godavari",
    "Guntur (Palnadu)",
    "Annamayya",
    "Sri Potti Sriramulu Nellore",
    "Kurnool"
  ],
  "Telangana": [
    "Hyderabad",
    "Mulugu (Warangal Region)",
    "Jayashankar Bhupalpally",
    "Vikarabad",
    "Bhadradri Kothagudem",
    "Adilabad",
    "Nalgonda",
    "Khammam",
    "Medak",
    "Karimnagar",
    "Nizamabad",
    "Mahbubnagar",
    "Mahabubabad (Warangal Region)"
  ]
};

// ==========================================
// 2. CENTRAL APPLICATION STATE
// ==========================================
const AppState = {
  searchQuery: "",
  selectedState: "all",
  selectedDistrict: "all",
  selectedCategory: "all",
  minRating: 0,
  sortBy: "popularity",
  activeModalDestinationId: null
};

// ==========================================
// 3. STORAGE MANAGER (LOCALSTORAGE WRAPPER)
// ==========================================
const Storage = {
  // Authentication
  getUsers() {
    const raw = localStorage.getItem("ie_users");
    if (!raw) {
      // Initialize with default demo account
      const defaultUsers = [
        {
          fullName: "Shaik Karishma",
          email: "karishma@explorer.com",
          password: "password123",
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem("ie_users", JSON.stringify(defaultUsers));
      return defaultUsers;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  },
  saveUsers(users) {
    localStorage.setItem("ie_users", JSON.stringify(users));
  },
  getSession() {
    const raw = localStorage.getItem("ie_session");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      // In case old format stored plain string email
      return { fullName: "Shaik Karishma", email: raw };
    }
  },
  setSession(userObj) {
    localStorage.setItem("ie_session", JSON.stringify(userObj));
  },
  clearSession() {
    localStorage.removeItem("ie_session");
  },

  // Favorites (Array of destination IDs)
  getFavorites() {
    try {
      return JSON.parse(localStorage.getItem("ie_favorites") || "[]");
    } catch {
      return [];
    }
  },
  saveFavorites(favIds) {
    localStorage.setItem("ie_favorites", JSON.stringify(favIds));
  },

  // Trips (Array of destination IDs)
  getTrip() {
    try {
      return JSON.parse(localStorage.getItem("ie_trip") || "[]");
    } catch {
      return [];
    }
  },
  saveTrip(tripIds) {
    localStorage.setItem("ie_trip", JSON.stringify(tripIds));
  },

  // Reviews ({ [destId]: Array of reviews })
  getReviews() {
    try {
      return JSON.parse(localStorage.getItem("ie_reviews") || "{}");
    } catch {
      return {};
    }
  },
  saveReviews(reviewsMap) {
    localStorage.setItem("ie_reviews", JSON.stringify(reviewsMap));
  },

  // Recently Viewed IDs
  getRecent() {
    try {
      return JSON.parse(localStorage.getItem("ie_recent") || "[]");
    } catch {
      return [];
    }
  },
  addRecent(destId) {
    let recent = this.getRecent().filter(id => id !== destId);
    recent.unshift(destId);
    recent = recent.slice(0, 6);
    localStorage.setItem("ie_recent", JSON.stringify(recent));
  },

  // Theme
  getTheme() {
    return localStorage.getItem("ie_theme") || "dark";
  },
  setTheme(theme) {
    localStorage.setItem("ie_theme", theme);
  },

  // Platform Rating
  getPlatformRating() {
    return localStorage.getItem("ie_platform_rating") || null;
  },
  setPlatformRating(val) {
    localStorage.setItem("ie_platform_rating", val);
  }
};

// ==========================================
// 4. TOAST NOTIFICATIONS SYSTEM
// ==========================================
function showToast(message, type = "info", icon = null) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const defaultIcons = {
    success: "fa-solid fa-circle-check",
    error: "fa-solid fa-circle-xmark",
    warning: "fa-solid fa-triangle-exclamation",
    info: "fa-solid fa-circle-info"
  };

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="${icon || defaultIcons[type] || defaultIcons.info} toast-icon"></i>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" aria-label="Dismiss toast"><i class="fa-solid fa-xmark"></i></button>
  `;

  // Close button listener
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.add("toast-hiding");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  // Auto dismiss after 3.5 seconds
  setTimeout(() => {
    if (toast.isConnected) {
      toast.classList.add("toast-hiding");
      setTimeout(() => toast.remove(), 300);
    }
  }, 3500);
}

// ==========================================
// 5. THEME MANAGER (DARK / LIGHT MODE)
// ==========================================
const ThemeManager = {
  init() {
    const savedTheme = Storage.getTheme();
    this.applyTheme(savedTheme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        this.applyTheme(newTheme);
        Storage.setTheme(newTheme);
        showToast(`Switched to ${newTheme === "dark" ? "Dark" : "Light"} Mode`, "info");
      });
    }
  },

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = document.getElementById("themeIcon");
    if (icon) {
      if (theme === "dark") {
        icon.className = "fa-solid fa-moon";
      } else {
        icon.className = "fa-solid fa-sun";
      }
    }
  }
};

// ==========================================
// 6. AUTHENTICATION & PROFILE MANAGER
// ==========================================
const AuthManager = {
  init() {
    this.updateNavAuth();
    this.bindEvents();
  },

  updateNavAuth() {
    const container = document.getElementById("authNavContainer");
    const session = Storage.getSession();

    if (!container) return;

    if (session) {
      // User is logged in
      const initials = session.fullName
        ? session.fullName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
        : "U";

      container.innerHTML = `
        <button id="navUserChipBtn" class="user-nav-chip" title="Open Explorer Profile">
          <span class="user-nav-avatar">${initials}</span>
          <span class="user-nav-name">${session.fullName.split(" ")[0]}</span>
          <i class="fa-solid fa-chevron-down" style="font-size: 0.75rem; opacity: 0.7;"></i>
        </button>
      `;

      document.getElementById("navUserChipBtn")?.addEventListener("click", () => {
        this.openProfileModal();
      });
    } else {
      // User is logged out
      container.innerHTML = `
        <button id="navLoginBtn" class="btn btn-outline btn-sm">
          <i class="fa-solid fa-user"></i> <span>Login</span>
        </button>
      `;

      document.getElementById("navLoginBtn")?.addEventListener("click", () => {
        this.openAuthModal("login");
      });
    }
  },

  bindEvents() {
    // Auth Modal tab switching
    const tabLogin = document.getElementById("authTabLogin");
    const tabSignup = document.getElementById("authTabSignup");
    const formLogin = document.getElementById("loginForm");
    const formSignup = document.getElementById("signupForm");

    tabLogin?.addEventListener("click", () => {
      tabLogin.classList.add("active");
      tabSignup.classList.remove("active");
      formLogin.classList.remove("hidden");
      formSignup.classList.add("hidden");
    });

    tabSignup?.addEventListener("click", () => {
      tabSignup.classList.add("active");
      tabLogin.classList.remove("active");
      formSignup.classList.remove("hidden");
      formLogin.classList.add("hidden");
    });

    document.getElementById("switchToSignupLink")?.addEventListener("click", (e) => {
      e.preventDefault();
      tabSignup?.click();
    });

    document.getElementById("switchToLoginLink")?.addEventListener("click", (e) => {
      e.preventDefault();
      tabLogin?.click();
    });

    // Close Auth Modal
    document.getElementById("closeAuthModalBtn")?.addEventListener("click", () => {
      this.closeAuthModal();
    });

    // Close Profile Modal
    document.getElementById("closeProfileModalBtn")?.addEventListener("click", () => {
      this.closeProfileModal();
    });

    // Quick Demo Login Button
    document.getElementById("quickDemoLoginBtn")?.addEventListener("click", () => {
      Storage.setSession({
        fullName: "Shaik Karishma",
        email: "karishma@explorer.com"
      });
      this.closeAuthModal();
      this.updateNavAuth();
      showToast("Welcome back, Shaik Karishma! 👋", "success");
    });

    // Handle Login Form Submit
    formLogin?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim().toLowerCase();
      const pwd = document.getElementById("loginPassword").value;

      const users = Storage.getUsers();
      const match = users.find(u => u.email === email && u.password === pwd);

      if (!match) {
        showToast("Invalid email or password. Please try again.", "error");
        return;
      }

      Storage.setSession({
        fullName: match.fullName || "Explorer Traveler",
        email: match.email
      });

      this.closeAuthModal();
      this.updateNavAuth();
      showToast(`Welcome back, ${match.fullName || "Traveler"}! 👋`, "success");
    });

    // Handle Signup Form Submit
    formSignup?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim().toLowerCase();
      const pwd = document.getElementById("signupPassword").value;
      const confirmPwd = document.getElementById("signupConfirmPassword").value;

      if (pwd !== confirmPwd) {
        showToast("Passwords do not match. Please re-enter.", "warning");
        return;
      }

      if (pwd.length < 6) {
        showToast("Password must be at least 6 characters long.", "warning");
        return;
      }

      const users = Storage.getUsers();
      if (users.some(u => u.email === email)) {
        showToast("An account with this email already exists. Please log in.", "error");
        return;
      }

      const newUser = {
        fullName: name,
        email: email,
        password: pwd,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      Storage.saveUsers(users);
      Storage.setSession({ fullName: name, email: email });

      this.closeAuthModal();
      this.updateNavAuth();
      showToast(`Account created! Welcome, ${name} 🎉`, "success");
    });

    // Logout Button
    document.getElementById("logoutBtn")?.addEventListener("click", () => {
      Storage.clearSession();
      this.closeProfileModal();
      this.updateNavAuth();
      showToast("Logged out successfully.", "info");
    });
  },

  openAuthModal(initialTab = "login") {
    const modal = document.getElementById("authModal");
    if (!modal) return;
    modal.classList.remove("hidden");

    if (initialTab === "login") {
      document.getElementById("authTabLogin")?.click();
    } else {
      document.getElementById("authTabSignup")?.click();
    }
  },

  closeAuthModal() {
    document.getElementById("authModal")?.classList.add("hidden");
  },

  openProfileModal() {
    const modal = document.getElementById("profileModal");
    const session = Storage.getSession();
    if (!modal || !session) return;

    // Fill profile fields
    const nameEl = document.getElementById("profileHeading");
    const emailEl = document.getElementById("profileEmail");
    const avatarEl = document.getElementById("profileAvatarInitial");

    if (nameEl) nameEl.textContent = session.fullName;
    if (emailEl) emailEl.textContent = session.email;
    if (avatarEl) {
      avatarEl.textContent = session.fullName
        ? session.fullName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
        : "U";
    }

    // Fill counts
    const favs = Storage.getFavorites();
    const trips = Storage.getTrip();
    const reviewsMap = Storage.getReviews();
    let totalReviews = 0;
    Object.values(reviewsMap).forEach(list => totalReviews += list.length);

    document.getElementById("profTripCount").textContent = trips.length;
    document.getElementById("profFavCount").textContent = favs.length;
    document.getElementById("profReviewCount").textContent = totalReviews;

    // Render recently viewed
    const recentIds = Storage.getRecent();
    const recentContainer = document.getElementById("profileRecentList");
    if (recentContainer) {
      if (recentIds.length === 0) {
        recentContainer.innerHTML = '<span class="muted-text">No recently viewed destinations yet.</span>';
      } else {
        recentContainer.innerHTML = recentIds.map(id => {
          const dest = DESTINATIONS.find(d => d.id === id);
          if (!dest) return "";
          return `<button class="recent-pill" data-dest-id="${dest.id}"><i class="fa-solid fa-location-dot"></i> ${dest.name}</button>`;
        }).join("");

        recentContainer.querySelectorAll(".recent-pill").forEach(btn => {
          btn.addEventListener("click", () => {
            const destId = parseInt(btn.dataset.destId, 10);
            this.closeProfileModal();
            DestinationModal.open(destId);
          });
        });
      }
    }

    modal.classList.remove("hidden");
  },

  closeProfileModal() {
    document.getElementById("profileModal")?.classList.add("hidden");
  }
};

// ==========================================
// 7. DESTINATION CARDS & RENDERING ENGINE
// ==========================================
const DestinationManager = {
  init() {
    this.populateDistricts();
    this.renderAll();
    this.bindFilters();
    this.renderShowcases();
  },

  populateDistricts() {
    const districtSelect = document.getElementById("districtSelect");
    if (!districtSelect) return;

    districtSelect.innerHTML = '<option value="all">All Districts & Cities</option>';

    let districts = [];
    if (AppState.selectedState === "all") {
      districts = [
        ...DISTRICTS_DATA["Andhra Pradesh"],
        ...DISTRICTS_DATA["Telangana"]
      ];
    } else if (DISTRICTS_DATA[AppState.selectedState]) {
      districts = DISTRICTS_DATA[AppState.selectedState];
    }

    // Deduplicate and sort
    const uniqueDistricts = Array.from(new Set(districts)).sort();

    uniqueDistricts.forEach(dist => {
      const opt = document.createElement("option");
      opt.value = dist;
      opt.textContent = dist;
      if (AppState.selectedDistrict === dist) opt.selected = true;
      districtSelect.appendChild(opt);
    });
  },

  getFilteredDestinations() {
    return DESTINATIONS.filter(item => {
      // 1. Search Query
      if (AppState.searchQuery) {
        const q = AppState.searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDistrict = item.district.toLowerCase().includes(q);
        const matchesState = item.state.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));

        if (!matchesName && !matchesDistrict && !matchesState && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      // 2. State Filter
      if (AppState.selectedState !== "all" && item.state !== AppState.selectedState) {
        return false;
      }

      // 3. District Filter
      if (AppState.selectedDistrict !== "all" && item.district !== AppState.selectedDistrict) {
        return false;
      }

      // 4. Category Filter
      if (AppState.selectedCategory !== "all" && item.category !== AppState.selectedCategory) {
        return false;
      }

      // 5. Rating Filter
      if (AppState.minRating > 0 && item.rating < AppState.minRating) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      // Sort Order
      switch (AppState.sortBy) {
        case "rating-high":
          return b.rating - a.rating;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "popularity":
        default:
          return b.reviewsCount - a.reviewsCount;
      }
    });
  },

  renderAll() {
    const grid = document.getElementById("destinationsGrid");
    const emptyState = document.getElementById("emptySearchState");
    const resultsCount = document.getElementById("resultsCount");

    if (!grid) return;

    const filtered = this.getFilteredDestinations();

    if (resultsCount) {
      resultsCount.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState?.classList.remove("hidden");
      return;
    }

    emptyState?.classList.add("hidden");
    grid.innerHTML = filtered.map(item => this.createCardHTML(item)).join("");
    this.bindCardEvents(grid);
  },

  createCardHTML(dest) {
    const favs = Storage.getFavorites();
    const trips = Storage.getTrip();
    const isFav = favs.includes(dest.id);
    const isInTrip = trips.includes(dest.id);
    const stateTagClass = dest.state === "Andhra Pradesh" ? "tag-state-ap" : "tag-state-ts";

    return `
      <article class="destination-card" data-id="${dest.id}">
        <div class="card-media">
          <img 
            src="${dest.image}" 
            alt="${dest.name}" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80';"
          />
          <div class="card-media-overlay"></div>
          
          <div class="card-badges">
            <span class="badge-tag ${stateTagClass}">${dest.state === "Andhra Pradesh" ? "AP" : "Telangana"}</span>
            <span class="badge-tag tag-cat">${dest.category}</span>
            ${dest.isHiddenGem ? '<span class="badge-tag tag-gem"><i class="fa-solid fa-gem"></i> Gem</span>' : ''}
          </div>

          <button 
            class="card-fav-btn ${isFav ? 'active' : ''}" 
            data-id="${dest.id}" 
            title="${isFav ? 'Remove from favorites' : 'Add to favorites'}" 
            aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
          >
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="card-body">
          <div class="card-header-line">
            <h3 class="card-title">${dest.name}</h3>
            <span class="card-rating-badge">
              <i class="fa-solid fa-star"></i> ${dest.rating.toFixed(1)}
            </span>
          </div>

          <div class="card-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${dest.district}, ${dest.state}</span>
          </div>

          <p class="card-desc">${dest.description}</p>

          <div class="card-specs">
            <span class="spec-chip"><i class="fa-solid fa-calendar"></i> ${dest.bestTime}</span>
            <span class="spec-chip"><i class="fa-solid fa-coins"></i> ${dest.budget}</span>
          </div>

          <div class="card-actions">
            <button class="btn btn-outline btn-sm view-details-btn" data-id="${dest.id}">
              <i class="fa-solid fa-circle-info"></i> View Details
            </button>
            <button class="btn ${isInTrip ? 'btn-glass' : 'btn-primary'} btn-sm trip-toggle-btn" data-id="${dest.id}">
              <i class="fa-solid ${isInTrip ? 'fa-check' : 'fa-plus'}"></i>
              <span>${isInTrip ? 'In Trip' : 'Add Trip'}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  },

  bindCardEvents(container) {
    // Favorite button clicks
    container.querySelectorAll(".card-fav-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        FavoritesManager.toggle(id);
      });
    });

    // View Details button clicks
    container.querySelectorAll(".view-details-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        DestinationModal.open(id);
      });
    });

    // Whole card click opens modal (if not clicked on button)
    container.querySelectorAll(".destination-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        const id = parseInt(card.dataset.id, 10);
        DestinationModal.open(id);
      });
    });

    // Trip toggle button clicks
    container.querySelectorAll(".trip-toggle-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        TripManager.toggle(id);
      });
    });
  },

  bindFilters() {
    // Search input (Explorer)
    const filterInput = document.getElementById("filterSearchInput");
    const clearBtn = document.getElementById("clearSearchBtn");

    filterInput?.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.trim();
      clearBtn?.classList.toggle("hidden", !AppState.searchQuery);
      this.renderAll();
    });

    clearBtn?.addEventListener("click", () => {
      filterInput.value = "";
      AppState.searchQuery = "";
      clearBtn.classList.add("hidden");
      this.renderAll();
    });

    // Hero Search Bar
    const heroInput = document.getElementById("heroSearchInput");
    const heroSearchBtn = document.getElementById("heroSearchBtn");

    const triggerHeroSearch = () => {
      const q = heroInput.value.trim();
      if (!q) return;
      AppState.searchQuery = q;
      if (filterInput) filterInput.value = q;
      clearBtn?.classList.remove("hidden");
      this.renderAll();
      document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
    };

    heroSearchBtn?.addEventListener("click", triggerHeroSearch);
    heroInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") triggerHeroSearch();
    });

    // Quick tags click
    document.querySelectorAll(".quick-tag").forEach(tagBtn => {
      tagBtn.addEventListener("click", () => {
        const tag = tagBtn.dataset.tag;
        AppState.searchQuery = tag;
        if (filterInput) filterInput.value = tag;
        clearBtn?.classList.remove("hidden");
        this.renderAll();
        document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
      });
    });

    // State Select
    document.getElementById("stateSelect")?.addEventListener("change", (e) => {
      AppState.selectedState = e.target.value;
      AppState.selectedDistrict = "all";
      this.populateDistricts();
      this.renderAll();
    });

    // District Select
    document.getElementById("districtSelect")?.addEventListener("change", (e) => {
      AppState.selectedDistrict = e.target.value;
      this.renderAll();
    });

    // Category Select
    document.getElementById("categorySelect")?.addEventListener("change", (e) => {
      AppState.selectedCategory = e.target.value;
      this.renderAll();
    });

    // Rating Select
    document.getElementById("ratingSelect")?.addEventListener("change", (e) => {
      AppState.minRating = parseFloat(e.target.value);
      this.renderAll();
    });

    // Sort Select
    document.getElementById("sortSelect")?.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      this.renderAll();
    });

    // Reset Filters Button
    const resetHandler = () => {
      AppState.searchQuery = "";
      AppState.selectedState = "all";
      AppState.selectedDistrict = "all";
      AppState.selectedCategory = "all";
      AppState.minRating = 0;
      AppState.sortBy = "popularity";

      if (filterInput) filterInput.value = "";
      if (heroInput) heroInput.value = "";
      clearBtn?.classList.add("hidden");

      const stateSel = document.getElementById("stateSelect");
      const distSel = document.getElementById("districtSelect");
      const catSel = document.getElementById("categorySelect");
      const ratSel = document.getElementById("ratingSelect");
      const sortSel = document.getElementById("sortSelect");

      if (stateSel) stateSel.value = "all";
      if (distSel) distSel.value = "all";
      if (catSel) catSel.value = "all";
      if (ratSel) ratSel.value = "0";
      if (sortSel) sortSel.value = "popularity";

      this.populateDistricts();
      this.renderAll();
      showToast("Filters reset to default view.", "info");
    };

    document.getElementById("resetFiltersBtn")?.addEventListener("click", resetHandler);
    document.getElementById("emptyResetBtn")?.addEventListener("click", resetHandler);

    // Category Section Cards Click
    document.querySelectorAll(".category-card").forEach(catCard => {
      catCard.addEventListener("click", () => {
        const cat = catCard.dataset.cat;
        AppState.selectedCategory = cat;
        const catSel = document.getElementById("categorySelect");
        if (catSel) catSel.value = cat;
        this.renderAll();
        document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
        showToast(`Filtered by ${cat}`, "info");
      });
    });
  },

  renderShowcases() {
    // 1. Popular Destinations (6-8 items)
    const popularGrid = document.getElementById("popularGrid");
    if (popularGrid) {
      const populars = DESTINATIONS.filter(d => d.isPopular).slice(0, 8);
      popularGrid.innerHTML = populars.map(item => this.createCardHTML(item)).join("");
      this.bindCardEvents(popularGrid);
    }

    // 2. Hidden Gems of AP & Telangana (8 items)
    const hiddenGemsGrid = document.getElementById("hiddenGemsGrid");
    if (hiddenGemsGrid) {
      const gems = DESTINATIONS.filter(d => d.isHiddenGem).slice(0, 8);
      hiddenGemsGrid.innerHTML = gems.map(item => this.createCardHTML(item)).join("");
      this.bindCardEvents(hiddenGemsGrid);
    }
  }
};

// ==========================================
// 8. DESTINATION DETAILS MODAL & REVIEWS
// ==========================================
const DestinationModal = {
  open(destId) {
    const dest = DESTINATIONS.find(d => d.id === destId);
    if (!dest) return;

    AppState.activeModalDestinationId = destId;
    Storage.addRecent(destId);

    const modal = document.getElementById("detailsModal");
    const body = document.getElementById("modalDetailsBody");
    if (!modal || !body) return;

    const favs = Storage.getFavorites();
    const trips = Storage.getTrip();
    const isFav = favs.includes(dest.id);
    const isInTrip = trips.includes(dest.id);

    // Reviews list
    const reviewsMap = Storage.getReviews();
    const destReviews = reviewsMap[destId] || [
      {
        id: "default-1",
        authorName: "Shaik Karishma",
        rating: 5,
        text: "Absolutely mesmerizing experience! The natural beauty and architecture exceeded all expectations.",
        date: "Recently reviewed"
      },
      {
        id: "default-2",
        authorName: "Roshanara",
        rating: 5,
        text: "A must-visit for everyone traveling to Andhra Pradesh and Telangana. Peaceful atmosphere and delightful local cuisine.",
        date: "2 weeks ago"
      }
    ];

    // Compute average rating
    const avgRating = (destReviews.reduce((sum, r) => sum + r.rating, 0) / destReviews.length).toFixed(1);

    // Dynamic Google Maps URL
    const mapsQuery = encodeURIComponent(`${dest.name}, ${dest.district}, ${dest.state}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    body.innerHTML = `
      <div class="modal-dest-banner">
        <img 
          src="${dest.image}" 
          alt="${dest.name}" 
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80';"
        />
        <div class="card-media-overlay"></div>
        <div class="card-badges">
          <span class="badge-tag ${dest.state === 'Andhra Pradesh' ? 'tag-state-ap' : 'tag-state-ts'}">${dest.state}</span>
          <span class="badge-tag tag-cat">${dest.category}</span>
          ${dest.isHiddenGem ? '<span class="badge-tag tag-gem"><i class="fa-solid fa-gem"></i> Hidden Gem</span>' : ''}
        </div>
      </div>

      <div class="modal-dest-header">
        <div class="modal-title-row">
          <h2 id="modalDestName" class="modal-dest-title">${dest.name}</h2>
          <div class="card-rating-badge" style="font-size: 1rem; padding: 0.35rem 0.75rem;">
            <i class="fa-solid fa-star"></i> ${avgRating} / 5.0 (${destReviews.length} Reviews)
          </div>
        </div>

        <div class="modal-dest-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${dest.district}, ${dest.state}</span>
        </div>
      </div>

      <!-- Quick Facts Bar -->
      <div class="modal-quick-facts">
        <div class="fact-item">
          <strong>Best Time</strong>
          <span><i class="fa-solid fa-calendar-check text-gradient"></i> ${dest.bestTime}</span>
        </div>
        <div class="fact-item">
          <strong>Est. Budget</strong>
          <span><i class="fa-solid fa-wallet text-gradient"></i> ${dest.budget}</span>
        </div>
        <div class="fact-item">
          <strong>Entry Fee</strong>
          <span><i class="fa-solid fa-ticket text-gradient"></i> ${dest.entryFee}</span>
        </div>
        <div class="fact-item">
          <strong>Recommended Stay</strong>
          <span><i class="fa-solid fa-clock text-gradient"></i> ${dest.duration}</span>
        </div>
      </div>

      <!-- Narrative Description -->
      <div class="modal-section-block">
        <h4><i class="fa-solid fa-circle-info"></i> About this Destination</h4>
        <p>${dest.description}</p>
      </div>

      <!-- Things to Do -->
      <div class="modal-section-block">
        <h4><i class="fa-solid fa-list-check"></i> Top Things to Do</h4>
        <ul class="checklist-items">
          ${dest.thingsToDo.map(activity => `<li><i class="fa-solid fa-circle-check"></i> <span>${activity}</span></li>`).join("")}
        </ul>
      </div>

      <!-- Famous Local Food -->
      <div class="modal-section-block">
        <h4><i class="fa-solid fa-utensils"></i> Famous Local Cuisines & Delicacies</h4>
        <div class="chips-cloud">
          ${dest.famousFood.map(food => `<span class="pill-chip"><i class="fa-solid fa-bowl-food" style="color: var(--secondary);"></i> ${food}</span>`).join("")}
        </div>
      </div>

      <!-- Nearby Places -->
      <div class="modal-section-block">
        <h4><i class="fa-solid fa-compass"></i> Nearby Attractions</h4>
        <div class="chips-cloud">
          ${dest.nearbyPlaces.map(p => `<span class="pill-chip"><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${p}</span>`).join("")}
        </div>
      </div>

      <!-- Modal Actions Bar -->
      <div class="modal-actions-bar">
        <button id="modalFavToggleBtn" class="btn ${isFav ? 'btn-danger-outline' : 'btn-outline'}">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          <span>${isFav ? 'Saved in Favorites' : 'Add to Favorites'}</span>
        </button>

        <button id="modalTripToggleBtn" class="btn ${isInTrip ? 'btn-glass' : 'btn-primary'}">
          <i class="fa-solid ${isInTrip ? 'fa-check' : 'fa-plus'}"></i>
          <span>${isInTrip ? 'Added to My Trip' : 'Add to My Trip'}</span>
        </button>

        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-glass" title="Open destination in Google Maps">
          <i class="fa-solid fa-map-location-dot"></i> View on Google Maps
        </a>

        <button id="modalShareBtn" class="btn btn-outline" title="Copy destination link">
          <i class="fa-solid fa-share-nodes"></i> Share
        </button>
      </div>

      <!-- Reviews Section -->
      <div class="modal-reviews-section">
        <h4 style="margin-bottom: 1rem;"><i class="fa-solid fa-comments"></i> Traveler Reviews (${destReviews.length})</h4>

        <div class="reviews-list-container" id="modalReviewsList">
          ${destReviews.map(rev => `
            <div class="review-item-card">
              <div class="review-item-header">
                <span class="review-author">${rev.authorName}</span>
                <span class="review-stars">${'⭐'.repeat(rev.rating)}</span>
              </div>
              <p class="review-text">"${rev.text}"</p>
              <div class="review-date">${rev.date}</div>
            </div>
          `).join("")}
        </div>

        <!-- Add Review Form -->
        <div class="review-form-card">
          <h5>Write Your Experience</h5>
          <div class="star-input-group" id="modalReviewStarPicker">
            <button type="button" class="rev-star-btn active" data-val="1"><i class="fa-solid fa-star"></i></button>
            <button type="button" class="rev-star-btn active" data-val="2"><i class="fa-solid fa-star"></i></button>
            <button type="button" class="rev-star-btn active" data-val="3"><i class="fa-solid fa-star"></i></button>
            <button type="button" class="rev-star-btn active" data-val="4"><i class="fa-solid fa-star"></i></button>
            <button type="button" class="rev-star-btn active" data-val="5"><i class="fa-solid fa-star"></i></button>
          </div>

          <textarea 
            id="modalReviewText" 
            class="review-textarea" 
            placeholder="Share what you loved about this destination, travel tips, or food recommendations..."
          ></textarea>

          <button id="submitReviewBtn" class="btn btn-primary btn-sm">
            <i class="fa-solid fa-paper-plane"></i> Submit Review
          </button>
        </div>
      </div>
    `;

    // Bind modal actions
    document.getElementById("modalFavToggleBtn")?.addEventListener("click", () => {
      FavoritesManager.toggle(destId);
      this.open(destId); // Refresh modal view
    });

    document.getElementById("modalTripToggleBtn")?.addEventListener("click", () => {
      TripManager.toggle(destId);
      this.open(destId); // Refresh modal view
    });

    document.getElementById("modalShareBtn")?.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href.split('#')[0] + `#explore`);
        showToast("Destination link copied to clipboard!", "success");
      } else {
        showToast("Shareable destination: " + dest.name, "info");
      }
    });

    // Star picker inside review form
    let selectedRating = 5;
    const starBtns = body.querySelectorAll(".rev-star-btn");
    starBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        selectedRating = parseInt(btn.dataset.val, 10);
        starBtns.forEach(b => {
          const v = parseInt(b.dataset.val, 10);
          b.classList.toggle("active", v <= selectedRating);
        });
      });
    });

    // Submit Review
    document.getElementById("submitReviewBtn")?.addEventListener("click", () => {
      const text = document.getElementById("modalReviewText").value.trim();
      if (!text) {
        showToast("Please write a few words about your experience.", "warning");
        return;
      }

      const session = Storage.getSession();
      const authorName = session ? session.fullName : "Traveler";

      const newReview = {
        id: "rev-" + Date.now(),
        authorName: authorName,
        rating: selectedRating,
        text: text,
        date: "Just now"
      };

      const currentMap = Storage.getReviews();
      if (!currentMap[destId]) currentMap[destId] = [...destReviews];
      currentMap[destId].unshift(newReview);
      Storage.saveReviews(currentMap);

      showToast("Thank you! Your review has been saved.", "success");
      this.open(destId); // Refresh modal
    });

    modal.classList.remove("hidden");
  },

  close() {
    document.getElementById("detailsModal")?.classList.add("hidden");
    AppState.activeModalDestinationId = null;
  }
};

// ==========================================
// 9. FAVORITES MANAGER
// ==========================================
const FavoritesManager = {
  init() {
    this.updateBadges();
    this.render();
  },

  toggle(destId) {
    let favs = Storage.getFavorites();
    const dest = DESTINATIONS.find(d => d.id === destId);
    if (!dest) return;

    if (favs.includes(destId)) {
      favs = favs.filter(id => id !== destId);
      Storage.saveFavorites(favs);
      showToast(`Removed "${dest.name}" from favorites.`, "info", "fa-solid fa-heart-crack");
    } else {
      favs.push(destId);
      Storage.saveFavorites(favs);
      showToast(`Added "${dest.name}" to favorites! ❤️`, "success", "fa-solid fa-heart");
    }

    this.updateBadges();
    this.render();
    DestinationManager.renderAll();
    DestinationManager.renderShowcases();
  },

  updateBadges() {
    const favs = Storage.getFavorites();
    const badge = document.getElementById("navFavBadge");
    if (badge) badge.textContent = favs.length;
  },

  render() {
    const grid = document.getElementById("favoritesGrid");
    const emptyState = document.getElementById("emptyFavoritesState");
    if (!grid) return;

    const favIds = Storage.getFavorites();
    const favDestinations = DESTINATIONS.filter(d => favIds.includes(d.id));

    if (favDestinations.length === 0) {
      grid.innerHTML = "";
      emptyState?.classList.remove("hidden");
      return;
    }

    emptyState?.classList.add("hidden");
    grid.innerHTML = favDestinations.map(item => DestinationManager.createCardHTML(item)).join("");
    DestinationManager.bindCardEvents(grid);
  }
};

// ==========================================
// 10. TRAVEL PLANNER (MY TRIP) MANAGER
// ==========================================
const TripManager = {
  init() {
    this.updateBadges();
    this.render();
    this.bindControls();
  },

  toggle(destId) {
    let trip = Storage.getTrip();
    const dest = DESTINATIONS.find(d => d.id === destId);
    if (!dest) return;

    if (trip.includes(destId)) {
      trip = trip.filter(id => id !== destId);
      Storage.saveTrip(trip);
      showToast(`Removed "${dest.name}" from your trip itinerary.`, "info", "fa-solid fa-calendar-xmark");
    } else {
      trip.push(destId);
      Storage.saveTrip(trip);
      showToast(`Added "${dest.name}" to your trip itinerary! 🎒`, "success", "fa-solid fa-calendar-plus");
    }

    this.updateBadges();
    this.render();
    DestinationManager.renderAll();
    DestinationManager.renderShowcases();
  },

  move(destId, direction) {
    let trip = Storage.getTrip();
    const idx = trip.indexOf(destId);
    if (idx === -1) return;

    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= trip.length) return;

    // Swap
    const temp = trip[idx];
    trip[idx] = trip[targetIdx];
    trip[targetIdx] = temp;

    Storage.saveTrip(trip);
    this.render();
  },

  clear() {
    if (confirm("Are you sure you want to clear your entire trip itinerary?")) {
      Storage.saveTrip([]);
      this.updateBadges();
      this.render();
      DestinationManager.renderAll();
      DestinationManager.renderShowcases();
      showToast("Trip itinerary cleared.", "info");
    }
  },

  updateBadges() {
    const trip = Storage.getTrip();
    const badge = document.getElementById("navTripBadge");
    if (badge) badge.textContent = trip.length;
  },

  render() {
    const timeline = document.getElementById("tripTimelineContainer");
    const emptyState = document.getElementById("emptyTripState");
    const countEl = document.getElementById("tripStopsCount");
    const durationEl = document.getElementById("tripDurationDays");
    const budgetEl = document.getElementById("tripEstimatedBudget");

    if (!timeline) return;

    const tripIds = Storage.getTrip();
    const tripItems = tripIds.map(id => DESTINATIONS.find(d => d.id === id)).filter(Boolean);

    // Update Dashboard Stats
    if (countEl) countEl.textContent = tripItems.length;

    if (tripItems.length === 0) {
      if (durationEl) durationEl.textContent = "0 Days";
      if (budgetEl) budgetEl.textContent = "₹0";
      timeline.innerHTML = "";
      emptyState?.classList.remove("hidden");
      return;
    }

    emptyState?.classList.add("hidden");

    // Estimate duration & budget
    const estDays = Math.max(1, Math.round(tripItems.length * 1.5));
    let totalMinBudget = 0;
    let totalMaxBudget = 0;
    tripItems.forEach(d => {
      totalMinBudget += d.budgetMin || 1500;
      totalMaxBudget += d.budgetMax || 3500;
    });

    if (durationEl) durationEl.textContent = `${estDays} Days`;
    if (budgetEl) {
      budgetEl.textContent = `₹${totalMinBudget.toLocaleString('en-IN')} - ₹${totalMaxBudget.toLocaleString('en-IN')}`;
    }

    // Render Timeline Items
    timeline.innerHTML = tripItems.map((dest, idx) => `
      <div class="trip-item-card" data-id="${dest.id}">
        <div class="trip-step-badge">#${idx + 1}</div>
        
        <img 
          src="${dest.image}" 
          alt="${dest.name}" 
          class="trip-thumb" 
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80';"
        />

        <div class="trip-item-info">
          <h4>Day ${Math.floor(idx / 2) + 1}: ${dest.name}</h4>
          <p><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${dest.district}, ${dest.state}</p>
          <div class="trip-item-meta">
            <span><i class="fa-solid fa-wallet"></i> ${dest.budget}</span>
            <span><i class="fa-solid fa-clock"></i> ${dest.duration}</span>
          </div>
        </div>

        <div class="trip-item-actions">
          <button class="icon-btn trip-up-btn" data-id="${dest.id}" title="Move Up" ${idx === 0 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''}>
            <i class="fa-solid fa-arrow-up"></i>
          </button>
          <button class="icon-btn trip-down-btn" data-id="${dest.id}" title="Move Down" ${idx === tripItems.length - 1 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''}>
            <i class="fa-solid fa-arrow-down"></i>
          </button>
          <button class="icon-btn trip-info-btn" data-id="${dest.id}" title="View Details">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="icon-btn trip-remove-btn" data-id="${dest.id}" title="Remove Stop" style="color: var(--rose);">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join("");

    // Bind item buttons
    timeline.querySelectorAll(".trip-up-btn").forEach(btn => {
      btn.addEventListener("click", () => this.move(parseInt(btn.dataset.id, 10), -1));
    });

    timeline.querySelectorAll(".trip-down-btn").forEach(btn => {
      btn.addEventListener("click", () => this.move(parseInt(btn.dataset.id, 10), 1));
    });

    timeline.querySelectorAll(".trip-info-btn").forEach(btn => {
      btn.addEventListener("click", () => DestinationModal.open(parseInt(btn.dataset.id, 10)));
    });

    timeline.querySelectorAll(".trip-remove-btn").forEach(btn => {
      btn.addEventListener("click", () => this.toggle(parseInt(btn.dataset.id, 10)));
    });
  },

  bindControls() {
    document.getElementById("clearTripBtn")?.addEventListener("click", () => this.clear());

    document.getElementById("printTripBtn")?.addEventListener("click", () => {
      const tripIds = Storage.getTrip();
      if (tripIds.length === 0) {
        showToast("Your trip itinerary is empty. Add places first!", "warning");
        return;
      }
      window.print();
    });
  }
};

// ==========================================
// 11. BEST TIME TO VISIT (SEASON GUIDE)
// ==========================================
const SeasonGuideManager = {
  data: {
    winter: {
      title: "Winter Season (October – February)",
      rating: "⭐⭐⭐⭐⭐ Ideal Season",
      temp: "15°C to 28°C",
      summary: "The prime travel season for both Andhra Pradesh and Telangana. Cool, breezy mornings and pleasant sunny afternoons make heritage walking, canyon exploration, temple darshan, and wildlife safaris exceptionally enjoyable.",
      recommendedIds: [1, 2, 3, 4, 7, 8, 17, 18, 20]
    },
    monsoon: {
      title: "Monsoon Season (June – September)",
      rating: "⭐⭐⭐⭐ Waterfall & Nature Peak",
      temp: "22°C to 30°C",
      summary: "Transformative season that turns the Eastern Ghats into roaring natural wonderlands. Waterfalls in Bhupalpally and Adilabad are at their fiercest, while coffee plantations in Araku and rainforests in Maredumilli shine with lush green beauty.",
      recommendedIds: [21, 24, 12, 1, 22, 25, 31]
    },
    summer: {
      title: "Summer Season (March – May)",
      rating: "⭐⭐⭐ Hill Stations & Ghats",
      temp: "28°C to 42°C",
      summary: "Warm throughout the plains. The ideal time to escape to elevated hill retreats like Horsley Hills and Araku Valley, or indulge in evening breezes across Visakhapatnam's RK Beach and Hyderabad's Tank Bund.",
      recommendedIds: [14, 1, 2, 19, 22]
    }
  },

  init() {
    const tabs = document.querySelectorAll(".season-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.render(tab.dataset.season);
      });
    });

    this.render("winter");
  },

  render(seasonKey) {
    const container = document.getElementById("seasonDetailsContainer");
    const season = this.data[seasonKey] || this.data.winter;
    if (!container) return;

    const recommendedPlaces = season.recommendedIds
      .map(id => DESTINATIONS.find(d => d.id === id))
      .filter(Boolean);

    container.innerHTML = `
      <div class="season-summary-header">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-bottom: 0.25rem;">${season.title}</h3>
          <p style="color: var(--text-muted);"><i class="fa-solid fa-temperature-half" style="color: var(--primary);"></i> Average Temperature: ${season.temp}</p>
        </div>
        <div class="season-rating-stars">${season.rating}</div>
      </div>

      <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1rem;">${season.summary}</p>

      <h4 style="margin-top: 1.8rem; font-size: 1.15rem; color: var(--primary);">
        <i class="fa-solid fa-thumbs-up"></i> Recommended Destinations for ${seasonKey.charAt(0).toUpperCase() + seasonKey.slice(1)}:
      </h4>

      <div class="season-rec-grid">
        ${recommendedPlaces.map(d => `
          <div class="season-mini-card" data-id="${d.id}">
            <h4>${d.name}</h4>
            <p><i class="fa-solid fa-location-dot"></i> ${d.district}, ${d.state}</p>
            <span style="font-size: 0.8rem; color: var(--secondary); font-weight: 600;">⭐ ${d.rating.toFixed(1)} / 5.0</span>
          </div>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".season-mini-card").forEach(card => {
      card.addEventListener("click", () => {
        DestinationModal.open(parseInt(card.dataset.id, 10));
      });
    });
  }
};

// ==========================================
// 12. PLATFORM RATING & FEEDBACK
// ==========================================
const PlatformRatingManager = {
  messages: {
    1: "We're sorry to hear that. We'll work hard to improve your travel experience!",
    2: "Thanks for your feedback! We are continuously adding more hidden gems.",
    3: "Glad you enjoyed Incredible Explorer! More features are on the way.",
    4: "Wonderful! Thank you for the generous rating. Happy exploring!",
    5: "🌟 Incredible! Thank you for making our journey truly special!"
  },

  init() {
    const starBtns = document.querySelectorAll("#platformStars .star-btn");
    const msgEl = document.getElementById("platformRatingMsg");

    const savedRating = Storage.getPlatformRating();
    if (savedRating) {
      this.paintStars(savedRating);
      if (msgEl) msgEl.textContent = this.messages[savedRating] || "Thank you for your rating!";
    }

    starBtns.forEach(btn => {
      const val = parseInt(btn.dataset.val, 10);

      btn.addEventListener("mouseover", () => {
        starBtns.forEach(b => {
          b.classList.toggle("hovered", parseInt(b.dataset.val, 10) <= val);
        });
      });

      btn.addEventListener("mouseout", () => {
        starBtns.forEach(b => b.classList.remove("hovered"));
        const current = Storage.getPlatformRating();
        if (current) this.paintStars(current);
      });

      btn.addEventListener("click", () => {
        Storage.setPlatformRating(val);
        this.paintStars(val);
        if (msgEl) msgEl.textContent = this.messages[val];
        showToast("Feedback submitted! Thank you ❤️", "success");
      });
    });
  },

  paintStars(val) {
    const starBtns = document.querySelectorAll("#platformStars .star-btn");
    starBtns.forEach(b => {
      const v = parseInt(b.dataset.val, 10);
      const isFilled = v <= val;
      b.classList.toggle("active", isFilled);
      const icon = b.querySelector("i");
      if (icon) {
        icon.className = isFilled ? "fa-solid fa-star" : "fa-regular fa-star";
      }
    });
  }
};

// ==========================================
// 13. NAVIGATION & SCROLL OBSERVER
// ==========================================
const NavigationManager = {
  init() {
    this.bindHamburger();
    this.bindScrollSpy();
    this.bindModalEscClose();
  },

  bindHamburger() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");

    hamburgerBtn?.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", isOpen);
      hamburgerBtn.querySelector("i").className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });

    // Close mobile drawer when clicking a link
    navLinks?.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburgerBtn?.setAttribute("aria-expanded", "false");
        const icon = hamburgerBtn?.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  },

  bindScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
      let currentSectionId = "";
      const scrollPos = window.scrollY + 120;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute("id");
        }
      });

      if (currentSectionId) {
        navItems.forEach(item => {
          const href = item.getAttribute("href");
          if (href === `#${currentSectionId}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    }, { passive: true });
  },

  bindModalEscClose() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        DestinationModal.close();
        AuthManager.closeAuthModal();
        AuthManager.closeProfileModal();
      }
    });

    // Close when clicking modal backdrop
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          backdrop.classList.add("hidden");
        }
      });
    });

    document.getElementById("closeDetailsModalBtn")?.addEventListener("click", () => {
      DestinationModal.close();
    });
  }
};

// ==========================================
// 14. APPLICATION BOOTSTRAPPER
// ==========================================
function initializeApp() {
  console.log("🌟 Initializing Incredible Explorer Platform...");

  ThemeManager.init();
  AuthManager.init();
  DestinationManager.init();
  FavoritesManager.init();
  TripManager.init();
  SeasonGuideManager.init();
  PlatformRatingManager.init();
  NavigationManager.init();

  console.log("✅ Incredible Explorer initialized successfully with 31 destinations!");
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", initializeApp);
