import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, CheckCircle, Send } from 'lucide-react';

const tourOptions = [
  'The Great Awakening Circuit (7 Days – $1,499)',
  'Sacred Bodh Gaya Immersion (4 Days – $649)',
  'Varanasi & Sarnath Retreat (3 Days – $449)',
  'Monastic Heritage Walk (5 Days – $899)',
  'Grand Lotus Circuit (14 Days – $2,799)',
  'Bodh Gaya Sacred Day Tour (1 Day – $49)',
  'Private / Custom Itinerary',
  'Not sure yet — need guidance',
];

interface FormState {
  name: string;
  country: string;
  email: string;
  phone: string;
  tourInterest: string;
  groupSize: string;
  preferredMonth: string;
  message: string;
}

const emptyForm: FormState = {
  name: '',
  country: '',
  email: '',
  phone: '',
  tourInterest: '',
  groupSize: '',
  preferredMonth: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

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
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface max-w-2xl leading-tight">
            Your Journey to Stillness Begins with a Conversation
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Form / Success */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
                <CheckCircle className="text-primary" size={40} />
              </div>
              <h2 className="font-headline text-3xl text-on-surface mb-4">Namaste, {form.name.split(' ')[0]}.</h2>
              <p className="text-secondary leading-relaxed max-w-md mb-8">
                Your inquiry has reached us. We will respond to <span className="text-on-surface font-semibold">{form.email}</span> within 24 hours with a personalised itinerary proposal.
              </p>
              <p className="text-sm text-secondary mb-8 italic">
                "The journey of a thousand miles begins with a single step." — Lao Tzu
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                className="border border-outline-variant text-on-surface px-8 py-3 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all"
              >
                Send Another Inquiry
              </button>
            </motion.div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="font-headline text-3xl text-on-surface mb-4">Send a Message</h2>
                <p className="text-secondary leading-relaxed max-w-lg">
                  Whether you seek a private pilgrimage or a group retreat, share your intent and we shall guide your steps.
                </p>
              </div>

              <form className="space-y-7" onSubmit={handleSubmit}>
                {/* Name & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder="Your full name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">Country *</label>
                    <input
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder="Where are you from?"
                      type="text"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">Email Address *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder="email@example.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">WhatsApp / Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder="+1 234 567 8900"
                      type="tel"
                    />
                  </div>
                </div>

                {/* Tour Interest */}
                <div className="space-y-2">
                  <label className="font-bold text-xs tracking-widest text-secondary uppercase">Tour of Interest</label>
                  <select
                    name="tourInterest"
                    value={form.tourInterest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface"
                  >
                    <option value="">Select a tour…</option>
                    {tourOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Group Size & Preferred Month */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">Group Size</label>
                    <select
                      name="groupSize"
                      value={form.groupSize}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface"
                    >
                      <option value="">Select…</option>
                      <option>Solo traveller</option>
                      <option>2 people (couple / friend)</option>
                      <option>3–5 people (small group)</option>
                      <option>6–12 people (group)</option>
                      <option>12+ people (large group / organisation)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">Preferred Travel Month</label>
                    <select
                      name="preferredMonth"
                      value={form.preferredMonth}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface"
                    >
                      <option value="">Select…</option>
                      {['January','February','March','April','May','June','July','August','September','October','November','December'].map(m => (
                        <option key={m}>{m} 2026</option>
                      ))}
                      <option>Flexible / Open</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-bold text-xs tracking-widest text-secondary uppercase">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 resize-none text-on-surface placeholder:text-outline"
                    placeholder="Tell us about your spiritual journey, any special needs, or questions you have…"
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="lotus-gradient text-on-primary px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:shadow-xl transition-all active:scale-95 flex items-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        SUBMIT INQUIRY
                      </>
                    )}
                  </button>
                  <p className="text-xs text-secondary mt-3">We respond within 24 hours. No spam, ever.</p>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-5">
            <h3 className="font-headline text-2xl text-on-surface">Reach Out Directly</h3>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full group-hover:bg-primary-fixed transition-colors">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">WhatsApp</p>
                  <p className="text-on-surface font-semibold">+91 98765 43210</p>
                  <p className="text-sm text-on-surface-variant mt-1">Instant support · Mon–Sat 7am–8pm IST</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:pilgrimage@nirvanatravels.com"
              className="group block p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full group-hover:bg-primary-fixed transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">Email</p>
                  <p className="text-on-surface font-semibold">pilgrimage@nirvanatravels.com</p>
                  <p className="text-sm text-on-surface-variant mt-1">We reply within 24 hours</p>
                </div>
              </div>
            </a>

            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">Bodh Gaya Office</p>
                  <p className="text-on-surface leading-relaxed">
                    Nirvana Pilgrimage House<br />
                    Near Mahabodhi Temple Gate<br />
                    Bodh Gaya, Bihar 824231, India
                  </p>
                  <p className="text-sm text-on-surface-variant mt-2">Walk-ins welcome: Mon–Sat, 8am–6pm IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden border border-outline-variant/10">
            <iframe
              title="Bodh Gaya Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.832!2d84.9912!3d24.6966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f326a6b9a7e011%3A0xd8e2a0df1e6a1a47!2sMahabodhi%20Temple!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.google.com/?q=Mahabodhi+Temple,+Bodh+Gaya,+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-surface-container text-sm font-bold text-primary hover:bg-surface-container-high transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Response promise */}
          <div className="bg-tertiary-fixed/30 rounded-xl p-6">
            <p className="font-headline text-lg text-on-surface mb-2">Our Promise</p>
            <p className="text-sm text-secondary leading-relaxed">
              Every inquiry is read by Tenzin or a senior guide personally — never an automated bot. We will understand your needs and craft a genuine response within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-surface-container-lowest py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto italic text-2xl md:text-3xl font-headline text-secondary leading-relaxed">
            "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
          </div>
          <p className="mt-6 text-sm text-secondary font-medium not-italic">— Attributed to the Buddha</p>
          <div className="mt-6 flex justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
