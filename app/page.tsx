import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { latestNews } from '@/data/news';
import { offices } from '@/data/offices';

export default function HomePage() {
  const featured = latestNews.find((n) => n.featured) || latestNews[0];
  const sideNews = latestNews.filter((n) => n.id !== featured.id).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80"
            alt="United States Capitol"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Emblem */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-4xl">W</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-widest text-center mb-3">
            REPRESENTATIVE WINTERS
          </h1>
          <p className="text-xl text-white font-medium uppercase tracking-[0.3em] text-center">
            U.S. REPRESENTATIVE{' '}
            <span className="font-serif italic lowercase text-accent-gold">for</span>{' '}
            THE DISTRICT
          </p>
        </div>
      </section>

      {/* Curved canvas transition + LATEST NEWS */}
      <section className="relative -mt-12 z-10">
        <div className="bg-canvas rounded-t-[40px] pt-16 pb-20">
          <div className="container-main">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-title">LATEST NEWS</h2>
              <Link href="/newsroom/releases" className="btn-accent">
                SEE ALL NEWS
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured large card */}
              <Link
                href={`/newsroom/releases/${featured.slug}`}
                className="group relative rounded-3xl overflow-hidden shadow-xl min-h-[480px] flex flex-col justify-end p-8 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${featured.image || 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80'})`,
                }}
              >
                <div className="absolute inset-0 bg-card-overlay" />
                <div className="relative z-10">
                  <p className="text-accent-gold font-bold text-xs uppercase tracking-widest mb-2">
                    {new Date(featured.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }).toUpperCase()}
                  </p>
                  <h3 className="text-white font-serif italic text-2xl sm:text-3xl font-bold leading-tight group-hover:text-accent-gold transition-colors">
                    {featured.title}
                  </h3>
                </div>
              </Link>

              {/* Stacked side cards */}
              <div className="flex flex-col gap-6">
                {sideNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/newsroom/releases/${item.slug}`}
                    className="card-dark group flex flex-col justify-between hover:border-accent-gold/30 transition-colors"
                  >
                    <div>
                      <p className="text-accent-orange font-bold text-xs uppercase tracking-widest mb-2">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }).toUpperCase()}
                      </p>
                      <h3 className="text-white font-serif italic text-xl sm:text-2xl font-bold leading-snug group-hover:text-accent-gold transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW CAN I HELP YOU? */}
      <section className="container-main my-16">
        <div className="bg-cream rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-border">
          {/* Decorative images */}
          <div className="absolute top-8 left-8 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80"
              alt="Meeting with constituents"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-8 right-8 w-40 h-28 rounded-2xl overflow-hidden shadow-lg hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
              alt="Community engagement"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-accent-orange font-bold text-xs tracking-widest uppercase mb-2">
            SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
            HOW CAN I HELP YOU?
          </h2>
          <p className="text-navy font-serif italic text-lg max-w-2xl mx-auto mb-8">
            Representative Winters is pleased to offer a range of services through his district and Washington offices.
          </p>
          <Link href="/find-your-representative/services" className="btn-accent">
            GET STARTED
          </Link>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="container-main my-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl sm:text-5xl font-black text-navy leading-none mb-6">
              GET IN<br />TOUCH
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-navy font-bold hover:text-accent-orange transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center text-white">
                <ArrowRight className="w-5 h-5" />
              </span>
              EMAIL REPRESENTATIVE WINTERS
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div
                key={office.id}
                className="relative rounded-3xl overflow-hidden min-h-[440px] flex flex-col justify-end p-6 shadow-xl group"
              >
                <Image
                  src={office.image}
                  alt={office.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10 text-white">
                  <h3 className="font-black text-lg tracking-wider mb-2">{office.name}</h3>
                  {office.address.map((line) => (
                    <p key={line} className="text-sm text-white/90">
                      {line}
                    </p>
                  ))}
                  <p className="text-sm text-white/90 mt-1">{office.phone}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(office.address.join(', '))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent mt-4 inline-block text-center w-full"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
