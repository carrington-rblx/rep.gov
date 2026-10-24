import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Representative Winters | U.S. Representative',
    template: '%s | Representative Winters',
  },
  description:
    'Official website of U.S. Representative Winters. Constituent services, voting record, legislation, and news from the district.',
  keywords: ['Representative Winters', 'Congress', 'constituent services', 'voting record'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
