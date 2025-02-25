import React, { useState } from "react";
import "./css/Calculators.css";
import img from "./images/calculator.png";

function Calculators() {
  // EMI Calculator
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [emi, setEmi] = useState("");
  const [interestAmount , setInterestAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const calculateEMI = (e) => {
    e.preventDefault();
    if (loanAmount && tenure && interestRate) {
      const R = interestRate / 12 /100 ; 
      console.log(R)// Monthly interest rate
      const emiValue =
        (loanAmount * R * Math.pow(1 + R, tenure)) /
        (Math.pow(1 + R, tenure) - 1);
      setEmi(Math.ceil(emiValue));
      const totalAmount = emiValue * tenure;
      const interest = totalAmount - loanAmount;
      setInterestAmount(Math.ceil(interest));
      setTotalAmount(Math.ceil(totalAmount));
    } else {
      alert("Please enter all values");
    }
  };

  const clearValues = () => {
    setLoanAmount("");
    setTenure("");
    setInterestRate("");
    setEmi("");
    setInterestAmount("");
    setTotalAmount("");
  };

  // Area Conversion
  const [area, setArea] = useState({
    acre: '',
    vigha: '',
    sqFeet: '',
    sqMeter: '',
    sqYard: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArea({
      acre: '',
      vigha: '',
      sqFeet: '',
      sqMeter: '',
      sqYard: '',
      [name]: value
    });
  };

  const calculateArea = () => {
    let { acre, vigha, sqFeet, sqMeter, sqYard } = area;

    if (acre) {
      acre = parseFloat(acre);
      setArea({
        acre,
        vigha: (acre * 32).toFixed(5),
        sqFeet: (acre * 43560).toFixed(5),
        sqMeter: (acre * 4046.8564224).toFixed(5),
        sqYard: (acre * 4840).toFixed(5),
      });
    } else if (vigha) {
      vigha = parseFloat(vigha);
      acre = vigha / 32;
      setArea({
        acre: acre.toFixed(5),
        vigha,
        sqFeet: (acre * 43560).toFixed(5),
        sqMeter: (acre * 4046.8564224).toFixed(5),
        sqYard: (acre * 4840).toFixed(5),
      });
    } else if (sqFeet) {
      sqFeet = parseFloat(sqFeet);
      acre = sqFeet / 43560;
      setArea({
        acre: acre.toFixed(5),
        vigha: (acre * 32).toFixed(5),
        sqFeet,
        sqMeter: (acre * 4046.8564224).toFixed(5),
        sqYard: (acre * 4840).toFixed(5),
      });
    } else if (sqMeter) {
      sqMeter = parseFloat(sqMeter);
      acre = sqMeter / 4046.8564224;
      setArea({
        acre: acre.toFixed(5),
        vigha: (acre * 32).toFixed(5),
        sqFeet: (acre * 43560).toFixed(5),
        sqMeter,
        sqYard: (acre * 4840).toFixed(5),
      });
    } else if (sqYard) {
      sqYard = parseFloat(sqYard);
      acre = sqYard / 4840;
      setArea({
        acre: acre.toFixed(5),
        vigha: (acre * 32).toFixed(5),
        sqFeet: (acre * 43560).toFixed(5),
        sqMeter: (acre * 4046.8564224).toFixed(5),
        sqYard,
      });
    }
  };

  const clearValues2 = () => {
    setArea({
      acre: '',
      vigha: '',
      sqFeet: '',
      sqMeter: '',
      sqYard: ''
    });
  };

  return (
    <section className="calculators">
      <div className="property-img">
        <img src={img} alt="property" />
        <div className="property-header">
          <span className="highlight1">HOME / CALCULATORS</span>
          <span className="highlight2">CALCULATORS</span>
        </div>
      </div>
      <div className="calculator">
        <h2>EMI Calculator</h2>
        <form onSubmit={calculateEMI}>
          <div className="form-group">
            <label>Loan Amount</label>
            <input
              type="number"
              min={1}
              placeholder="Loan Amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Tenure in months</label>
            <input
              type="number"
              min={1}
              placeholder="Tenure in months"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Yearly rate of interest(%)</label>
            <input
              type="number"
              min={1}
              placeholder="Yearly rate of interest"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>EMI</label>
            <input type="text" placeholder="EMI" value={emi} readOnly />
          </div>
          <div className="form-group">
            <label>Interest Amount</label>
            <input type="text" placeholder="EMI" value={interestAmount} readOnly />
          </div>
          <div className="form-group">
            <label>Total Amount Payable</label>
            <input type="text" placeholder="EMI" value={totalAmount} readOnly />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={clearValues} className="clear-btn">
              Clear Values
            </button>
            <button type="submit" className="calculate-btn">
              Calculate
            </button>
          </div>
        </form>
      </div>
      <div className="calculator">
      <h2>Area Conversion</h2>
      <div className="form-group">
        <label>Acre</label>
        <input 
          type="number" 
          name="acre" 
          value={area.acre} 
          onChange={handleInputChange} 
          placeholder="Area in Acre" 
        />
      </div>
      <div className="form-group">
        <label>Vigha</label>
        <input 
          type="number" 
          name="vigha" 
          value={area.vigha} 
          onChange={handleInputChange} 
          placeholder="Area in Vigha" 
        />
      </div>
      <div className="form-group">
        <label>Square Feet</label>
        <input 
          type="number" 
          name="sqFeet" 
          value={area.sqFeet} 
          onChange={handleInputChange} 
          placeholder="Area in Square Feet" 
        />
      </div>
      <div className="form-group">
        <label>Square Meter</label>
        <input 
          type="number" 
          name="sqMeter" 
          value={area.sqMeter} 
          onChange={handleInputChange} 
          placeholder="Area in Square Meter" 
        />
      </div>
      <div className="form-group">
        <label>Square Yard</label>
        <input 
          type="number" 
          name="sqYard" 
          value={area.sqYard} 
          onChange={handleInputChange} 
          placeholder="Area in Square Yard" 
        />
      </div>
      <div className="form-buttons">
        <button className="clear-btn" onClick={clearValues2}>Clear Values</button>
        <button className="calculate-btn" onClick={calculateArea}>Calculate</button>
      </div>
    </div>
    </section>
  );
}

export default Calculators;
