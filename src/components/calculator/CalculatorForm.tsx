'use client';

import Input from '@/components/ui/Input';

interface CalculatorFormProps {
  currentBalance: number;
  currentRate: number;
  newRate: number;
  remainingTerm: number;
  closingCosts: number;
  onInputChange: (field: string, value: number) => void;
}

export default function CalculatorForm({
  currentBalance,
  currentRate,
  newRate,
  remainingTerm,
  closingCosts,
  onInputChange,
}: CalculatorFormProps) {
  return (
    <div className="space-y-2">
      <Input
        label="Current Loan Balance"
        value={currentBalance}
        onChange={(value) => onInputChange('currentBalance', value)}
        min={50000}
        max={2000000}
        step={10000}
        prefix="$"
        helpText={`$${currentBalance.toLocaleString()}`}
      />

      <Input
        label="Current Interest Rate"
        value={currentRate}
        onChange={(value) => onInputChange('currentRate', value)}
        min={2}
        max={10}
        step={0.1}
        suffix="%"
        helpText={`${currentRate}%`}
      />

      <Input
        label="New Interest Rate"
        value={newRate}
        onChange={(value) => onInputChange('newRate', value)}
        min={2}
        max={10}
        step={0.1}
        suffix="%"
        helpText={`${newRate}%`}
      />

      <Input
        label="Remaining Loan Term"
        value={remainingTerm}
        onChange={(value) => onInputChange('remainingTerm', value)}
        min={5}
        max={30}
        step={1}
        suffix="years"
        helpText={`${remainingTerm} years`}
      />

      <Input
        label="Closing Costs"
        value={closingCosts}
        onChange={(value) => onInputChange('closingCosts', value)}
        min={1000}
        max={15000}
        step={500}
        prefix="$"
        helpText={`$${closingCosts.toLocaleString()}`}
      />
    </div>
  );
}
