import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ChevronDown, ChevronUp, MapPin, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
}

interface Tour {
  id: string;
  name: string;
  tagline: string;
  days: number;
  price: number;
  badge: string | null;
  badgeStyle: string;
  image: string;
  alt: string;
  destinations: string[];
  inclusions: string[];
  description: string;
  itinerary: ItineraryDay[];
}

const tours: Tour[] = [
  {
    id: 'great-awakening',
    name: 'The Great Awakening Circuit',
    tagline: 'Follow the Complete Arc of the Buddha\'s Life',
    days: 7,
    price: 1499,
    badge: 'Most Popular',
    badgeStyle: 'bg-tertiary text-on-tertiary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9PdMGgBUu778m_8DALztERX1e-i0BQPVkjw9_rH7PTTwc6JFR5nni814-8ymlzrvv53i_4Jh8t0BR6rX2O6F72P5ipoLH5v-A0bHoImaAASfSwIXAaHXt9bsUhbO1g6PayM4ulpbhEId1b6vwXmHPf2MLRb5OrfrNCw4DqQuMFa3TNeRJq4H6xOHnpiJ6egGqebVL8eOlxSxtyvWY15aTRtSxScINYQwyWkF49HYLxgJYYostodjKtV90szjgqK1dak5_rzcZtBs',
    alt: 'Ancient stupa at Kushinagar during sunset',
    destinations: ['Bodh Gaya', 'Varanasi', 'Sarnath', 'Kushinagar'],
    inclusions: ['Full Board', 'Luxury Coach', 'Monastic Stays', 'Expert Guide', 'All Entrance Fees'],
    description: 'A comprehensive pilgrimage through the four most sacred sites in Buddhism — Bodh Gaya (enlightenment), Sarnath (first teaching), Kushinagar (final passing), and Varanasi (city of light). Experience the full arc of the Buddha\'s life with daily guided meditations, monastery visits, and river ceremonies.',
    itinerary: [
      { day: 1, title: 'Arrival in Gaya & Transfer to Bodh Gaya', desc: 'Arrive at Gaya Airport or Gaya Junction. Our guide greets you and drives to Bodh Gaya (15 km). Check into your monastic guesthouse — a quiet space designed for reflection. Evening: gentle introductory walk around the outer Mahabodhi Temple grounds. Group welcome dinner followed by a short orientation on pilgrimage etiquette and the Buddha\'s life story.' },
      { day: 2, title: 'Mahabodhi Temple & The Sacred Bodhi Tree', desc: 'Rise before dawn for seated meditation at the Bodhi Tree — the exact spot of the Buddha\'s enlightenment under the full moon 2,500 years ago. With your guide, tour the UNESCO-listed Mahabodhi Temple Complex: the Vajrasana (Diamond Throne), the Animisalocana Cetiya, the Lotus Pond, and all seven circumambulation sites marking the Buddha\'s first weeks after enlightenment. Late afternoon: optional visit to the 25m carved Ashoka Pillar. Evening: attend the official Puja ceremony performed by resident Tibetan monks.' },
      { day: 3, title: 'International Monasteries & the Great Buddha', desc: 'Morning: visit the 80ft Great Buddha Statue and its surrounding meditation gardens — a soaring bronze monument overlooking the sacred city. Spend the afternoon exploring the ring of 25+ international monasteries: Tibetan Tergar Monastery, the ornate Japanese Daijokyo Temple, Royal Bhutan Monastery, Chinese Temple, Thai Monastery, and Burmese Vihara — each a unique expression of world Buddhism. Optional: private audience with a senior Tibetan monk (subject to availability). Evening: free time for personal practice or quiet market shopping.' },
      { day: 4, title: 'Drive to Varanasi — City of Light & Moksha', desc: 'Morning drive to Varanasi (250 km, ~5 hours) through the Gangetic plains of Bihar. Arrive and check in to your riverside guesthouse. Rest and freshen up. Late afternoon: stroll through the winding lanes of the old city — past ancient temples, silk weavers, paan-wallahs, and chai stalls. Evening at Dasaswamedh Ghat for the spectacular Ganga Aarti — an hour-long ceremony of fire, incense, conch shells, and synchronized chanting by Brahmin priests. Optional: night rowboat ride along the illuminated ghats.' },
      { day: 5, title: 'Dawn on the Ganges & Sarnath Deer Park', desc: 'Pre-dawn wake-up at 5:00am for a sunrise boat ride on the Ganges — witness the ancient ritual of dawn bathing across 84 ghats as mist hangs over the river. Return for breakfast. Drive to Sarnath (12 km): stand in the Deer Park where the Buddha turned the wheel of Dharma for five ascetics after his enlightenment. Visit the 5th-century Dhamek Stupa, the Mulagandha Kuti Vihara with original Gandharan frescoes, and the Sarnath Archaeological Museum — home to Ashoka\'s famous Lion Capital (India\'s national emblem). Afternoon: guided meditation in the Deer Park garden. Return to Varanasi for dinner.' },
      { day: 6, title: 'Kushinagar — Where the Dharma Was Completed', desc: 'Drive to Kushinagar (250 km, ~5 hrs) — the place of the Buddha\'s Mahaparinirvana (final passing). Visit the solemn Mahaparinirvana Temple with its 6-metre reclining Buddha statue, laid in the position of final rest. Walk to the Ramabhar Stupa — the cremation site. Meditate in the Sala grove, where the Buddha asked his followers to gather for his final teaching. Join an evening candlelit chanting session at the local Burmese Monastery.' },
      { day: 7, title: 'Closing Ceremony & Departure', desc: 'Morning silent meditation and reflective closing circle with your guide — sharing insights, intentions, and the teachings carried home. Transfer to Gorakhpur Railway Station or Airport. Receive a hand-painted scroll of the Four Sacred Sites as a parting gift from Nirvana Travels. May your journey continue inward.' },
    ],
  },
  {
    id: 'bodh-gaya-immersion',
    name: 'Sacred Bodh Gaya Immersion',
    tagline: 'Go Deep into the Heart of Enlightenment',
    days: 4,
    price: 649,
    badge: 'Best Seller',
    badgeStyle: 'bg-primary text-on-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp2qF5E3XK5I4jnFrtdVw7kX_hdxLfatJvNeuVCUIcfn9O6Egdctoa6tQhBukZz5vXGsqLOJBPLs4Hx3sbzVAw1nNM6zJcpqwFr_4yiafohT5w0nuskzcBu8ZBJnxVHV_2xAYtmlpYwO6-_E6aS3gJ2uEPBMCr6KK8hikRi6_gD8gIhgR_mXte4809gL7sMfiz1VQ3X_X9NIMUccrqsF7WXO8ErrsD9FQoMddGE4exJ0Srj_LzB-yNYUzx18KlkAF-6BX-n-wzqrY',
    alt: 'Mahabodhi temple spire against clear blue sky',
    destinations: ['Bodh Gaya'],
    inclusions: ['Breakfast & Dinner', 'Private Guide', 'Entrance Fees', 'Daily Meditation Sessions'],
    description: 'An immersive 4-day retreat focused entirely on Bodh Gaya — the navel of the Buddhist world. Slow down, breathe, and let the sacred energy of the Mahabodhi complex transform your understanding of self and suffering. Ideal for those who want depth over breadth.',
    itinerary: [
      { day: 1, title: 'Arrival & First Touch of the Sacred', desc: 'Arrive at Gaya and transfer to Bodh Gaya (15 km). Settle into your monastic guesthouse — a quiet, simple space conducive to reflection. Afternoon: unguided introductory walk around the outer Mahabodhi Temple grounds, allowing you to absorb the atmosphere on your own terms. Sunset group meditation near the Lotus Pond. Welcome dinner with your guide, who will share the history and teachings of the place.' },
      { day: 2, title: 'Mahabodhi Temple — A Full Day Inside the Complex', desc: 'Full day inside the UNESCO Mahabodhi Temple Complex. Dawn: seated meditation under the sacred Bodhi Tree — a direct descendant of the original tree under which Siddhartha sat. Your guide explains the significance of all seven post-enlightenment sites. Tour the intricate carved stone railings (1st century BCE), the Animisalocana Cetiya where the Buddha stood and gazed at the Bodhi Tree in gratitude, and the Ratanacankama Cetiya (jewel promenade). Afternoon: learn about the Buddha\'s seven weeks of contemplation after enlightenment. Evening Puja ceremony with chanting monks — remain and meditate as long as you wish.' },
      { day: 3, title: 'Monasteries, Monks & the Great Buddha Statue', desc: 'Begin at the 80ft Great Buddha Statue at sunrise — an immense bronze figure radiating calm over the temple town. Morning: walking tour of the international monastery complex — meet resident monks from Tibet, Sri Lanka, Japan, and Myanmar. Arrange a private tea ceremony with a Tibetan monk (pre-booked). Afternoon: visit the Archaeological Museum and its collection of Gupta-period sculptures recovered from the Mahabodhi site. Optional evening: attend a public Dhamma discourse at one of the monasteries.' },
      { day: 4, title: 'Dawn Offering Ritual & Mindful Departure', desc: 'Final dawn meditation at the Bodhi Tree — a personal sit without guidance, to integrate all you have received. After sunrise, participate in the traditional morning flower-offering ritual at the Vajrasana (Diamond Throne). Post-breakfast closing circle with your guide: sharing insights, intentions, and blessings for the road ahead. Transfer to Gaya Airport or Gaya Junction for onward travel. You leave changed.' },
    ],
  },
  {
    id: 'varanasi-sarnath',
    name: 'Varanasi & Sarnath Retreat',
    tagline: 'River of Life, Forest of the First Teaching',
    days: 3,
    price: 449,
    badge: null,
    badgeStyle: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXeiHkqJpMKZO5vmFn-XTo057usESQX-vLI3WTJrn5UaDfIJUhwn9K27ZCGvPXZnSxO9hvx8JVK5xP0lngGw3Yfsl3nuaFA_o7jxWRfn0xp9O308m_tI5F3XmW7JvpKIJUAFLMJo6ErL-jNXpO9TgfBeBQE9iznNRrFBd1DB5o8nifLh1Ia5_08FJ0RYhxXer76iFaiaCNleGLaZJ_V4DRRlSV7MnypM6HNZAP_6UTZ--lOl1nuh9hnykXmpkXOnnLIS8HaExBXc',
    alt: 'Aerial view of Varanasi river ghats',
    destinations: ['Varanasi', 'Sarnath'],
    inclusions: ['Breakfast', 'Ganges Boat Ride', 'Local Expert Guide', 'Entrance Fees'],
    description: 'Varanasi — the world\'s oldest continuously inhabited city — is the backdrop for one of the most profound encounters with impermanence on earth. Pair it with Sarnath\'s Deer Park, where the Buddha turned the wheel of Dharma after enlightenment, for a journey that speaks directly to life\'s deepest questions.',
    itinerary: [
      { day: 1, title: 'Arrival in Varanasi — City of Moksha', desc: 'Arrive at Lal Bahadur Shastri Airport or Varanasi Junction. Transfer and check in to your guesthouse near the ghats. After rest, join an afternoon guided walk through the winding lanes of the old city — past Kashi Vishwanath Temple lane, silk weavers\' workshops, flower garland sellers, and ancient water-wells. Evening at Dasaswamedh Ghat for the spectacular nightly Ganga Aarti — an hour of fire, incense, conch, chanting, and synchronized ritual by Brahmin priests. Optional: extend the evening with a night rowboat ride along the illuminated ghats.' },
      { day: 2, title: 'Dawn Ganges & Sarnath — The Deer Park', desc: 'Pre-dawn wake at 5:00am. Board a wooden rowboat for sunrise on the Ganges — witness the ancient ritual of dawn bathing across 84 ghats as holy men, ordinary families, and mourners perform their practices in the misty light. Return for breakfast. Drive to Sarnath (12 km): stand in the Deer Park where the Buddha gave his very first sermon to five ascetics after enlightenment — the First Turning of the Wheel of Dharma. Visit the Dhamek Stupa (5th century CE), the Mulagandha Kuti Vihara with original Gandharan frescoes, and the Sarnath Archaeological Museum — home to the Ashoka Lion Capital, India\'s national emblem. Guided meditation in the Deer Park garden. Return to Varanasi. Free evening.' },
      { day: 3, title: 'Manikarnika Ghat & Departure', desc: 'Morning: optional contemplative visit to Manikarnika Ghat — Hinduism\'s most sacred cremation ground, where fires have burned without interruption for thousands of years. A meditation on anicca (impermanence) unlike any other. Morning: brief visit to Kashi Vishwanath corridor (the golden temple area). Mid-morning: free time by the river for personal offering, quiet sitting, or last-minute silk shopping. Noon: transfer to airport or station. Carry Varanasi with you.' },
    ],
  },
  {
    id: 'monastic-heritage',
    name: 'Monastic Heritage Walk',
    tagline: 'Ancient Universities & Ruins of Magadha',
    days: 5,
    price: 899,
    badge: 'Off the Beaten Path',
    badgeStyle: 'bg-surface-container-highest text-on-surface',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQABquklSKh4X0Xoc3P_8Xbkxs4kGypvqOZ2sAaIsUGmrwQXV-oleFvJSSmk0GqadI9zSbQUWIO2LOTR5VopU4-vK2lU0mgQOO8FViVHYPTIcFWgz7sma8PnLaNRMpKlenz-cBWA3m1CRifODmLf0cPsaYfN1PEVOe3zGsU9tzTLocJv8U-bdKNtPYR3z6gbs57PYfYzfIXTEXcT2A6xA7OvQp76JjjJW6YspkN3ePsTN0zMBwIWpdEZ1cQ5lvP7vWsIuyolFQVno',
    alt: 'Monks walking through ancient monastery ruins',
    destinations: ['Patna', 'Nalanda', 'Rajgir', 'Pawapuri', 'Bodh Gaya'],
    inclusions: ['Full Board', 'AC Transport', 'Historian Guide', 'All Entrance Fees', 'Museum Passes'],
    description: 'Venture beyond the main pilgrimage circuit into the scholarly heartland of ancient Buddhism. Explore Nalanda University — once the world\'s greatest center of learning with 10,000 students — trek Vulture\'s Peak in Rajgir where key sutras were delivered, and discover Pawapuri\'s ethereal Jal Mandir. A journey for the curious pilgrim who wants scholarship alongside spirituality.',
    itinerary: [
      { day: 1, title: 'Arrive Patna — Gateway to Ancient Magadha', desc: 'Arrive at Patna Airport (Jay Prakash Narayan International). Transfer to hotel in Patna. Afternoon: Patna Museum — home to the celebrated Didarganj Yakshi (3rd century BCE polished stone sculpture), Mauryan-era terracottas, and a significant Buddhist relic casket. Evening: leisurely walk along the Ganges embankment in Patna — one of the world\'s oldest continuously inhabited cities, known in antiquity as Pataliputra, capital of the Mauryan Empire.' },
      { day: 2, title: 'Nalanda — The Great University Ruins', desc: 'Drive to Nalanda (90 km, ~2 hrs). Explore the vast UNESCO-listed ruins of Nalanda Mahavihara — the ancient university that at its peak housed 10,000 students and 2,000 teachers from across Asia, teaching logic, grammar, medicine, philosophy, and the Dharma. Walk through the massive monastery complexes, ancient lecture halls, libraries, and stupas dating from the 5th to 12th centuries CE. Visit the Nalanda Archaeological Museum with its sculptures and manuscripts. Afternoon: tour the newly opened Nalanda International University campus — a modern revival of the ancient vision. Overnight in Rajgir.' },
      { day: 3, title: 'Rajgir — Vulture\'s Peak & Sacred Hot Springs', desc: 'Rise early for the cable car ascent to Gridhrakuta (Vulture\'s Peak) — the very hill where the Buddha delivered the Heart Sutra and the Lotus Sutra to thousands of disciples. Descend and visit Venuvana (Bamboo Grove) Monastery — the world\'s first Buddhist monastery, gifted to the Buddha by King Bimbisara of Magadha. After lunch: ascend to the Japanese-built World Peace Pagoda (Nipponzan-Myohoji order), offering panoramic views over Rajgir\'s ring of hills. Late afternoon: bathe in the natural hot spring pools of Venu Kund, used since the time of the Buddha. Evening: walk the ancient walls of Rajagriha.' },
      { day: 4, title: 'Pawapuri — Jal Mandir & Transfer to Bodh Gaya', desc: 'Morning drive to Pawapuri (25 km). Visit the Jal Mandir — a pristine white marble temple set in the centre of a large lotus lake, accessible only by a narrow marble causeway. The lake was formed, legend holds, when so many devotees carried away earth after the cremation of Mahavira (the Jain Tirthankara) that the hollow filled with water and bloomed with lotus. The serene beauty here is unlike anywhere else in Bihar. After reflection, drive to Bodh Gaya (80 km). Check in. Evening: first visit to the Mahabodhi Temple at sunset — candles, chanting, and golden light.' },
      { day: 5, title: 'Bodh Gaya Highlights & Departure', desc: 'Final dawn meditation at the Bodhi Tree. Full morning in the Mahabodhi Temple Complex — moving at your own pace, sitting wherever calls to you. Visit the 80ft Great Buddha Statue one last time. After lunch, browse handcrafted Buddhist art, thangka paintings, and meditation beads from local artisans before departing. Transfer to Gaya Airport or Railway Station. This Bihar circuit is one of the most historically rich journeys on earth — and one of the least crowded.' },
    ],
  },
  {
    id: 'grand-lotus-circuit',
    name: 'Grand Lotus Circuit',
    tagline: 'India & Nepal — Every Sacred Site, One Journey',
    days: 14,
    price: 2799,
    badge: 'Premium',
    badgeStyle: 'bg-tertiary-fixed text-on-surface',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqcEabaiMR9Nm1d8XV2ewmJuX3y3a4JOWT4MMHp1w3Kc5dYaZTNULPZ2Qp_80wObQuUlgFtp20IsS8GRqqF40NS-T6AlciB0B_PUisbs5Mphjtpm-4JVZ1eFY37JNigB4Jl9eY7tWb3eryYP8M2_U2EaU2Rmd4eRkGc5h7o8qaRYiXXymbYTp-nnxv38wphvVROdp9fH87z56UsFX51yNA-6aKmqyL-mDakMMYjjfZCZbSGWz6Y04i7a_m5FT5gtkyx7FNC8rJnag',
    alt: 'Buddhist monks walking in meditation through a forest',
    destinations: ['Kathmandu', 'Lumbini', 'Bodh Gaya', 'Nalanda', 'Varanasi', 'Sarnath', 'Shravasti', 'Kushinagar'],
    inclusions: ['Full Board', 'Internal Flights', 'Premium Hotels & Monasteries', 'Expert Guide Throughout', 'All Entrances', 'Visa Assistance'],
    description: 'The most comprehensive Buddhist pilgrimage available — covering every major site across India and Nepal in 14 deeply curated days. From Lumbini (birthplace) to Kushinagar (parinirvana), this journey traces the complete geography of the Dharma. For the serious practitioner who wants to walk every sacred mile.',
    itinerary: [
      { day: 1, title: 'Arrive Kathmandu — Gateway of the Himalayas', desc: 'Arrive at Tribhuvan International Airport, Kathmandu. Meet your dedicated guide. Transfer to hotel in Thamel. Evening: visit Boudhanath Stupa — one of the largest Buddhist stupas in the world and the spiritual heart of Tibetan Buddhism in Nepal. Circumambulate the stupa with pilgrims from Bhutan, Tibet, and Nepal. Welcome dinner and orientation briefing.' },
      { day: 2, title: 'Kathmandu — Swayambhunath & Pashupatinath', desc: 'Morning: Swayambhunath (Monkey Temple) — an ancient stupa crowning a hill with panoramic views of the Kathmandu Valley, adorned with the all-seeing eyes of the Buddha. Afternoon: Pashupatinath — the great Shiva temple on the Bagmati River, where cremations occur in the open air beside the water. An encounter with impermanence and the sacred interweaving of Hinduism and Buddhism in Nepal. Evening: free time in Thamel.' },
      { day: 3, title: 'Fly to Lumbini — Birthplace of the Buddha', desc: 'Morning flight (or drive, 6 hrs) to Bhairahawa/Lumbini. Visit Maya Devi Temple — the exact birthplace of Siddhartha Gautama, marked by the Ashokan Pillar (249 BCE) inscribed: "Here the Blessed One was born." Walk the Sacred Garden. Explore the International Monastery Zone — dozens of national temples from Korea, China, Sri Lanka, Germany, France, and Japan. Evening: candlelit Puja at Maya Devi Temple.' },
      { day: 4, title: 'Lumbini — Kapilvastu & Ancient Royal City', desc: 'Morning: drive to Tilaurakot (27 km) — the ancient Shakya Kingdom palace where the young Prince Siddhartha spent his first 29 years before the Great Renunciation. Walk the palace ruins and surrounding royal garden. Afternoon: Kapilvastu Museum and the Kudan Stupa. Evening: meditation in the Sacred Garden, Lumbini — sitting where the Buddha\'s mother stood and gave birth under the sala tree.' },
      { day: 5, title: 'Cross to India — Transfer to Bodh Gaya', desc: 'Morning cross the Sonauli border into Uttar Pradesh, India. Drive through the eastern Gangetic plains to Bodh Gaya (350 km, ~7 hrs with border formalities). Arrive and rest. Short evening walk to the Mahabodhi Temple to feel the energy of the sacred site for the first time.' },
      { day: 6, title: 'Bodh Gaya — The Enlightenment Site', desc: 'Full day at the Mahabodhi Temple UNESCO Complex. Pre-dawn meditation at the Bodhi Tree. Guided tour of all seven post-enlightenment contemplation sites. Attend the evening Puja ceremony — monks from 20 nations chanting in unison. Dinner at a local ashram kitchen, prepared with mindfulness.' },
      { day: 7, title: 'Bodh Gaya — Monasteries & Great Buddha', desc: 'Morning: the 80ft Great Buddha Statue at sunrise. Walking tour of the international monastery ring — Tibetan, Japanese, Thai, Bhutanese, Vietnamese. Optional: session with a resident Tibetan lama on the Four Noble Truths. Afternoon: Archaeological Museum and local artisan market.' },
      { day: 8, title: 'Nalanda University Ruins & Rajgir', desc: 'Drive to Nalanda (90 km). Explore the great university ruins — once the world\'s most prestigious institution of learning. Drive to Rajgir: Vulture\'s Peak cable car, Venuvana Monastery. Overnight in Rajgir or return to Bodh Gaya.' },
      { day: 9, title: 'Transfer to Varanasi — City of Light', desc: 'Drive or short flight to Varanasi. Check in to riverside guesthouse. Afternoon: old city lanes walk. Evening: Ganga Aarti at Dasaswamedh Ghat.' },
      { day: 10, title: 'Varanasi Ghats & Sarnath — Deer Park', desc: 'Pre-dawn boat ride on the Ganges. Sarnath: Dhamek Stupa, Deer Park, Lion Capital Museum. Guided meditation in the Deer Park grove. Return to Varanasi for dinner.' },
      { day: 11, title: 'Transfer to Shravasti — Jetavana Monastery', desc: 'Drive to Shravasti (250 km, ~5 hrs) — where the Buddha spent 25 rainy-season retreats (vassa). Visit Jetavana Monastery, gifted by the merchant Anathapindika — walk through the ruins of the Buddha\'s personal kuti (hut). Explore the ancient city ruins of Savatthi, the Kosalan capital.' },
      { day: 12, title: 'Shravasti to Kushinagar', desc: 'Final morning meditation at Jetavana. Drive to Kushinagar (175 km, ~4 hrs). Check in. Evening: Mahaparinirvana Temple — the reclining Buddha awaits in golden stillness. Circumambulate the Ramabhar Stupa (cremation site) at sunset.' },
      { day: 13, title: 'Kushinagar — The Final Teachings', desc: 'Full day at Kushinagar. Morning: meditation in the Sala Grove where the Buddha uttered his final words: "All conditioned things are impermanent. Work out your salvation with diligence." Afternoon: smaller local monasteries, including the Chinese Buddhist Temple and the Sri Lankan Mahaparinirvana Museum. Evening: closing Dhamma discourse with a resident monk.' },
      { day: 14, title: 'Return & Grand Farewell', desc: 'Transfer to Gorakhpur or Varanasi for the flight back to Delhi. Arrive Delhi evening. Optional: visit the National Museum of India\'s Buddhist gallery (Gandharan sculpture collection). Airport transfer. Receive a hand-illustrated Grand Lotus Circuit map and a handwoven silk scroll as farewell gifts. You have walked every sacred mile.' },
    ],
  },
  {
    id: 'sacred-day-tour',
    name: 'Bodh Gaya Sacred Day Tour',
    tagline: 'One Day of Deep Stillness at the World\'s Navel',
    days: 1,
    price: 49,
    badge: null,
    badgeStyle: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqjLhXX7T3AFFq5kd51LoUkPkW50DEFgoyoJxMzN1rJfAUjyPtquShFMymEjH6VEzEWZLhgWzwB-8m5UzJ-rLDT0yX7ril-3qMuHa74CNI9csOoWSfXsk-n7TzojloVBTC1lBOoPJL73QyuG_ahd-C90tXheTXzfaWbhmiKP3VsDWG-2RdUNOuY9RunyzZQnj-0-E51Oa-K_7UafdgkNXXlskSgjOz1x4C-3anbQk-ZRuKJi8VWiQEWjRyVdqyxUGJZOiCenWGGmw',
    alt: 'Bodhi Tree lit by candlelight at night',
    destinations: ['Bodh Gaya'],
    inclusions: ['Certified Local Guide (6 hrs)', 'All Entrance Fees', 'Chai & Snack Break'],
    description: 'Perfect for travelers with limited time. A curated 6-hour walking tour of Bodh Gaya\'s most significant sites with a certified local guide. From the Mahabodhi Temple to the international monasteries, you will leave with a felt sense of this extraordinary place that words cannot fully convey.',
    itinerary: [
      { day: 1, title: 'A Complete Sacred Day at the Heart of Buddhism', desc: '6:30am — Meet your guide at the Mahabodhi Temple main gate. Begin with 30 minutes of guided sitting meditation under the Bodhi Tree as the first light of day filters through the leaves. 7:30am — Guided tour of the temple complex: Vajrasana (Diamond Throne), the seven sacred sites, carved Ashokan railings, and the inner sanctum. 9:00am — Walk to the 80ft Great Buddha Statue for photographs and quiet reflection in the surrounding garden. 10:30am — Tour of the Tibetan Tergar Monastery and the ornate Japanese Daijokyo Temple — two contrasting expressions of the same tradition. 11:30am — Chai break at a local tea stall with your guide: time for questions, stories, and conversation. 12:30pm — Optional visit to the Bodh Gaya Archaeological Museum (₹100 extra). 1:30pm — Final blessings at the Mahabodhi Temple main stupa. Transfer back to your hotel or Gaya station. A single day — a lifetime of resonance.' },
    ],
  },
];

interface Departure {
  tourName: string;
  tourId: string;
  days: number;
  date: string;
  spotsLeft: number;
  image: string;
  alt: string;
}

const upcomingDepartures: Departure[] = [
  {
    tourName: 'The Great Awakening Circuit',
    tourId: 'great-awakening',
    days: 7,
    date: 'Mar 25, 2026',
    spotsLeft: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9PdMGgBUu778m_8DALztERX1e-i0BQPVkjw9_rH7PTTwc6JFR5nni814-8ymlzrvv53i_4Jh8t0BR6rX2O6F72P5ipoLH5v-A0bHoImaAASfSwIXAaHXt9bsUhbO1g6PayM4ulpbhEId1b6vwXmHPf2MLRb5OrfrNCw4DqQuMFa3TNeRJq4H6xOHnpiJ6egGqebVL8eOlxSxtyvWY15aTRtSxScINYQwyWkF49HYLxgJYYostodjKtV90szjgqK1dak5_rzcZtBs',
    alt: 'Stupa at Kushinagar',
  },
  {
    tourName: 'Sacred Bodh Gaya Immersion',
    tourId: 'bodh-gaya-immersion',
    days: 4,
    date: 'Apr 08, 2026',
    spotsLeft: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp2qF5E3XK5I4jnFrtdVw7kX_hdxLfatJvNeuVCUIcfn9O6Egdctoa6tQhBukZz5vXGsqLOJBPLs4Hx3sbzVAw1nNM6zJcpqwFr_4yiafohT5w0nuskzcBu8ZBJnxVHV_2xAYtmlpYwO6-_E6aS3gJ2uEPBMCr6KK8hikRi6_gD8gIhgR_mXte4809gL7sMfiz1VQ3X_X9NIMUccrqsF7WXO8ErrsD9FQoMddGE4exJ0Srj_LzB-yNYUzx18KlkAF-6BX-n-wzqrY',
    alt: 'Mahabodhi temple spire',
  },
  {
    tourName: 'Varanasi & Sarnath Retreat',
    tourId: 'varanasi-sarnath',
    days: 3,
    date: 'Apr 15, 2026',
    spotsLeft: 9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXeiHkqJpMKZO5vmFn-XTo057usESQX-vLI3WTJrn5UaDfIJUhwn9K27ZCGvPXZnSxO9hvx8JVK5xP0lngGw3Yfsl3nuaFA_o7jxWRfn0xp9O308m_tI5F3XmW7JvpKIJUAFLMJo6ErL-jNXpO9TgfBeBQE9iznNRrFBd1DB5o8nifLh1Ia5_08FJ0RYhxXer76iFaiaCNleGLaZJ_V4DRRlSV7MnypM6HNZAP_6UTZ--lOl1nuh9hnykXmpkXOnnLIS8HaExBXc',
    alt: 'Aerial view of Varanasi ghats',
  },
  {
    tourName: 'Grand Lotus Circuit',
    tourId: 'grand-lotus-circuit',
    days: 14,
    date: 'Apr 22, 2026',
    spotsLeft: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqcEabaiMR9Nm1d8XV2ewmJuX3y3a4JOWT4MMHp1w3Kc5dYaZTNULPZ2Qp_80wObQuUlgFtp20IsS8GRqqF40NS-T6AlciB0B_PUisbs5Mphjtpm-4JVZ1eFY37JNigB4Jl9eY7tWb3eryYP8M2_U2EaU2Rmd4eRkGc5h7o8qaRYiXXymbYTp-nnxv38wphvVROdp9fH87z56UsFX51yNA-6aKmqyL-mDakMMYjjfZCZbSGWz6Y04i7a_m5FT5gtkyx7FNC8rJnag',
    alt: 'Buddhist monks in meditation',
  },
  {
    tourName: 'Monastic Heritage Walk',
    tourId: 'monastic-heritage',
    days: 5,
    date: 'May 01, 2026',
    spotsLeft: 7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQABquklSKh4X0Xoc3P_8Xbkxs4kGypvqOZ2sAaIsUGmrwQXV-oleFvJSSmk0GqadI9zSbQUWIO2LOTR5VopU4-vK2lU0mgQOO8FViVHYPTIcFWgz7sma8PnLaNRMpKlenz-cBWA3m1CRifODmLf0cPsaYfN1PEVOe3zGsU9tzTLocJv8U-bdKNtPYR3z6gbs57PYfYzfIXTEXcT2A6xA7OvQp76JjjJW6YspkN3ePsTN0zMBwIWpdEZ1cQ5lvP7vWsIuyolFQVno',
    alt: 'Monks walking through ruins',
  },
  {
    tourName: 'The Great Awakening Circuit',
    tourId: 'great-awakening',
    days: 7,
    date: 'May 12, 2026',
    spotsLeft: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9PdMGgBUu778m_8DALztERX1e-i0BQPVkjw9_rH7PTTwc6JFR5nni814-8ymlzrvv53i_4Jh8t0BR6rX2O6F72P5ipoLH5v-A0bHoImaAASfSwIXAaHXt9bsUhbO1g6PayM4ulpbhEId1b6vwXmHPf2MLRb5OrfrNCw4DqQuMFa3TNeRJq4H6xOHnpiJ6egGqebVL8eOlxSxtyvWY15aTRtSxScINYQwyWkF49HYLxgJYYostodjKtV90szjgqK1dak5_rzcZtBs',
    alt: 'Stupa at Kushinagar',
  },
  {
    tourName: 'Varanasi & Sarnath Retreat',
    tourId: 'varanasi-sarnath',
    days: 3,
    date: 'May 27, 2026',
    spotsLeft: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeXeiHkqJpMKZO5vmFn-XTo057usESQX-vLI3WTJrn5UaDfIJUhwn9K27ZCGvPXZnSxO9hvx8JVK5xP0lngGw3Yfsl3nuaFA_o7jxWRfn0xp9O308m_tI5F3XmW7JvpKIJUAFLMJo6ErL-jNXpO9TgfBeBQE9iznNRrFBd1DB5o8nifLh1Ia5_08FJ0RYhxXer76iFaiaCNleGLaZJ_V4DRRlSV7MnypM6HNZAP_6UTZ--lOl1nuh9hnykXmpkXOnnLIS8HaExBXc',
    alt: 'Varanasi ghats at dawn',
  },
  {
    tourName: 'Sacred Bodh Gaya Immersion',
    tourId: 'bodh-gaya-immersion',
    days: 4,
    date: 'Jun 10, 2026',
    spotsLeft: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp2qF5E3XK5I4jnFrtdVw7kX_hdxLfatJvNeuVCUIcfn9O6Egdctoa6tQhBukZz5vXGsqLOJBPLs4Hx3sbzVAw1nNM6zJcpqwFr_4yiafohT5w0nuskzcBu8ZBJnxVHV_2xAYtmlpYwO6-_E6aS3gJ2uEPBMCr6KK8hikRi6_gD8gIhgR_mXte4809gL7sMfiz1VQ3X_X9NIMUccrqsF7WXO8ErrsD9FQoMddGE4exJ0Srj_LzB-yNYUzx18KlkAF-6BX-n-wzqrY',
    alt: 'Mahabodhi temple',
  },
];

type FilterType = 'all' | 'day' | 'short' | 'long';

function TourCard({ tour }: { tour: Tour }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden sacred-glow border border-outline-variant/10 flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          src={tour.image}
          alt={tour.alt}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {tour.badge && (
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${tour.badgeStyle}`}>
              {tour.badge}
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-surface/90 text-on-surface flex items-center gap-1">
            {tour.days === 1 ? <Clock size={12} /> : <Calendar size={12} />}
            {tour.days === 1 ? '1 Day' : `${tour.days} Days`}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-1 flex-wrap">
          {tour.destinations.slice(0, 3).map(d => (
            <span key={d} className="flex items-center gap-1 text-xs text-surface/90 font-medium">
              <MapPin size={10} className="text-primary-fixed" />
              {d}
            </span>
          ))}
          {tour.destinations.length > 3 && (
            <span className="text-xs text-surface/70">+{tour.destinations.length - 3} more</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        <p className="text-xs font-bold tracking-widest text-tertiary uppercase mb-2">{tour.tagline}</p>
        <h3 className="font-headline text-2xl text-on-surface mb-3 leading-snug">{tour.name}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{tour.description}</p>

        {/* Inclusions */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tour.inclusions.map(inc => (
            <span key={inc} className="flex items-center gap-1 text-xs text-secondary font-medium bg-surface-container px-3 py-1 rounded-full">
              <CheckCircle size={10} className="text-primary shrink-0" />
              {inc}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-auto pt-5 border-t border-outline-variant/20 flex items-center justify-between">
          <div>
            <span className="text-xs text-secondary uppercase tracking-wider block">From</span>
            <span className="font-headline text-2xl text-primary font-bold">
              ${tour.price.toLocaleString()}
              <span className="text-sm font-normal text-secondary">/person</span>
            </span>
          </div>
          <Link
            to="/contact"
            className="lotus-gradient text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Itinerary Toggle */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-4 flex items-center justify-center gap-2 w-full text-xs font-bold text-secondary hover:text-primary transition-colors py-2 border border-outline-variant/20 rounded-xl hover:border-primary/30"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? 'Hide Itinerary' : `View Day-by-Day Itinerary (${tour.itinerary.length} ${tour.itinerary.length === 1 ? 'Day' : 'Days'})`}
        </button>
      </div>

      {/* Expanded Itinerary */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 space-y-5 border-t border-outline-variant/20 pt-6 bg-surface-container-low">
              <h4 className="font-bold text-xs tracking-widest text-secondary uppercase">Day-by-Day Itinerary</h4>
              {tour.itinerary.map((day, idx) => (
                <div key={day.day} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold shrink-0">
                      {day.day}
                    </div>
                    {idx < tour.itinerary.length - 1 && (
                      <div className="w-[2px] flex-grow bg-outline-variant/30 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <h5 className="font-bold text-on-surface text-sm mb-1">{day.title}</h5>
                    <p className="text-secondary text-sm leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Tours() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filterOptions: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Tours' },
    { id: 'day', label: 'Day Tour' },
    { id: 'short', label: '3–5 Days' },
    { id: 'long', label: '7–14 Days' },
  ];

  const filteredTours = tours.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'day') return t.days === 1;
    if (filter === 'short') return t.days >= 3 && t.days <= 5;
    if (filter === 'long') return t.days >= 7;
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Sacred Path</span>
            <h1 className="font-headline text-5xl lg:text-7xl text-on-surface leading-tight mb-6">
              Embark on a Journey of Enlightenment
            </h1>
            <p className="text-secondary text-lg leading-relaxed max-w-lg mb-8">
              Six carefully curated pilgrimages guiding you through the footsteps of the Buddha — from a single sacred day to a full 14-day circuit across India and Nepal.
            </p>
            <div className="flex items-center gap-8 text-sm text-secondary">
              <span className="flex items-center gap-2"><Users size={16} className="text-primary" /> Solo to 500+ pilgrims</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Local expert guides</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Premium fleet included</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none translate-x-1/4">
          <img
            className="w-full h-full object-contain rotate-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4kwHXaYEZ7DpSiaIF6UwJlJnzyGFXMr0cwB7w2Khb27K_3_6tMUS_FSJI6XlY9sQzF6TAKO1UN6LAM18AJo_JMgNpF68KqGJShIoaD_3iwc6T4M6SXLXSZdtjPuoBlBfKTT38CnmmPqjC7bFxRDFUjAX2B_OLMvkRKYT7aIOv1QSTtBs5Znx98RIYtaiPWNUzyKMCkeDdQ0PvY6107oqS9Byk_CPfnibyfMv3t9F8di7-VPxPiyBuCSliXiyEpEyVAbDxl1Kiokc"
            alt="Golden silhouette of a Bodhi tree leaf"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase mr-2">Filter by:</span>
          {filterOptions.map(opt => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === opt.id
                  ? 'lotus-gradient text-white shadow-lg shadow-primary/20'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-auto text-sm text-secondary">
            {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Tours Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredTours.map(tour => (
              <div key={tour.id}>
                <TourCard tour={tour} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredTours.length === 0 && (
          <div className="text-center py-20 text-secondary">
            <p className="font-headline text-2xl mb-2">No tours match this filter.</p>
            <button onClick={() => setFilter('all')} className="text-primary font-bold hover:underline">Show all tours</button>
          </div>
        )}

        {/* Upcoming Departures */}
        <div className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Book Your Place</span>
              <h2 className="font-headline text-4xl text-on-surface">Upcoming Departures</h2>
              <div className="h-1 w-20 bg-tertiary-container rounded-full mt-3"></div>
            </div>
            <Link to="/contact" className="text-sm font-bold text-primary hover:underline hidden md:block">
              Request a custom date →
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingDepartures.map((dep, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row items-center gap-6 p-5 bg-surface-container-lowest rounded-xl border border-transparent hover:border-outline-variant/30 transition-all"
              >
                <div className="w-full md:w-28 h-20 rounded-lg overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={dep.image}
                    alt={dep.alt}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-xl text-on-surface mb-0.5">{dep.tourName}</h4>
                  <p className="text-sm text-on-surface-variant">{dep.days} {dep.days === 1 ? 'Day' : 'Days'} · Guided Pilgrimage</p>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <div className="text-right">
                    <span className="block text-xs font-bold text-secondary uppercase tracking-widest">Departure</span>
                    <span className="font-bold text-on-surface text-lg">{dep.date}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-secondary uppercase tracking-widest">Spots Left</span>
                    <span className={`font-bold text-lg ${dep.spotsLeft <= 4 ? 'text-error' : 'text-primary'}`}>
                      {dep.spotsLeft}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="lotus-gradient text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    Reserve Spot
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-secondary text-sm mb-4">Don't see the right date? We offer private departures year-round.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-outline-variant text-on-surface px-8 py-3 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all">
              Request a Private Tour Date
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
