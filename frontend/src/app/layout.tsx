// NEXT
import type { Metadata } from 'next';

// FONTS
import { Geist, Geist_Mono } from 'next/font/google';

// STYLES
import './globals.css';

// COMPONENTS
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// FONTS
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// META DATA
export const metadata: Metadata = {
  title: 'Get Together',
  description:
    'a safe space, free from forced tracking, algorithms and surveillance',
};

// LAYOUT
export default function RootLayout(props: { children: React.ReactNode }) {
  const children = props.children;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
