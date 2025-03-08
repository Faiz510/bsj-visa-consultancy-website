import type { Metadata } from 'next';
import Navbar from './components/navbar/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'BSJ Consultancy And Immigration',
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
      </body>
    </html>
  );
}
