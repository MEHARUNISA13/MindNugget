import { mockBooks } from '@/lib/mockData';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import styles from './books.module.css';

export const metadata = {
    title: 'Browse All Book Summaries - MindNugget',
    description: 'Explore thousands of book summaries across business, self-help, psychology, and more. Read or listen to key insights from bestselling books.',
};

export default function BooksPage() {
    const categories = Array.from(new Set(mockBooks.flatMap(book => book.category)));

    return (
        <div className={styles.booksPage}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Explore Our Library</h1>
                    <p>Discover thousands of book summaries to accelerate your learning journey</p>

                    <div className={styles.searchBar}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <input type="text" placeholder="Search for books, authors, or topics..." />
                    </div>
                </div>
            </section>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.filters}>
                        <h3>Categories</h3>
                        <div className={styles.categoryTags}>
                            <button className={`${styles.categoryTag} ${styles.active}`}>All Books</button>
                            {categories.slice(0, 8).map((category) => (
                                <button key={category} className={styles.categoryTag}>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.results}>
                        <div className={styles.resultsHeader}>
                            <h2>All Books ({mockBooks.length})</h2>
                            <select className={styles.sortSelect}>
                                <option value="popular">Most Popular</option>
                                <option value="recent">Recently Added</option>
                                <option value="rating">Highest Rated</option>
                                <option value="title">Title (A-Z)</option>
                            </select>
                        </div>

                        <div className={styles.booksGrid}>
                            {mockBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
