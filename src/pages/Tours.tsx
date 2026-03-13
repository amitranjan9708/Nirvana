import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Tours() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Sacred Path</span>
            <h1 className="font-headline text-5xl lg:text-7xl text-on-surface leading-tight mb-6">Embark on a Journey of Enlightenment</h1>
            <p className="text-secondary text-lg leading-relaxed max-w-lg mb-10">Carefully curated pilgrimages that guide you through the footsteps of the Buddha, fostering peace and inner reflection.</p>
          </div>
        </div>
        {/* Decorative Bodhi Leaf Shape Overlay */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none translate-x-1/4">
          <img 
            className="w-full h-full object-contain rotate-12" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4kwHXaYEZ7DpSiaIF6UwJlJnzyGFXMr0cwB7w2Khb27K_3_6tMUS_FSJI6XlY9sQzF6TAKO1UN6LAM18AJo_JMgNpF68KqGJShIoaD_3iwc6T4M6SXLXSZdtjPuoBlBfKTT38CnmmPqjC7bFxRDFUjAX2B_OLMvkRKYT7aIOv1QSTtBs5Znx98RIYtaiPWNUzyKMCkeDdQ0PvY6107oqS9Byk_CPfnibyfMv3t9F8di7-VPxPiyBuCSliXiyEpEyVAbDxl1Kiokc" 
            alt="Golden silhouette of a Bodhi tree leaf"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Featured Tours Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* 7 Day Circuit - Highlighted Large Card */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden sacred-glow group">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9PdMGgBUu778m_8DALztERX1e-i0BQPVkjw9_rH7PTTwc6JFR5nni814-8ymlzrvv53i_4Jh8t0BR6rX2O6F72P5ipoLH5v-A0bHoImaAASfSwIXAaHXt9bsUhbO1g6PayM4ulpbhEId1b6vwXmHPf2MLRb5OrfrNCw4DqQuMFa3TNeRJq4H6xOHnpiJ6egGqebVL8eOlxSxtyvWY15aTRtSxScINYQwyWkF49HYLxgJYYostodjKtV90szjgqK1dak5_rzcZtBs" 
                  alt="Ancient stupa at Kushinagar during sunset"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-tertiary" size={18} />
                    <span className="text-sm font-bold text-secondary">7 Day Buddhist Circuit Tour</span>
                  </div>
                  <h3 className="font-headline text-3xl text-on-surface mb-4">The Great Awakening Circuit</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    A comprehensive pilgrimage through the four most sacred sites: Lumbini, Bodh Gaya, Sarnath, and Kushinagar. Experience the full arc of the Buddha's life.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-bold text-on-surface">Full Board</span>
                    <span className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-bold text-on-surface">Luxury Coach</span>
                    <span className="px-4 py-1.5 bg-surface-container rounded-full text-xs font-bold text-on-surface">Monastic Stays</span>
                  </div>
                </div>
                <button className="lotus-gradient text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide self-start shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* 1 Day Bodh Gaya - Side Card */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col h-full sacred-glow">
            <div className="h-48 rounded-lg overflow-hidden mb-6">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2qF5E3XK5I4jnFrtdVw7kX_hdxLfatJvNeuVCUIcfn9O6Egdctoa6tQhBukZz5vXGsqLOJBPLs4Hx3sbzVAw1nNM6zJcpqwFr_4yiafohT5w0nuskzcBu8ZBJnxVHV_2xAYtmlpYwO6-_E6aS3gJ2uEPBMCr6KK8hikRi6_gD8gIhgR_mXte4809gL7sMfiz1VQ3X_X9NIMUccrqsF7WXO8ErrsD9FQoMddGE4exJ0Srj_LzB-yNYUzx18KlkAF-6BX-n-wzqrY" 
                alt="Mahabodhi temple spire against clear blue sky"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-tertiary" size={18} />
              <span className="text-sm font-bold text-secondary">1 Day Bodh Gaya Sacred Sites Tour</span>
            </div>
            <h3 className="font-headline text-2xl text-on-surface mb-4 leading-tight">Quiet Reflection at the Bodhi Tree</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              A soul-enriching day visiting the Mahabodhi Temple, the 80ft Great Buddha Statue, and the diverse international monasteries surrounding the site of enlightenment.
            </p>
            <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-on-surface font-headline font-bold text-xl">$49<span className="text-sm font-normal text-secondary">/person</span></span>
              <button className="lotus-gradient text-white px-8 py-3 rounded-full font-bold text-xs tracking-wide">
                Book
              </button>
            </div>
          </div>

          {/* Upcoming Departures */}
          <div className="md:col-span-12 mt-12">
            <div className="flex items-end justify-between mb-10">
              <div className="max-w-xl">
                <h2 className="font-headline text-3xl text-on-surface mb-2">Upcoming Departures</h2>
                <div className="h-1 w-20 bg-tertiary-container rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4">
              {/* List Item 1 */}
              <div className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-surface-container-lowest rounded-xl border border-transparent hover:border-outline-variant/30 transition-all">
                <div className="w-full md:w-32 h-20 rounded-lg overflow-hidden shrink-0">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeXeiHkqJpMKZO5vmFn-XTo057usESQX-vLI3WTJrn5UaDfIJUhwn9K27ZCGvPXZnSxO9hvx8JVK5xP0lngGw3Yfsl3nuaFA_o7jxWRfn0xp9O308m_tI5F3XmW7JvpKIJUAFLMJo6ErL-jNXpO9TgfBeBQE9iznNRrFBd1DB5o8nifLh1Ia5_08FJ0RYhxXer76iFaiaCNleGLaZJ_V4DRRlSV7MnypM6HNZAP_6UTZ--lOl1nuh9hnykXmpkXOnnLIS8HaExBXc" 
                    alt="Aerial view of Varanasi river ghats"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-xl text-on-surface mb-1">Varanasi & Sarnath Retreat</h4>
                  <p className="text-sm text-on-surface-variant">3 Days • Guided meditation and river ceremonies</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="block text-xs font-bold text-secondary uppercase tracking-widest">Next Date</span>
                    <span className="font-bold text-on-surface">Oct 12, 2024</span>
                  </div>
                  <button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full font-bold text-xs hover:bg-surface-container transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              {/* List Item 2 */}
              <div className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-surface-container-lowest rounded-xl border border-transparent hover:border-outline-variant/30 transition-all">
                <div className="w-full md:w-32 h-20 rounded-lg overflow-hidden shrink-0">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQABquklSKh4X0Xoc3P_8Xbkxs4kGypvqOZ2sAaIsUGmrwQXV-oleFvJSSmk0GqadI9zSbQUWIO2LOTR5VopU4-vK2lU0mgQOO8FViVHYPTIcFWgz7sma8PnLaNRMpKlenz-cBWA3m1CRifODmLf0cPsaYfP1PEVOe3zGsU9tzTLocJv8U-bdKNtPYR3z6gbs57PYfYzfIXTEXcT2A6xA7OvQp76JjjJW6YspkN3ePsTN0zMBwIWpdEZ1cQ5lvP7vWsIuyolFQVno" 
                    alt="Monks walking through ancient ruins"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-xl text-on-surface mb-1">Monastic Heritage Walk</h4>
                  <p className="text-sm text-on-surface-variant">5 Days • Exclusive access to Nalanda and Rajgir</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="block text-xs font-bold text-secondary uppercase tracking-widest">Next Date</span>
                    <span className="font-bold text-on-surface">Nov 05, 2024</span>
                  </div>
                  <button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full font-bold text-xs hover:bg-surface-container transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
