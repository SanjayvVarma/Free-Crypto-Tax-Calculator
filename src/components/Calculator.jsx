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
      <div>
        <h3>Free Crypto Tax Calculator Australia</h3>
      </div>
      <div>
        <div>
          <label>Financial Year</label>
          <select>
            <option>FY 2023-2024</option>
          </select>
        </div>
        <div>
          <label>Country</label>
          <FlagsSelect
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
            countries={["AU", "US", "GB", "IN"]}
            customLabels={{ AU: "Australia", US: "United States", IN: "India" }}
          />
        </div>
      </div>

      <div>
        <label>Enter purchase price of Crypto</label>
        <input
          type="number"
          placeholder="20,000"
          onChange={(e) => setIsPurchaseValue(e.target.value)}
        />
      </div>
      <div>
        <label>Enter sale price of Crypto</label>
        <input
          type="number"
          placeholder="30,000"
          onChange={(e) => setIsSalePrice(e.target.value)}
        />
      </div>
      <div>
        <label>Enter your Expenses</label>
        <input
          type="number"
          placeholder="5,000"
          onChange={(e) => setIsExpensePrice(e.target.value)}
        />
      </div>
      <div>
        <label>Investment Type</label>
        <div>
          <button onClick={() => handleClickButton(false)}>Short Term</button>
          <button onClick={() => handleClickButton(true)}>Long Term</button>
        </div>
      </div>
      <div>
        <label>Select Your Annual Income</label>
        <select onChange={handleTaxRateChange}>
          {
            INCOME_RANGES.map((item) => (
              <option key={item.id}>{item.range}</option>
            ))
          }
        </select>
        <p>Tax Rate: {taxValue}</p>
      </div>

      {
        isLongTerm && (
          <div>
            <label>Capital gains amount</label>
            <input
              type="number"
              readOnly value={isCapitalGains}
            />

            <label>Discount for long term gains</label>
            <input
              type="number"
              readOnly value={isDiscount}
            />
          </div>
        )
      }

      <div>
        <div>
          <p>Net Capital Gains tax amount</p>
          <h5>${isNetCapitalGains}</h5>
        </div>
        <div>
          <p>The tax you need to pay*</p>
          <h5>${istaxpayable}</h5>
        </div>
      </div>
    </div >
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