'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { votingRecords, type VoteLevel } from '@/data/voting-record';
import { cn } from '@/lib/utils';

function VoteBadge({ vote }: { vote: VoteLevel }) {
  const styles = {
    YEA: 'vote-badge-yea',
    NAY: 'vote-badge-nay',
    ABSTAIN: 'vote-badge-abstain',
    PENDING: 'vote-badge-pending',
  };
  return <div className={styles[vote]}>{vote}</div>;
}

export default function VotingRecordPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return votingRecords;
    return votingRecords.filter(
      (r) =>
        r.billNumber.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q) ||
        r.vote.toLowerCase().includes(q) ||
        r.rationale.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-canvas">
      <div className="container-main">
        <div className="mb-10">
          <h1 className="section-title mb-2">Voting Record</h1>
          <p className="text-muted text-lg max-w-2xl">
            Search Representative Winters&apos; roll call votes by bill number, topic, or outcome.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="search"
            placeholder="Search by bill ID (e.g. H.R. 4021), topic, or vote..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-border bg-white text-navy focus:outline-none focus:ring-4 focus:ring-accent-yellow/40 focus:border-accent-orange transition-all"
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filtered.length === 0 ? (
            <p className="text-muted text-center py-12">No votes match your search.</p>
          ) : (
            filtered.map((record) => (
              <article
                key={record.id}
                className="bg-white border-2 border-border rounded-2xl p-6 shadow-md flex flex-col sm:flex-row gap-6 items-start"
              >
                <VoteBadge vote={record.vote} />
                <div className="flex-1">
                  <p className="text-xs font-bold text-accent-orange uppercase tracking-widest mb-1">
                    {record.billNumber} — {record.congress}
                  </p>
                  <p className="text-sm text-muted mb-1">
                    Voted on{' '}
                    {new Date(record.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="text-xl font-bold text-navy mb-3">{record.title}</h2>
                  <p className="text-navy/80 leading-relaxed">{record.rationale}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
