'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
    audioUrl: string;
    title: string;
    author: string;
    duration?: number;
}

export default function AudioPlayer({ audioUrl, title, author, duration }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalDuration, setTotalDuration] = useState(duration || 0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => {
            setTotalDuration(audio.duration);
            setIsLoading(false);
        };
        const handleEnded = () => setIsPlaying(false);
        const handleError = () => {
            setHasError(true);
            setIsLoading(false);
            console.error('Audio failed to load:', audioUrl);
        };
        const handleCanPlay = () => {
            setHasError(false);
            setIsLoading(false);
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);
        audio.addEventListener('canplay', handleCanPlay);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
            audio.removeEventListener('canplay', handleCanPlay);
        };
    }, [audioUrl]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const time = parseFloat(e.target.value);
        audio.currentTime = time;
        setCurrentTime(time);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const vol = parseFloat(e.target.value);
        audio.volume = vol;
        setVolume(vol);
        setIsMuted(vol === 0);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMuted) {
            audio.volume = volume;
            setIsMuted(false);
        } else {
            audio.volume = 0;
            setIsMuted(true);
        }
    };

    const changePlaybackRate = (rate: number) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.playbackRate = rate;
        setPlaybackRate(rate);
    };

    const skip = (seconds: number) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.currentTime = Math.max(0, Math.min(audio.currentTime + seconds, totalDuration));
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={styles.audioPlayer}>
            <audio ref={audioRef} src={audioUrl} preload="metadata" />

            {hasError && (
                <div style={{
                    padding: '1rem',
                    textAlign: 'center',
                    color: '#ff6b6b',
                    background: 'rgba(255, 107, 107, 0.1)',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                }}>
                    ⚠️ Audio file not available. This feature is coming soon!
                </div>
            )}

            <div className={styles.playerHeader}>
                <div className={styles.waveformIcon}>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                </div>
                <div className={styles.trackInfo}>
                    <h4>{title}</h4>
                    <p>{author}</p>
                </div>
            </div>

            <div className={styles.progressSection}>
                <input
                    type="range"
                    min="0"
                    max={totalDuration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className={styles.progressBar}
                />
                <div className={styles.timeDisplay}>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(totalDuration)}</span>
                </div>
            </div>

            <div className={styles.controls}>
                <button onClick={() => skip(-15)} className={styles.skipButton} title="Rewind 15s">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 18V6L5.5 12L11 18Z" fill="currentColor" />
                        <text x="12" y="16" fontSize="10" fill="currentColor">15</text>
                    </svg>
                </button>

                <button onClick={togglePlay} className={styles.playButton}>
                    {isPlaying ? (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                            <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                        </svg>
                    )}
                </button>

                <button onClick={() => skip(15)} className={styles.skipButton} title="Forward 15s">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 6V18L18.5 12L13 6Z" fill="currentColor" />
                        <text x="4" y="16" fontSize="10" fill="currentColor">15</text>
                    </svg>
                </button>
            </div>

            <div className={styles.bottomControls}>
                <div className={styles.speedControl}>
                    <span className={styles.label}>Speed:</span>
                    <div className={styles.speedButtons}>
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                            <button
                                key={rate}
                                onClick={() => changePlaybackRate(rate)}
                                className={`${styles.speedButton} ${playbackRate === rate ? styles.active : ''}`}
                            >
                                {rate}x
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.volumeControl}>
                    <button onClick={toggleMute} className={styles.volumeButton}>
                        {isMuted || volume === 0 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="currentColor" />
                            </svg>
                        )}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className={styles.volumeSlider}
                    />
                </div>
            </div>
        </div>
    );
}
