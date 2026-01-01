import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'MindNugget - AI-Powered Book Summaries | Learn Smarter, Read Faster',
  description: 'Transform your reading experience with MindNugget. Get AI-powered book summaries, interactive chat, audio narration, and smart library management. Join 50K+ readers learning smarter.',
  keywords: 'book summaries, AI chat, audiobooks, reading app, learning, productivity',
  openGraph: {
    title: 'MindNugget - AI-Powered Book Summaries',
    description: 'Transform your reading experience with AI-powered book summaries. Learn smarter, not harder.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
