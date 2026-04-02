import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Ramsey Empowerment Coaching | Sybil Elise',
  description: 'Empowerment Strategist helping women and professionals recognize their strength, embrace their voice, and step into their power.',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/studio-5463986047-b4104.firebasestorage.app/o/1.png?alt=media&token=b36209ce-0159-46ea-b215-847fa96a84f4',
    apple: 'https://firebasestorage.googleapis.com/v0/b/studio-5463986047-b4104.firebasestorage.app/o/1.png?alt=media&token=b36209ce-0159-46ea-b215-847fa96a84f4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
