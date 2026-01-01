'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: 'How does MindNugget work?',
        answer: 'MindNugget uses advanced AI to analyze non-fiction books and extract the most valuable insights, key concepts, and actionable takeaways. We present these in easy-to-read text summaries and engaging audio formats.',
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes! You can try MindNugget Premium free for 7 days. We also offer a "Daily Nugget" - a free summary selected by our editors every day, available to all users without a subscription.',
    },
    {
        question: 'Can I listen to summaries offline?',
        answer: 'Absolutely. Premium members can download unlimited audio summaries and read text versions offline. Perfect for flights, commutes, or when you want to disconnect.',
    },
    {
        question: 'What kind of books do you cover?',
        answer: 'We focus on non-fiction bestsellers across categories like Business, personal Development, Psychology, frequent new additions every week.',
    },
    {
        question: 'Can I ask the AI questions about specific books?',
        answer: 'Yes! Our "Chat with Book" feature allows you to ask specific questions about any book in our library. It\'s like having the author on speed dial to clarify concepts.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={`section ${styles.faq}`}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeLine}></span>
                        FAQ
                    </div>
                    <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
                    <p>Have questions? We have answers. If you can't find what you're looking for, reach out to our support team.</p>
                </div>

                <div className={styles.accordion}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3>{faq.question}</h3>
                                <span className={styles.icon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M12 4V20M4 12H20"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={styles.answer}
                                style={{
                                    maxHeight: openIndex === index ? '200px' : '0',
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                            >
                                <div className={styles.answerContent}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
