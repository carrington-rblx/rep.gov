export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt?: string;
  image?: string;
  featured?: boolean;
  slug: string;
}

export const latestNews: NewsItem[] = [
  {
    id: '1',
    date: '2026-10-20',
    title: 'Winters Calls for Bold Solutions to Strengthen Rural Infrastructure at District Town Hall',
    excerpt: 'Representative Winters outlined a comprehensive plan to modernize roads, broadband, and water systems across the district.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    featured: true,
    slug: 'rural-infrastructure-town-hall',
  },
  {
    id: '2',
    date: '2026-10-15',
    title: 'Winters, Bipartisan Coalition Celebrate Passage of Bill to Improve Water Resource Monitoring',
    slug: 'water-resource-monitoring-bill',
  },
  {
    id: '3',
    date: '2026-10-07',
    title: 'Winters Introduces Bill to Establish Clear National Standards for Recycled-Content Claims',
    slug: 'recycled-content-standards-bill',
  },
];
