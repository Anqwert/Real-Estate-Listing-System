import React, { useState } from 'react';
import styles from './mortgagecalc.module.css';

const MortgageCalc = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className={styles.mortgageCalculator}>
      <h2 className={styles.title}>Mortgage Calculator</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Principal ($)</label>
        <input type="number" className={styles.input} value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Annual Interest Rate (%)</label>
        <input type="number" className={styles.input} value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Loan Term (Years)</label>
        <input type="number" className={styles.input} value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
      </div>
      <button className={styles.button} onClick={handleCalculate}>Calculate</button>
      {monthlyPayment > 0 && (
        <div className={styles.result}>
          <h3 className={styles.resultTitle}>Monthly Payment:</h3>
          <p className={styles.resultValue}>${monthlyPayment}</p>
        </div>
        
      )}
    </div>
  );
};

export default MortgageCalc;
