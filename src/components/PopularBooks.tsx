'use client';

import { getPopularBooks } from '@/lib/mockData';
import BookCard from './BookCard';
import styles from './PopularBooks.module.css';
import Link from 'next/link';

export default function PopularBooks() {
    const popularBooks = getPopularBooks(6);

    return (
        <section className={`${styles.popularBooks} section`}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Popular Titles
                    </div>
                    <h2>Trending Book Summaries</h2>
                    <p>
                        Discover the most popular book summaries our community is reading and listening to right now.
                    </p>
                </div>

                <div className={styles.booksGrid}>
                    {popularBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                <div className={styles.viewAll}>
                    <Link href="/books" className="btn btn-secondary">
                        <span>Browse All Books</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
