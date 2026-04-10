'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import FAQSection from '@/components/seo/FAQSection';
import AdPlaceholder from '@/components/layout/AdPlaceholder';
import { Calculator, TrendingDown, BarChart3, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Calculator,
      title: 'Smart Savings Calculation',
      description: 'Get accurate monthly and total savings calculations instantly.',
    },
    {
      icon: TrendingDown,
      title: 'Break-Even Analysis',
      description: 'Know exactly when you\'ll recover your refinancing costs.',
    },
    {
      icon: BarChart3,
      title: 'Visual Graphs',
      description: 'See your savings with interactive charts and comparisons.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get comprehensive analysis in seconds, not minutes.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Enter Your Loan Details',
      description: 'Input your current mortgage balance, interest rate, and new rate options.',
    },
    {
      number: '2',
      title: 'See Instant Savings',
      description: 'Get detailed breakdown of monthly savings, total interest saved, and break-even time.',
    },
    {
      number: '3',
      title: 'Make Informed Decisions',
      description: 'Use our smart recommendations to decide if refinancing is right for you.',
    },
  ];

  const faqs = [
    {
      question: 'What is mortgage refinancing?',
      answer: 'Mortgage refinancing is the process of replacing your current mortgage with a new one, typically to get a lower interest rate, reduce monthly payments, or change the loan term. The new loan pays off the old one, and you begin making payments on the new mortgage.',
    },
    {
      question: 'How does break-even analysis work?',
      answer: 'Break-even analysis calculates how long it will take for your monthly savings to equal the closing costs of refinancing. For example, if closing costs are $5,000 and you save $200 per month, your break-even point is 25 months ($5,000 ÷ $200). If you plan to stay in your home longer than 25 months, refinancing makes financial sense.',
    },
    {
      question: 'Is refinancing worth it in 2026?',
      answer: 'Refinancing can be worthwhile in 2026 if current rates are significantly lower than your existing rate (typically 1% or more), you plan to stay in your home past the break-even point, and you can afford the closing costs. Use our mortgage refinance calculator to see your specific situation and get personalized recommendations.',
    },
    {
      question: 'What are closing costs?',
      answer: 'Closing costs are fees associated with finalizing your new mortgage, typically ranging from 2% to 6% of the loan amount. They include application fees, appraisal fees, title insurance, attorney fees, and other charges. These costs are factored into the break-even calculation.',
    },
    {
      question: 'Should I refinance to a shorter term?',
      answer: 'Refinancing to a shorter term (like 30 to 15 years) typically offers lower interest rates and saves more on total interest, but monthly payments may be higher. Consider your cash flow, long-term goals, and how long you plan to stay in the home before deciding.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Free Mortgage Refinance Calculator
            <br />
            Save $50,000+ with Break-Even Analysis
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Trusted by 100,000+ homeowners in USA, UK & Canada.
            Find out if refinancing saves you thousands in minutes.
          </p>
          <Link href="/calculator">
            <Button
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-blue-50"
            >
              Calculate Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Ad After Hero Section */}
      <div className="max-w-6xl mx-auto px-4">
        <AdPlaceholder slot="home-after-hero" format="horizontal" />
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Use RefiBreakEven?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <feature.icon className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Between Features and Geo Sections */}
      <div className="max-w-6xl mx-auto px-4">
        <AdPlaceholder slot="home-features-geo" format="horizontal" />
      </div>

      {/* Geo-Targeted Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Mortgage Refinancing Guide by Country (2026)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* USA Section */}
            <Card className="hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="text-2xl font-bold mb-3">Refinancing in the USA</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Average mortgage rate: 6.5-7.5% | Typical closing costs: 2-6%
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>✓ Conventional loans: 620+ credit score</li>
                <li>✓ FHA streamline refinancing available</li>
                <li>✓ VA loans: No PMI required for veterans</li>
                <li>✓ Popular: 30-year fixed mortgages</li>
              </ul>
              <Link href="/calculator" className="text-primary font-semibold hover:underline block">
                Calculate USA Savings →
              </Link>
            </Card>

            {/* UK Section */}
            <Card className="hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="text-2xl font-bold mb-3">Remortgaging in the UK</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Average mortgage rate: 5-6% | Typical fees: £1,000-£2,500
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>✓ Remortgaging: Switch lender or product</li>
                <li>✓ Early repayment charges may apply</li>
                <li>✓ Help to Buy schemes available</li>
                <li>✓ Popular: 2-year & 5-year fixed deals</li>
              </ul>
              <Link href="/calculator" className="text-primary font-semibold hover:underline block">
                Calculate UK Savings →
              </Link>
            </Card>

            {/* Canada Section */}
            <Card className="hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🇨🇦</div>
              <h3 className="text-2xl font-bold mb-3">Refinancing in Canada</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Average mortgage rate: 5.5-6.5% | Typical costs: CAD 1,500-3,000
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>✓ Stress test requirement: 5.25% minimum</li>
                <li>✓ Max 80% LTV for refinancing</li>
                <li>✓ Fixed vs variable options</li>
                <li>✓ Popular: 5-year fixed mortgages</li>
              </ul>
              <Link href="/calculator" className="text-primary font-semibold hover:underline block">
                Calculate Canada Savings →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to See Your Savings?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of homeowners who've used RefiBreakEven to make smarter refinancing decisions.
          </p>
          <Link href="/calculator">
            <Button className="text-lg px-8 py-4">
              Start Calculating
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Learn More About Refinancing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I refinance my mortgage in 2026?
              </h3>
              <p className="text-gray-600 mb-4">
                Discover if current market conditions make it the right time to refinance your mortgage and save money.
              </p>
              <Link href="/blog/should-i-refinance-mortgage-2026" className="text-primary font-semibold hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much can you save by refinancing?
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about potential savings and factors that affect how much money you can save through refinancing.
              </p>
              <Link href="/blog/how-much-save-refinancing" className="text-primary font-semibold hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When is refinancing not worth it?
              </h3>
              <p className="text-gray-600 mb-4">
                Understand the scenarios where refinancing might not be the best financial decision for you.
              </p>
              <Link href="/blog/when-refinancing-not-worth-it" className="text-primary font-semibold hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Before FAQ Section */}
      <div className="max-w-6xl mx-auto px-4">
        <AdPlaceholder slot="home-before-faq" format="horizontal" />
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Get Notified When Mortgage Rates Drop
          </h2>
          <p className="text-gray-700 mb-6">
            Join 10,000+ homeowners who receive our weekly rate updates and refinancing tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none min-h-[44px]"
              required
            />
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors min-h-[44px]">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Smarter Refinancing Decisions Today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our free calculator helps you understand the true cost and benefits of refinancing.
          </p>
          <Link href="/calculator">
            <Button
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-blue-50"
            >
              Try the Calculator
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
