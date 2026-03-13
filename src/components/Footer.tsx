import { Link } from 'react-router-dom';
import { Compass, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="text-primary-fixed fill-primary-fixed" size={28} />
              <span className="font-headline text-2xl font-bold tracking-tight">Nirvana Travels</span>
            </div>
            <p className="text-inverse-on-surface/60 max-w-sm leading-relaxed">
              Providing authentic spiritual journeys that connect seekers with the ancient wisdom and sacred landscapes of Buddhist heritage since 2014.
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
                href="mailto:pilgrimage@nirvanatravels.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-inverse-on-surface/10 flex items-center justify-center hover:bg-primary-fixed/20 transition-colors"
              >
                <Mail size={18} className="text-primary-fixed" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h5 className="font-bold text-primary-fixed tracking-wider text-sm uppercase">Explore</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/tours" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">All Tours</Link>
              </li>
              <li>
                <Link to="/tours" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">Upcoming Departures</Link>
              </li>
              <li>
                <Link to="/about" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">About Bodh Gaya</Link>
              </li>
              <li>
                <Link to="/about" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors">Book a Private Tour</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h5 className="font-bold text-primary-fixed tracking-wider text-sm uppercase">Contact</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors"
                >
                  WhatsApp: +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilgrimage@nirvanatravels.com"
                  className="text-inverse-on-surface/70 hover:text-primary-fixed transition-colors"
                >
                  pilgrimage@nirvanatravels.com
                </a>
              </li>
              <li className="text-inverse-on-surface/50 leading-relaxed">
                Near Mahabodhi Temple Gate<br />
                Bodh Gaya, Bihar 824231, India
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Strip */}
        <div className="mb-12 p-6 rounded-xl bg-inverse-on-surface/5 border border-inverse-on-surface/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
              <p className="font-headline text-lg">Join our Pilgrimage Newsletter</p>
              <p className="text-sm text-inverse-on-surface/60 mt-1">Monthly insights on sacred travel, upcoming departures, and Bodh Gaya updates.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 lotus-gradient text-white px-7 py-3 rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Subscribe via Email
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-inverse-on-surface/50">
          <div>© 2026 Nirvana Buddhist Pilgrimages. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-inverse-on-surface transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-inverse-on-surface transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-inverse-on-surface transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
