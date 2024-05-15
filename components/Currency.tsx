"use client";
import React, { useState, useEffect } from "react";
import "../public/Currency.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(amount);
  const [showConverter, setShowConverter] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/5182d523b6273444e24e4a28/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate: number = parseFloat(data.conversion_rates[toCurrency]);
      setExchangeRate(rate);
    };

    fetchData();
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    const amountNumber: number = parseFloat(amount.toString());
    const converted: number = amountNumber / exchangeRate;
    setConvertedAmount(converted);
  };

  const toggleConverter = () => {
    setShowConverter(!showConverter);
  };

  const hideConverter = () => {
    setShowConverter(false);
  };

  return (
    <>
      <div className={`currency-icon ${showConverter ? 'hide' : ''}`} onClick={toggleConverter}>
        $
      </div>
      <div className={`currency-converter ${showConverter ? 'show' : ''}`}>
        <div className="header">Quy đổi tiền tệ</div>
        <div className="input-section">
          <label htmlFor="amount">Số tiền:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="dropdowns">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="VND">EUR</option>
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <button className="convert-button" onClick={handleConvert}>
          Quy đổi
        </button>
        <p className="result-text">{`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}</p>
      </div>
    </>
  );
};

export default CurrencyConverter;
