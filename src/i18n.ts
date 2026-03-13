import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        tours: 'Tours',
        destinations: 'Destinations',
        about: 'About',
        testimonials: 'Testimonials',
        contact: 'Contact',
        book: 'Book a Tour',
      },
      destinations: {
        pageTitle: 'Sacred Destinations',
        pageSubtitle: 'Six extraordinary sites that mark the geography of the Dharma — from the Buddha\'s birth to his final passing.',
        keySites: 'Key Sites',
        travelTips: 'Travel Tips',
        bodhGayaTitle: 'Bodh Gaya — The Place of Enlightenment',
        bodhGayaDesc: 'Bodh Gaya is the holiest of all Buddhist pilgrimage sites. It was here, under the sacred Bodhi Tree, that Siddhartha Gautama attained enlightenment and became the Buddha some 2,500 years ago. The Mahabodhi Temple Complex — a UNESCO World Heritage Site — stands at the centre of this ancient town in Bihar, India, drawing millions of pilgrims from every corner of the world.',
        bodhGayaSites: 'Mahabodhi Temple (UNESCO), Sacred Bodhi Tree, Vajrasana (Diamond Throne), 80ft Great Buddha Statue, 25+ International Monasteries, Lotus Pond, Archaeological Museum',
        bodhGayaTips: 'Best time to visit: October–March. Arrive at the Bodhi Tree before dawn for the quietest and most profound experience. Remove shoes before entering the complex.',
        sarnathTitle: 'Sarnath — The Deer Park of the First Teaching',
        sarnathDesc: 'Sarnath, 13 km from Varanasi, is where the Buddha delivered his first sermon to five ascetics after his enlightenment — the First Turning of the Wheel of Dharma. The ancient Deer Park (Isipatana) remains a place of profound peace, home to the magnificent Dhamek Stupa and the Mulagandha Kuti Vihara with rare Gandharan frescoes.',
        sarnathSites: 'Dhamek Stupa (5th century CE), Mulagandha Kuti Vihara, Deer Park (Isipatana), Sarnath Archaeological Museum, Chaukhandi Stupa, Thai and Tibetan temples',
        sarnathTips: 'Combine Sarnath with an evening Ganga Aarti in Varanasi — an unforgettable pairing. The museum closes on Fridays. Budget 3–4 hours for a complete visit.',
        nalandaTitle: 'Nalanda — The World\'s Greatest Ancient University',
        nalandaDesc: 'Nalanda Mahavihara was the most prestigious university in the ancient world, attracting over 10,000 students and 2,000 teachers from across Asia between the 5th and 12th centuries CE. Students came to study logic, grammar, medicine, and the Dharma. Its vast UNESCO-listed ruins in Bihar remain one of the most awe-inspiring archaeological sites in South Asia.',
        nalandaSites: 'Nalanda Mahavihara Ruins (UNESCO), Nalanda Archaeological Museum, Xuanzang Memorial Hall, New Nalanda International University Campus, Surrounding stupas and monastic cells',
        nalandaTips: 'Allow 3–4 hours for the full site. It is large and exposed — bring a hat and water. A knowledgeable guide is essential to bring the ruins to life.',
        rajgirTitle: 'Rajgir — Vulture\'s Peak & the Royal Capital',
        rajgirDesc: 'Rajgir (ancient Rajagriha) was the capital of King Bimbisara\'s Magadha Kingdom and a favourite retreat of the Buddha, who spent several rainy seasons here. Atop Gridhrakuta (Vulture\'s Peak), the Buddha delivered key sutras including the Heart Sutra and Lotus Sutra. Venuvana, below, was the world\'s first Buddhist monastery.',
        rajgirSites: 'Gridhrakuta (Vulture\'s Peak) via cable car, Venuvana Monastery (world\'s first), World Peace Pagoda (Nipponzan-Myohoji), Natural Hot Springs (Venu Kund), Ancient city walls of Rajagriha, Sonbhandar Caves',
        rajgirTips: 'Ride the cable car to Vulture\'s Peak in the morning to avoid midday heat. The natural hot springs are open to visitors. Combine efficiently with Nalanda for a rewarding two-site day.',
        kushingagarTitle: 'Kushinagar — The Place of the Final Passing',
        kushingagarDesc: 'Kushinagar is where the Buddha attained Mahaparinirvana — his final passing — at the age of 80, under a grove of Sala trees. A deeply solemn site, it draws pilgrims honouring the completion of the Buddha\'s life on earth. The Mahaparinirvana Temple with its 6-metre reclining Buddha is the spiritual centrepiece.',
        kushingagarSites: 'Mahaparinirvana Temple (Reclining Buddha), Ramabhar Stupa (Cremation Site), Sala Grove Meditation Park, Matha Kuar Shrine, Chinese and Sri Lankan temples, Kushinagar Museum',
        kushingagarTips: 'Kushinagar calls for slow, silent steps. The Ramabhar Stupa at sunset is particularly moving. Nearest major airport: Gorakhpur (53 km).',
        lumbiniTitle: 'Lumbini — Birthplace of the Buddha',
        lumbiniDesc: 'Lumbini, in the Terai plains of Nepal, is the birthplace of Prince Siddhartha Gautama. The Maya Devi Temple marks the exact spot of his birth, authenticated by Ashoka\'s Pillar (249 BCE). The Sacred Garden, Puskarini Pond, and the vast International Monastery Zone — with temples from 20+ nations — make Lumbini a pilgrimage of extraordinary power.',
        lumbiniSites: 'Maya Devi Temple (birthplace), Ashoka Pillar (249 BCE), Sacred Garden and Puskarini Pond, International Monastery Zone (20+ national temples), World Peace Pagoda, Kapilvastu royal palace ruins (27 km)',
        lumbiniTips: 'Lumbini is in Nepal — confirm your India visa allows re-entry. The International Monastery Zone needs a full half-day. Early morning in the Sacred Garden is deeply peaceful.',
      },
      testimonialsPage: {
        pageTitle: 'Pilgrims\' Stories',
        pageSubtitle: 'Over 3,200 pilgrims from 42 countries have walked these sacred paths with us. Here are their words.',
        tourLabel: 'Tour',
      },
    },
  },
  th: {
    translation: {
      nav: {
        home: 'หน้าหลัก',
        tours: 'ทัวร์',
        destinations: 'จุดหมายปลายทาง',
        about: 'เกี่ยวกับเรา',
        testimonials: 'รีวิว',
        contact: 'ติดต่อ',
        book: 'จองทัวร์',
      },
    },
  },
  vi: {
    translation: {
      nav: {
        home: 'Trang chủ',
        tours: 'Tours',
        destinations: 'Điểm đến',
        about: 'Giới thiệu',
        testimonials: 'Nhận xét',
        contact: 'Liên hệ',
        book: 'Đặt Tour',
      },
    },
  },
  ms: {
    translation: {
      nav: {
        home: 'Laman Utama',
        tours: 'Pakej Pelancongan',
        destinations: 'Destinasi',
        about: 'Tentang Kami',
        testimonials: 'Testimoni',
        contact: 'Hubungi',
        book: 'Tempah Tour',
      },
    },
  },
  id: {
    translation: {
      nav: {
        home: 'Beranda',
        tours: 'Tur',
        destinations: 'Destinasi',
        about: 'Tentang',
        testimonials: 'Testimoni',
        contact: 'Kontak',
        book: 'Pesan Tur',
      },
    },
  },
  'zh-CN': {
    translation: {
      nav: {
        home: '首页',
        tours: '旅行团',
        destinations: '目的地',
        about: '关于我们',
        testimonials: '评价',
        contact: '联系我们',
        book: '预订旅行',
      },
    },
  },
  'zh-TW': {
    translation: {
      nav: {
        home: '首頁',
        tours: '旅遊團',
        destinations: '目的地',
        about: '關於我們',
        testimonials: '評價',
        contact: '聯繫我們',
        book: '預訂旅遊',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
