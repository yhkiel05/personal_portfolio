import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Younghoon Kiel | Software Engineer</title>
        <meta name="description" content="Personal portfolio of Younghoon Kiel, Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            YK
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="/#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </Link>
            <Link href="/#education" className="hover:text-blue-400 transition-colors">
              Education
            </Link>
            <Link href="/#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-2">
            <div className="container mx-auto px-6 flex flex-col space-y-2">
              <Link href="/#about" className="py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/#projects" className="py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/#experience" className="py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Experience
              </Link>
              <Link href="/#education" className="py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Education
              </Link>
              <Link href="/#contact" className="py-2 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Younghoon Kiel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
