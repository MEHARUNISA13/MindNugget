'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Book } from '@/types/book';

interface AudioContextType {
    activeBook: Book | null;
    isPlaying: boolean;
    playBook: (book: Book) => void;
    togglePlay: () => void;
    closePlayer: () => void;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    currentTime: number;
    duration: number;
    volume: number;
    setVolume: (val: number) => void;
    seek: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const [activeBook, setActiveBook] = useState<Book | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolumeState] = useState(1);

    // We explicitly type the ref to allow null, but initialize it later or let React attach it
    // However, since we might access it before render in some edge cases (unlikely here but good practice),
    // we keep it simple.
    const audioRef = useRef<HTMLAudioElement>(null);

    const playBook = (book: Book) => {
        if (activeBook?.id === book.id) {
            togglePlay();
            return;
        }
        setActiveBook(book);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        if (!activeBook) return;
        setIsPlaying((prev) => !prev);
    };

    const closePlayer = () => {
        setIsPlaying(false);
        setActiveBook(null);
        setCurrentTime(0);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const seek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const setVolume = (val: number) => {
        setVolumeState(val);
        if (audioRef.current) {
            audioRef.current.volume = val;
        }
    };

    // Handle play/pause side effects
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error("Playback failed:", error);
                    setIsPlaying(false);
                });
            }
        } else {
            audio.pause();
        }
    }, [isPlaying, activeBook]);

    // Setup event listeners
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    return (
        <AudioContext.Provider
            value={{
                activeBook,
                isPlaying,
                playBook,
                togglePlay,
                closePlayer,
                audioRef,
                currentTime,
                duration,
                volume,
                setVolume,
                seek
            }}
        >
            <audio
                ref={audioRef}
                src={activeBook?.audioUrl}
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
            />
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
}
