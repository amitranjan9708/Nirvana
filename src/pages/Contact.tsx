import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Map as MapIcon } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoH87BJiOQMS0hr1F1izglnkU5hHs085tP892gEf4s-mRwkAPsNfLSc4lEFwnL_DIhNOqiqYV8F1achV9KIAvYOWmxNwjYr5GDAwTZkqllgaoS0cPlmxgmIrmm9pqQT9pKtkmTwP5aFCcN9olUjznu7Eli-_k4gQCoWUb9XUOVmQmlTki1QYVnzJCTjAujcv1c-vXoZZ7Uri2bjLrjUJ6iHbcHryFJyhoJ3fc70LkNtMcNan9xoRrUjGPiau82Zm3AWS4fz4rYagk" 
            alt="Peaceful sunrise over ancient Buddhist temple" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 pb-12 relative z-10">
          <p className="text-tertiary font-bold tracking-[0.2em] mb-2 uppercase text-xs">Connect with us</p>
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface max-w-2xl leading-tight">Your Journey to Stillness Begins with a Conversation</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12">
          <div className="mb-10">
            <h2 className="font-headline text-3xl text-on-surface mb-4">Send a Message</h2>
            <p className="text-secondary leading-relaxed max-w-lg">Whether you seek a private pilgrimage or group retreat, share your intent with us and we shall guide your steps.</p>
          </div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-bold text-xs tracking-widest text-secondary uppercase">Name</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2" 
                  placeholder="Your full name" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-xs tracking-widest text-secondary uppercase">Country</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2" 
                  placeholder="Where are you from?" 
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-bold text-xs tracking-widest text-secondary uppercase">Email Address</label>
              <input 
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2" 
                placeholder="email@example.com" 
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-xs tracking-widest text-secondary uppercase">Message</label>
              <textarea 
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 resize-none" 
                placeholder="How can we assist your spiritual journey?" 
                rows={4}
              ></textarea>
            </div>
            <div className="pt-6">
              <button className="lotus-gradient text-on-primary px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:shadow-xl transition-all active:scale-95">
                SUBMIT INQUIRY
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h3 className="font-headline text-2xl text-on-surface">Reach Out</h3>
            
            <a href="#" className="group block p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full group-hover:bg-primary-fixed transition-colors">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">WhatsApp</p>
                  <p className="text-on-surface">+91 98765 43210</p>
                  <p className="text-sm text-on-surface-variant mt-1">Instant support for pilgrims</p>
                </div>
              </div>
            </a>

            <a href="mailto:pilgrimage@nirvanatravels.com" className="group block p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full group-hover:bg-primary-fixed transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">Email</p>
                  <p className="text-on-surface">pilgrimage@nirvanatravels.com</p>
                </div>
              </div>
            </a>

            <div className="p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">Bodh Gaya Office</p>
                  <p className="text-on-surface leading-relaxed">
                    Nirvana Pilgrimage House, Near Mahabodhi Temple,<br/>
                    Bodh Gaya, Bihar 824231, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container-high group">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <MapIcon className="text-outline mx-auto mb-2" size={32} />
                <p className="font-bold text-xs tracking-widest text-outline uppercase">View Map</p>
              </div>
            </div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYeWB6KTqpG6V4S5rU55aVI7WtZZIgVYCEkL0tgNkurUTlP0tpZYW4RYsjXPv023FB9cuPRwI_R-ZPwcjBgO0YwL7PTtoygfw3_Fa4B4KC5ak3bqw5p2Cf3AC5bxainWFI8ReEKtKd9PL6CWAufWQfIuby5UyNTmARXV4nBz3JBQW8rUHpsRfdOfOulHHFoJOKDFihEWgdWz9A0dsr-IRxEVojklExjHgXPJDcLURl0HuDJzqdlXkc7hEAYEH1d2f9N2X-1C4vls4" 
              alt="Map location of Bodh Gaya Office" 
              className="w-full h-full object-cover opacity-20 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-surface-container-lowest py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto italic text-2xl md:text-3xl font-headline text-secondary leading-relaxed">
            "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
          </div>
          <div className="mt-8 flex justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
