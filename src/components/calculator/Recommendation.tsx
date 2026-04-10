import Card from '@/components/ui/Card';
import { CheckCircle, XCircle } from 'lucide-react';

interface RecommendationProps {
  recommendation: 'beneficial' | 'not-recommended';
  recommendationText: string;
  breakEvenMonths: number;
  remainingTermMonths: number;
}

export default function Recommendation({
  recommendation,
  recommendationText,
  breakEvenMonths,
  remainingTermMonths,
}: RecommendationProps) {
  const isBeneficial = recommendation === 'beneficial';

  return (
    <Card
      className={`border-l-4 ${
        isBeneficial
          ? 'bg-green-50 border-green-500'
          : 'bg-red-50 border-red-500'
      }`}
    >
      <div className="flex items-start gap-4">
        {isBeneficial ? (
          <CheckCircle className="text-green-500 flex-shrink-0" size={32} />
        ) : (
          <XCircle className="text-red-500 flex-shrink-0" size={32} />
        )}
        
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-2 ${
            isBeneficial ? 'text-green-700' : 'text-red-700'
          }`}>
            {recommendationText}
          </h3>
          
          <p className="text-gray-700 mb-3">
            {isBeneficial
              ? `Great news! You'll break even in ${Math.round(breakEvenMonths)} months (${(breakEvenMonths / 12).toFixed(1)} years), which is well within your remaining loan term of ${Math.round(remainingTermMonths / 12)} years. Refinancing will save you money in the long run.`
              : breakEvenMonths === Infinity
              ? 'Based on these numbers, refinancing would not result in any monthly savings. The new monthly payment is higher than or equal to your current payment.'
              : `The break-even period of ${Math.round(breakEvenMonths)} months (${(breakEvenMonths / 12).toFixed(1)} years) is longer than your remaining loan term of ${Math.round(remainingTermMonths / 12)} years. You won't recover the closing costs before the loan ends.`}
          </p>

          {isBeneficial && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600 mb-2 font-semibold">Why this makes sense:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Your break-even time is reasonable</li>
                <li>✓ You'll save money over the life of the loan</li>
                <li>✓ Lower monthly payment improves cash flow</li>
              </ul>
            </div>
          )}

          {!isBeneficial && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600 mb-2 font-semibold">Consider:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Waiting for better interest rates</li>
                <li>• Negotiating lower closing costs</li>
                <li>• Extending the loan term to reduce payments</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
