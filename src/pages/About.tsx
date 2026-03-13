import { motion } from 'motion/react';
import { Sparkles, Leaf, Users, Image as ImageIcon } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="text-tertiary font-bold tracking-[0.2em] text-xs mb-4 block uppercase">The Sacred Path</span>
            <h1 className="font-headline text-5xl lg:text-7xl text-on-surface leading-tight mb-8">
              Wisdom born from <br/><span className="italic text-primary">a decade of devotion.</span>
            </h1>
            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              Nirvana Travels isn't just a travel agency; it is a bridge between the ancient wisdom of the East and the spiritual seeking of the modern world.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 bg-surface-container-high">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBda8Ls54Q0QUt6U-2tMxV_zRYajy8YDf0PU0gKHDNTyneachpDlywHtxnd2kn4UcfjzljyGj72TVXgTr6Q6So5wYz1UxRm27mAmEQWJ9D_MmOwuu_QAHy9qHHaWaaRhHBNlNlGR-UR_222bv--6ZmYl1O93oIFctZGt5GKhnl5d-tC8Db4eNOe3r2YiNhCJC97vNltMUAiPzmukw3Ecdzk5fkM_ldRiTDXg87B-Rh_7yL6Tb4G_FXJRTdudNhTRLE2hRnOZcp-gCA" 
                alt="Portrait of a Buddhist guide in meditation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-container rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBibaWd6tXauyRlMKayJAG_EjKa9lNfUumhnIQOesdu-APdg8MG1qdU_ISvYQQtvRJactTURvSjDQwNo6wjMOTLwPkFx2Sdzqzc_hHx9vKXip0B-qTWMNjYkNrq8vX8OdVKLj7nga96rvBj78stTujLwFpj-tGYGIVqkZnLnG2EBNtAc-o-uZ4-b6HryPB2X1AJvnxjch0zSejVs6H3Tt6I--dTJHVLty-5UMJM7mp8xBbf5Jpth1AElySaU4LrgYH4ZUEXKSTYJ4c" 
                    alt="Old Buddhist temple in Bodh Gaya" 
                    className="rounded-lg w-full h-64 object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-primary-container p-8 rounded-lg text-on-primary-container">
                    <span className="font-headline text-4xl block mb-2">10+</span>
                    <span className="text-sm font-medium uppercase tracking-wider">Years of Guiding</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH8k-XdKu6gCJZX_HFrHHdJ_yIi5eDhWVCdR6xUSC3ipLapBJj4mhp-tqvqybvY7rBShZaWIDno5efyIzuDflHu61C9KplqkUmeu9xst8QibGtbb_-nPsrKHwKz2-KFjQ0lZ-zKSQIBxLyZvMvgo-DwKZgsNLHUWKpSf8KQbr0Jy93bVxvcZvPUasIJGpAP1Y2eZs8L1wFVPmwbLc8SBdMjDzSj1qNZUwGmV632rWTetWmve3FJdII1DXpHfAtuRKImBCa-rv-LA" 
                    alt="Monks walking in a line" 
                    className="rounded-lg w-full h-[400px] object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-4xl mb-6 text-on-surface">Founded by a Local Soul</h2>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  Nirvana Travels was founded by Tenzin, a local guide who spent over ten years walking the sacred paths of Bodh Gaya, Sarnath, and Kushinagar. 
                </p>
                <p>
                  Having guided thousands of pilgrims from across the globe, Tenzin realized that most international travelers were missing the true "inner" journey—the quiet conversations with monks, the hidden meditation caves, and the authentic pulse of local life.
                </p>
                <div className="pl-6 border-l-2 border-primary italic font-headline text-xl text-primary">
                  "My mission was simple: to move people from being tourists to becoming pilgrims."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl mb-4">Our Sacred Intent</h2>
            <p className="text-secondary max-w-2xl mx-auto">We operate on the principles of the Noble Eightfold Path, ensuring every pilgrimage is a step toward mindfulness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission Card */}
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 shadow-sm flex flex-col justify-between">
              <div>
                <Sparkles className="text-tertiary mb-6" size={48} />
                <h3 className="font-headline text-3xl mb-4">The Mission</h3>
                <p className="text-secondary text-lg leading-relaxed">
                  To provide authentic spiritual experiences for international pilgrims by stripping away the commercial noise of travel and focusing on the core teachings of the Buddha. We facilitate profound connections through silence, service, and local immersion.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <span className="px-4 py-2 bg-surface-container text-secondary text-xs font-bold rounded-full uppercase tracking-tighter">Authenticity</span>
                <span className="px-4 py-2 bg-surface-container text-secondary text-xs font-bold rounded-full uppercase tracking-tighter">Mindfulness</span>
              </div>
            </div>
            {/* Value 1 */}
            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col items-center text-center justify-center">
              <Leaf className="text-primary mb-4" size={32} />
              <h4 className="font-headline text-xl mb-2">Conscious Travel</h4>
              <p className="text-sm text-on-surface-variant">Respecting local ecosystems and supporting temple communities directly.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-center">
              <Users className="mb-4" size={32} />
              <h4 className="font-headline text-2xl mb-2">Radical Inclusivity</h4>
              <p className="text-sm opacity-90">Welcoming practitioners of all traditions and stages of their spiritual journey.</p>
            </div>
            {/* Value 3 */}
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgnISrX-TYZVea48wq9QQk8eWsEQCDJf5Bpo4lY4_oWbI2SPsTTPxHf6e3Os1h3JS09_c0OlHXDkoIdFuUYhdIss3UcobVREGvpczdhvNAwlgaJDN5Duq2sUpOLHfxakPBIONJZlqiwrppZthr3ZjCkffahpelGkR37-IRgBmjfNsm-fsUt0k3ZsYKzBpjtiowMD_K7gX5JZpgjvV7Kkkh05dLuahETrtbT0yOOUCWOInxuHeLUGQBN3r0O_5qOvsOAOaJhY25YEw" 
                  alt="Buddhist prayer wheels" 
                  className="rounded-lg h-40 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="font-headline text-xl mb-2">Local Stewardship</h4>
                <p className="text-on-surface-variant">We don't just visit sites; we contribute to their preservation and support the local artisans who keep the heritage alive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
