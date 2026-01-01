'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Image
                src="/logo.svg"
                alt="MindNugget Logo"
                width={64}
                height={64}
                className={styles.logoIcon}
              />
            </div>
            <span className={styles.logoText}>MindNugget</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#faq">FAQ</Link>
          </div>

          {/* CTA Button */}
          <div className={styles.navActions}>
            <Link href="#download" className="btn btn-primary">
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button - Shown only when menu is closed */}
          {!mobileMenuOpen && (
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <button
              className={styles.closeMenuBtn}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className={styles.mobileMenuContent}>
              <Link href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="#download" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Download App
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
