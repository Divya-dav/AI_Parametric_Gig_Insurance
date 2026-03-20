import React, { useState } from "react";
import axios from "axios";

function App() {
  const [income, setIncome] = useState("");
  const [zone, setZone] = useState("");
  const [premium, setPremium] = useState(null);

  const calculatePremium = async () => {
    const res = await axios.post("http://localhost:5000/calc-premium", {
      income,
      zone,
    });
    setPremium(res.data.premium);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Gig Worker Insurance</h2>

      <input
        placeholder="Weekly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Delivery Zone"
        value={zone}
        onChange={(e) => setZone(e.target.value)}
      />
      <br /><br />

      <button onClick={calculatePremium}>Calculate Premium</button>

      {premium && <h3>Weekly Premium: ₹{premium}</h3>}
    </div>
  );
}

export default App;