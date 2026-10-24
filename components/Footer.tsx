import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  about: [
    { href: '/about/biography', label: 'Biography' },
    { href: '/about/priorities', label: 'Priorities' },
    { href: '/about/committee-assignments', label: 'Committee Assignments' },
    { href: '/about/voting-record', label: 'Voting Record' },
    { href: '/about/legislation', label: 'Legislation' },
  ],
  findRep: [
    { href: '/find-your-representative/services', label: 'Constituent Services' },
    { href: '/find-your-representative/casework', label: 'Casework Stories' },
    { href: '/find-your-representative/internships', label: 'Internships' },
    { href: '/find-your-representative/tours', label: 'Tour Requests' },
  ],
  newsroom: [
    { href: '/newsroom/releases', label: 'Releases' },
    { href: '/newsroom/statements', label: 'Statements' },
    { href: '/newsroom/opinions', label: 'Opinions' },
    { href: '/newsroom/gallery', label: 'Gallery' },
  ],
  contact: [
    { href: '/contact/meeting-requests', label: 'Meeting Requests' },
    { href: '/contact/event-requests', label: 'Event Requests' },
    { href: '/contact/share-opinion', label: 'Share Your Opinion' },
    { href: '/contact/events', label: 'Events' },
    { href: '/contact/newsletter', label: 'Newsletter Sign-Up' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">
              ABOUT
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">
              FIND YOUR REPRESENTATIVE
            </h3>
            <ul className="space-y-2">
              {footerLinks.findRep.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">
              NEWSROOM
            </h3>
            <ul className="space-y-2">
              {footerLinks.newsroom.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">
              CONTACT
            </h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/privacy-policy"
            className="text-accent-gold font-bold text-sm tracking-widest uppercase hover:text-white transition-colors"
          >
            PRIVACY POLICY
          </Link>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="X">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-white/50 text-xs">
          This is a fictional portal created for roleplay purposes on www.winters.representative.rogov.
        </div>
      </div>
    </footer>
  );
}
