export type VoteLevel = 'YEA' | 'NAY' | 'ABSTAIN' | 'PENDING';

export interface VoteRecord {
  id: string;
  billNumber: string;
  congress: string;
  title: string;
  date: string;
  vote: VoteLevel;
  rationale: string;
}

export const votingRecords: VoteRecord[] = [
  {
    id: '1',
    billNumber: 'H.R. 4021',
    congress: '119TH CONGRESS',
    title: 'Rural Infrastructure Modernization Act',
    date: '2026-10-20',
    vote: 'YEA',
    rationale:
      'This bipartisan legislation invests in critical roads, bridges, and broadband expansion that will directly benefit families and small businesses across our district. Strong infrastructure is the foundation of a thriving local economy.',
  },
  {
    id: '2',
    billNumber: 'H.R. 3187',
    congress: '119TH CONGRESS',
    title: 'National Water Resource Monitoring Enhancement Act',
    date: '2026-10-15',
    vote: 'YEA',
    rationale:
      'Accurate snowpack and drought data are essential for farmers, ranchers, and municipal water managers. This bill improves the tools we need to plan responsibly for the future.',
  },
  {
    id: '3',
    billNumber: 'H.R. 2754',
    congress: '119TH CONGRESS',
    title: 'Recycled Content Standards Clarity Act',
    date: '2026-10-07',
    vote: 'YEA',
    rationale:
      'Clear, enforceable standards protect consumers from greenwashing and reward companies that invest in genuine recycling infrastructure.',
  },
  {
    id: '4',
    billNumber: 'H.R. 1892',
    congress: '119TH CONGRESS',
    title: 'Federal Overreach Limitation Act',
    date: '2026-09-28',
    vote: 'NAY',
    rationale:
      'While I support limited government, this particular measure would have undermined important environmental safeguards that protect our local waterways and public lands.',
  },
];
