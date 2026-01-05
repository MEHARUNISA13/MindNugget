'use client';

import { useAudio } from '@/context/AudioContext';
import styles from './GlobalAudioPlayer.module.css';
import Image from 'next/image';

export default function GlobalAudioPlayer() {
    const {
        activeBook,
        isPlaying,
        togglePlay,
        closePlayer,
        currentTime,
        duration,
        seek
    } = useAudio();

    if (!activeBook) return null;

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        seek(parseFloat(e.target.value));
    };

    return (
        <div className={styles.playerContainer}>
            <button className={styles.closeBtn} onClick={closePlayer} title="Close Player">✕</button>

            <div className={styles.bookInfo}>
                <div style={{ position: 'relative', width: 48, height: 64 }}>
                    {/* In a real app we would use next/image properly, here assuming coverImage path is valid or using a placeholder if needed */}
                    <Image
                        src={activeBook.coverImage || '/placeholder-book.jpg'}
                        alt={activeBook.title}
                        fill
                        className={styles.coverThumbnail}
                        onError={(e) => {
                            // Fallback if image fails
                            (e.target as HTMLImageElement).style.background = '#333';
                        }}
                    />
                </div>
                <div className={styles.details}>
                    <h4>{activeBook.title}</h4>
                    <p>{activeBook.author}</p>
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.mainControls}>
                    <button className={styles.controlBtn} onClick={() => seek(currentTime - 15)} title="Rewind 15s">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 18V6L5.5 12L11 18Z" fill="currentColor" />
                            <text x="12" y="16" fontSize="10" fill="currentColor">15</text>
                        </svg>
                    </button>

                    <button className={`${styles.controlBtn} ${styles.playBtn}`} onClick={togglePlay}>
                        {isPlaying ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                                <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                            </svg>
                        )}
                    </button>

                    <button className={styles.controlBtn} onClick={() => seek(currentTime + 15)} title="Forward 15s">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13 6V18L18.5 12L13 6Z" fill="currentColor" />
                            <text x="4" y="16" fontSize="10" fill="currentColor">15</text>
                        </svg>
                    </button>
                </div>

                <div className={styles.progressBarContainer}>
                    <span className={styles.time}>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        className={styles.progressRange}
                    />
                    <span className={styles.time}>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
}
