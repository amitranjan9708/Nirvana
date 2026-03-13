import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitReview } from '../lib/bodhiApi';

const testimonials = [
  {
    name: 'Somchai P.',
    country: '🇹🇭 Thailand',
    rating: 5,
    text: 'An unforgettable spiritual journey. Our guide was incredibly knowledgeable about the history and significance of every sacred site. The meditation session at the Bodhi Tree was life-changing.',
    tour: 'Sacred Bodh Gaya Immersion',
  },
  {
    name: 'Nguyen Thi M.',
    country: '🇻🇳 Vietnam',
    rating: 5,
    text: 'I travelled all the way from Ho Chi Minh City and it was worth every moment. The tour was well organised, deeply respectful of our Buddhist traditions, and profoundly moving.',
    tour: 'The Great Awakening Circuit',
  },
  {
    name: 'Ahmad R.',
    country: '🇲🇾 Malaysia',
    rating: 5,
    text: 'Excellent service and deep understanding of Buddhist heritage. The small group size made everything very personal. Our guide spoke Malay which made the experience so much richer.',
    tour: 'Bodh Gaya Sacred Day Tour',
  },
  {
    name: 'Dewi S.',
    country: '🇮🇩 Indonesia',
    rating: 5,
    text: 'The best pilgrimage experience we could have asked for. Every detail was taken care of. The sunrise meditation at the Mahabodhi Temple was absolutely magical — I wept.',
    tour: 'Sacred Bodh Gaya Immersion',
  },
  {
    name: 'Prakit W.',
    country: '🇹🇭 Thailand',
    rating: 5,
    text: 'We came as a group of 8 from Bangkok. The guide arranged everything perfectly — transport, meals, and most importantly the spiritual experience was authentic and deeply respectful.',
    tour: 'The Great Awakening Circuit',
  },
  {
    name: 'Linh T.',
    country: '🇻🇳 Vietnam',
    rating: 5,
    text: 'This was my second time visiting Bodh Gaya but the first with a proper guide. The difference was incredible — so much history and meaning I had missed entirely on my own.',
    tour: 'Bodh Gaya Sacred Day Tour',
  },
  {
    name: 'Wei Chen L.',
    country: '🇨🇳 China',
    rating: 5,
    text: 'Our Chinese-speaking guide made the entire pilgrimage so meaningful. The 7-day circuit covering all major Buddhist sites was perfectly planned. A journey of a lifetime.',
    tour: 'The Great Awakening Circuit',
  },
  {
    name: 'Siti A.',
    country: '🇲🇾 Malaysia',
    rating: 5,
    text: 'The 4-day Bodh Gaya immersion was perfectly paced. We had time for deep meditation, temple visits, and reflection. The guide\'s knowledge of Buddhist history was extraordinary.',
    tour: 'Sacred Bodh Gaya Immersion',
  },
  {
    name: 'Budi P.',
    country: '🇮🇩 Indonesia',
    rating: 5,
    text: 'Travelling from Jakarta to Bodh Gaya was a dream come true. The agency made it seamless. The monastery visits and interactions with resident monks were the highlights.',
    tour: 'Sacred Bodh Gaya Immersion',
  },
  {
    name: 'Mei Lin C.',
    country: '🇹🇼 Taiwan',
    rating: 5,
    text: 'A beautifully organised pilgrimage. The guide\'s deep respect for Buddhist traditions and knowledge of every sacred site made this the most meaningful trip of my entire life.',
    tour: 'Grand Lotus Circuit',
  },
  {
    name: 'Dr. Elena V.',
    country: '🇩🇪 Germany',
    rating: 5,
    text: 'As a professor of religious studies, I was sceptical of tour operators. Priya\'s knowledge of Nalanda\'s history left me speechless — she knew things I\'d only read in academic papers.',
    tour: 'Monastic Heritage Walk',
  },
  {
    name: 'Hai D.',
    country: '🇻🇳 Vietnam',
    rating: 5,
    text: 'Perfect for our Buddhist group from Hanoi. Everything from accommodation to temple visits was arranged thoughtfully. The Vietnamese language support was a wonderful bonus.',
    tour: 'Varanasi & Sarnath Retreat',
  },
];

const stats = [
  { value: '3,200+', label: 'Pilgrims Guided' },
  { value: '42',     label: 'Countries' },
  { value: '4.9/5',  label: 'Average Rating' },
  { value: '10+',    label: 'Years of Operation' },
];

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const tt = (key: string, fallback: string) => t(key, { defaultValue: fallback });
  const isThai = i18n.resolvedLanguage?.startsWith('th');
  const [reviewForm, setReviewForm] = useState({ name: '', country: '', review: '', rating: 5 });
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<{ src: string; alt: string }[]>([]);
  const [galleryLoaded, setGalleryLoaded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [showAllGalleryPhotos, setShowAllGalleryPhotos] = useState(false);

  const thaiTestimonials = [
    { name: 'สมชาย พ.', country: '🇹🇭 ไทย', rating: 5, text: 'ประสบการณ์แสวงบุญที่ลึกซึ้ง ไกด์อธิบายประวัติและความหมายของทุกสถานที่ได้ละเอียดมาก', tour: 'รีทรีตพุทธคยาเชิงลึก' },
    { name: 'เหงียน ที เอ็ม.', country: '🇻🇳 เวียดนาม', rating: 5, text: 'เดินทางจากโฮจิมินห์มาแล้วคุ้มค่ามาก โปรแกรมเป็นระบบและเคารพประเพณีพุทธอย่างแท้จริง', tour: 'เส้นทางตื่นรู้อันยิ่งใหญ่' },
    { name: 'อาหมัด อาร์.', country: '🇲🇾 มาเลเซีย', rating: 5, text: 'บริการยอดเยี่ยม กลุ่มไม่แออัด และดูแลอย่างมืออาชีพตลอดทริป', tour: 'ทัวร์ศักดิ์สิทธิ์พุทธคยา 1 วัน' },
    { name: 'เดวี เอส.', country: '🇮🇩 อินโดนีเซีย', rating: 5, text: 'ทุกอย่างจัดการดีมาก โดยเฉพาะสมาธิยามเช้าที่วัดมหาโพธิ์ เป็นช่วงเวลาที่ประทับใจที่สุด', tour: 'รีทรีตพุทธคยาเชิงลึก' },
    { name: 'ประกิจ ว.', country: '🇹🇭 ไทย', rating: 5, text: 'คณะของเราจากกรุงเทพฯ 8 คน ได้รับการดูแลครบทั้งรถ ที่พัก อาหาร และกิจกรรมทางจิตวิญญาณ', tour: 'เส้นทางตื่นรู้อันยิ่งใหญ่' },
    { name: 'หลินห์ ที.', country: '🇻🇳 เวียดนาม', rating: 5, text: 'เคยมาพุทธคยามาก่อน แต่ครั้งนี้ได้ความรู้เชิงลึกและความหมายมากกว่ามาก', tour: 'ทัวร์ศักดิ์สิทธิ์พุทธคยา 1 วัน' },
    { name: 'เว่ย เฉิน แอล.', country: '🇨🇳 จีน', rating: 5, text: 'การวางแผนเส้นทาง 7 วันทำได้ยอดเยี่ยม ครอบคลุมสถานที่สำคัญทั้งหมดอย่างลงตัว', tour: 'เส้นทางตื่นรู้อันยิ่งใหญ่' },
    { name: 'ซิติ เอ.', country: '🇲🇾 มาเลเซีย', rating: 5, text: 'จังหวะการเดินทางดีมาก มีเวลาทำสมาธิและไตร่ตรองอย่างเพียงพอ', tour: 'รีทรีตพุทธคยาเชิงลึก' },
    { name: 'บูดี พ.', country: '🇮🇩 อินโดนีเซีย', rating: 5, text: 'การเดินทางจากจาการ์ตาง่ายมากเพราะทีมช่วยจัดการทุกอย่างให้ครบ', tour: 'รีทรีตพุทธคยาเชิงลึก' },
    { name: 'เหมย หลิน ซี.', country: '🇹🇼 ไต้หวัน', rating: 5, text: 'ทริปจัดอย่างสวยงามและใส่ใจรายละเอียด ทำให้การแสวงบุญมีความหมายมาก', tour: 'แกรนด์โลตัสเซอร์กิต' },
    { name: 'ดร. เอเลนา วี.', country: '🇩🇪 เยอรมนี', rating: 5, text: 'ความรู้ของไกด์เรื่องประวัติศาสตร์นาลันทาลึกมาก ระดับงานวิชาการจริง', tour: 'เส้นทางมรดกสงฆ์' },
    { name: 'ไห่ ดี.', country: '🇻🇳 เวียดนาม', rating: 5, text: 'เหมาะมากสำหรับคณะพุทธจากฮานอย ทุกอย่างเป็นระเบียบและใส่ใจผู้เดินทาง', tour: 'รีทรีตพาราณสีและสารนาถ' },
  ];

  const activeTestimonials = isThai ? thaiTestimonials : testimonials;
  const visibleGalleryImages = showAllGalleryPhotos
    ? galleryImages
    : galleryImages.slice(0, 9);

  useEffect(() => {
    let mounted = true;

    const loadGallery = async () => {
      try {
        const res = await fetch('/gallery/gallery.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`Failed to load gallery manifest: ${res.status}`);
        const data = (await res.json()) as { src: string; alt: string }[];
        if (mounted) setGalleryImages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        if (mounted) setGalleryImages([]);
      } finally {
        if (mounted) setGalleryLoaded(true);
      }
    };

    loadGallery();
    return () => { mounted = false; };
  }, []);

  const handleReviewSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviewError(null);
    setReviewSubmitted(false);
    setReviewSubmitting(true);
    try {
      await submitReview({
        name: reviewForm.name.trim(),
        country: reviewForm.country.trim(),
        review_text: reviewForm.review.trim(),
        rating: reviewForm.rating,
      });
      setReviewSubmitted(true);
      setReviewForm({ name: '', country: '', review: '', rating: 5 });
    } catch (error) {
      setReviewError(error instanceof Error ? error.message : 'Could not submit review right now.');
    } finally {
      setReviewSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">

      {/* Hero */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('testimonialsPage.pageTitle')}
          </span>
          <h1 className="font-headline text-5xl lg:text-6xl text-on-surface leading-tight mb-6">
            {t('testimonialsPage.pageTitle')}
          </h1>
          <div className="h-1 w-20 bg-tertiary-container rounded-full mx-auto mb-6" />
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {t('testimonialsPage.pageSubtitle')}
          </p>
        </div>
      </section>

    
        
         

          <div className="flex items-center justify-center mb-8">
            <button
              onClick={() => {
                setGalleryOpen((open) => !open);
                if (galleryOpen) setShowAllGalleryPhotos(false);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-outline-variant/30 bg-surface text-on-surface font-bold text-sm hover:border-primary hover:text-primary transition-all"
            >
              {galleryOpen ? 'Hide Traveller Gallery' : 'Open Traveller Gallery'}
              {galleryImages.length > 0 ? `(${galleryImages.length})` : ''}
            </button>
          </div>

          {!galleryOpen && galleryImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {galleryImages.slice(0, 4).map((img, idx) => (
                <figure
                  key={`preview-${img.src}-${idx}`}
                  className="overflow-hidden rounded-xl bg-surface border border-outline-variant/20"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 md:h-44 object-cover"
                  />
                </figure>
              ))}
            </div>
          )}

          <AnimatePresence initial={false}>
            {galleryOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                {!galleryLoaded && (
                  <p className="text-center text-secondary">Loading gallery...</p>
                )}

                {galleryLoaded && galleryImages.length === 0 && (
                  <p className="text-center text-secondary">
                    No photos found in <code>/public/gallery</code> yet.
                  </p>
                )}

                {galleryImages.length > 0 && (
                  <>
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                      {visibleGalleryImages.map((img, idx) => (
                        <figure
                          key={`${img.src}-${idx}`}
                          className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-surface shadow-sm border border-outline-variant/20"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto block"
                          />
                        </figure>
                      ))}
                    </div>

                    {galleryImages.length > 9 && (
                      <div className="text-center mt-6">
                        <button
                          onClick={() => setShowAllGalleryPhotos((v) => !v)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary/90 transition-all"
                        >
                          {showAllGalleryPhotos ? 'Show Fewer Photos' : `Show All Photos (${galleryImages.length})`}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        
      

      {/* Stats Strip */}
      <section className="bg-surface border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(stat => (
            <div key={stat.label}>
              <p className="font-headline text-4xl text-primary font-bold mb-1">{stat.value}</p>
              <p className="text-secondary text-sm uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTestimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10 sacred-glow flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full lotus-gradient flex items-center justify-center text-white font-headline font-bold text-xl shrink-0">
                    {item.name[0]}
                  </div>
                  <div>
                  <p className="font-bold text-on-surface">{tt(`testimonials.items.${i}.name`, item.name)}</p>
                  <p className="text-secondary text-sm">{tt(`testimonials.items.${i}.country`, item.country)}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-tertiary fill-tertiary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <Quote className="text-primary-fixed mb-3 shrink-0" size={22} />
                <p className="text-on-surface-variant leading-relaxed text-sm italic flex-grow">
                  "{tt(`testimonials.items.${i}.text`, item.text)}"
                </p>

                {/* Tour tag */}
                <div className="mt-6 pt-5 border-t border-outline-variant/15 flex items-center gap-2 text-xs text-secondary font-medium">
                  <span className="text-base">🏷️</span>
                  <span className="font-semibold text-on-surface">{t('testimonialsPage.tourLabel')}:</span>
                  <span>{tt(`testimonials.items.${i}.tour`, item.tour)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Your Review */}
      <section className="py-12 px-6 bg-surface">
        <div className="max-w-3xl mx-auto bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 md:p-8">
          <h3 className="font-headline text-3xl text-on-surface mb-2">Write Your Review</h3>
          <p className="text-secondary mb-6">
            Share your journey experience with future pilgrims.
          </p>

          {reviewSubmitted && (
            <div className="mb-5 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-on-surface">
              Thank you for your review. We appreciate your feedback.
            </div>
          )}
          {reviewError && (
            <div className="mb-5 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
              {reviewError}
            </div>
          )}

          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-on-surface mb-2">Your Rating</p>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, idx) => {
                  const starValue = idx + 1;
                  const active = starValue <= reviewForm.rating;
                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => setReviewForm((p) => ({ ...p, rating: starValue }))}
                      className="transition-transform hover:scale-110"
                      aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
                    >
                      <svg
                        className={`w-6 h-6 ${active ? 'text-tertiary fill-tertiary' : 'text-outline-variant fill-transparent'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  );
                })}
                <span className="ml-2 text-sm text-secondary">{reviewForm.rating}/5</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={reviewForm.name}
                onChange={(e) => setReviewForm((p) => ({ ...p, name: e.target.value }))}
                required
                className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 text-on-surface placeholder:text-secondary/70 focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Country"
                value={reviewForm.country}
                onChange={(e) => setReviewForm((p) => ({ ...p, country: e.target.value }))}
                required
                className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 text-on-surface placeholder:text-secondary/70 focus:outline-none focus:border-primary"
              />
            </div>

            <textarea
              placeholder="Write your review..."
              rows={5}
              value={reviewForm.review}
              onChange={(e) => setReviewForm((p) => ({ ...p, review: e.target.value }))}
              required
              className="w-full rounded-xl border border-outline-variant/30 bg-surface px-4 py-3 text-on-surface placeholder:text-secondary/70 focus:outline-none focus:border-primary resize-y"
            />

            <button
              type="submit"
              disabled={reviewSubmitting}
              className="lotus-gradient text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
            >
              {reviewSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface-container text-center">
        <p className="font-headline text-3xl md:text-4xl text-on-surface mb-4">
          {t('ui.writeYourOwnStory')}
        </p>
        <p className="text-secondary mb-8 max-w-lg mx-auto">
          Join thousands of pilgrims who have walked these sacred paths with  Bodhi Holy Tours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/tours"
            className="lotus-gradient text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
          >
            {t('ui.browseAllTours')}
          </Link>
          <Link
            to="/contact"
            className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all"
          >
            Talk to a Specialist
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
