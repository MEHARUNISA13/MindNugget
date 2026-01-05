'use client';

import { useAudio } from '@/context/AudioContext';
import styles from './PlayButton.module.css';
import { Book } from '@/types/book';

export default function PlayButton({ book }: { book: Book }) {
    const { playBook, activeBook, isPlaying, togglePlay } = useAudio();
    const isCurrentBook = activeBook?.id === book.id;

    const handlePlay = () => {
        if (isCurrentBook) {
            togglePlay();
        } else {
            playBook(book);
        }
    };

    return (
        <button className={styles.playButton} onClick={handlePlay}>
            {isCurrentBook && isPlaying ? (
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                        <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                    </svg>
                    Pause
                </>
            ) : (
                <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                    Listen now
                </>
            )}
        </button>
    );
}
