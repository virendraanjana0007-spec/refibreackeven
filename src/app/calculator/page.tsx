'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import ResultsDisplay from '@/components/calculator/ResultsDisplay';
import Recommendation from '@/components/calculator/Recommendation';
import AdPlaceholder from '@/components/layout/AdPlaceholder';
import {
  calculateRefinance,
  generateLineChartData,
  generateBarChartData,
  generatePieChartData,
  CalculatorInputs,
} from '@/lib/calculator';

// Lazy load charts for better performance
const CustomLineChart = dynamic(() => import('@/components/charts/LineChart'), {
  ssr: false,
  loading: () => <div className="h-[300px] md:h-[400px] bg-gray-100 rounded-lg animate-pulse" />,
});

const CustomBarChart = dynamic(() => import('@/components/charts/BarChart'), {
  ssr: false,
  loading: () => <div className="h-[300px] md:h-[400px] bg-gray-100 rounded-lg animate-pulse" />,
});

const CustomPieChart = dynamic(() => import('@/components/charts/PieChart'), {
  ssr: false,
  loading: () => <div className="h-[300px] md:h-[400px] bg-gray-100 rounded-lg animate-pulse" />,
});

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentBalance: 300000,
    currentRate: 6.5,
    newRate: 5.5,
    remainingTerm: 25,
    closingCosts: 5000,
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const results = useMemo(() => {
    return calculateRefinance(inputs);
  }, [inputs]);

  const lineChartData = useMemo(() => generateLineChartData(inputs), [inputs]);
  const barChartData = useMemo(() => generateBarChartData(inputs), [inputs]);
  const pieChartData = useMemo(() => generatePieChartData(inputs), [inputs]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mortgage Refinance Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Calculate your savings and find your break-even point
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Form - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
            <CalculatorForm
              currentBalance={inputs.currentBalance}
              currentRate={inputs.currentRate}
              newRate={inputs.newRate}
              remainingTerm={inputs.remainingTerm}
              closingCosts={inputs.closingCosts}
              onInputChange={handleInputChange}
            />

            <Button
              onClick={handleCalculate}
              className="w-full text-lg"
            >
              Calculate Savings
            </Button>
          </Card>
        </div>

        {/* Right Sidebar - Ad Space */}
        <div className="hidden lg:flex flex-col gap-6">
          <AdPlaceholder slot="calculator-sidebar-top" format="rectangle" className="my-0" />
          <AdPlaceholder slot="calculator-sidebar-bottom" format="rectangle" className="my-0" />
        </div>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              {/* Ad Between Inputs and Results */}
              <AdPlaceholder slot="calculator-top" format="horizontal" />

              <ResultsDisplay results={results} />

              {/* Recommendation */}
              <Recommendation
                recommendation={results.recommendation}
                recommendationText={results.recommendationText}
                breakEvenMonths={results.breakEvenMonths}
                remainingTermMonths={inputs.remainingTerm * 12}
              />

              {/* Ad Below Results */}
              <AdPlaceholder slot="calculator-bottom" format="horizontal" />
            </div>

            {/* Right Sidebar Ads for Results */}
            <div className="hidden lg:flex flex-col gap-6">
              <AdPlaceholder slot="calculator-sidebar-results" format="rectangle" className="my-0" />
            </div>
          </div>
        </div>
      )}

      {/* Charts Section */}
      {showResults && (
        <div className="mt-12 space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Visual Analysis
          </h2>

          {/* Line Chart */}
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Cost Over Time Comparison
            </h3>
            <CustomLineChart data={lineChartData} />
          </Card>

          {/* Bar Chart */}
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Total Interest Comparison
            </h3>
            <CustomBarChart data={barChartData} />
          </Card>

          {/* Pie Chart */}
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Monthly Payment Breakdown (New Loan)
            </h3>
            <CustomPieChart data={pieChartData} />
          </Card>
        </div>
      )}

      {/* Mobile Sticky Button */}
      {!showResults && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden z-50">
          <Button onClick={handleCalculate} className="w-full text-lg">
            Calculate Savings
          </Button>
        </div>
      )}
    </div>
  );
}
