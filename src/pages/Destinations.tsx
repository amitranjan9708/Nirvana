import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  { img: '/images/hero-mahabodhi.png', key: 'bodhGaya',    country: 'India',  flag: '🇮🇳' },
  { img: '/images/sarnath.png',         key: 'sarnath',     country: 'India',  flag: '🇮🇳' },
  { img: '/images/nalanda.png',         key: 'nalanda',     country: 'India',  flag: '🇮🇳' },
  { img: '/images/rajgir.png',          key: 'rajgir',      country: 'India',  flag: '🇮🇳' },
  { img: '/images/kushinagar.png',      key: 'kushinagar',  country: 'India',  flag: '🇮🇳' },
  { img: '/images/lumbini.png',         key: 'lumbini',     country: 'Nepal',  flag: '🇳🇵' },
];

export default function Destinations() {
  const { t } = useTranslation();
  const tt = (key: string, fallback: string) => t(key, { defaultValue: fallback });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">

      {/* Hero */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('ui.journeysByRegion')}
          </span>
          <h1 className="font-headline text-5xl lg:text-6xl text-on-surface leading-tight mb-6">
            {t('destinations.pageTitle')}
          </h1>
          <div className="h-1 w-20 bg-tertiary-container rounded-full mx-auto mb-6" />
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {t('destinations.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Destination Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-28">
        {destinations.map((dest, i) => {
          const isReversed = i % 2 !== 0;
          const sites: string[] = t(`destinations.${dest.key}Sites`).split(',').map((s: string) => s.trim());

          return (
            <motion.section
              key={dest.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sacred-glow bg-surface-container-high">
                  <img
                    src={dest.img}
                    alt={t(`destinations.${dest.key}Title`)}
                    className="w-full h-full object-cover"
                  />
                  {/* Country badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-on-surface">
                    <span>{dest.flag}</span>
                    <span>{dest.country}</span>
                  </div>
                  {/* Number */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full lotus-gradient flex items-center justify-center text-white font-headline font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="font-headline text-3xl lg:text-4xl text-on-surface leading-snug">
                  {t(`destinations.${dest.key}Title`)}
                </h2>
                <p className="text-secondary leading-relaxed text-[1.05rem]">
                  {t(`destinations.${dest.key}Desc`)}
                </p>

                {/* Key Sites */}
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-xs tracking-widest text-secondary uppercase mb-3">
                    <MapPin size={14} className="text-primary" />
                    {t('destinations.keySites')}
                  </h4>
                  <ul className="space-y-2">
                    {sites.map((site, j) => (
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
                    {t('destinations.travelTips')}
                  </h4>
                  <div className="bg-tertiary-fixed/30 border border-tertiary-container/60 rounded-xl px-5 py-4 text-sm text-on-surface leading-relaxed">
                    {t(`destinations.${dest.key}Tips`)}
                  </div>
                </div>

                <Link
                  to="/tours"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  See tours that visit this site →
                </Link>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface-container text-center">
        <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">
          {t('ui.writeYourOwnStory')}
        </h2>
        <p className="text-secondary mb-8 max-w-lg mx-auto">
          {tt('destinations.cta.subtitle', 'Choose from six curated pilgrimages — or request a private custom tour designed around the destinations that call to you.')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/tours"
            className="lotus-gradient text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
          >
            {t('ui.browseAllTours')}
          </Link>
          <Link
            to="/contact"
            className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all"
          >
            {tt('destinations.cta.custom', 'Request Custom Itinerary')}
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
