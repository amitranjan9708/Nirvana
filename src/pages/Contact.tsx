import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const isThai = i18n.resolvedLanguage?.startsWith('th');
  const thContact: Record<string, string> = {
    'contact.success.messagePrefix': 'เราได้รับคำสอบถามของคุณแล้ว เราจะติดต่อกลับไปที่',
    'contact.success.messageSuffix': 'ภายใน 24 ชั่วโมง พร้อมข้อเสนอแผนการเดินทางที่เหมาะกับคุณ',
    'contact.success.quote': '"การเดินทางพันลี้ เริ่มต้นจากก้าวแรก" — เล่าจื๊อ',
    'contact.form.subtitle': 'ไม่ว่าคุณต้องการทริปส่วนตัวหรือรีทรีตเป็นกลุ่ม เพียงบอกความตั้งใจของคุณ แล้วเราจะช่วยวางเส้นทางให้',
    'contact.form.placeholderName': 'ชื่อ-นามสกุลของคุณ',
    'contact.form.placeholderCountry': 'คุณมาจากประเทศใด',
    'contact.form.placeholderEmail': 'email@example.com',
    'contact.form.placeholderPhone': '+66 8x xxx xxxx',
    'contact.form.selectTour': 'เลือกทัวร์ที่สนใจ…',
    'contact.form.select': 'เลือก…',
    'contact.form.group1': 'ผู้เดินทางเดี่ยว',
    'contact.form.group2': '2 คน (คู่รัก / เพื่อน)',
    'contact.form.group3': '3–5 คน (กลุ่มเล็ก)',
    'contact.form.group4': '6–12 คน (กลุ่ม)',
    'contact.form.group5': '12+ คน (กลุ่มใหญ่ / องค์กร)',
    'contact.form.flexible': 'ยืดหยุ่น / เปิดกว้าง',
    'contact.form.placeholderMessage': 'เล่าให้เราฟังเกี่ยวกับเป้าหมายการเดินทาง หรือความต้องการพิเศษของคุณ…',
    'contact.form.responseTime': 'เราตอบกลับภายใน 24 ชั่วโมง ไม่มีสแปม',
    'contact.info.whatsappHours': 'ตอบไว · จันทร์–เสาร์ 07:00–20:00 น. (IST)',
    'contact.info.email': 'อีเมล',
    'contact.info.emailHours': 'เราตอบกลับภายใน 24 ชั่วโมง',
    'contact.info.office': 'สำนักงานพุทธคยา',
    'contact.info.officeLine1': 'Nirvana Pilgrimage House',
    'contact.info.walkins': 'ยินดีต้อนรับ Walk-in: จันทร์–เสาร์ 08:00–18:00 น. (IST)',
    'contact.promise.body': 'ทุกคำสอบถามจะถูกอ่านโดยเทนซินหรือไกด์อาวุโสด้วยตนเอง ไม่ใช่บอทอัตโนมัติ เราจะทำความเข้าใจความต้องการของคุณและตอบกลับอย่างจริงใจภายใน 1 วันทำการ',
    'contact.quote.text': '"เทียนนับพันเล่มสามารถจุดจากเทียนเล่มเดียวได้ และความสุขย่อมไม่ลดลงเมื่อแบ่งปัน"',
    'contact.quote.by': '— คำสอนที่อ้างถึงพระพุทธเจ้า',
  };
  const tt = (key: string, fallback: string) =>
    t(key, { defaultValue: isThai ? (thContact[key] ?? fallback) : fallback });
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
          <p className="text-tertiary font-bold tracking-[0.2em] mb-2 uppercase text-xs">{t('ui.connectWithUs')}</p>
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface max-w-2xl leading-tight">
            {t('ui.contactHeroTitle')}
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
                {tt('contact.success.messagePrefix', 'Your inquiry has reached us. We will respond to')} <span className="text-on-surface font-semibold">{form.email}</span> {tt('contact.success.messageSuffix', 'within 24 hours with a personalised itinerary proposal.')}
              </p>
              <p className="text-sm text-secondary mb-8 italic">
                {tt('contact.success.quote', '"The journey of a thousand miles begins with a single step." — Lao Tzu')}
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                className="border border-outline-variant text-on-surface px-8 py-3 rounded-full font-bold text-sm hover:border-primary hover:text-primary transition-all"
              >
                {t('ui.sendAnotherInquiry')}
              </button>
            </motion.div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="font-headline text-3xl text-on-surface mb-4">{t('ui.sendMessage')}</h2>
                <p className="text-secondary leading-relaxed max-w-lg">
                  {tt('contact.form.subtitle', 'Whether you seek a private pilgrimage or a group retreat, share your intent and we shall guide your steps.')}
                </p>
              </div>

              <form className="space-y-7" onSubmit={handleSubmit}>
                {/* Name & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.fullName')}</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder={tt('contact.form.placeholderName', 'Your full name')}
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.country')}</label>
                    <input
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder={tt('contact.form.placeholderCountry', 'Where are you from?')}
                      type="text"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.emailAddress')}</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder={tt('contact.form.placeholderEmail', 'email@example.com')}
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.whatsappPhone')}</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface placeholder:text-outline"
                      placeholder={tt('contact.form.placeholderPhone', '+1 234 567 8900')}
                      type="tel"
                    />
                  </div>
                </div>

                {/* Tour Interest */}
                <div className="space-y-2">
                  <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.tourOfInterest')}</label>
                  <select
                    name="tourInterest"
                    value={form.tourInterest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface"
                  >
                    <option value="">{tt('contact.form.selectTour', 'Select a tour…')}</option>
                    {(isThai
                      ? [
                          'เส้นทางตื่นรู้อันยิ่งใหญ่ (7 วัน – $1,499)',
                          'รีทรีตพุทธคยาเชิงลึก (4 วัน – $649)',
                          'รีทรีตพาราณสีและสารนาถ (3 วัน – $449)',
                          'เส้นทางมรดกสงฆ์ (5 วัน – $899)',
                          'แกรนด์โลตัสเซอร์กิต (14 วัน – $2,799)',
                          'ทัวร์ศักดิ์สิทธิ์พุทธคยา 1 วัน (1 วัน – $49)',
                          'กำหนดโปรแกรมส่วนตัว',
                          'ยังไม่แน่ใจ ต้องการคำแนะนำ',
                        ]
                      : tourOptions).map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Group Size & Preferred Month */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.groupSize')}</label>
                    <select
                      name="groupSize"
                      value={form.groupSize}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface"
                    >
                      <option value="">{tt('contact.form.select', 'Select…')}</option>
                      <option>{tt('contact.form.group1', 'Solo traveller')}</option>
                      <option>{tt('contact.form.group2', '2 people (couple / friend)')}</option>
                      <option>{tt('contact.form.group3', '3–5 people (small group)')}</option>
                      <option>{tt('contact.form.group4', '6–12 people (group)')}</option>
                      <option>{tt('contact.form.group5', '12+ people (large group / organisation)')}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.preferredTravelMonth')}</label>
                    <select
                      name="preferredMonth"
                      value={form.preferredMonth}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 text-on-surface"
                    >
                      <option value="">{tt('contact.form.select', 'Select…')}</option>
                      {(isThai
                        ? ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
                        : ['January','February','March','April','May','June','July','August','September','October','November','December']
                      ).map(m => (
                        <option key={m}>{m} 2026</option>
                      ))}
                      <option>{tt('contact.form.flexible', 'Flexible / Open')}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-bold text-xs tracking-widest text-secondary uppercase">{t('ui.message')}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors pb-2 resize-none text-on-surface placeholder:text-outline"
                    placeholder={tt('contact.form.placeholderMessage', 'Tell us about your spiritual journey, any special needs, or questions you have…')}
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
                        {t('ui.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t('ui.submitInquiry')}
                      </>
                    )}
                  </button>
                  <p className="text-xs text-secondary mt-3">{tt('contact.form.responseTime', 'We respond within 24 hours. No spam, ever.')}</p>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-5">
            <h3 className="font-headline text-2xl text-on-surface">{t('ui.reachOutDirectly')}</h3>

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
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">{t('footer.whatsapp')}</p>
                  <p className="text-on-surface font-semibold">+91 98765 43210</p>
                  <p className="text-sm text-on-surface-variant mt-1">{tt('contact.info.whatsappHours', 'Instant support · Mon–Sat 7am–8pm IST')}</p>
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
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">{tt('contact.info.email', 'Email')}</p>
                  <p className="text-on-surface font-semibold">pilgrimage@nirvanatravels.com</p>
                  <p className="text-sm text-on-surface-variant mt-1">{tt('contact.info.emailHours', 'We reply within 24 hours')}</p>
                </div>
              </div>
            </a>

            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface-container-high rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest text-secondary mb-1 uppercase">{tt('contact.info.office', 'Bodh Gaya Office')}</p>
                  <p className="text-on-surface leading-relaxed">
                    {tt('contact.info.officeLine1', 'Nirvana Pilgrimage House')}<br />
                    {t('footer.addressLine1')}<br />
                    {t('footer.addressLine2')}
                  </p>
                  <p className="text-sm text-on-surface-variant mt-2">{tt('contact.info.walkins', 'Walk-ins welcome: Mon–Sat, 8am–6pm IST')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden border border-outline-variant/10">
            <iframe
              title={isThai ? 'ที่ตั้งสำนักงานพุทธคยา' : 'Bodh Gaya Office Location'}
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
              {t('ui.openInGoogleMaps')} →
            </a>
          </div>

          {/* Response promise */}
          <div className="bg-tertiary-fixed/30 rounded-xl p-6">
            <p className="font-headline text-lg text-on-surface mb-2">{t('ui.ourPromise')}</p>
            <p className="text-sm text-secondary leading-relaxed">
              {tt('contact.promise.body', 'Every inquiry is read by Tenzin or a senior guide personally — never an automated bot. We will understand your needs and craft a genuine response within one working day.')}
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-surface-container-lowest py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto italic text-2xl md:text-3xl font-headline text-secondary leading-relaxed">
            {tt('contact.quote.text', '"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."')}
          </div>
          <p className="mt-6 text-sm text-secondary font-medium not-italic">{tt('contact.quote.by', '— Attributed to the Buddha')}</p>
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
