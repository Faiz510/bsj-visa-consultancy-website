import type { Metadata } from 'next';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import Footer from './components/footer/Footer';

export const metadata: Metadata = {
  title: 'BSJ Consultancy & Immigration',
  description:
    'Helping students and travelers with visas, immigration, and consultancy services. Your trusted partner for a hassle-free journey.',
  keywords:
    'student visa, immigration, tourist visa, consultancy, study abroad',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
