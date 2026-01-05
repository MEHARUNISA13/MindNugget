import { notFound } from 'next/navigation';
import Link from 'next/link';
import { mockBooks, getBookBySlug, getBooksByCategory } from '@/lib/mockData';
import PlayButton from '@/components/PlayButton';
import BookCard from '@/components/BookCard';
import PopularBooks from '@/components/PopularBooks';
import styles from './book.module.css';
import type { Metadata } from 'next';

interface BookPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return mockBooks.map((book) => ({
        slug: book.slug,
    }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
    const { slug } = await params;
    const book = getBookBySlug(slug);

    if (!book) {
        return {
            title: 'Book Not Found - MindNugget',
        };
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: book.title,
        author: {
            '@type': 'Person',
            name: book.author,
        },
        description: book.summary.short,
        isbn: book.isbn,
        datePublished: book.publishedDate,
        ...(book.audioUrl && {
            audio: {
                '@type': 'AudioObject',
                contentUrl: book.audioUrl,
                duration: `PT${Math.floor((book.audioDuration || 0) / 60)}M`,
                name: `${book.title} Summary Audio`,
            },
        }),
    };

    return {
        title: `${book.title} Summary - MindNugget`,
        description: book.summary.short,
        keywords: `${book.title}, ${book.author}, book summary, ${book.category.join(', ')}`,
        openGraph: {
            title: `${book.title} by ${book.author} - Summary`,
            description: book.summary.short,
            type: 'article',
            images: [book.coverImage],
        },
        robots: {
            index: true,
            follow: true,
        },
        other: {
            'script:ld+json': JSON.stringify(jsonLd),
        },
    };
}

export default async function BookPage({ params }: BookPageProps) {
    const { slug } = await params;
    const book = getBookBySlug(slug);

    if (!book) {
        notFound();
    }

    const relatedBooks = getBooksByCategory(book.category[0], 3).filter(b => b.id !== book.id);

    return (
        <div className={styles.bookPage}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <div className="container">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/books">Books</Link>
                    <span>/</span>
                    <span>{book.title}</span>
                </div>
            </div>

            {/* Book Header */}
            <section className={styles.bookHeader}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <div className={styles.bookCover}>
                            <div className={styles.coverPlaceholder}>
                                <span className={styles.bookIcon}>📚</span>
                            </div>
                        </div>

                        <div className={styles.bookMeta}>
                            <div className={styles.categories}>
                                {book.category.map((cat, index) => (
                                    <span key={index} className={styles.categoryBadge}>
                                        {cat}
                                    </span>
                                ))}
                            </div>

                            <h1>{book.title}</h1>
                            <p className={styles.author}>by {book.author}</p>

                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFB800" />
                                    </svg>
                                    <span><strong>{book.rating}</strong> ({book.reviewCount.toLocaleString()} reviews)</span>
                                </div>
                                <div className={styles.stat}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor" />
                                    </svg>
                                    <span><strong>{book.readTime} min</strong> read</span>
                                </div>
                                {book.audioUrl && (
                                    <div className={styles.stat}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor" />
                                        </svg>
                                        <span><strong>{Math.floor((book.audioDuration || 0) / 60)} min</strong> audio</span>
                                    </div>
                                )}
                            </div>

                            <p className={styles.shortSummary}>{book.summary.short}</p>

                            <div className={styles.actions}>
                                <button className={styles.downloadBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2V14M12 14L8 10M12 14L16 10M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Get the App
                                </button>
                                <button className={styles.shareBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audio Player Button Section */}
            {book.audioUrl && (
                <section className={styles.audioSection}>
                    <div className="container">
                        <div className={styles.audioPrompt}>
                            <div className={styles.promptText}>
                                <h2>Listen to Summary</h2>
                                <p>Enhance your learning with our high-quality audio narration.</p>
                            </div>
                            <PlayButton book={book} />
                        </div>
                    </div>
                </section>
            )}

            {/* Summary Content */}
            <section className={styles.summarySection}>
                <div className="container">
                    <div className={styles.summaryContent}>
                        <div className={styles.mainContent}>
                            <h2>Summary</h2>
                            <p className={styles.fullSummary}>{book.summary.full}</p>

                            <h3>Key Takeaways</h3>
                            <ul className={styles.keyPoints}>
                                {book.summary.keyPoints.map((point, index) => (
                                    <li key={index}>
                                        <span className={styles.pointNumber}>{index + 1}</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.ctaBox}>
                                <h3>Want to dive deeper?</h3>
                                <p>Get the full MindNugget experience with our mobile app. Access thousands of book summaries, audio narration, and AI-powered chat.</p>
                                <button className={styles.ctaButton}>
                                    Download MindNugget App
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h4>About the Book</h4>
                                <div className={styles.bookDetails}>
                                    <div className={styles.detail}>
                                        <span className={styles.detailLabel}>Author</span>
                                        <span className={styles.detailValue}>{book.author}</span>
                                    </div>
                                    <div className={styles.detail}>
                                        <span className={styles.detailLabel}>Published</span>
                                        <span className={styles.detailValue}>{new Date(book.publishedDate).getFullYear()}</span>
                                    </div>
                                    {book.isbn && (
                                        <div className={styles.detail}>
                                            <span className={styles.detailLabel}>ISBN</span>
                                            <span className={styles.detailValue}>{book.isbn}</span>
                                        </div>
                                    )}
                                    <div className={styles.detail}>
                                        <span className={styles.detailLabel}>Categories</span>
                                        <span className={styles.detailValue}>{book.category.join(', ')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Books Section */}
            <PopularBooks />

            {/* Related Books */}
            {relatedBooks.length > 0 && (
                <section className={styles.relatedSection}>
                    <div className="container">
                        <h2>You Might Also Like</h2>
                        <div className={styles.relatedGrid}>
                            {relatedBooks.map((relatedBook) => (
                                <BookCard key={relatedBook.id} book={relatedBook} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
