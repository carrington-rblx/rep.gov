import Link from 'next/link';
import { latestNews } from '@/data/news';

export default function ReleasesPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <h1 className="section-title mb-10">Press Releases</h1>
        <div className="space-y-6">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/newsroom/releases/${item.slug}`}
              className="block bg-white rounded-2xl border border-border p-6 shadow-md hover:border-accent-orange transition-colors"
            >
              <p className="text-xs font-bold text-accent-orange uppercase tracking-widest mb-1">
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h2 className="text-xl font-bold text-navy">{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
