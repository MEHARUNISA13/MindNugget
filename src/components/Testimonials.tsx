'use client';

import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Marketing Director',
        image: 'https://i.pravatar.cc/150?img=1',
        content: "MindNugget has completely transformed my morning commute. I can digest key insights from business bestsellers in just 15 minutes. It's a game-changer for my career growth.",
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Software Engineer',
        image: 'https://i.pravatar.cc/150?img=11',
        content: "The technical book summaries are surprisingly accurate. I love the audio feature - it's perfect for listening while I'm coding or working out. Highly recommended!",
        rating: 5,
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Graduate Student',
        image: 'https://i.pravatar.cc/150?img=5',
        content: "As a student, I have so much reading to do. MindNugget helps me preview books and understand the core concepts before diving deep. It's saved me hundreds of hours.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeLine}></span>
                        Testimonials
                    </div>
                    <h2>Loved by <span className="gradient-text">50,000+</span> Readers</h2>
                    <p>Don't just take our word for it. Here's what our community has to say about their learning journey with MindNugget.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.rating}>
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill={i < testimonial.rating ? "#fbbf24" : "#4b5563"}
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className={styles.content}>"{testimonial.content}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        unoptimized // Using external URL for mock data
                                    />
                                </div>
                                <div className={styles.info}>
                                    <h5>{testimonial.name}</h5>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
