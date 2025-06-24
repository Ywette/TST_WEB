import './globals.css';
import Header from '@/components/dom/Header';

export const metadata = {
  title: 'TST LUXKOM - SATCOM partner',
  description: 'Created with Next.js and Three.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}