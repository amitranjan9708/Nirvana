import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';

const languages = [
  { code: 'en',    name: 'English',          flag: '🇬🇧' },
  { code: 'th',    name: 'ไทย',              flag: '🇹🇭' },
  { code: 'vi',    name: 'Tiếng Việt',       flag: '🇻🇳' },
  { code: 'ms',    name: 'Bahasa Melayu',    flag: '🇲🇾' },
  { code: 'id',    name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'zh-CN', name: '简体中文',          flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文',          flag: '🇹🇼' },
];

// Dark brown palette (matches app's inverse-surface: #422b22)
const BROWN = {
  bg:       '#2e1a10',          // navbar bg after scroll
  border:   'rgba(255,237,231,0.12)',
  text:     '#ffede7',          // inverse-on-surface
  textMute: 'rgba(255,237,231,0.65)',
  active:   '#E8C96A',          // gold — active link
  hover:    'rgba(255,237,231,0.08)',
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setLangOpen(false); }, [location]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const currentLang = languages.find(l => l.code === i18n.language) ?? languages[0];

  // On the home page the hero image is behind the navbar → use white text when transparent.
  // On all other pages the hero is light-colored → use dark text when transparent.
  const isHome = location.pathname === '/';

  const navItems = [
    { path: '/',             label: t('nav.home') },
    { path: '/tours',        label: t('nav.tours') },
    { path: '/destinations', label: t('nav.destinations') },
    { path: '/about',        label: t('nav.about') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/contact',      label: t('nav.contact') },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  /* ── dynamic style tokens ──
     Three states:
       A) not scrolled + home   → transparent, white text
       B) not scrolled + other  → glass (light surface), dark brown text
       C) scrolled (any page)   → solid dark brown, cream/gold text
  ── */
  const logoColor = scrolled
    ? BROWN.active
    : isHome ? '#E8C96A' : '#974300';

  const logoText = scrolled
    ? BROWN.text
    : isHome ? '#ffffff' : '#2b160f';

  const linkColor = (active: boolean) => {
    if (scrolled) return active ? BROWN.active : BROWN.textMute;
    if (isHome)   return active ? '#ffffff' : 'rgba(255,255,255,0.80)';
    return active ? '#974300' : 'rgba(43,22,15,0.65)';
  };

  const linkBg = (active: boolean) => {
    if (!active) return 'transparent';
    if (scrolled) return 'rgba(255,237,231,0.10)';
    if (isHome)   return 'rgba(255,255,255,0.14)';
    return 'rgba(151,67,0,0.08)';
  };

  const langBorder = scrolled
    ? BROWN.border
    : isHome ? 'rgba(255,255,255,0.30)' : 'rgba(43,22,15,0.20)';

  const langText = scrolled
    ? BROWN.textMute
    : isHome ? 'rgba(255,255,255,0.80)' : 'rgba(43,22,15,0.65)';

  return (
    <>
      {/* ── Header ── */}
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
          background: scrolled
            ? BROWN.bg
            : isHome
              ? 'transparent'
              : 'rgba(255,248,246,0.85)',
          backdropFilter: (!scrolled && !isHome) ? 'blur(14px)' : scrolled ? 'blur(0px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${BROWN.border}`
            : isHome
              ? '1px solid transparent'
              : '1px solid rgba(221,193,179,0.35)',
          boxShadow: scrolled
            ? '0 4px 24px rgba(0,0,0,0.35)'
            : isHome
              ? 'none'
              : '0 1px 12px rgba(43,22,15,0.07)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span style={{ fontSize: '1.5rem', color: logoColor, transition: 'color 0.35s' }}>☸</span>
            <span
              className="font-headline font-bold text-lg tracking-tight"
              style={{ color: logoText, transition: 'color 0.35s' }}
            >
              Nirvana Travels
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map(item => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: linkColor(active),
                    background: linkBg(active),
                    transition: 'color 0.25s, background 0.25s',
                    fontWeight: active ? 600 : 500,
                  }}
                  className="px-3.5 py-2 rounded-full text-sm"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: language + Book + hamburger */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Language switcher */}
            <div className="relative hidden md:block" ref={langRef}>
              <button
                onClick={() => setLangOpen(o => !o)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  color: langText,
                  border: `1px solid ${langBorder}`,
                  background: 'transparent',
                  transition: 'color 0.35s, border-color 0.35s',
                }}
              >
                <span className="text-base">{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.name}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-52 rounded-xl overflow-hidden py-1"
                    style={{
                      background: BROWN.bg,
                      border: `1px solid ${BROWN.border}`,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    }}
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors"
                        style={{
                          color: lang.code === i18n.language ? BROWN.active : BROWN.textMute,
                          background: lang.code === i18n.language ? BROWN.hover : 'transparent',
                          fontWeight: lang.code === i18n.language ? 600 : 400,
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = BROWN.hover)}
                        onMouseLeave={e => (e.currentTarget.style.background = lang.code === i18n.language ? BROWN.hover : 'transparent')}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {lang.code === i18n.language && (
                          <svg className="ml-auto w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: BROWN.active }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book CTA */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:-translate-y-px shadow-md"
              style={{ background: 'linear-gradient(135deg, #C8A951, #E8941A)' }}
            >
              {t('nav.book')}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle navigation"
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-full"
              style={{ color: scrolled ? BROWN.text : isHome ? '#ffffff' : '#2b160f' }}
            >
              <span className={`block h-[2px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[2px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 flex flex-col pt-16"
            style={{ background: BROWN.bg }}
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="flex flex-col items-center justify-center flex-1 gap-2 px-8 py-8"
            >
              {navItems.map((item, i) => {
                const active = isActive(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                    className="w-full max-w-sm"
                  >
                    <Link
                      to={item.path}
                      className="flex items-center justify-center w-full py-3 rounded-xl text-lg transition-colors"
                      style={{
                        color: active ? BROWN.active : BROWN.textMute,
                        background: active ? BROWN.hover : 'transparent',
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Language grid in mobile */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navItems.length * 0.06 }}
                className="w-full max-w-sm mt-6 pt-6"
                style={{ borderTop: `1px solid ${BROWN.border}` }}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-center mb-3" style={{ color: BROWN.textMute }}>
                  Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); setMobileOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors"
                      style={{
                        color: lang.code === i18n.language ? BROWN.active : BROWN.textMute,
                        background: lang.code === i18n.language ? BROWN.hover : 'transparent',
                        border: `1px solid ${lang.code === i18n.language ? BROWN.active + '40' : 'transparent'}`,
                        fontWeight: lang.code === i18n.language ? 600 : 400,
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span className="truncate">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + (navItems.length + 1) * 0.06 }}
                className="w-full max-w-sm mt-4"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full py-4 rounded-full font-bold text-white text-base"
                  style={{ background: 'linear-gradient(135deg, #C8A951, #E8941A)' }}
                >
                  {t('nav.book')}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
