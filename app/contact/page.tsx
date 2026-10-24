import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { offices } from '@/data/offices';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <h1 className="section-title mb-2">Contact</h1>
        <p className="text-muted text-lg mb-12 max-w-2xl">
          Reach out to Representative Winters&apos; offices for constituent services, meeting requests, or to share your views.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office) => (
            <div key={office.id} className="bg-white rounded-3xl border border-border shadow-md p-8">
              <h2 className="font-black text-navy text-lg mb-3">{office.name}</h2>
              {office.address.map((line) => (
                <p key={line} className="text-muted text-sm">{line}</p>
              ))}
              <p className="text-navy font-medium mt-2">{office.phone}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(office.address.join(', '))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent mt-6 inline-block text-center w-full"
              >
                GET DIRECTIONS
              </a>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-3xl p-10 text-white text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-accent-gold" />
          <h2 className="text-2xl font-black mb-2">Email Representative Winters</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            For casework, opinions, or general inquiries, please use our secure contact form.
          </p>
          <Link href="/contact/share-opinion" className="btn-accent inline-flex items-center gap-2">
            OPEN CONTACT FORM <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
