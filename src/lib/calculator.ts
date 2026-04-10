export interface CalculatorInputs {
  currentBalance: number;
  currentRate: number;
  newRate: number;
  remainingTerm: number;
  closingCosts: number;
}

export interface CalculatorResults {
  oldMonthlyPayment: number;
  newMonthlyPayment: number;
  monthlySavings: number;
  totalInterestOld: number;
  totalInterestNew: number;
  totalInterestSaved: number;
  breakEvenMonths: number;
  breakEvenYears: number;
  recommendation: 'beneficial' | 'not-recommended';
  recommendationText: string;
}

/**
 * Calculate monthly mortgage payment
 * Formula: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
 */
export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  if (principal <= 0 || annualRate <= 0 || years <= 0) return 0;
  
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
  
  return principal * (numerator / denominator);
}

/**
 * Calculate total interest paid over the life of the loan
 */
export function calculateTotalInterest(
  monthlyPayment: number,
  years: number,
  principal: number
): number {
  const totalPayments = monthlyPayment * years * 12;
  return totalPayments - principal;
}

/**
 * Main calculator function
 */
export function calculateRefinance(inputs: CalculatorInputs): CalculatorResults {
  const { currentBalance, currentRate, newRate, remainingTerm, closingCosts } = inputs;

  // Calculate monthly payments
  const oldMonthlyPayment = calculateMonthlyPayment(currentBalance, currentRate, remainingTerm);
  const newMonthlyPayment = calculateMonthlyPayment(currentBalance, newRate, remainingTerm);

  // Calculate monthly savings
  const monthlySavings = oldMonthlyPayment - newMonthlyPayment;

  // Calculate total interest for both loans
  const totalInterestOld = calculateTotalInterest(oldMonthlyPayment, remainingTerm, currentBalance);
  const totalInterestNew = calculateTotalInterest(newMonthlyPayment, remainingTerm, currentBalance);

  // Calculate total interest saved
  const totalInterestSaved = totalInterestOld - totalInterestNew;

  // Calculate break-even point
  const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : Infinity;
  const breakEvenYears = breakEvenMonths / 12;

  // Determine recommendation
  const remainingTermMonths = remainingTerm * 12;
  const isBeneficial = breakEvenMonths < remainingTermMonths && monthlySavings > 0;

  const recommendation = isBeneficial ? 'beneficial' : 'not-recommended';
  const recommendationText = isBeneficial
    ? 'Refinancing is Beneficial ✅'
    : 'Not Recommended ❌';

  return {
    oldMonthlyPayment,
    newMonthlyPayment,
    monthlySavings,
    totalInterestOld,
    totalInterestNew,
    totalInterestSaved,
    breakEvenMonths,
    breakEvenYears,
    recommendation,
    recommendationText,
  };
}

/**
 * Generate data for line chart (cost over time)
 */
export function generateLineChartData(inputs: CalculatorInputs) {
  const { currentBalance, currentRate, newRate, remainingTerm, closingCosts } = inputs;
  const months = remainingTerm * 12;
  
  const oldMonthlyPayment = calculateMonthlyPayment(currentBalance, currentRate, remainingTerm);
  const newMonthlyPayment = calculateMonthlyPayment(currentBalance, newRate, remainingTerm);

  const data = [];
  let oldCumulativeCost = 0;
  let newCumulativeCost = closingCosts; // Include closing costs upfront

  for (let month = 0; month <= months; month += 6) { // Every 6 months for performance
    oldCumulativeCost += oldMonthlyPayment * 6;
    newCumulativeCost += newMonthlyPayment * 6;

    data.push({
      month: `Month ${month}`,
      'Old Loan Cost': Math.round(oldCumulativeCost),
      'New Loan Cost': Math.round(newCumulativeCost),
    });
  }

  return data;
}

/**
 * Generate data for bar chart (interest comparison)
 */
export function generateBarChartData(inputs: CalculatorInputs) {
  const { currentBalance, currentRate, newRate, remainingTerm } = inputs;
  
  const oldMonthlyPayment = calculateMonthlyPayment(currentBalance, currentRate, remainingTerm);
  const newMonthlyPayment = calculateMonthlyPayment(currentBalance, newRate, remainingTerm);

  const oldInterest = calculateTotalInterest(oldMonthlyPayment, remainingTerm, currentBalance);
  const newInterest = calculateTotalInterest(newMonthlyPayment, remainingTerm, currentBalance);

  return [
    { name: 'Old Loan', interest: Math.round(oldInterest) },
    { name: 'New Loan', interest: Math.round(newInterest) },
  ];
}

/**
 * Generate data for pie chart (payment breakdown)
 */
export function generatePieChartData(inputs: CalculatorInputs) {
  const { currentBalance, newRate, remainingTerm } = inputs;
  
  const newMonthlyPayment = calculateMonthlyPayment(currentBalance, newRate, remainingTerm);
  const monthlyRate = newRate / 100 / 12;
  const monthlyInterest = currentBalance * monthlyRate;
  const monthlyPrincipal = newMonthlyPayment - monthlyInterest;

  return [
    { name: 'Principal', value: Math.round(monthlyPrincipal) },
    { name: 'Interest', value: Math.round(monthlyInterest) },
  ];
}
