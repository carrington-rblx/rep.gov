'use client';

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// Simplified demo data — in production this would be full district polygons
const demoDistricts = [
  { id: 'UT-3', name: 'Representative Winters', district: 'Utah 3rd District', coords: [-111.09, 39.32] as [number, number] },
];

export default function FindYourRepresentativePage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="section-title mb-3">Find Your Representative</h1>
          <p className="text-muted text-lg">
            Explore the interactive map to locate Representative Winters&apos; district and learn how to get help.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
          <div className="relative w-full aspect-[16/10] bg-navy-dark">
            <ComposableMap
              projection="geoAlbersUsa"
              projectionConfig={{ scale: 1000 }}
              className="w-full h-full"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#002B49"
                      stroke="#D1D5DB"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#E28743', outline: 'none', cursor: 'pointer' },
                        pressed: { outline: 'none' },
                      }}
                      onMouseEnter={() => setHovered(geo.properties.name)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  ))
                }
              </Geographies>

              {demoDistricts.map((d) => (
                <Marker key={d.id} coordinates={d.coords}>
                  <circle r={8} fill="#EAB308" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={-15}
                    style={{ fontFamily: 'Montserrat', fill: '#fff', fontSize: 12, fontWeight: 700 }}
                  >
                    {d.district}
                  </text>
                </Marker>
              ))}
            </ComposableMap>

            {hovered && (
              <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-border">
                <p className="font-bold text-navy">{hovered}</p>
                <p className="text-sm text-muted">Hover a state for details</p>
              </div>
            )}
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-black text-navy mb-2">Constituent Services</h3>
              <p className="text-sm text-muted mb-4">
                Federal agency assistance, casework, and more.
              </p>
              <a href="/find-your-representative/services" className="text-accent-orange font-bold text-sm hover:underline">
                Learn more →
              </a>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-black text-navy mb-2">Casework Assistance</h3>
              <p className="text-sm text-muted mb-4">
                Help navigating federal agencies and benefits.
              </p>
              <a href="/find-your-representative/casework" className="text-accent-orange font-bold text-sm hover:underline">
                Start a request →
              </a>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-black text-navy mb-2">Internships</h3>
              <p className="text-sm text-muted mb-4">
                Apply for district or Washington, D.C. internships.
              </p>
              <a href="/find-your-representative/internships" className="text-accent-orange font-bold text-sm hover:underline">
                Apply now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
