import type { Metadata } from 'next';
import './globals.css';
import { MesafProvider } from '../context/MesafContext';

export const metadata: Metadata = {
  title: 'Mercy Sarah Foundation (MESAF) — Women-Led Humanitarian NGO in Northeast Nigeria',
  description:
    'Mercy Sarah Foundation (MESAF) provides lifesaving primary health, CMAM nutrition, GBV protection, inclusive education, and women digital empowerment across Borno, Adamawa, and Yobe states.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-mesaf-teal selection:text-white">
        <MesafProvider>{children}</MesafProvider>
      </body>
    </html>
  );
}
