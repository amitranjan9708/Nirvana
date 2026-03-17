import { Link } from 'react-router-dom';
import { Compass, Instagram, Facebook, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="text-primary-fixed fill-primary-fixed" size={28} />
              <span className="font-headline text-2xl font-bold tracking-tight">Bodhi Holy Tours</span>
            </div>
            <p className="text-inverse-on-surface/60 max-w-sm leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/nirvanatravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-inverse-on-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
              >
                <Instagram size={18} className="text-primary-fixed" />
              </a>
              <a
                href="https://www.facebook.com/nirvanatravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-inverse-on-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
              >
                <Facebook size={18} className="text-primary-fixed" />
              </a>
              <a
                href="mailto:bodhiholytours@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-inverse-on-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
              >
                <Mail size={18} className="text-primary-fixed" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h5 className="font-bold text-primary-fixed tracking-wider text-sm uppercase">{t('footer.explore')}</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/tours" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">{t('footer.allTours')}</Link>
              </li>
              <li>
                <Link to="/tours" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">{t('footer.upcomingDepartures')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">{t('footer.aboutBodhGaya')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">{t('footer.ourStory')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">{t('footer.bookPrivateTour')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h5 className="font-bold text-primary-fixed tracking-wider text-sm uppercase">{t('footer.contact')}</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/918210937258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors"
                >
                  {t('footer.whatsapp')}: +91 82109 37258
                </a>
              </li>
              <li>
                <a href="tel:+918210937258" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">
                  +91 82109 37258
                </a>
              </li>
              <li>
                <a href="tel:+918789305700" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">
                  +91 87893 05700
                </a>
              </li>
              <li>
                <a
                  href="mailto:bodhiholytours@gmail.com"
                  className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors"
                >
                  bodhiholytours@gmail.com
                </a>
              </li>
              <li className="text-inverse-on-surface/50 leading-relaxed">
                {t('footer.addressLine1')}<br />
                {t('footer.addressLine2')}
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Strip */}
        <div className="mb-12 p-6 rounded-xl bg-inverse-on-surface/5 border border-inverse-on-surface/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
              <p className="font-headline text-lg">{t('footer.newsletterTitle')}</p>
              <p className="text-sm text-inverse-on-surface/60 mt-1">{t('footer.newsletterSubtitle')}</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 lotus-gradient text-white px-7 py-3 rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              {t('footer.subscribeViaEmail')}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-inverse-on-surface/50">
          <div>{t('footer.rights')}</div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-inverse-on-surface transition-colors">{t('footer.faq')}</Link>
            <Link to="/contact" className="hover:text-inverse-on-surface transition-colors">{t('footer.privacy')}</Link>
            <Link to="/contact" className="hover:text-inverse-on-surface transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
