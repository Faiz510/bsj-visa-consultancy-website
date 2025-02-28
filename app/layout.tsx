import type { Metadata } from 'next';
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
    <html lang="en">
      <body className="font-poppins">{children}</body>
    </html>
  );
}
