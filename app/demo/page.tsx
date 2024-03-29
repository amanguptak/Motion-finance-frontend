"use client"
import React, { useState } from 'react';

function App() {
  const [grossIncome, setGrossIncome] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const [hra, setHra] = useState<number>(0);
  const [otherExemptions, setOtherExemptions] = useState<number>(0);
  const [ageGroup, setAgeGroup] = useState<string>('below60');
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);

  const calculateTax = () => {
    let taxableIncome = (grossIncome - hra )- deductions - otherExemptions;
    taxableIncome = taxableIncome > 0 ? taxableIncome : 0; // Ensure taxable income is not negative
    let tax: number = 0;

    if (ageGroup === 'below60') {
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.2;
      else tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }
    // Additional age groups and tax slabs logic can be added here

    setCalculatedTax(tax);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tax Calculator</h2>
        
        {/* Gross Total Income */}
        <div className="mb-3">
          <label className="block text-gray-700">Gross Total Income:</label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="number"
            value={grossIncome.toString()}
            onChange={(e) => setGrossIncome(Number(e.target.value))}
          />
        </div>
        
        {/* Deductions */}
        <div className="mb-3">
          <label className="block text-gray-700">Deductions:</label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="number"
            value={deductions.toString()}
            onChange={(e) => setDeductions(Number(e.target.value))}
          />
        </div>
        
        {/* House Rent Allowance */}
        <div className="mb-3">
          <label className="block text-gray-700">House Rent Allowance (HRA):</label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="number"
            value={hra.toString()}
            onChange={(e) => setHra(Number(e.target.value))}
          />
        </div>
        
        {/* Other Exemptions */}
        <div className="mb-3">
          <label className="block text-gray-700">Other Exemptions:</label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="number"
            value={otherExemptions.toString()}
            onChange={(e) => setOtherExemptions(Number(e.target.value))}
          />
        </div>
        
        {/* Age Group */}
        <div className="mb-4">
          <label className="block text-gray-700">Age Group:</label>
          <select
            className="mt-1 p-2 w-full border rounded-md bg-white"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          >
            <option value="below60">Below 60</option>
            <option value="60to80">60 to 80</option>
            <option value="above80">Above 80</option>
          </select>
        </div>
        
        {/* Calculate Tax Button */}
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none"
          onClick={calculateTax}
        >
          Calculate Tax
        </button>
        
        {/* Calculated Tax Display */}
        {calculatedTax !== null && <h3 className="mt-4">Calculated Tax: {calculatedTax}</h3>}
      </div>
    </div>
  );
}

export default App;
