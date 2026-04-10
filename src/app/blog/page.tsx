import Link from 'next/link';
import Card from '@/components/ui/Card';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogIndex() {
  const articles = [
    {
      slug: 'should-i-refinance-mortgage-2026',
      title: 'Should I Refinance My Mortgage in 2026?',
      excerpt: 'Discover if current market conditions make it the right time to refinance your mortgage and potentially save thousands of dollars.',
      date: 'April 5, 2026',
      author: 'RefiBreakEven Team',
      readTime: '8 min read',
    },
    {
      slug: 'how-much-save-refinancing',
      title: 'How Much Can You Save by Refinancing?',
      excerpt: 'Learn about potential savings and the key factors that affect how much money you can save through mortgage refinancing.',
      date: 'April 3, 2026',
      author: 'RefiBreakEven Team',
      readTime: '10 min read',
    },
    {
      slug: 'when-refinancing-not-worth-it',
      title: 'When Is Refinancing Not Worth It?',
      excerpt: 'Understand the scenarios where refinancing might not be the best financial decision for your situation.',
      date: 'March 30, 2026',
      author: 'RefiBreakEven Team',
      readTime: '7 min read',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mortgage Refinancing Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert insights, tips, and guides to help you make informed refinancing decisions.
        </p>
      </div>

      {/* CTA Box */}
      <Card className="mb-12 bg-primary-light border-l-4 border-primary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Calculate Your Savings?
            </h3>
            <p className="text-gray-700">
              Use our free calculator to see exactly how much you could save.
            </p>
          </div>
          <Link href="/calculator">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors min-h-[44px] whitespace-nowrap">
              Try Calculator
            </button>
          </Link>
        </div>
      </Card>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.slug} className="hover:shadow-xl transition-shadow flex flex-col">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <Link
                href={`/blog/${article.slug}`}
                className="text-primary font-semibold hover:underline flex items-center"
              >
                Read Article <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Want to Learn More?
        </h2>
        <p className="text-gray-600 mb-6">
          Check out our comprehensive refinancing calculator for personalized insights.
        </p>
        <Link href="/calculator">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-hover transition-colors text-lg min-h-[44px]">
            Use Free Calculator
          </button>
        </Link>
      </div>
    </div>
  );
}
