import './globals.css';
import { Inter, Cormorant_Infant, Jura } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const infant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-infant',
});

const jura = Jura({ subsets: ['latin'], variable: '--font-jura' });

export const metadata = {
  title: 'Bio4Apps 2023',
  description: 'Bio4Apps 2023 GC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${infant.variable} ${jura.variable} `}>
      <body>{children}</body>
    </html>
  );
}
