import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Users, Flower, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-6 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-90 scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--mgNqR4JbfTFhChX7vKKPhJbzO29m6e4Kx9BC7i-FkbR_c85brY5Kp5kL_lGpl8TsaGDavXVXEIQWcL5HrVsUsydvmPS-fXdex3XZFcBVsGPCeZADadYXAf5hfbHYK0k3YNCjncI4T7zVNGiE3zRluO9kVlbPZIy0J1gc1_SSqKfXGQGEMwwT6xR4BBXCAhqKAW9Q9PL5a1cQLYMKzoFngEi04Al5Q4mErMYRNbX1kA2RbpNS_FZ6krQkfks_dwKHeoUdoZhBsQ" 
            alt="Golden sunrise over Mahabodhi Temple spire"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-sm font-semibold tracking-wide">
                Established 2014
              </span>
              <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight">
                Walk in the <br/>
                <span className="italic text-primary">Footsteps</span> of <br/>
                the Buddha
              </h1>
              <p className="text-lg md:text-xl text-secondary max-w-md leading-relaxed">
                Authentic Buddhist pilgrimage tours in Bodh Gaya guided by experienced local experts.
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <Link to="/tours" className="lotus-gradient text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2">
                Book a Tour
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="text-on-surface font-semibold flex items-center gap-2 group">
                Explore Destinations
                <div className="h-[1px] w-8 bg-outline-variant group-hover:w-12 transition-all"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Bodh Gaya */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">About Bodh Gaya</h2>
              <p className="text-secondary text-lg leading-relaxed">
                Bodh Gaya is the most sacred site in the Buddhist world. It is the place where Siddhartha Gautama attained enlightenment beneath the Bodhi Tree, becoming the Buddha.
              </p>
            </div>
            <div className="text-tertiary font-headline italic text-2xl">
              "Peace comes from within."
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
                <h3 className="font-headline text-3xl text-surface">Mahabodhi Temple</h3>
                <p className="text-surface/80">UNESCO World Heritage Site</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Flower className="text-tertiary text-6xl opacity-20" size={64} />
                </div>
                <h3 className="font-headline text-2xl mb-2">The Bodhi Tree</h3>
                <p className="text-secondary text-sm">Direct descendant of the original tree under which Buddha sat.</p>
              </div>
              <div className="bg-primary rounded-xl p-8 flex flex-col justify-end text-on-primary">
                <h3 className="font-headline text-2xl mb-2">80ft Buddha</h3>
                <p className="text-primary-fixed/80 text-sm">A towering symbol of peace overlooking the holy city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl">Why Choose Us</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">10+ Years Experience</h4>
                  <p className="text-secondary leading-relaxed">A decade of perfecting the pilgrimage experience for spiritual seekers from across the globe.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Local Expertise</h4>
                  <p className="text-secondary leading-relaxed">Our guides are born and raised in Bodh Gaya, offering stories and access you won't find anywhere else.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Flower size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Soulful Itineraries</h4>
                  <p className="text-secondary leading-relaxed">We balance sightseeing with meditation sessions, ensuring a true spiritual transformation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 border border-outline-variant/30 rounded-xl transform rotate-3"></div>
            <img 
              className="relative z-10 rounded-xl sacred-glow" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1d9tpNIrWRolZM-CTxNWdbFTiQzZez_ABmfqiWLGqBmtZImA_ffi2zbC94IfJV44cPHJvge-lDCbLcSIjGpPla-ZKZcta4iutHkKH5hfuJLiafauZUbNQj9Jsj8Xsgr1mNMc8WQXCWzMW7jlblcSJrdUfhVAV5ZGElEd15HC-b3bCd3t074NkNjZIhCQv48fx8jU-jDEyXD-nMozKjqIetO6dzDUsWuJzpbEtDcpJuPYkTYPD8a63VtMtWZc1UP1IZgAdhTVrxZg" 
              alt="Local monk teaching travelers near a temple"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-24 px-6 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl mb-4">Popular Tours</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7aFVie-PvCEL4LNUPpbuqPBgusrA_o8_QkrazSNSDSK3OduY8-ud_yv-foAKcScBZAWCgfnjq6EZWeVCyNAX4G9uNbGwBwEJ6fRNHRtdkOq5nuApRgMMuZG1VV1i7lBqG8DvusFMpNawaiB0Mt9uR3rwG8ZazTG2n4XBFMbqotFLcQaJlhwen7OYho8tQHDJSA5BqeKMuOCQVtliC-eiNAQMzNYwhu5X-7seTIKLoKyFUsOWaxbW4lhoO9WNptprREYBcNn-GuXM" 
                  alt="Pilgrims chanting at sunset"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-surface px-3 py-1 rounded-full text-xs font-bold text-primary">
                  7 DAYS
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-3">Enlightenment Path</h3>
                <p className="text-secondary text-sm mb-6 line-clamp-2">A deep dive into the four major sites of the Buddha's life across India.</p>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold text-xl">$1,299</span>
                  <Link to="/tours" className="text-tertiary font-semibold flex items-center gap-1 group/btn">
                    Details 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden md:-mt-8 hover:translate-y-[-16px] transition-all duration-500 sacred-glow border border-primary-fixed">
              <div className="h-72 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqjLhXX7T3AFFq5kd51LoUkPkW50DEFgoyoJxMzN1rJfAUjyPtquShFMymEjH6VEzEWZLhgWzwB-8m5UzJ-rLDT0yX7ril-3qMuHa74CNI9csOoWSfXsk-n7TzojloVBTC1lBOoPJL73QyuG_ahd-C90tXheTXzfaWbhmiKP3VsDWG-2RdUNOuY9RunyzZQnj-0-E51Oa-K_7UafdgkNXXlskSgjOz1x4C-3anbQk-ZRuKJi8VWiQEWjRyVdqyxUGJZOiCenWGGmw" 
                  alt="Bodhi Tree at night with lanterns"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold">
                  BEST SELLER
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-3">Sacred Bodh Gaya</h3>
                <p className="text-secondary text-sm mb-6 line-clamp-2">Immersive 4-day experience focused solely on the sacred energy of the Mahabodhi complex.</p>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold text-xl">$649</span>
                  <Link to="/tours" className="text-tertiary font-semibold flex items-center gap-1 group/btn">
                    Details 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqcEabaiMR9Nm1d8XV2ewmJuX3y3a4JOWT4MMHp1w3Kc5dYaZTNULPZ2Qp_80wObQuUlgFtp20IsS8GRqqF40NS-T6AlciB0B_PUisbs5Mphjtpm-4JVZ1eFY37JNigB4Jl9eY7tWb3eryYP8M2_U2EaU2Rmd4eRkGc5h7o8qaRYiXXymbYTp-nnxv38wphvVROdp9fH87z56UsFX51yNA-6aKmqyL-mDakMMYjjfZCZbSGWz6Y04i7a_m5FT5gtkyx7FNC8rJnag" 
                  alt="Buddhist monks walking in meditation"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-surface px-3 py-1 rounded-full text-xs font-bold text-primary">
                  14 DAYS
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-3">Grand Lotus Circuit</h3>
                <p className="text-secondary text-sm mb-6 line-clamp-2">Comprehensive journey through India and Nepal, visiting every major Buddhist heritage site.</p>
                <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold text-xl">$2,499</span>
                  <Link to="/tours" className="text-tertiary font-semibold flex items-center gap-1 group/btn">
                    Details 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageSquare className="text-6xl text-tertiary mx-auto mb-6" size={64} />
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Ready to start your journey <br/>towards inner peace?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="lotus-gradient text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20">
              Request a Personalized Itinerary
            </Link>
            <Link to="/contact" className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-bold text-lg border border-outline-variant/20">
              Talk to a Specialist
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-64 -right-64 w-128 h-128 bg-primary-fixed/20 rounded-full blur-3xl"></div>
      </section>
    </motion.div>
  );
}
