'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gradientOrb3}></div>
            </div>

            <div className="container">
                <div className={styles.heroContent}>
                    {/* Text Content */}
                    <div className={styles.heroText}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            AI-Powered Book Summaries
                        </div>

                        <h1 className="animate-fadeIn">
                            Read Smarter,
                            <br />
                            Learn Faster with
                            <br />
                            <span className="gradient-text">MindNugget</span>
                        </h1>

                        <p className="animate-fadeIn">
                            Transform the way you consume knowledge. Get AI-powered book summaries,
                            interactive chat with content, and audio narration - all in one beautiful app.
                        </p>

                        <div className={styles.heroCta}>
                            <Link href="#download" className="btn btn-primary">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M10 2V14M10 14L6 10M10 14L14 10M3 18H17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Download Now
                            </Link>
                            <Link href="#features" className="btn btn-secondary">
                                Explore Features
                            </Link>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <h3>10K+</h3>
                                <p>Book Summaries</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>50K+</h3>
                                <p>Active Users</p>
                            </div>
                            <div className={styles.stat}>
                                <h3>4.8★</h3>
                                <p>App Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* App Mockup */}
                    <div className={styles.heroImage}>
                        <div className={styles.phoneFrame}>
                            <div className={styles.phoneMockup}>
                                <div className={styles.phoneScreen}>
                                    {/* Placeholder for app screenshot */}
                                    <div className={styles.appPreview}>
                                        <div className={styles.previewHeader}>
                                            <div className={styles.previewIcon}></div>
                                            <div className={styles.previewText}>
                                                <div className={styles.previewLine}></div>
                                                <div className={styles.previewLine} style={{ width: '60%' }}></div>
                                            </div>
                                        </div>
                                        <div className={styles.previewContent}>
                                            <div className={styles.previewCard}></div>
                                            <div className={styles.previewCard}></div>
                                            <div className={styles.previewCard}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.floatingElement1}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="18" stroke="url(#grad1)" strokeWidth="2" />
                                    <path d="M20 12V28M12 20H28" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="grad1" x1="0" y1="0" x2="40" y2="40">
                                            <stop offset="0%" stopColor="#4f46e5" />
                                            <stop offset="100%" stopColor="#7c3aed" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.floatingElement2}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" rx="8" fill="url(#grad2)" opacity="0.8" />
                                    <defs>
                                        <linearGradient id="grad2" x1="0" y1="0" x2="30" y2="30">
                                            <stop offset="0%" stopColor="#06b6d4" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
