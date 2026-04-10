import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About RefiBreakEven - Free Mortgage Refinance Calculator Tool (2026)',
  description: 'Learn about RefiBreakEven\'s mission to help homeowners in USA, UK & Canada make informed refinancing decisions through free, accurate calculators.',
  alternates: {
    canonical: 'https://refibreakEven.com/about'
  },
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About RefiBreakEven
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Our mission is to provide free, accurate mortgage refinancing tools that help homeowners make informed financial decisions.
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Why We Built This Tool
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Refinancing decisions can save or cost homeowners tens of thousands of dollars. Yet, many people struggle to understand the true costs and benefits of refinancing their mortgage. Complex formulas, hidden fees, and confusing break-even calculations make it difficult to know if refinancing is the right choice.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We built RefiBreakEven to solve this problem. Our free calculator provides instant, accurate results with clear explanations and smart recommendations. Whether you're in the USA, UK, or Canada, our tool helps you understand:
        </p>

        <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
          <li>How much you could save monthly and over the life of your loan</li>
          <li>Exactly when you'll break even on closing costs</li>
          <li>Whether refinancing makes financial sense for your situation</li>
          <li>Visual comparisons of your current vs. new loan</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Our Approach
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          We use industry-standard mortgage amortization formulas—the same ones banks and lenders use—to calculate your payments and savings. Our calculator accounts for:
        </p>

        <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
          <li><strong>Principal & Interest:</strong> Accurate monthly payment calculations using the standard amortization formula</li>
          <li><strong>Closing Costs:</strong> Real-world fees that impact your break-even timeline</li>
          <li><strong>Interest Rate Differentials:</strong> How rate changes affect your total savings</li>
          <li><strong>Loan Term Impact:</strong> The effect of extending or shortening your repayment period</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          We believe in transparency. That's why we show you all the numbers—monthly payments, total interest, break-even timelines—so you can make truly informed decisions.
        </p>

        {/* Disclaimer Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <h3 className="font-bold text-yellow-800 mb-2">Important Disclaimer</h3>
          <p className="text-yellow-900 text-sm leading-relaxed">
            <strong>This tool is for educational purposes only and does not constitute financial advice.</strong> 
            The calculations provided are estimates based on the information you enter. Actual loan terms, rates, and costs may vary based on your credit profile, lender requirements, and market conditions. 
            Always consult with a qualified financial advisor or licensed mortgage professional before making refinancing decisions.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Who We Help
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          RefiBreakEven serves homeowners across multiple countries:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <Card className="bg-blue-50">
            <h4 className="font-bold text-lg mb-2">🇺🇸 USA Homeowners</h4>
            <p className="text-sm text-gray-700">
              Conventional, FHA, VA, and USDA loan refinancing calculations with typical US closing costs and rate structures.
            </p>
          </Card>

          <Card className="bg-green-50">
            <h4 className="font-bold text-lg mb-2">🇬🇧 UK Homeowners</h4>
            <p className="text-sm text-gray-700">
              Remortgaging calculations with UK-specific fees, early repayment charges, and typical fixed-rate deal structures.
            </p>
          </Card>

          <Card className="bg-red-50">
            <h4 className="font-bold text-lg mb-2">🇨🇦 Canadian Homeowners</h4>
            <p className="text-sm text-gray-700">
              Canadian mortgage refinancing with stress test considerations, LTV limits, and typical CAD closing costs.
            </p>
          </Card>
        </div>

        {/* Author Box */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          About the Team
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg my-8 flex items-start gap-4">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            RB
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">RefiBreakEven Team</h3>
            <p className="text-sm text-gray-600 mb-3">
              Financial education specialists with 10+ years analyzing mortgage trends in USA, UK, and Canada.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our team combines expertise in financial analysis, real estate economics, and user experience design to create tools that truly help homeowners. We've helped over 100,000 people make smarter refinancing decisions through accurate calculations and clear guidance.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Our Commitment
        </h2>

        <ul className="list-disc pl-8 mb-6 space-y-3 text-gray-700">
          <li><strong>Free Forever:</strong> Our calculator will always be free to use. No hidden fees, no premium tiers.</li>
          <li><strong>Accurate & Up-to-Date:</strong> We continuously verify our formulas against industry standards.</li>
          <li><strong>Privacy-First:</strong> We don't store your personal data or sell your information.</li>
          <li><strong>Unbiased:</strong> We don't recommend specific lenders or products. Our goal is to help you make informed decisions.</li>
          <li><strong>User-Focused:</strong> We design for clarity and simplicity, not complexity.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Get Started
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Ready to see if refinancing makes sense for you? Use our free calculator to get instant results with personalized recommendations.
        </p>

        <Card className="bg-primary-light border-l-4 border-primary my-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Try Our Free Mortgage Refinance Calculator
          </h3>
          <p className="text-gray-700 mb-4">
            Calculate your savings, break-even point, and get smart recommendations in 60 seconds.
          </p>
          <Link href="/calculator" className="text-primary font-semibold hover:underline flex items-center">
            Start Calculating →
          </Link>
        </Card>
      </div>
    </article>
  );
}
