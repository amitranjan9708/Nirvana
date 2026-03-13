import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Users, Flower, MessageSquare, Star, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isThai = i18n.resolvedLanguage?.startsWith('th');
  const thHome: Record<string, string> = {
    'home.about.desc': 'พุทธคยาเป็นสถานที่ศักดิ์สิทธิ์ที่สุดแห่งหนึ่งในโลกพุทธ เป็นสถานที่ที่เจ้าชายสิทธัตถะตรัสรู้ใต้ต้นโพธิ์และกลายเป็นพระพุทธเจ้า',
    'home.about.mahabodhiTitle': 'วัดมหาโพธิ์',
    'home.about.mahabodhiSubtitle': 'มรดกโลกยูเนสโก',
    'home.about.bodhiTreeTitle': 'ต้นพระศรีมหาโพธิ์',
    'home.about.bodhiTreeDesc': 'สายสืบทอดจากต้นโพธิ์ดั้งเดิมที่พระพุทธเจ้าประทับนั่ง',
    'home.about.buddha80Title': 'พระพุทธรูปสูง 80 ฟุต',
    'home.about.buddha80Desc': 'สัญลักษณ์แห่งสันติที่โดดเด่นเหนือเมืองศักดิ์สิทธิ์',
    'home.why.point1.title': 'ประสบการณ์ 10+ ปี จาก 42 ประเทศ',
    'home.why.point1.desc': 'เราพัฒนาเส้นทางแสวงบุญอย่างต่อเนื่องให้เหมาะกับผู้เดินทางเดี่ยว ครอบครัว คณะวัด และองค์กรจากทั่วโลก',
    'home.why.point2.title': 'รองรับทุกขนาดกลุ่ม ไม่จำกัด',
    'home.why.point2.desc': 'ตั้งแต่ผู้แสวงบุญเดี่ยวจนถึงคณะสถาบัน 500 คน เราจัดการได้ครบทุกระดับอย่างเป็นระบบ',
    'home.why.point3.title': 'หรูหราและสบาย ไม่ต้องเลือกระหว่างสองอย่าง',
    'home.why.point3.desc': 'รถปรับอากาศระดับพรีเมียม ที่พักคัดสรร และแผนการเดินทางที่สมดุลทั้งความสงบและความสบาย',
    'home.why.point4.title': 'ไกด์ท้องถิ่นแท้',
    'home.why.point4.desc': 'ทีมไกด์ของเราเติบโตในพุทธคยา เข้าใจพื้นที่อย่างลึกซึ้งและถ่ายทอดความหมายทางธรรมได้จริง',
    'home.fleet.subtitle': 'รถทุกคันปรับอากาศ ติดตาม GPS และบำรุงรักษาตามมาตรฐานสูง เราจัดรถให้เหมาะกับขนาดกลุ่มเพื่อความสบายตลอดทริป',
    'home.fleet.card1.name': 'โตโยต้า อินโนวา คริสต้า',
    'home.fleet.card1.capacity': '4 – 7 ที่นั่ง',
    'home.fleet.card1.tag': 'ส่วนตัวและคล่องตัว',
    'home.fleet.card1.f1': 'เบาะนั่งนุ่มสบาย',
    'home.fleet.card1.f2': 'แอร์เต็มระบบ',
    'home.fleet.card1.f3': 'พื้นที่เก็บสัมภาระเพียงพอ',
    'home.fleet.card1.f4': 'เหมาะกับครอบครัว',
    'home.fleet.card1.ideal': 'เดี่ยว · คู่รัก · ครอบครัว',
    'home.fleet.card2.name': 'เทมโป ทราเวลเลอร์',
    'home.fleet.card2.capacity': '9 – 16 ที่นั่ง',
    'home.fleet.card2.tag': 'ยอดนิยม',
    'home.fleet.card2.f1': 'เบาะปรับเอนได้',
    'home.fleet.card2.f2': 'แอร์เต็มคัน',
    'home.fleet.card2.f3': 'ที่เก็บสัมภาระเหนือศีรษะ',
    'home.fleet.card2.f4': 'กระจกบานใหญ่',
    'home.fleet.card2.ideal': 'กลุ่มเล็ก · เพื่อนร่วมทาง',
    'home.fleet.card3.name': 'มินิโค้ชหรู',
    'home.fleet.card3.capacity': '20 – 35 ที่นั่ง',
    'home.fleet.card3.tag': 'เหมาะกับคณะทัวร์',
    'home.fleet.card3.f1': 'เบาะเอนนอน',
    'home.fleet.card3.f2': 'แอร์คู่',
    'home.fleet.card3.f3': 'ระบบเสียงประกาศ',
    'home.fleet.card3.f4': 'พื้นที่เก็บของบนรถ',
    'home.fleet.card3.ideal': 'คณะทัวร์ · ชมรม',
    'home.fleet.card4.name': 'เดอลักซ์โค้ชบัส',
    'home.fleet.card4.capacity': '40 – 60 ที่นั่ง',
    'home.fleet.card4.tag': 'คณะใหญ่',
    'home.fleet.card4.f1': 'เบาะพรีเมียมปรับเอน',
    'home.fleet.card4.f2': 'แอร์สามระบบ',
    'home.fleet.card4.f3': 'ช่องเก็บสัมภาระขนาดใหญ่',
    'home.fleet.card4.f4': 'ระบบ PA และมัลติมีเดีย',
    'home.fleet.card4.ideal': 'คณะวัด · องค์กร',
    'home.fleet.idealFor': 'เหมาะสำหรับ',
    'home.fleet.assurance1.title': 'ติดตาม GPS และประกันครบ',
    'home.fleet.assurance1.desc': 'รถทุกคันมีประกันผู้โดยสารและระบบติดตามตลอด 24 ชั่วโมง',
    'home.fleet.assurance2.title': 'ดูแลรักษามาตรฐานสูง',
    'home.fleet.assurance2.desc': 'ตรวจเช็กและทำความสะอาดเชิงลึกก่อนออกทริปทุกครั้ง',
    'home.fleet.assurance3.title': 'ไม่มีค่าใช้จ่ายแอบแฝง',
    'home.fleet.assurance3.desc': 'ราคาที่เสนอรวมค่าน้ำมัน ค่าทางด่วน ค่าจอด และค่าคนขับแล้ว',
    'home.popular.subtitle': 'ตั้งแต่ทริปศักดิ์สิทธิ์ 1 วัน ถึงแกรนด์เซอร์กิต 14 วัน เลือกระดับความลึกที่เหมาะกับคุณ',
    'home.popular.card1.title': 'เส้นทางตื่นรู้อันยิ่งใหญ่',
    'home.popular.card1.meta': 'พุทธคยา · พาราณสี · สารนาถ · กุสินารา',
    'home.popular.card1.desc': 'ตามรอยพุทธประวัติครบ 4 เมืองศักดิ์สิทธิ์ ภายใน 7 วัน',
    'home.popular.card2.title': 'รีทรีตพุทธคยาเชิงลึก',
    'home.popular.card2.meta': 'พุทธคยา · 4 วัน',
    'home.popular.card2.desc': 'รีทรีตเข้มข้น 4 วัน เน้นสมาธิ วัดสำคัญ และประสบการณ์เชิงธรรม',
    'home.popular.card3.title': 'แกรนด์โลตัสเซอร์กิต',
    'home.popular.card3.meta': 'อินเดีย + เนปาล · 8 จุดศักดิ์สิทธิ์',
    'home.popular.card3.desc': 'ครอบคลุมสังเวชนียสถานสำคัญทั้งอินเดียและเนปาลในทริปเดียว',
  };
  const tt = (key: string, fallback: string) =>
    t(key, { defaultValue: isThai ? (thHome[key] ?? fallback) : fallback });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="hero-mahabodhi.png"
            alt="Mahabodhi Temple at golden hour, Bodh Gaya"
          />
          {/* Dark brown overlay — top → bottom, matching the spiritual palette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(62,39,35,0.35) 0%, rgba(62,39,35,0.60) 50%, rgba(62,39,35,0.82) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase border border-white/30 text-white/80">
              {t('home.established')}
            </span>

            <h1
              className="font-headline leading-tight text-white"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
            >
              {t('home.heroLine1')}<br />
              <span className="italic" style={{ color: '#E8C96A' }}>{t('home.heroLine2')}</span>
            </h1>

            <p className="text-white/90 leading-relaxed mx-auto max-w-xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              {t('home.heroSubtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #C8A951, #E8941A)',
                boxShadow: '0 4px 20px rgba(200,169,81,0.35)',
              }}
            >
              {t('home.ctaBook')}
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/70 hover:bg-white hover:text-on-surface transition-all"
            >
              {t('home.ctaExplore')}
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
          >
            <span>{t('home.trustYears')}</span>
            <span>{t('home.trustPilgrims')}</span>
            <span>{t('home.trustScale')}</span>
            <span>{t('home.trustFleet')}</span>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs tracking-widest uppercase"
        >
          <span>{t('home.scroll')}</span>
          <div className="w-[1px] h-8 bg-white/30" />
        </motion.div>
      </section>

      {/* About Bodh Gaya */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">{t('ui.aboutBodhGaya')}</h2>
              <p className="text-secondary text-lg leading-relaxed">
                {tt('home.about.desc', 'Bodh Gaya is the most sacred site in the Buddhist world. It is the place where Siddhartha Gautama attained enlightenment beneath the Bodhi Tree, becoming the Buddha.')}
              </p>
            </div>
            <div className="text-tertiary font-headline italic text-2xl">
              {'"'}{t('ui.peaceComesFromWithin')}{'"'}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 relative rounded-xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOQs9eaXrnEr8V0DsKt4HMi_V9rzyaZ6DmlkKyXRgmlLxdlr5HVX7W_Sm-na6Fq5_SN5Ma2rEwGeJR8OhpaLX9MEDBBzSZoorbnraVef82YlArZLdfyYx9Yg_rqeYdakSrZ8aqZJYafYOPb_m8am09_W1x-V1-FIHK8COIZN4ovyV1us0k2Mj_WrBrDD4fnqr_Zo3sqvVhhpexNMlGO-ytzigpX7cP_QGNPIexqOlYvP_GYiEExc8W1es-lbnMUE6Aw35hCckGwSE" 
                alt="Intricate carvings on Mahabodhi Temple walls"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-headline text-3xl text-surface">{tt('home.about.mahabodhiTitle', 'Mahabodhi Temple')}</h3>
                <p className="text-surface/80">{tt('home.about.mahabodhiSubtitle', 'UNESCO World Heritage Site')}</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Flower className="text-tertiary text-6xl opacity-20" size={64} />
                </div>
                <h3 className="font-headline text-2xl mb-2">{tt('home.about.bodhiTreeTitle', 'The Bodhi Tree')}</h3>
                <p className="text-secondary text-sm">{tt('home.about.bodhiTreeDesc', 'Direct descendant of the original tree under which Buddha sat.')}</p>
              </div>
              <div className="bg-primary rounded-xl p-8 flex flex-col justify-end text-on-primary">
                <h3 className="font-headline text-2xl mb-2">{tt('home.about.buddha80Title', '80ft Buddha')}</h3>
                <p className="text-primary-fixed/80 text-sm">{tt('home.about.buddha80Desc', 'A towering symbol of peace overlooking the holy city.')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Nirvana Difference</span>
              <h2 className="font-headline text-4xl md:text-5xl">{t('ui.whyChooseUs')}</h2>
            </div>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{tt('home.why.point1.title', '10+ Years, 42 Countries')}</h4>
                  <p className="text-secondary leading-relaxed">{tt('home.why.point1.desc', 'A decade of perfecting the pilgrimage experience for solo travellers, families, monasteries, and corporate retreats from across the globe.')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{tt('home.why.point2.title', 'Any Group Size — No Limits')}</h4>
                  <p className="text-secondary leading-relaxed">{tt('home.why.point2.desc', 'From a solo seeker to a 500-person institutional delegation — we plan and execute flawlessly at every scale. Your group size is never a constraint.')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{tt('home.why.point3.title', 'Comfort & Luxury, Not Compromise')}</h4>
                  <p className="text-secondary leading-relaxed">{tt('home.why.point3.desc', 'Premium air-conditioned vehicles, hand-picked monasteries and hotels, and curated itineraries that balance spiritual depth with genuine comfort.')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Flower size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{tt('home.why.point4.title', 'Born-Local Guides')}</h4>
                  <p className="text-secondary leading-relaxed">{tt('home.why.point4.desc', 'Our guides are lifelong residents of Bodh Gaya — offering stories, access, and meaning that no outsider can replicate.')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 border border-outline-variant/30 rounded-xl transform rotate-3"></div>
            <img
              className="relative z-10 rounded-xl sacred-glow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1d9tpNIrWRolZM-CTxNWdbFTiQzZez_ABmfqiWLGqBmtZImA_ffi2zbC94IfJV44cPHJvge-lDCbLcSIjGpPla-ZKZcta4iutHkKH5hfuJLiafauZUbNQj9Jsj8Xsgr1mNMc8WQXCWzMW7jlblcSJrdUfhVAV5ZGElEd15HC-b3bCd3t074NkNjZIhCQv48fx8jU-jDEyXD-nMozKjqIetO6dzDUsWuJzpbEtDcpJuPYkTYPD8a63VtMtWZc1UP1IZgAdhTVrxZg"
              alt="Local guide teaching pilgrims near a temple"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Fleet & Comfort Section */}
      <section className="py-24 px-6" style={{ background: '#2e1a10' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-bold tracking-[0.2em] uppercase text-xs mb-3 block" style={{ color: '#E8C96A' }}>
              {t('ui.travelInStyle')}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mb-4" style={{ color: '#ffede7' }}>
              {t('ui.premiumFleetForEveryGroup')}
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed text-lg" style={{ color: 'rgba(255,237,231,0.65)' }}>
              {tt('home.fleet.subtitle', 'Air-conditioned, GPS-tracked, and immaculately maintained — we match the right vehicle to your group size so every kilometre of your pilgrimage is comfortable.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                image: 'fleet-innova.png',
                name: tt('home.fleet.card1.name', 'Toyota Innova Crysta'),
                capacity: tt('home.fleet.card1.capacity', '4 – 7 Passengers'),
                tag: tt('home.fleet.card1.tag', 'Private & Intimate'),
                tagColor: '#E8C96A',
                features: [
                  tt('home.fleet.card1.f1', 'Leather seating'),
                  tt('home.fleet.card1.f2', 'Full AC'),
                  tt('home.fleet.card1.f3', 'Ample boot space'),
                  tt('home.fleet.card1.f4', 'Perfect for families'),
                ],
                ideal: tt('home.fleet.card1.ideal', 'Solo · Couple · Family'),
              },
              {
                image: 'fleet-tempo.png',
                name: tt('home.fleet.card2.name', 'Tempo Traveller'),
                capacity: tt('home.fleet.card2.capacity', '9 – 16 Passengers'),
                tag: tt('home.fleet.card2.tag', 'Most Popular'),
                tagColor: '#C8A951',
                features: [
                  tt('home.fleet.card2.f1', 'Pushback seats'),
                  tt('home.fleet.card2.f2', 'Full AC'),
                  tt('home.fleet.card2.f3', 'Overhead storage'),
                  tt('home.fleet.card2.f4', 'Large windows'),
                ],
                ideal: tt('home.fleet.card2.ideal', 'Small Groups · Friends'),
              },
              {
                image: 'fleet-minicoach.png',
                name: tt('home.fleet.card3.name', 'Luxury Mini Coach'),
                capacity: tt('home.fleet.card3.capacity', '20 – 35 Passengers'),
                tag: tt('home.fleet.card3.tag', 'Group Favourite'),
                tagColor: '#d4a54a',
                features: [
                  tt('home.fleet.card3.f1', 'Reclining seats'),
                  tt('home.fleet.card3.f2', 'Dual AC'),
                  tt('home.fleet.card3.f3', 'PA system'),
                  tt('home.fleet.card3.f4', 'Onboard storage'),
                ],
                ideal: tt('home.fleet.card3.ideal', 'Tour Groups · Clubs'),
              },
              {
                image: 'fleet-deluxecoach.png',
                name: tt('home.fleet.card4.name', 'Deluxe Coach Bus'),
                capacity: tt('home.fleet.card4.capacity', '40 – 60 Passengers'),
                tag: tt('home.fleet.card4.tag', 'Large Delegations'),
                tagColor: '#b89642',
                features: [
                  tt('home.fleet.card4.f1', 'Premium recliners'),
                  tt('home.fleet.card4.f2', 'Triple AC'),
                  tt('home.fleet.card4.f3', 'Luggage bay'),
                  tt('home.fleet.card4.f4', 'PA & music system'),
                ],
                ideal: tt('home.fleet.card4.ideal', 'Monasteries · Organisations'),
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden flex flex-col group"
                style={{ background: 'rgba(255,237,231,0.04)', border: '1px solid rgba(255,237,231,0.10)' }}
              >
                {/* Vehicle Image */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    style={{ transform: 'scale(1)', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Gradient overlay for readability */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(46,26,16,0.80) 0%, rgba(46,26,16,0.10) 60%, transparent 100%)' }}
                  />
                  {/* Tag badge */}
                  <span
                    className="absolute top-3 left-3 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: 'rgba(46,26,16,0.75)', color: v.tagColor, backdropFilter: 'blur(6px)', border: `1px solid ${v.tagColor}40` }}
                  >
                    {v.tag}
                  </span>
                  {/* Capacity badge bottom-right */}
                  <span
                    className="absolute bottom-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(46,26,16,0.80)', color: '#E8C96A', backdropFilter: 'blur(6px)' }}
                  >
                    {v.capacity}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Name */}
                  <h3 className="font-headline text-xl mb-4" style={{ color: '#ffede7' }}>{v.name}</h3>

                  {/* Features */}
                  <ul className="space-y-2 flex-grow mb-5">
                    {v.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,237,231,0.70)' }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: v.tagColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Ideal for */}
                  <div className="pt-4" style={{ borderTop: '1px solid rgba(255,237,231,0.10)' }}>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,237,231,0.35)' }}>{tt('home.fleet.idealFor', 'Ideal for')}</p>
                    <p className="text-sm font-medium" style={{ color: 'rgba(255,237,231,0.80)' }}>{v.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comfort assurance strip */}
          <div className="rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            style={{ background: 'rgba(255,237,231,0.04)', border: '1px solid rgba(255,237,231,0.08)' }}
          >
            {[
              { icon: <Shield size={28} />, title: tt('home.fleet.assurance1.title', 'GPS-Tracked & Insured'), desc: tt('home.fleet.assurance1.desc', 'Every vehicle carries full passenger insurance and is tracked 24/7 for your safety.') },
              { icon: <Sparkles size={28} />, title: tt('home.fleet.assurance2.title', 'Immaculately Maintained'), desc: tt('home.fleet.assurance2.desc', 'Regular servicing, deep cleaning before each journey, and experienced drivers with clean records.') },
              { icon: <Star size={28} />, title: tt('home.fleet.assurance3.title', 'No Hidden Charges'), desc: tt('home.fleet.assurance3.desc', 'What we quote is what you pay — fuel, tolls, parking, and driver allowances all included.') },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div style={{ color: '#E8C96A' }}>{item.icon}</div>
                <h4 className="font-bold text-base" style={{ color: '#ffede7' }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,237,231,0.55)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-24 px-6 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl mb-4">{t('ui.popularTours')}</h2>
            <p className="text-secondary max-w-xl mx-auto">{tt('home.popular.subtitle', 'From a single sacred day to a 14-day grand circuit — choose the depth your journey calls for.')}</p>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Great Awakening Circuit */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9PdMGgBUu778m_8DALztERX1e-i0BQPVkjw9_rH7PTTwc6JFR5nni814-8ymlzrvv53i_4Jh8t0BR6rX2O6F72P5ipoLH5v-A0bHoImaAASfSwIXAaHXt9bsUhbO1g6PayM4ulpbhEId1b6vwXmHPf2MLRb5OrfrNCw4DqQuMFa3TNeRJq4H6xOHnpiJ6egGqebVL8eOlxSxtyvWY15aTRtSxScINYQwyWkF49HYLxgJYYostodjKtV90szjgqK1dak5_rzcZtBs"
                  alt="Ancient stupa at Kushinagar at sunset"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-surface px-3 py-1 rounded-full text-xs font-bold text-primary">
                  7 DAYS
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-2">{tt('home.popular.card1.title', 'The Great Awakening Circuit')}</h3>
                <p className="text-secondary text-sm mb-2">{tt('home.popular.card1.meta', 'Bodh Gaya · Varanasi · Sarnath · Kushinagar')}</p>
                <p className="text-secondary text-sm mb-6 line-clamp-2">{tt('home.popular.card1.desc', "The complete arc of the Buddha's life across four sacred cities in 7 days.")}</p>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold text-xl">$1,499</span>
                  <Link to="/tours" className="text-tertiary font-semibold flex items-center gap-1 group/btn">
                    {t('ui.details')}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 2 — Sacred Bodh Gaya Immersion */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden md:-mt-8 hover:translate-y-[-16px] transition-all duration-500 sacred-glow border border-primary-fixed">
              <div className="h-72 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2qF5E3XK5I4jnFrtdVw7kX_hdxLfatJvNeuVCUIcfn9O6Egdctoa6tQhBukZz5vXGsqLOJBPLs4Hx3sbzVAw1nNM6zJcpqwFr_4yiafohT5w0nuskzcBu8ZBJnxVHV_2xAYtmlpYwO6-_E6aS3gJ2uEPBMCr6KK8hikRi6_gD8gIhgR_mXte4809gL7sMfiz1VQ3X_X9NIMUccrqsF7WXO8ErrsD9FQoMddGE4exJ0Srj_LzB-yNYUzx18KlkAF-6BX-n-wzqrY"
                  alt="Mahabodhi temple spire against clear blue sky"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold">
                  BEST SELLER
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-2">{tt('home.popular.card2.title', 'Sacred Bodh Gaya Immersion')}</h3>
                <p className="text-secondary text-sm mb-2">{tt('home.popular.card2.meta', 'Bodh Gaya · 4 Days')}</p>
                <p className="text-secondary text-sm mb-6 line-clamp-2">{tt('home.popular.card2.desc', 'Deep 4-day retreat at the Mahabodhi Complex — daily meditations, monk encounters, and monastery walks.')}</p>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold text-xl">$649</span>
                  <Link to="/tours" className="text-tertiary font-semibold flex items-center gap-1 group/btn">
                    {t('ui.details')}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 3 — Grand Lotus Circuit */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqcEabaiMR9Nm1d8XV2ewmJuX3y3a4JOWT4MMHp1w3Kc5dYaZTNULPZ2Qp_80wObQuUlgFtp20IsS8GRqqF40NS-T6AlciB0B_PUisbs5Mphjtpm-4JVZ1eFY37JNigB4Jl9eY7tWb3eryYP8M2_U2EaU2Rmd4eRkGc5h7o8qaRYiXXymbYTp-nnxv38wphvVROdp9fH87z56UsFX51yNA-6aKmqyL-mDakMMYjjfZCZbSGWz6Y04i7a_m5FT5gtkyx7FNC8rJnag"
                  alt="Buddhist monks walking in meditation"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-tertiary-fixed text-on-surface px-3 py-1 rounded-full text-xs font-bold">
                  PREMIUM · 14 DAYS
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-2">{tt('home.popular.card3.title', 'Grand Lotus Circuit')}</h3>
                <p className="text-secondary text-sm mb-2">{tt('home.popular.card3.meta', 'India + Nepal · 8 Sacred Sites')}</p>
                <p className="text-secondary text-sm mb-6 line-clamp-2">{tt('home.popular.card3.desc', 'Every major Buddhist site across India and Nepal — Lumbini, Bodh Gaya, Nalanda, Sarnath, Kushinagar, and beyond.')}</p>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold text-xl">$2,799</span>
                  <Link to="/tours" className="text-tertiary font-semibold flex items-center gap-1 group/btn">
                    {t('ui.details')}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/tours" className="inline-flex items-center gap-2 border border-outline-variant text-on-surface px-8 py-3 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all">
              {t('ui.viewAllTours')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageSquare className="text-6xl text-tertiary mx-auto mb-6" size={64} />
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">{t('ui.readyForJourney')}</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="lotus-gradient text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20">
              {t('ui.requestItinerary')}
            </Link>
            <Link to="/contact" className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-bold text-lg border border-outline-variant/20">
              {t('ui.talkToSpecialist')}
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-64 -right-64 w-128 h-128 bg-primary-fixed/20 rounded-full blur-3xl"></div>
      </section>
    </motion.div>
  );
}
