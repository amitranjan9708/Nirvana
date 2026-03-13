import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Lightbulb, UtensilsCrossed, ChevronDown, ChevronUp, Globe, Compass, Landmark, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'all' | 'buddhist' | 'heritage' | 'cultural';

interface Destination {
  img: string;
  key: string;
  country: string;
  flag: string;
  category: Category[];
  sites: string[];
  tips: string;
  title: string;
  desc: string;
  cuisine: { name: string; desc: string }[];
  highlight: string;
  activities: string[];
}

const destinations: Destination[] = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOQs9eaXrnEr8V0DsKt4HMi_V9rzyaZ6DmlkKyXRgmlLxdlr5HVX7W_Sm-na6Fq5_SN5Ma2rEwGeJR8OhpaLX9MEDBBzSZoorbnraVef82YlArZLdfyYx9Yg_rqeYdakSrZ8aqZJYafYOPb_m8am09_W1x-V1-FIHK8COIZN4ovyV1us0k2Mj_WrBrDD4fnqr_Zo3sqvVhhpexNMlGO-ytzigpX7cP_QGNPIexqOlYvP_GYiEExc8W1es-lbnMUE6Aw35hCckGwSE',
    key: 'bodhGaya',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist'],
    highlight: 'Core Buddhist Circuit',
    title: 'Bodh Gaya — The Place of Enlightenment',
    desc: 'The holyest of all Buddhist pilgrimage sites — where Siddhartha Gautama attained enlightenment beneath the sacred Bodhi Tree 2,500 years ago. The UNESCO-listed Mahabodhi Temple Complex draws millions of pilgrims from every corner of the world.',
    sites: ['Mahabodhi Temple (UNESCO)', 'Sacred Bodhi Tree', 'Vajrasana (Diamond Throne)', '80ft Great Buddha Statue', '25+ International Monasteries', 'Lotus Pond', 'Archaeological Museum'],
    tips: 'Best time: October–March. Arrive at the Bodhi Tree before dawn for the most profound experience. Remove shoes before entering the complex.',
    cuisine: [
      { name: 'Litti Chokha', desc: 'Roasted wheat balls stuffed with sattu (roasted gram flour), served with mashed brinjal and tomatoes. Bihar\'s beloved street staple.' },
      { name: 'Sattu Paratha', desc: 'Flatbread stuffed with roasted chickpea flour, spices, and pickled onions — the pilgrims\' preferred roadside breakfast.' },
      { name: 'Chana Ghugni', desc: 'Slow-cooked white chickpea curry served with hot poori. A temple-town comfort classic.' },
      { name: 'Thukpa (Tibetan Noodle Soup)', desc: 'Hearty vegetable noodle soup from the Tibetan monastery kitchens — warming and deeply nourishing.' },
    ],
    activities: ['Sunrise Meditation', 'Monastery Hopping', 'Market Exploration', 'Traditional Food Walk'],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXeiHkqJpMKZO5vmFn-XTo057usESQX-vLI3WTJrn5UaDfIJUhwn9K27ZCGvPXZnSxO9hvx8JVK5xP0lngGw3Yfsl3nuaFA_o7jxWRfn0xp9O308m_tI5F3XmW7JvpKIJUAFLMJo6ErL-jNXpO9TgfBeBQE9iznNRrFBd1DB5o8nifLh1Ia5_08FJ0RYhxXer76iFaiaCNleGLaZJ_V4DRRlSV7MnypM6HNZAP_6UTZ--lOl1nuh9hnykXmpkXOnnLIS8HaExBXc',
    key: 'varanasi',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'cultural'],
    highlight: 'Core Buddhist Circuit',
    title: 'Varanasi — The Eternal City of Light',
    desc: 'Varanasi (Kashi/Benaras) is one of the world\'s oldest continuously inhabited cities and the spiritual capital of India. The Ganga Aarti at Dasaswamedh Ghat — a nightly ceremony of fire, incense, and chanting — is among the most moving spectacles on earth. Pair with Sarnath (12 km), where the Buddha delivered his first sermon.',
    sites: ['Dasaswamedh Ghat (Ganga Aarti)', 'Sarnath Deer Park & Dhamek Stupa', 'Kashi Vishwanath Temple', 'Manikarnika Cremation Ghat', '84 Ghats along the Ganges', 'Sarnath Archaeological Museum (Lion Capital)', 'Benaras Hindu University'],
    tips: 'Sunrise boat ride on the Ganges is unmissable. Evening Ganga Aarti starts around 6:30 PM. The old city lanes are best navigated on foot.',
    cuisine: [
      { name: 'Banarasi Paan', desc: 'The signature post-meal ritual — betel leaf folded over sweet fillings, a beloved Banarasi tradition for centuries.' },
      { name: 'Kachori Sabzi', desc: 'Crispy puffed kachori served with spiced potato-pea gravy — the definitive Varanasi breakfast at Ram Bhandar.' },
      { name: 'Malaiyo (Winter)', desc: 'Frothy saffron-milk foam dessert made overnight in the winter dew. Available only Oct–Feb.' },
      { name: 'Thandai', desc: 'Chilled milk infused with almonds, rose petals, pepper, cardamom, and fennel. Varanasi\'s celebratory drink.' },
    ],
    activities: ['Dawn Boat Ride', 'Ganga Aarti Ceremony', 'Guided Alley Walk', 'Silk Weaving Tour'],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQABquklSKh4X0Xoc3P_8Xbkxs4kGypvqOZ2sAaIsUGmrwQXV-oleFvJSSmk0GqadI9zSbQUWIO2LOTR5VopU4-vK2lU0mgQOO8FViVHYPTIcFWgz7sma8PnLaNRMpKlenz-cBWA3m1CRifODmLf0cPsaYfN1PEVOe3zGsU9tzTLocJv8U-bdKNtPYR3z6gbs57PYfYzfIXTEXcT2A6xA7OvQp76JjjJW6YspkN3ePsTN0zMBwIWpdEZ1cQ5lvP7vWsIuyolFQVno',
    key: 'nalanda',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'heritage'],
    highlight: 'Monastic Heritage',
    title: 'Nalanda — The World\'s Greatest Ancient University',
    desc: 'Nalanda Mahavihara was the most prestigious university in the ancient world — 10,000 students and 2,000 teachers from across Asia studying logic, grammar, medicine, and the Dharma between the 5th and 12th centuries CE. Its vast UNESCO-listed ruins in Bihar remain awe-inspiring.',
    sites: ['Nalanda Mahavihara Ruins (UNESCO)', 'Nalanda Archaeological Museum', 'Xuanzang Memorial Hall', 'New Nalanda International University Campus', 'Surrounding stupas and monastic cells'],
    tips: 'Allow 3–4 hours. Large and exposed — bring a hat and water. A knowledgeable guide is essential to bring the ruins alive.',
    cuisine: [
      { name: 'Bihari Thali', desc: 'A complete Bihar meal: dal, sabzi, rice, chapati, achaar, and the star — litti chokha. Rich, grounding, and deeply local.' },
      { name: 'Dal Puri', desc: 'Crispy puris stuffed with spiced lentil paste, served with potato curry at roadside stalls near the ruins.' },
      { name: 'Motichoor Ladoo', desc: 'Bihar\'s signature sweet — tiny saffron gram flour droplets bound into golden balls. Offered at temples daily.' },
    ],
    activities: ['Archaeological Tour', 'Academic Walk', 'Museum Visit'],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqcEabaiMR9Nm1d8XV2ewmJuX3y3a4JOWT4MMHp1w3Kc5dYaZTNULPZ2Qp_80wObQuUlgFtp20IsS8GRqqF40NS-T6AlciB0B_PUisbs5Mphjtpm-4JVZ1eFY37JNigB4Jl9eY7tWb3eryYP8M2_U2EaU2Rmd4eRkGc5h7o8qaRYiXXymbYTp-nnxv38wphvVROdp9fH87z56UsFX51yNA-6aKmqyL-mDakMMYjjfZCZbSGWz6Y04i7a_m5FT5gtkyx7FNC8rJnag',
    key: 'kushinagar',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist'],
    highlight: 'Core Buddhist Circuit',
    title: 'Kushinagar — The Place of Final Passing',
    desc: 'Kushinagar is where the Buddha attained Mahaparinirvana — his final passing — at age 80, beneath a grove of Sala trees. Deeply solemn, it draws pilgrims honouring the completion of the Buddha\'s journey. The Mahaparinirvana Temple with its 6-metre reclining Buddha is the spiritual centrepiece.',
    sites: ['Mahaparinirvana Temple (Reclining Buddha)', 'Ramabhar Stupa (Cremation Site)', 'Sala Grove Meditation Park', 'Matha Kuar Shrine', 'Chinese and Sri Lankan Temples', 'Kushinagar Museum'],
    tips: 'Kushinagar calls for slow, silent steps. Ramabhar Stupa at sunset is particularly moving. Nearest airport: Gorakhpur (53 km).',
    cuisine: [
      { name: 'UP Ki Tehri', desc: 'Aromatic one-pot rice cooked with vegetables and spices — the favoured lunch of pilgrimage groups in eastern UP.' },
      { name: 'Khichdi Prasad', desc: 'Simple, nourishing khichdi made with rice and moong dal, offered as temple prasad at local monasteries.' },
      { name: 'Gorakhpur Ki Chat', desc: 'Spicy street chaat — dahi vada, aloo tikki, tamarind chutney — from the bustling Gorakhpur markets.' },
    ],
    activities: ['Silent Meditation', 'Monastic Chanting', 'Relic Garden Walk'],
  },
  {
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    key: 'lumbini',
    country: 'Nepal',
    flag: '🇳🇵',
    category: ['buddhist'],
    highlight: 'Core Buddhist Circuit',
    title: 'Lumbini — Birthplace of the Buddha',
    desc: 'Lumbini, in the Terai plains of Nepal, is the birthplace of Prince Siddhartha Gautama. The Maya Devi Temple marks the exact spot, authenticated by Ashoka\'s Pillar (249 BCE). The vast International Monastery Zone — with temples from 20+ nations — makes Lumbini extraordinary in its global spiritual convergence.',
    sites: ['Maya Devi Temple (birthplace)', 'Ashoka Pillar (249 BCE)', 'Sacred Garden & Puskarini Pond', 'International Monastery Zone (20+ nations)', 'World Peace Pagoda', 'Kapilvastu Royal Palace Ruins (27 km)'],
    tips: 'Lumbini is in Nepal — confirm your India visa allows re-entry. The International Monastery Zone needs a full half-day. Early morning in the Sacred Garden is deeply peaceful.',
    cuisine: [
      { name: 'Dal Bhat Tarkari', desc: 'Nepal\'s national meal: lentil soup, rice, and seasonal vegetable curry. Eaten twice daily by most Nepalis.' },
      { name: 'Sel Roti', desc: 'Sweet crispy ring-shaped rice bread deep-fried for festivals and pilgrimages. Best eaten warm.' },
      { name: 'Yomari', desc: 'Steamed rice-flour dumplings filled with molasses and sesame — a Newari festive sweet with deep ritual significance.' },
      { name: 'Tongba (Millet Beer)', desc: 'Traditional Himalayan warm millet drink — sipped through bamboo straws from a wooden vessel.' },
    ],
    activities: ['Sacred Garden Walk', 'International Monastery Visit', 'World Peace Pagoda Meditation'],
  },
  {
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    key: 'agra',
    country: 'India',
    flag: '🇮🇳',
    category: ['heritage', 'cultural'],
    highlight: 'Golden Triangle',
    title: 'Agra — The Taj Mahal & Mughal Grandeur',
    desc: 'Home to the Taj Mahal — arguably the world\'s most beautiful building — Agra is a pinnacle of Mughal architecture and devotion. Built by Emperor Shah Jahan as an eternal ode to love, the Taj at sunrise or moonlit night is an experience that transcends language. The city also holds Agra Fort (UNESCO) and the ghost city of Fatehpur Sikri.',
    sites: ['Taj Mahal (UNESCO)', 'Agra Fort (UNESCO)', 'Fatehpur Sikri (UNESCO, 37 km)', 'Itmad-ud-Daulah (Baby Taj)', 'Mehtab Bagh (Taj view at sunset)', 'Kinari Bazaar'],
    tips: 'The Taj is closed on Fridays. Sunrise is the best time — fewer crowds, golden light. Book tickets online to skip long queues.',
    cuisine: [
      { name: 'Petha', desc: 'Agra\'s world-famous translucent candy made from ash gourd — available in 30+ flavours. The original sweet souvenir.' },
      { name: 'Dalmoth Agra', desc: 'Crispy spiced lentil snack mix invented in Agra — a crunchy, tangy accompaniment to tea.' },
      { name: 'Bedai + Jalebi', desc: 'Agra\'s legendary breakfast: crispy puris stuffed with urad dal, served with jalebi and chunky potato sabzi.' },
      { name: 'Mughlai Biryani', desc: 'Slow-cooked dum biryani with saffron, dried fruits, and tender meat — the Mughal court\'s gift to Indian cuisine.' },
    ],
    activities: ['Heritage Walk', 'Rickshaw Ride', 'Handicraft Shopping', 'Sunrise at Taj Mahal'],
  },
  {
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    key: 'jaipur',
    country: 'India',
    flag: '🇮🇳',
    category: ['heritage', 'cultural'],
    highlight: 'Golden Triangle',
    title: 'Jaipur — The Pink City of Rajasthan',
    desc: 'Jaipur, the Pink City, is a riot of colour, royalty, and living tradition. Amber Fort rises from the Aravalli hills; the Hawa Mahal fans its latticed windows over the bazaar below; the City Palace still houses a royal family. Rajasthan hospitality — its food and craft traditions — rank among the richest in India.',
    sites: ['Amber Fort (UNESCO Ensemble of Rajasthan)', 'Hawa Mahal (Palace of Winds)', 'City Palace & Peacock Courtyard', 'Jantar Mantar (UNESCO)', 'Nahargarh Fort', 'Johari & Bapu Bazaar'],
    tips: 'Three UNESCO sites in one city. Hire an auto-rickshaw and let the driver show you the old city at dusk. Avoid midday heat March–June.',
    cuisine: [
      { name: 'Dal Baati Churma', desc: 'The definitive Rajasthani feast: hard baked wheat balls dipped in ghee, served with five-lentil dal and sweet churma.' },
      { name: 'Laal Maas', desc: 'Fiery slow-cooked mutton curry in Mathania red chillies — Rajasthan\'s legendary meat dish that demands respect.' },
      { name: 'Ghewar', desc: 'Honeycomb lattice sweet soaked in sugar syrup and topped with rabri cream. The Rajasthani festival sweet bar none.' },
      { name: 'Mirchi Vada', desc: 'Thick green chillies stuffed with spiced potato, dipped in chickpea batter, and deep-fried. The perfect Jaipur street snack.' },
    ],
    activities: ['Elephant Ride at Amber Fort', 'Hot Air Ballooning', 'Bazaar Exploration', 'Traditional Puppet Show'],
  },
  {
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    key: 'delhi',
    country: 'India',
    flag: '🇮🇳',
    category: ['heritage', 'cultural'],
    highlight: 'Golden Triangle',
    title: 'Delhi — Seven Cities, One Capital',
    desc: 'Delhi is not one city but seven — each layer uncovering a different empire: Mughal, Sultanate, British, and the thriving republic. Qutub Minar, the Red Fort, Humayun\'s Tomb, India Gate — a single day can barely scratch the surface. With direct flights from every corner of the world, Delhi is the gateway to every Indian journey.',
    sites: ['Red Fort (UNESCO)', 'Humayun\'s Tomb (UNESCO)', 'Qutub Minar (UNESCO)', 'India Gate & Rajpath', 'Akshardham Temple', 'Chandni Chowk Old City', 'National Museum of India'],
    tips: 'Use the Delhi Metro to avoid traffic. Chandni Chowk is best explored on foot in the early morning. Book popular sites online to skip queues.',
    cuisine: [
      { name: 'Butter Chicken', desc: 'Delhi\'s greatest culinary gift to the world — tender chicken in a rich tomato-butter-cream sauce, invented in the capital.' },
      { name: 'Chole Bhature', desc: 'Spicy chickpea curry with giant puffed fried bread — Delhi\'s definitive Sunday morning indulgence.' },
      { name: 'Paranthe Wali Gali', desc: 'Stuffed flatbreads from the legendary alley in Chandni Chowk — served since 1875 with 20+ fillings.' },
      { name: 'Dilli Ki Chaat', desc: 'Papdi chaat, aloo tikki, dahi bhalla — street food so layered in flavour it defies description.' },
    ],
    activities: ['Food Walk in Chandni Chowk', 'Rickshaw Heritage Tour', 'Metro Ride Exploration', 'Evening Sound & Light Show'],
  },
  {
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    key: 'shravasti',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'heritage'],
    highlight: 'Extended Buddhist Circuit',
    title: 'Shravasti — Where the Buddha Spent 25 Rain Retreats',
    desc: 'Shravasti (ancient Savatthi) is where the Buddha spent 25 rainy season retreats (vassa), the longest continuous period at any one location. The Jetavana Monastery — gifted by merchant Anathapindika — was the Buddha\'s home for decades. The ruins of his personal hut (kuti) can still be walked through.',
    sites: ['Jetavana Monastery Ruins', 'Ananda Bodhi Tree', 'Anathapindika Stupa', 'Ancient City Ruins of Savatthi', 'International Buddhist Park', 'Sri Lankan Monastery Complex'],
    tips: 'Shravasti is 165 km from Lucknow. Combine with Kushinagar in a 2-day sweep of eastern UP. Very peaceful — few tour groups visit.',
    cuisine: [
      { name: 'Awadhi Biryani', desc: 'Lucknow-style dum biryani — fragrant, subtle, and layered with kashmiri saffron. The refined elder sibling of all biryanis.' },
      { name: 'Galouti Kebab', desc: 'Melt-in-the-mouth minced meat patties from the nawabi kitchens of Lucknow — 150 spices, zero effort to eat.' },
      { name: 'Sheermal', desc: 'Saffron-infused flatbread from the Awadhi tradition — buttery, slightly sweet, and best with spiced chai.' },
    ],
    activities: ['Vassa Retreat Walk', 'Ancient City Exploration', 'Garden Meditation'],
  },
  {
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    key: 'sanchi',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'heritage'],
    highlight: 'Extended Buddhist Circuit',
    title: 'Sanchi — Emperor Ashoka\'s Great Stupa',
    desc: 'Sanchi houses the best-preserved group of Buddhist monuments in India, including the Great Stupa commissioned by Emperor Ashoka in the 3rd century BCE. The four elaborately-carved stone gateways (toranas) — depicting the Buddha\'s life in extraordinary relief — are masterpieces of ancient Indian art. A UNESCO World Heritage Site since 1989.',
    sites: ['The Great Stupa (Stupa 1) — UNESCO', 'Ashoka Pillar (fragments)', 'Stupa 2 and Stupa 3', 'Temple 17 & Temple 18', 'Archaeological Museum', 'Buddhist Vihara monastery'],
    tips: 'Sanchi is 46 km from Bhopal. Easily reached by train. Hire a guide to decode the extraordinary narrative carvings on the gateways.',
    cuisine: [
      { name: 'Bhopal Gosht Korma', desc: 'Slow-cooked mutton in a creamy Mughal-influenced sauce — the pride of Bhopal\'s culinary tradition.' },
      { name: 'Bhopali Paan', desc: 'Madhya Pradesh\'s own variation on the betel leaf tradition — sweeter and milder than its Banarasi cousin.' },
      { name: 'Shahi Shrikhand', desc: 'Thick strained yogurt sweetened with saffron and cardamom — the dessert of Central India\'s royal kitchens.' },
    ],
    activities: ['Carving Analysis Tour', 'Museum Exploration', 'Stupa Walk'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600100397608-de25e0bace38?w=800&q=80',
    key: 'kerala',
    country: 'India',
    flag: '🇮🇳',
    category: ['cultural'],
    highlight: 'God\'s Own Country',
    title: 'Kerala — Backwaters, Spices & Ayurveda',
    desc: 'Kerala, "God\'s Own Country," is India\'s most lushly beautiful state — a thin green sliver of coconut palms, backwater canals, Ayurvedic healing centres, and a cuisine built on coconut oil, spices, and the sea. A shikara houseboat drifting through the Alleppey backwaters is among the most tranquil experiences in Asia.',
    sites: ['Alleppey Backwaters (Houseboat)', 'Munnar Tea Estates', 'Periyar Tiger Reserve', 'Fort Kochi (Mattancherry)', 'Kathakali Cultural Performances', 'Varkala Cliffs & Beach'],
    tips: 'Monsoon (June–September) is lush and romantic — perfect for Ayurveda retreats. Avoid peak Christmas–New Year crowds. Houseboat bookings should be made weeks ahead.',
    cuisine: [
      { name: 'Kerala Sadya', desc: 'A feast of 26+ dishes served on a banana leaf for festivals — a symphony of curries, pickles, payasam, and papadum.' },
      { name: 'Appam with Stew', desc: 'Delicate rice-flour crepes with lacy edges served with mild coconut milk stew — Kerala\'s beloved Sunday breakfast.' },
      { name: 'Karimeen Pollichathu', desc: 'Backwater pearl spot fish marinated in spices, wrapped in banana leaf, and roasted on embers.' },
      { name: 'Kerala Prawn Curry', desc: 'Tangy, fiery prawn curry in a tamarind-coconut base — the seafood masterpiece of the Malabar coast.' },
    ],
    activities: ['Houseboat Stay', 'Ayurvedic Massage', 'Tea Garden Walk', 'Kathakali Show'],
  },
  {
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    key: 'goa',
    country: 'India',
    flag: '🇮🇳',
    category: ['cultural'],
    highlight: 'Sun, Sea & Heritage',
    title: 'Goa — Beaches, Churches & Portuguese Legacy',
    desc: 'Goa is unlike any other Indian state — 450 years of Portuguese rule left behind whitewashed Baroque churches, tile-roofed villas, and a cuisine that fuses the East and West in extraordinary ways. Beyond the beaches of Colva and Baga, Old Goa\'s UNESCO churches and Fontainhas Latin Quarter reveal a culturally unique India.',
    sites: ['Basilica of Bom Jesus (UNESCO, St Francis Xavier)', 'Se Cathedral (UNESCO)', 'Fontainhas Latin Quarter', 'Dudhsagar Waterfalls', 'Anjuna & Palolem Beaches', 'Spice Plantation Tours'],
    tips: 'November–February is the best season. North Goa for lively beach scene; South Goa for peace and luxury resorts. Old Goa churches are stunning in the early morning.',
    cuisine: [
      { name: 'Prawn Balchão', desc: 'Spicy-sour prawn pickle preserved in a fiery paste of red chillies, vinegar and spice — pure Goan intensity.' },
      { name: 'Bebinca', desc: 'Goa\'s signature 16-layer coconut-egg dessert — a colonial-era heirloom recipe made for Easter and Christmas.' },
      { name: 'Xacuti Chicken', desc: 'Goan chicken curry in a complex roasted coconut-poppy seed-spice paste — a flavour unlike any other curry.' },
      { name: 'Feni', desc: 'Cashew or coconut distilled spirit unique to Goa — a GI-certified drink produced only in Goa.' },
    ],
    activities: ['Beach Relaxation', 'Old Goa Heritage Walk', 'Spice Plantation Tour', 'Sunset Cruise'],
  },
  {
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    key: 'sikkim',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'heritage'],
    highlight: 'Himalayan Spirituality',
    title: 'Sikkim — The Sacred Himalayan Kingdom',
    desc: 'Sikkim is a sanctuary of Tibetan Buddhism, home to over 200 monasteries nestled among the clouds. Gangtok, the capital, and Pelling offer breathtaking views of Mount Kanchenjunga, the guardian deity of Sikkim. The Rumtek Monastery is a masterpiece of Tibetan architecture.',
    sites: ['Rumtek Monastery', 'Pemayangtse Monastery', 'Nathu La Pass', 'Enchey Monastery', 'Buddha Park (Ravangla)', 'Tsomgo Lake'],
    tips: 'Best time: March–June and October–December. Permits are required for Nathu La. Carry warm layers even in summer.',
    cuisine: [
      { name: 'Sikkimese Momos', desc: 'Steamed dumplings filled with local greens or meat, served with fiery tomato-chilli chutney.' },
      { name: 'Thukpa', desc: 'Hearty noodle soup with vegetables and meat, a staple in the high altitudes of Sikkim.' },
      { name: 'Phagshapa', desc: 'Typical Sikkimese pork fat stew with radishes and chillies, rich and warming.' },
      { name: 'Gundruk', desc: 'Fermented leafy greens soup, a unique and sour delicacy of the Himalayan hills.' },
    ],
    activities: ['Yak Riding at Tsomgo', 'Ropeway in Gangtok', 'Paragliding in Pelling', 'Monastery Trekking'],
  },
  {
    img: 'https://images.unsplash.com/photo-1590117070196-8486950266da?w=800&q=80',
    key: 'ladakh',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'heritage'],
    highlight: 'Himalayan Spirituality',
    title: 'Ladakh — The Land of High Passes',
    desc: 'Ladakh, often called "Little Tibet," is a high-altitude desert known for its stark beauty and deep-rooted Buddhist culture. Leh, the gateway, is surrounded by dramatic monasteries like Thiksey and Hemis that cling to rocky mountainsides.',
    sites: ['Thiksey Monastery', 'Hemis Monastery', 'Shanti Stupa', 'Pangong Lake', 'Nubra Valley (Diskit Monastery)', 'Leh Palace'],
    tips: 'Fly into Leh (3,500m). Acclimatization for 48 hours is mandatory. Inner Line Permits required for border areas.',
    cuisine: [
      { name: 'Butter Tea (Gur Gur Chai)', desc: 'Salted tea made with yak butter and soda — essential for warmth and hydration in the thin air.' },
      { name: 'Skyu', desc: 'Traditional Ladakhi pasta-like thumb-sized pieces cooked in a rich vegetable or meat stew.' },
      { name: 'Khambir', desc: 'Local whole-wheat bread with a thick crust, perfect with butter tea or apricot jam.' },
      { name: 'Apricot Jam', desc: 'Leh\'s famous sweet preserve made from sun-ripened high-altitude apricots.' },
    ],
    activities: ['High Altitude Trekking', 'River Rafting in Zanskar', 'Stargazing at Pangong', 'Bactrian Camel Ride in Nubra'],
  },
  {
    img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    key: 'kashmir',
    country: 'India',
    flag: '🇮🇳',
    category: ['heritage', 'cultural'],
    highlight: 'Himalayan Spirituality',
    title: 'Jammu & Kashmir — Paradisal Peaks & Ancient Roots',
    desc: 'Beyond the iconic Dal Lake and Chinar trees lies a rich history of Buddhist and Shaivite spirituality. The Ambaran ruins near Jammu reveal a major ancient Buddhist monastic complex, while Srinagar remains a hub of Sufi and Kashmiri heritage.',
    sites: ['Dal Lake (Shikara Ride)', 'Ambaran Buddhist Ruins', 'Shankaracharya Temple', 'Gulmarg (Gondola)', 'Mughal Gardens', 'Martand Sun Temple Ruins'],
    tips: 'Best time: April–October. Srinagar is well-connected by air. Expect security checks at various points.',
    cuisine: [
      { name: 'Kashmiri Wazwan', desc: 'A multi-course formal feast — the pinnacle of Kashmiri hospitality and culinary art.' },
      { name: 'Roganjosh', desc: 'Aromatic lamb curry cooked in yogurt and Kashmiri red chillies — the signature dish of the region.' },
      { name: 'Kahwa', desc: 'Fragrant green tea brewed with saffron, cardamom, and almond slivers — a royal Kashmiri welcome.' },
      { name: 'Nadru Yakhni', desc: 'Lotus stems cooked in a delicate yogurt gravy — a quintessential Kashmiri vegetarian delicacy.' },
    ],
    activities: ['Shikara Ride on Dal Lake', 'Gondola Ride in Gulmarg', 'Sufi Soul Walk', 'Kashmiri Handloom Tour'],
  },
  {
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    key: 'pokhara',
    country: 'Nepal',
    flag: '🇳🇵',
    category: ['buddhist', 'cultural'],
    highlight: 'Himalayan Spirituality',
    title: 'Pokhara — The Gateway to the Annapurnas',
    desc: 'Pokhara is Nepal\'s adventure and spiritual hub, set against the backdrop of the Machhapuchhre (Fishtail) peak. The World Peace Pagoda overlooks the serene Phewa Lake, offering a perfect spot for meditation.',
    sites: ['Phewa Lake (Boating)', 'World Peace Pagoda', 'Davis Falls (Patale Chhango)', 'Gupteshwor Mahadev Cave', 'International Mountain Museum', 'Sarangkot (Sunrise)'],
    tips: 'Fly from Kathmandu (25 mins) or drive (6-7 hours). Sarangkot sunrise is unmissable for mountain views.',
    cuisine: [
      { name: 'Thakali Thali', desc: 'The elite Nepali meal — buckwheat or rice served with black lentils, local greens, and spicy pickles.' },
      { name: 'Fried Fish from Phewa', desc: 'Freshly caught fish from the lake, spiced and fried till crispy — a Pokhara lakeside special.' },
      { name: 'Momo', desc: 'Nepali dumplings, arguably the most popular snack in the country, served with spicy "achar".' },
    ],
    activities: ['Paragliding from Sarangkot', 'Boating on Phewa Lake', 'Davis Falls Exploration', 'Peace Pagoda Hike'],
  },
  {
    img: 'https://images.unsplash.com/photo-1510344464522-094391696417?w=800&q=80',
    key: 'dharamshala',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist'],
    highlight: 'Himalayan Spirituality',
    title: 'Dharamshala — The Abode of the Dalai Lama',
    desc: 'McLeod Ganj in Upper Dharamshala is the home of the 14th Dalai Lama and the Tibetan government-in-exile. The air is thick with the sound of chanting and the scent of incense, making it a global center for Tibetan Buddhist study.',
    sites: ['Tsuglagkhang Complex (Namgyal Monastery)', 'Bhagsunag Waterfall', 'Dal Lake (Dharamshala)', 'Norbulingka Institute', 'St. John in the Wilderness Church'],
    tips: 'Fly to Kangra (Gaggal) Airport. The walk around the Dalai Lama temple (Kora) is deeply meditative.',
    cuisine: [
      { name: 'Tibetan Bread', desc: 'Deep-fried, fluffy bread often served with honey or jam for breakfast in the monasteries.' },
      { name: 'Thenthuk', desc: 'Hand-pulled noodle soup, similar to Thukpa but with flat, square noodles — deeply satisfying.' },
      { name: 'Laping', desc: 'Spicy, cold mung bean noodle rolls — a popular Tibetan street snack in McLeod Ganj.' },
    ],
    activities: ['Monastic Chanting Session', 'Tibetan Cooking Class', 'Triund Trekking', 'Kora Walk'],
  },
  {
    img: 'https://images.unsplash.com/photo-1620138902595-3bc556209865?w=800&q=80',
    key: 'tawang',
    country: 'India',
    flag: '🇮🇳',
    category: ['buddhist', 'heritage'],
    highlight: 'Himalayan Spirituality',
    title: 'Tawang — The Land of Hidden Monasteries',
    desc: 'Perched at 3,000m near the Bhutan border, Tawang is home to the largest monastery in India and the second largest in the world. Its remote location preserves a purity of culture and landscape that is rare.',
    sites: ['Tawang Monastery (Galdan Namgyal Lhatse)', 'Sela Pass', 'Madhuri Lake (Sungester Lake)', 'Jaswant Garh War Memorial', 'Nuranang Falls'],
    tips: 'Requires Inner Line Permit (ILP) for Indians and PAP for foreigners. Journey involves crossing the 13,700ft Sela Pass.',
    cuisine: [
      { name: 'Zan', desc: 'Traditional Monpa dish made with millet flour and vegetables or meat — the energy staple of the high mountains.' },
      { name: 'Pika Chila', desc: 'A spicy cheese-based accompaniment made with bamboo shoots and chillies.' },
      { name: 'Chura Sabzi', desc: 'A soup-like curry made with fermented cheese (chura) and hot chillies.' },
    ],
    activities: ['High-Altitude Monastery Visit', 'Sela Pass Exploration', 'Lake Meditation', 'Tribal Culture Tour'],
  },
];

const categoryLabels: { id: Category | 'all'; label: string; icon: ReactNode }[] = [
  { id: 'all', label: 'All Destinations', icon: <Globe size={15} /> },
  { id: 'buddhist', label: 'Buddhist Circuit', icon: <Compass size={15} /> },
  { id: 'heritage', label: 'Heritage & History', icon: <Landmark size={15} /> },
  { id: 'cultural', label: 'Culture & Nature', icon: <Leaf size={15} /> },
];

function CuisineCard({ item }: { item: { name: string; desc: string }; key?: any }) {
  return (
    <div className="flex gap-3 items-start p-3 rounded-xl bg-surface-container-lowest/60">
      <UtensilsCrossed size={14} className="text-tertiary mt-0.5 shrink-0" />
      <div>
        <p className="font-bold text-sm text-on-surface">{item.name}</p>
        <p className="text-xs text-secondary leading-relaxed mt-0.5">{item.desc}</p>
      </div>
    </div>
  );
}

function DestinationCard({ dest, index }: { dest: Destination; index: number; key?: any }) {
  const [showCuisine, setShowCuisine] = useState(false);
  const isReversed = index % 2 !== 0;

  const highlightColors: Record<string, string> = {
    'Core Buddhist Circuit': 'bg-primary/10 text-primary border-primary/20',
    'Extended Buddhist Circuit': 'bg-tertiary/10 text-tertiary border-tertiary/20',
    'Monastic Heritage': 'bg-surface-container-high text-on-surface border-outline-variant/40',
    'Golden Triangle': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    'God\'s Own Country': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    'Sun, Sea & Heritage': 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    'Himalayan Spirituality': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 shrink-0">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sacred-glow bg-surface-container-high">
          <img
            src={dest.img}
            alt={dest.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent" />
          {/* Country badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-on-surface">
            <span>{dest.flag}</span>
            <span>{dest.country}</span>
          </div>
          {/* Highlight badge */}
          <div className={`absolute top-4 right-4 flex items-center gap-1 border text-xs font-bold px-3 py-1 rounded-full ${highlightColors[dest.highlight] || 'bg-surface/90 text-on-surface'}`}>
            <Globe size={10} />
            {dest.highlight}
          </div>
          {/* Number */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full lotus-gradient flex items-center justify-center text-white font-headline font-bold text-sm">
            {index + 1}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-5">
        <h2 className="font-headline text-3xl lg:text-4xl text-on-surface leading-snug">
          {dest.title}
        </h2>
        <p className="text-secondary leading-relaxed text-[1.05rem]">{dest.desc}</p>

        {/* Key Sites */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-xs tracking-widest text-secondary uppercase mb-3">
            <MapPin size={14} className="text-primary" />
            Key Sites
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {dest.sites.map((site, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-on-surface">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {site}
              </li>
            ))}
          </ul>
        </div>

        {/* Travel Tip */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-xs tracking-widest text-secondary uppercase mb-3">
            <Lightbulb size={14} className="text-tertiary" />
            Travel Tips
          </h4>
          <div className="bg-tertiary-fixed/30 border border-tertiary-container/60 rounded-xl px-5 py-4 text-sm text-on-surface leading-relaxed">
            {dest.tips}
          </div>
        </div>

        {/* Soulful Experiences */}
        <div>
          <h4 className="flex items-center gap-2 font-bold text-xs tracking-widest text-secondary uppercase mb-3">
            <Compass size={14} className="text-primary" />
            Soulful Experiences
          </h4>
          <div className="flex flex-wrap gap-2">
            {dest.activities.map((act, i) => (
              <span key={i} className="bg-surface-container-high/60 border border-outline-variant/30 text-on-surface text-[0.7rem] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-primary-container/20 hover:border-primary/30 transition-all duration-300">
                {act}
              </span>
            ))}
          </div>
        </div>

        {/* Cuisine Toggle */}
        <div>
          <button
            onClick={() => setShowCuisine(s => !s)}
            className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-primary transition-colors group"
          >
            <UtensilsCrossed size={14} className="text-tertiary group-hover:text-primary transition-colors" />
            <span className="font-bold text-xs tracking-widest uppercase">Local Cuisine to Try</span>
            {showCuisine ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <AnimatePresence>
            {showCuisine && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dest.cuisine.map((c, i) => (
                    <CuisineCard key={i} item={c} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          to="/tours"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          See tours that visit this destination →
        </Link>
      </div>
    </motion.section>
  );
}

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filtered = activeCategory === 'all'
    ? destinations
    : destinations.filter(d => d.category.includes(activeCategory as Category));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">

      {/* Hero */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Sacred Geography & Beyond
          </span>
          <h1 className="font-headline text-5xl lg:text-6xl text-on-surface leading-tight mb-6">
            Our Destinations
          </h1>
          <div className="h-1 w-20 bg-tertiary-container rounded-full mx-auto mb-6" />
          <p className="text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            From the enlightened banks of the Mahabodhi to the Taj's marble perfection — we cover the full breadth of India &amp; Nepal. Buddhist circuits, Golden Triangle heritage, nature escapes, and cultural wonders. We host everything.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-3xl mx-auto mt-10 flex flex-wrap justify-center gap-3">
          {categoryLabels.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category | 'all')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id
                ? 'lotus-gradient text-white shadow-lg shadow-primary/20'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high border border-outline-variant/20'
                }`}
            >
              <span className="opacity-90">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
          <span className="flex items-center text-xs text-secondary ml-2">
            {filtered.length} destination{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Destination Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-7xl mx-auto px-6 py-16 space-y-28"
        >
          {filtered.map((dest, i) => (
            <DestinationCard key={dest.key} dest={dest} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Cuisine highlight banner */}
      <section className="py-14 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <UtensilsCrossed size={36} className="text-tertiary mx-auto mb-4" />
          <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-3">Taste Every Region</h2>
          <p className="text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
            Your journey with Nirvana is a culinary journey too. Each destination's local cuisine is woven into your itinerary — from Litti Chokha in Bihar to Kerala Sadya on a backwater houseboat to Petha from the shadow of the Taj.
          </p>
          <p className="text-xs text-tertiary font-bold tracking-widest uppercase">Expand any destination card above to explore local foods →</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface-container text-center">
        <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">
          Ready to Write Your Own Story?
        </h2>
        <p className="text-secondary mb-8 max-w-lg mx-auto">
          Choose from curated pilgrimages or request a private custom tour — Buddhist, Heritage, Cultural, or a stunning mix of all three.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/tours"
            className="lotus-gradient text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
          >
            Browse All Itineraries
          </Link>
          <Link
            to="/contact"
            className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all"
          >
            Request Custom Itinerary
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
