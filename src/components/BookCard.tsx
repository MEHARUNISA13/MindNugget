'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/types/book';
import styles from './BookCard.module.css';

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps) {
    return (
        <Link href={`/books/${book.slug}`} className={styles.bookCard}>
            <div className={styles.coverWrapper}>
                <div className={styles.coverImage}>
                    {/* Placeholder gradient until we have real images */}
                    <div className={styles.coverPlaceholder}>
                        <span className={styles.bookIcon}>📚</span>
                    </div>
                </div>
                {book.audioUrl && (
                    <div className={styles.audioBadge}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor" />
                        </svg>
                    </div>
                )}
            </div>

            <div className={styles.bookInfo}>
                <div className={styles.category}>
                    {book.category[0]}
                </div>

                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>

                <div className={styles.meta}>
                    <div className={styles.rating}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFB800" />
                        </svg>
                        <span>{book.rating}</span>
                    </div>
                    <div className={styles.readTime}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor" />
                        </svg>
                        <span>{book.readTime} min</span>
                    </div>
                </div>

                <p className={styles.summary}>{book.summary.short}</p>

                <div className={styles.actions}>
                    <button className={styles.readButton}>
                        Read Summary
                    </button>
                    {book.audioUrl && (
                        <button className={styles.listenButton}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.cardGlow}></div>
        </Link>
    );
}
