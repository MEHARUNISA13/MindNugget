import { Book, BookCategory } from '@/types/book';

// Popular book summaries - Mock data inspired by Blinkist
export const mockBooks: Book[] = [
    {
        id: '1',
        slug: 'rich-dad-poor-dad',
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        category: ['Finance', 'Business', 'Personal Development'],
        coverImage: '/books/rich-dad-poor-dad.jpg',
        rating: 4.7,
        reviewCount: 15234,
        readTime: 12,
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Mock audio
        audioDuration: 372, // Mock duration
        summary: {
            short: 'Learn the financial lessons Robert Kiyosaki learned from his two dads - his biological father and his best friend\'s father - and how they shaped his perspective on money and investing.',
            full: 'Rich Dad Poor Dad is about Robert Kiyosaki and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to become rich and explains the difference between working for money and having your money work for you.',
            keyPoints: [
                'The rich don\'t work for money - they make money work for them',
                'Financial literacy is more important than a high income',
                'Assets put money in your pocket, liabilities take money out',
                'The importance of financial education and taking calculated risks',
                'Building passive income streams through investments and businesses',
            ],
        },
        publishedDate: '1997-04-01',
        popularity: 98,
        isbn: '978-1612680194',
    },
    {
        id: '2',
        slug: 'atomic-habits',
        title: 'Atomic Habits',
        author: 'James Clear',
        category: ['Self-Help', 'Productivity', 'Psychology'],
        coverImage: '/books/atomic-habits.jpg',
        rating: 4.8,
        reviewCount: 23451,
        readTime: 15,
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Mock audio
        audioDuration: 420,
        summary: {
            short: 'Discover how tiny changes can lead to remarkable results. James Clear reveals practical strategies for forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to success.',
            full: 'Atomic Habits is a comprehensive guide to changing your habits and getting 1% better every day. James Clear draws on proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible.',
            keyPoints: [
                'Small habits make a big difference - 1% better every day compounds',
                'Focus on systems, not goals for lasting change',
                'The Four Laws of Behavior Change: make it obvious, attractive, easy, and satisfying',
                'Environment design is crucial for habit formation',
                'Identity-based habits: become the type of person you want to be',
            ],
        },
        publishedDate: '2018-10-16',
        popularity: 99,
        isbn: '978-0735211292',
    },
    {
        id: '3',
        slug: 'think-and-grow-rich',
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        category: ['Business', 'Success', 'Personal Development'],
        coverImage: '/books/think-and-grow-rich.jpg',
        rating: 4.6,
        reviewCount: 18923,
        readTime: 14,
        summary: {
            short: 'Napoleon Hill\'s timeless classic reveals the secret to success used by Andrew Carnegie, Henry Ford, and other millionaires. Learn the 13 principles that can transform your life.',
            full: 'Think and Grow Rich has been called the "Granddaddy of All Motivational Literature." It was the first book to boldly ask, "What makes a winner?" The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world\'s winners himself.',
            keyPoints: [
                'Desire: The starting point of all achievement',
                'Faith: Visualization and belief in attainment of desire',
                'Auto-suggestion: The medium for influencing the subconscious mind',
                'Specialized knowledge: Personal experiences or observations',
                'The power of the mastermind: Coordination of knowledge and effort',
            ],
        },
        publishedDate: '1937-01-01',
        popularity: 95,
        isbn: '978-1585424337',
    },
    {
        id: '4',
        slug: 'the-7-habits-of-highly-effective-people',
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen Covey',
        category: ['Self-Help', 'Leadership', 'Business'],
        coverImage: '/books/7-habits.jpg',
        rating: 4.7,
        reviewCount: 21456,
        readTime: 16,
        summary: {
            short: 'Stephen Covey presents a principle-centered approach for solving personal and professional problems with seven timeless habits that can transform your effectiveness.',
            full: 'The 7 Habits of Highly Effective People has captivated readers for 25 years. It has transformed the lives of presidents and CEOs, educators and parents—in short, millions of people of all ages and occupations.',
            keyPoints: [
                'Be Proactive: Take responsibility for your life',
                'Begin with the End in Mind: Define your mission and goals',
                'Put First Things First: Prioritize and execute',
                'Think Win-Win: Seek mutually beneficial solutions',
                'Seek First to Understand, Then to Be Understood: Practice empathetic communication',
            ],
        },
        publishedDate: '1989-08-15',
        popularity: 96,
        isbn: '978-1982137274',
    },
    {
        id: '5',
        slug: 'the-power-of-now',
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        category: ['Spirituality', 'Self-Help', 'Mindfulness'],
        coverImage: '/books/power-of-now.jpg',
        rating: 4.6,
        reviewCount: 16789,
        readTime: 13,
        summary: {
            short: 'Eckhart Tolle\'s spiritual guide to enlightenment teaches you to live in the present moment and free yourself from anxiety, stress, and unhappiness.',
            full: 'The Power of Now shows you that every minute you spend worrying about the future or regretting the past is a minute lost, because really all you have to live in is the present, the now.',
            keyPoints: [
                'The present moment is all you ever have',
                'The mind is a superb instrument if used rightly, but destructive if used wrongly',
                'Ego is the unobserved mind that runs your life',
                'Surrender to what is, say yes to life',
                'Enlightenment is simply your natural state of felt oneness with Being',
            ],
        },
        publishedDate: '1997-01-01',
        popularity: 92,
        isbn: '978-1577314806',
    },
    {
        id: '6',
        slug: 'how-to-win-friends-and-influence-people',
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        category: ['Self-Help', 'Communication', 'Business'],
        coverImage: '/books/win-friends.jpg',
        rating: 4.7,
        reviewCount: 19234,
        readTime: 14,
        summary: {
            short: 'Dale Carnegie\'s timeless bestseller teaches fundamental techniques for handling people, winning them to your way of thinking, and changing people without arousing resentment.',
            full: 'For more than sixty years the rock-solid, time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives.',
            keyPoints: [
                'Don\'t criticize, condemn, or complain',
                'Give honest and sincere appreciation',
                'Arouse in the other person an eager want',
                'Become genuinely interested in other people',
                'Remember that a person\'s name is the sweetest sound',
            ],
        },
        publishedDate: '1936-10-01',
        popularity: 94,
        isbn: '978-0671027032',
    },
    {
        id: '7',
        slug: 'sapiens',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        category: ['History', 'Science', 'Philosophy'],
        coverImage: '/books/sapiens.jpg',
        rating: 4.8,
        reviewCount: 25678,
        readTime: 18,
        summary: {
            short: 'Yuval Noah Harari explores how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions.',
            full: 'Sapiens is a thrilling account of humankind\'s extraordinary history – from the Stone Age up to the twenty-first century. Harari explores how biology and history have defined us and enhanced our understanding of what it means to be "human".',
            keyPoints: [
                'The Cognitive Revolution enabled humans to create fiction and cooperate flexibly',
                'The Agricultural Revolution was history\'s biggest fraud',
                'Money, empires, and universal religions united humankind',
                'The Scientific Revolution gave humans unprecedented power',
                'Humans may be on the verge of becoming gods through biotechnology',
            ],
        },
        publishedDate: '2011-01-01',
        popularity: 97,
        isbn: '978-0062316097',
    },
    {
        id: '8',
        slug: 'the-subtle-art-of-not-giving-a-fck',
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        category: ['Self-Help', 'Philosophy', 'Psychology'],
        coverImage: '/books/subtle-art.jpg',
        rating: 4.5,
        reviewCount: 22134,
        readTime: 11,
        summary: {
            short: 'Mark Manson delivers a refreshing slap in the face in the form of a life philosophy that doesn\'t sugarcoat the truth: you need to choose what matters to you.',
            full: 'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.',
            keyPoints: [
                'Don\'t try to be positive all the time - embrace negative experiences',
                'Choose what you give a f*ck about carefully',
                'Happiness comes from solving problems, not avoiding them',
                'You are not special - and that\'s okay',
                'Accepting responsibility for everything in your life is empowering',
            ],
        },
        publishedDate: '2016-09-13',
        popularity: 93,
        isbn: '978-0062457714',
    },
    {
        id: '9',
        slug: 'deep-work',
        title: 'Deep Work',
        author: 'Cal Newport',
        category: ['Productivity', 'Business', 'Self-Help'],
        coverImage: '/books/deep-work.jpg',
        rating: 4.6,
        reviewCount: 14567,
        readTime: 13,
        summary: {
            short: 'Cal Newport argues that the ability to focus without distraction on cognitively demanding tasks is becoming increasingly rare and valuable in our economy.',
            full: 'Deep Work is an indispensable guide to anyone seeking focused success in a distracted world. Newport shows how cultivating a deep work ethic will produce massive benefits in our increasingly competitive twenty-first century economy.',
            keyPoints: [
                'Deep work is rare and valuable in the modern economy',
                'Shallow work is non-cognitively demanding and easily replicated',
                'Schedule every minute of your day to protect deep work time',
                'Embrace boredom and quit social media to improve focus',
                'Drain the shallows: minimize low-value activities',
            ],
        },
        publishedDate: '2016-01-05',
        popularity: 91,
        isbn: '978-1455586691',
    },
    {
        id: '10',
        slug: 'cant-hurt-me',
        title: 'Can\'t Hurt Me',
        author: 'David Goggins',
        category: ['Biography', 'Self-Help', 'Motivation'],
        coverImage: '/books/cant-hurt-me.jpg',
        rating: 4.8,
        reviewCount: 20456,
        readTime: 15,
        summary: {
            short: 'David Goggins went from poverty and abuse to becoming a Navy SEAL and ultra-endurance athlete. His story reveals how to master your mind and defy the odds.',
            full: 'Can\'t Hurt Me is a memoir about overcoming obstacles, from poverty and prejudice to physical limitations. Goggins calls this The 40% Rule: when your mind says you\'re done, you\'re only 40% done.',
            keyPoints: [
                'The 40% Rule: You\'re only using 40% of your potential',
                'Create a cookie jar of past accomplishments for motivation',
                'Embrace suffering to callous your mind',
                'Take souls: Outwork everyone to demoralize competition',
                'Accountability mirror: Face your weaknesses honestly',
            ],
        },
        publishedDate: '2018-12-04',
        popularity: 96,
        isbn: '978-1544512273',
    },
    {
        id: '11',
        slug: 'the-lean-startup',
        title: 'The Lean Startup',
        author: 'Eric Ries',
        category: ['Business', 'Entrepreneurship', 'Innovation'],
        coverImage: '/books/lean-startup.jpg',
        rating: 4.5,
        reviewCount: 13245,
        readTime: 14,
        summary: {
            short: 'Eric Ries defines a scientific methodology for creating and managing successful startups in an age when companies need to innovate more than ever.',
            full: 'The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively. Inspired by lessons from lean manufacturing, it relies on validated learning and rapid experimentation.',
            keyPoints: [
                'Build-Measure-Learn feedback loop is the core of lean startup',
                'Minimum Viable Product (MVP) to test assumptions quickly',
                'Validated learning through experiments and customer feedback',
                'Pivot or persevere based on data, not gut feelings',
                'Innovation accounting to measure progress',
            ],
        },
        publishedDate: '2011-09-13',
        popularity: 88,
        isbn: '978-0307887894',
    },
    {
        id: '12',
        slug: 'thinking-fast-and-slow',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        category: ['Psychology', 'Science', 'Decision Making'],
        coverImage: '/books/thinking-fast-slow.jpg',
        rating: 4.7,
        reviewCount: 17890,
        readTime: 17,
        summary: {
            short: 'Nobel Prize winner Daniel Kahneman reveals the two systems that drive the way we think: System 1 is fast and intuitive, System 2 is slow and deliberate.',
            full: 'Thinking, Fast and Slow offers a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.',
            keyPoints: [
                'System 1 (fast) vs System 2 (slow) thinking',
                'Cognitive biases affect our decision-making',
                'Loss aversion: losses loom larger than gains',
                'Anchoring effect influences our judgments',
                'What You See Is All There Is (WYSIATI) principle',
            ],
        },
        publishedDate: '2011-10-25',
        popularity: 90,
        isbn: '978-0374533557',
    },
];

export const mockCategories: BookCategory[] = [
    { id: '1', name: 'Business', slug: 'business', icon: '💼', bookCount: 156 },
    { id: '2', name: 'Self-Help', slug: 'self-help', icon: '🌟', bookCount: 234 },
    { id: '3', name: 'Psychology', slug: 'psychology', icon: '🧠', bookCount: 98 },
    { id: '4', name: 'Finance', slug: 'finance', icon: '💰', bookCount: 87 },
    { id: '5', name: 'Productivity', slug: 'productivity', icon: '⚡', bookCount: 124 },
    { id: '6', name: 'Leadership', slug: 'leadership', icon: '👑', bookCount: 76 },
    { id: '7', name: 'History', slug: 'history', icon: '📚', bookCount: 65 },
    { id: '8', name: 'Science', slug: 'science', icon: '🔬', bookCount: 54 },
];

// Helper functions
export function getBookBySlug(slug: string): Book | undefined {
    return mockBooks.find(book => book.slug === slug);
}

export function getPopularBooks(limit: number = 6): Book[] {
    return mockBooks
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);
}

export function getBooksByCategory(category: string, limit?: number): Book[] {
    const filtered = mockBooks.filter(book =>
        book.category.some(cat => cat.toLowerCase() === category.toLowerCase())
    );
    return limit ? filtered.slice(0, limit) : filtered;
}

export function searchBooks(query: string): Book[] {
    const lowerQuery = query.toLowerCase();
    return mockBooks.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.category.some(cat => cat.toLowerCase().includes(lowerQuery))
    );
}
