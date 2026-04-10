import Card from '@/components/ui/Card';
import { CalculatorResults } from '@/lib/calculator';
import { DollarSign, TrendingDown, PiggyBank, Calendar } from 'lucide-react';

interface ResultsDisplayProps {
  results: CalculatorResults;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Monthly Payment Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-l-4 border-red-500">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-red-500" size={24} />
            <h3 className="text-sm font-semibold text-gray-600">Old Monthly Payment</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {formatCurrency(results.oldMonthlyPayment)}
          </p>
        </Card>

        <Card className="border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-green-500" size={24} />
            <h3 className="text-sm font-semibold text-gray-600">New Monthly Payment</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {formatCurrency(results.newMonthlyPayment)}
          </p>
        </Card>
      </div>

      {/* Monthly Savings */}
      <Card className="bg-success-light border-l-4 border-success">
        <div className="flex items-center gap-3 mb-2">
          <TrendingDown className="text-success" size={28} />
          <h3 className="text-sm font-semibold text-gray-700">Monthly Savings</h3>
        </div>
        <p className="text-4xl font-bold text-success">
          {formatCurrency(results.monthlySavings)}
        </p>
        <p className="text-sm text-gray-600 mt-2">You'll save this amount every month</p>
      </Card>

      {/* Total Interest Saved */}
      <Card className="bg-primary-light border-l-4 border-primary">
        <div className="flex items-center gap-3 mb-2">
          <PiggyBank className="text-primary" size={28} />
          <h3 className="text-sm font-semibold text-gray-700">Total Interest Saved</h3>
        </div>
        <p className="text-4xl font-bold text-primary">
          {formatCurrency(results.totalInterestSaved)}
        </p>
        <p className="text-sm text-gray-600 mt-2">Over the life of the loan</p>
      </Card>

      {/* Break-Even Time */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="text-purple-500" size={28} />
          <h3 className="text-sm font-semibold text-gray-700">Break-Even Time</h3>
        </div>
        <p className="text-4xl font-bold text-purple-600">
          {results.breakEvenMonths === Infinity
            ? '∞'
            : `${Math.round(results.breakEvenMonths)} months`}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {results.breakEvenMonths === Infinity
            ? 'You will never break even with these numbers'
            : `(${results.breakEvenYears.toFixed(1)} years) to recover closing costs`}
        </p>
      </Card>
    </div>
  );
}
