export default function PrioritiesPage() {
  const priorities = [
    { title: 'Infrastructure & Rural Development', desc: 'Modernizing roads, broadband, and water systems so every community can thrive.' },
    { title: 'Water & Natural Resources', desc: 'Protecting watersheds, improving drought monitoring, and supporting responsible stewardship.' },
    { title: 'Small Business & Economy', desc: 'Reducing barriers and creating conditions for local entrepreneurs to succeed.' },
    { title: 'National Security & Veterans', desc: 'Ensuring our military remains strong and veterans receive the care they earned.' },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <h1 className="section-title mb-10">Priorities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {priorities.map((p) => (
            <div key={p.title} className="bg-white rounded-3xl border border-border p-8 shadow-md">
              <h2 className="text-xl font-black text-navy mb-2">{p.title}</h2>
              <p className="text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
