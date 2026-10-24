import Link from 'next/link';

const services = [
  {
    title: 'Federal Agency Assistance',
    desc: 'Help navigating Social Security, Medicare, veterans benefits, immigration, and other federal agencies.',
  },
  {
    title: 'Casework',
    desc: 'Individual assistance when you have an issue with a federal agency or program.',
  },
  {
    title: 'Internships',
    desc: 'Opportunities in the district office and Washington, D.C. for students interested in public service.',
  },
  {
    title: 'Academy Nominations',
    desc: 'Assistance with nominations to the U.S. service academies.',
  },
  {
    title: 'Flag Requests',
    desc: 'Request a U.S. flag flown over the Capitol for special occasions.',
  },
  {
    title: 'Tour Requests',
    desc: 'Capitol and White House tour coordination for constituents visiting Washington.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <h1 className="section-title mb-3">Constituent Services</h1>
        <p className="text-muted text-lg mb-12 max-w-2xl">
          Representative Winters&apos; offices are here to help. Select a service below to get started.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-3xl border border-border p-8 shadow-md hover:border-accent-orange transition-colors"
            >
              <h2 className="text-lg font-black text-navy mb-2">{s.title}</h2>
              <p className="text-muted text-sm mb-4">{s.desc}</p>
              <Link href="/contact" className="text-accent-orange font-bold text-sm hover:underline">
                Request assistance →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
