'use client';

import styles from './Features.module.css';

const features = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8ZM20 28C15.6 28 12 24.4 12 20C12 15.6 15.6 12 20 12C24.4 12 28 15.6 28 20C28 24.4 24.4 28 20 28Z"
                    fill="url(#gradient1)"
                />
                <path
                    d="M18 16L24 20L18 24V16Z"
                    fill="url(#gradient1)"
                />
                <defs>
                    <linearGradient id="gradient1" x1="8" y1="8" x2="32" y2="32">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: 'AI Chat',
        description: 'Interact with book content through intelligent AI conversations. Ask questions, get insights, and deepen your understanding.',
        color: '#4f46e5'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M28 6H12C9.8 6 8 7.8 8 10V30C8 32.2 9.8 34 12 34H28C30.2 34 32 32.2 32 30V10C32 7.8 30.2 6 28 6ZM28 30H12V10H28V30Z"
                    fill="url(#gradient2)"
                />
                <path
                    d="M14 14H26V16H14V14ZM14 18H26V20H14V18ZM14 22H22V24H14V22Z"
                    fill="url(#gradient2)"
                />
                <defs>
                    <linearGradient id="gradient2" x1="8" y1="6" x2="32" y2="34">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: 'Reading',
        description: 'Access comprehensive book summaries crafted by experts. Save hours while capturing key insights and ideas.',
        color: '#6366f1'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M20 8L8 14V26L20 32L32 26V14L20 8Z"
                    fill="url(#gradient3)"
                />
                <path
                    d="M16 18V24L22 20L16 18Z"
                    fill="white"
                />
                <defs>
                    <linearGradient id="gradient3" x1="8" y1="8" x2="32" y2="32">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: 'Audio Books',
        description: 'Listen to summaries on the go with high-quality audio narration. Perfect for commutes, workouts, or relaxation.',
        color: '#8b5cf6'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M30 8H10C7.8 8 6 9.8 6 12V28C6 30.2 7.8 32 10 32H30C32.2 32 34 30.2 34 28V12C34 9.8 32.2 8 30 8ZM30 28H10V12H30V28Z"
                    fill="url(#gradient4)"
                />
                <path
                    d="M14 16H26V18H14V16ZM14 20H26V22H14V20ZM14 24H22V26H14V24Z"
                    fill="url(#gradient4)"
                />
                <defs>
                    <linearGradient id="gradient4" x1="6" y1="8" x2="34" y2="32">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: 'Library',
        description: 'Organize your reading with smart collections. Track progress, save favorites, and build your knowledge base.',
        color: '#06b6d4'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M20 6L24 14L33 15.5L26.5 22L28 31L20 27L12 31L13.5 22L7 15.5L16 14L20 6Z"
                    fill="url(#gradient5)"
                />
                <defs>
                    <linearGradient id="gradient5" x1="7" y1="6" x2="33" y2="31">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: 'Smart Search',
        description: 'Find exactly what you need with AI-powered search. Discover books by topic, author, or key concepts instantly.',
        color: '#3b82f6'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8ZM20 28C15.6 28 12 24.4 12 20C12 15.6 15.6 12 20 12C24.4 12 28 15.6 28 20C28 24.4 24.4 28 20 28Z"
                    fill="url(#gradient6)"
                />
                <path
                    d="M20 14L22 18L26 19L23 22L24 26L20 24L16 26L17 22L14 19L18 18L20 14Z"
                    fill="url(#gradient6)"
                />
                <defs>
                    <linearGradient id="gradient6" x1="8" y1="8" x2="32" y2="32">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        title: 'Personalized',
        description: 'Get recommendations tailored to your interests. Our AI learns what you love and suggests perfect matches.',
        color: '#7c3aed'
    }
];

export default function Features() {
    return (
        <section id="features" className={`${styles.features} section`}>
            <div className="container">
                <div className={styles.featuresHeader}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Features
                    </div>
                    <h2>Everything You Need to Learn Smarter</h2>
                    <p>
                        Powerful features designed to transform your reading experience and
                        accelerate your learning journey.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${styles.featureCard} card`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className={styles.featureGlow} style={{ background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
