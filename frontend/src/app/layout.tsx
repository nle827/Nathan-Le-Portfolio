"use client";
import { usePathname } from 'next/navigation'; 
import "./styles/globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();  // Get the current route's pathname
  const isHomePage = pathname === '/'; // Check if on the home page
  
  return (
    <html lang="en">
      <body>
        {!isHomePage && <Header />}  {/* Show Header only if NOT on home page */}
        {children}
        {!isHomePage && <Footer />}  {/* Show Footer only if NOT on home page */}
      </body>
    </html>
  );
}
