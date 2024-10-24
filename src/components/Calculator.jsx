import React, { useState, useEffect } from "react";
import FlagsSelect from "react-flags-select";
import INCOME_RANGES from '../assets/incomeRange'

const Calculator = () => {
  const [isLongTerm, setIsLongTerm] = useState(false);
  const [isShortTerm, setIsShortTerm] = useState(true);
  const [taxValue, setTaxValue] = useState("0%");
  const [showlongTerm, setShowlongTerm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("AU");
  const [isPurchaseValue, setIsPurchaseValue] = useState("");
  const [isSaleprice, setIsSalePrice] = useState("");
  const [isExpensePrice, setIsExpensePrice] = useState("");
  const [isNetCapitalGains, setIsNetCapitalGains] = useState("0");
  const [isCapitalGains, setIsCapitalGains] = useState("");
  const [istaxpayable, setIstaxPayable] = useState(0);
  const [istaxPercentage, setTaxPercentage] = useState(0);
  const [isDiscount, setIsDiscount] = useState("");

  const handleTaxRateChange = (e) => {

    const selectedRange = e.target.value;
    const TaxRange = INCOME_RANGES.find(
      (range) => selectedRange === range.range
    );

    setTaxValue(TaxRange.taxRate);
    setTaxPercentage(TaxRange.TaxPercentage);
  };

  const handleClickButton = (e) => {
    setIsLongTerm(e);
    setIsShortTerm(!e);
    setShowlongTerm(e);
  };

  useEffect(() => {
    if (isPurchaseValue !== "" && isSaleprice !== "" && isExpensePrice !== "") {
      const capitalgains = isSaleprice - isPurchaseValue - isExpensePrice;

      if (capitalgains < 0) {
        setIsNetCapitalGains(capitalgains);
        setIstaxPayable(0);

      } else if (isShortTerm) {
        setIsNetCapitalGains(capitalgains);
        setIstaxPayable(capitalgains * istaxPercentage);

      } else if (isLongTerm) {
        setIsCapitalGains(capitalgains);
        const discount = 0.5 * capitalgains;
        setIsDiscount(discount);
        const netCapitalGains = capitalgains - discount;
        setIsNetCapitalGains(netCapitalGains);
        setIstaxPayable(netCapitalGains * istaxPercentage);

      }
    }
  }, [isShortTerm, isSaleprice, isPurchaseValue, isExpensePrice, istaxPercentage, isLongTerm, isCapitalGains, isDiscount]);


  return (
    <div className="main-container">
      <div className="cal-name">
        <h1>Free Crypto Tax Calculator Australia</h1>
      </div>
      <div className="fin-coun">
        <div className="fin-year">
          <label>Financial Year</label>
          <select>
            <option>FY 2023-2024</option>
          </select>
        </div>
        <div className="country">
          <label>Country</label>
          <FlagsSelect
            className="sel-country"
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
            countries={["AU", "US", "GB", "IN"]}
            customLabels={{ AU: "Australia", US: "United States", IN: "India" }}
          />
        </div>
      </div>
      <div className="line"></div>
      <div className="input-container">
        <div className="input-box">
          <label className="price-label">Enter purchase price of Crypto</label>
          <div className="input-group">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              placeholder="20,000"
              onChange={(e) => setIsPurchaseValue(e.target.value)}
              className="purchase-input"
            />
          </div>
        </div>

        <div className="input-box">
          <label className="price-label">Enter sale price of Crypto</label>
          <div className="input-group">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              placeholder="30,000"
              onChange={(e) => setIsSalePrice(e.target.value)}
              className="purchase-input"
            />
          </div>
        </div>

        <div className="input-box">
          <label className="price-label">Enter your Expenses</label>
          <div className="input-group">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              placeholder="5,000"
              onChange={(e) => setIsExpensePrice(e.target.value)}
              className="purchase-input"
            />
          </div>
        </div>

        <div className="investment-container">
          <label className="investment-label">Investment Type</label>
          <div className="button-group">
            <div className="button-wrapper">
              <button
                className={`investment-button short-term ${isShortTerm ? 'active' : ''}`}
                onClick={() => handleClickButton(false)}
              >
                Short Term
                {isShortTerm && <span className="checkmark">✓</span>}
              </button>
              <p className="duration-text"> &#60; 12 Months</p>
            </div>
            <div className="button-wrapper">
              <button
                className={`investment-button long-term ${isLongTerm ? 'active' : ''}`}
                onClick={() => handleClickButton(true)}
              >
                Long Term
                {isLongTerm && <span className="checkmark">✓</span>}
              </button>
              <p className="duration-text"> &#62; 12 Months</p>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label className="price-label">Select Your Annual Income</label>
          <div className="input-group">
            <select onChange={handleTaxRateChange} className="income-select">
              {INCOME_RANGES.map((item) => (
                <option key={item.id}>{item.range}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="input-box">
          <label className="price-label">Tax Rate :</label>
          <div className="taxRate">
            <p>{taxValue}</p>
          </div>
        </div>

        <div>
          {
            isLongTerm && (
              <div className="input-box">
                <label className="price-label">Capital gains amount</label>
                <div className="input-group">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    placeholder="5,000"
                    readOnly value={isCapitalGains}
                    className="purchase-input"
                  />
                </div>
              </div>
            )
          }
        </div>

        <div>
          {isLongTerm && (
            <div className="input-box">
              <label className="price-label">Discount for long term gains</label>
              <div className="input-group">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  placeholder="2,500"
                  readOnly value={isDiscount}
                  className="purchase-input"
                />
              </div>
            </div>
          )}
        </div>

        <div className="result">
          <div className="box green-text">
            <p>Net Capital Gains tax amount</p>
            <h5>&#36;{isNetCapitalGains}</h5>
          </div>
        </div>
        <div className="result">
          <div className="box blue-text">
            <p>The tax you need to pay*</p>
            <h5>&#36;{istaxpayable}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;




{/* <div style={{ margin: "8px 0", backgroundColor: "#EFF2F5", padding: "8px" }}>
<label htmlFor="purchase-price" style={{ display: "flex", alignItems: "center" }}>
  <span style={{ marginRight: "4px" }}>$</span>
  <input
    type="text"
    id="purchase-price"
    placeholder="30,000"
    onInput={handlePurchaseChange}
    style={{ border: "none", outline: "none", background: "none" }}
  />
</label>
</div> */}