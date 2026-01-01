'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './CTA.module.css';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Sample animation data (replace with actual file)
import animationData from '../../public/animation-placeholder.json';

export default function CTA() {
    return (
        <section id="download" className={`${styles.cta} section`}>
            <div className="container">
                <div className={styles.ctaCard}>
                    <div className={styles.ctaBackground}>
                        {/* Replaced gradient orbs with Lottie container if needed, 
                             or keeping them + adding Lottie. User said "in place of this icon",
                             assuming they might mean using Lottie as a decorative element.
                             For now, I'll add the Lottie as a background element. */}
                        <div className={styles.lottieWrapper}>
                            {/* Note: User needs to provide actual JSON. 
                               Using a conditional check or placeholder for now. 
                           */}
                            <Lottie animationData={animationData} loop={true} />
                        </div>
                        <div className={styles.gradientOrb1}></div>
                        <div className={styles.gradientOrb2}></div>
                    </div>

                    <div className={styles.ctaContent}>
                        <h2>Start Your Learning Journey Today</h2>
                        <p>
                            Join thousands of readers who are learning smarter with MindNugget.
                            Download now and get access to 10,000+ book summaries.
                        </p>

                        <div className={styles.downloadButtons}>
                            <Link href="#" className={styles.downloadBtn}>
                                <Image
                                    src="/app-store.svg"
                                    alt="App Store"
                                    width={28}
                                    height={28}
                                    style={{ flexShrink: 0 }}
                                />
                                <div>
                                    <span>Download on the</span>
                                    <strong>App Store</strong>
                                </div>
                            </Link>

                            <Link href="#" className={styles.downloadBtn}>
                                <Image
                                    src="/playstore.svg"
                                    alt="Google Play"
                                    width={28}
                                    height={28}
                                    style={{ flexShrink: 0 }}
                                />
                                <div>
                                    <span>Get it on</span>
                                    <strong>Google Play</strong>
                                </div>
                            </Link>
                        </div>

                        <p className={styles.ctaNote}>
                            Free to download • No credit card required • 7-day free trial
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
