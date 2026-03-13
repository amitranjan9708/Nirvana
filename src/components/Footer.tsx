import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="text-primary-fixed fill-primary-fixed" size={28} />
              <span className="font-headline text-2xl font-bold tracking-tight">Nirvana Travels</span>
            </div>
            <p className="text-inverse-on-surface/60 max-w-sm">
              Providing spiritual journeys that connect seekers with the ancient wisdom and sacred landscapes of Buddhist heritage.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-primary-fixed">Explore</h5>
            <ul className="space-y-2 opacity-80">
              <li><Link to="/tours" className="hover:text-primary-fixed transition-colors">Tours</Link></li>
              <li><Link to="/tours" className="hover:text-primary-fixed transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-primary-fixed transition-colors">About Bodh Gaya</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-primary-fixed">Connect</h5>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-primary-fixed transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-fixed transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary-fixed transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <div>© 2024 Nirvana Buddhist Pilgrimages. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
