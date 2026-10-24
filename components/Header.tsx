'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const aboutLinks = [
  { href: '/about/biography', label: 'Biography' },
  { href: '/about/priorities', label: 'Priorities' },
  { href: '/about/committee-assignments', label: 'Committee Assignments' },
  { href: '/about/voting-record', label: 'Voting Record' },
  { href: '/about/legislation', label: 'Legislation' },
];

const findRepLinks = [
  { href: '/find-your-representative', label: 'Interactive District Map' },
  { href: '/find-your-representative/services', label: 'Constituent Services' },
  { href: '/find-your-representative/casework', label: 'Casework Assistance' },
  { href: '/find-your-representative/internships', label: 'Internship Applications' },
];

const newsroomLinks = [
  { href: '/newsroom/releases', label: 'Releases' },
  { href: '/newsroom/statements', label: 'Statements' },
  { href: '/newsroom/opinions', label: 'Opinions' },
  { href: '/newsroom/gallery', label: 'Gallery' },
];

function Dropdown({
  label,
  links,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  links: { href: string; label: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button className="nav-link flex items-center gap-1">
        {label}
        <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div className="dropdown-panel">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="dropdown-item" onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-main flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg">W</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-xl tracking-wider leading-none group-hover:text-accent-gold transition-colors">
                REPRESENTATIVE WINTERS
              </div>
              <div className="text-accent-gold text-xs font-semibold tracking-widest mt-0.5">
                U.S. REPRESENTATIVE
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Dropdown
              label="ABOUT"
              links={aboutLinks}
              isOpen={openMenu === 'about'}
              onOpen={() => setOpenMenu('about')}
              onClose={() => setOpenMenu(null)}
            />
            <Dropdown
              label="FIND YOUR REPRESENTATIVE"
              links={findRepLinks}
              isOpen={openMenu === 'find'}
              onOpen={() => setOpenMenu('find')}
              onClose={() => setOpenMenu(null)}
            />
            <Dropdown
              label="NEWSROOM"
              links={newsroomLinks}
              isOpen={openMenu === 'news'}
              onOpen={() => setOpenMenu('news')}
              onClose={() => setOpenMenu(null)}
            />
            <Link href="/contact" className="nav-link">
              CONTACT
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-white hover:text-accent-gold transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link href="/your-priorities" className="btn-accent">
              YOUR PRIORITIES
            </Link>
          </nav>

          {/* Mobile menu button (simplified) */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href="/your-priorities" className="btn-accent text-[10px] px-4 py-2">
              PRIORITIES
            </Link>
          </div>
        </div>
      </header>

      {/* Full-screen Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-start justify-center pt-32 px-4">
          <div className="w-full max-w-2xl">
            <input
              autoFocus
              type="search"
              placeholder="Search news, legislation, services..."
              className="w-full bg-white text-navy text-xl px-6 py-4 rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent-yellow"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="mt-6 text-white/80 hover:text-white text-sm font-medium"
            >
              Press ESC or click to close
            </button>
          </div>
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-8 right-8 text-white/70 hover:text-white text-3xl"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
