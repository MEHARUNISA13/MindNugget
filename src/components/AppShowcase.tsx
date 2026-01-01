'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AppShowcase.module.css';

const screens = [
    {
        id: 'splash',
        title: 'Welcome',
        description: 'Beautiful onboarding experience',
        image: '/app-splash.png'
    },
    {
        id: 'chat',
        title: 'AI Chat',
        description: 'Interact with book content',
        image: '/app-chat.png'
    },
    {
        id: 'library',
        title: 'Your Library',
        description: 'Organize your reading',
        image: '/app-library.png'
    }
];

export default function AppShowcase() {
    const [activeScreen, setActiveScreen] = useState(0);

    return (
        <section className={`${styles.showcase} section`}>
            <div className="container">
                <div className={styles.showcaseHeader}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        App Preview
                    </div>
                    <h2>Experience MindNugget</h2>
                    <p>
                        A beautifully designed app that makes reading summaries a joy.
                        Explore our intuitive interface and powerful features.
                    </p>
                </div>

                <div className={styles.showcaseContent}>
                    {/* Phone Display */}
                    <div className={styles.phoneDisplay}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.phoneNotch}></div>
                            <div className={styles.phoneScreen}>
                                {screens.map((screen, index) => (
                                    <div
                                        key={screen.id}
                                        className={`${styles.screenImage} ${index === activeScreen ? styles.active : ''
                                            }`}
                                    >
                                        <Image
                                            src={screen.image}
                                            alt={screen.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Screen Selector */}
                    <div className={styles.screenSelector}>
                        {screens.map((screen, index) => (
                            <button
                                key={screen.id}
                                className={`${styles.screenButton} ${index === activeScreen ? styles.active : ''
                                    }`}
                                onClick={() => setActiveScreen(index)}
                            >
                                <div className={styles.screenButtonIcon}>
                                    {index === 0 && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className={styles.screenButtonText}>
                                    <h4>{screen.title}</h4>
                                    <p>{screen.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
