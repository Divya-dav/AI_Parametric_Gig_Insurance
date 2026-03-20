const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calc-premium", async (req, res) => {
  const { income, zone } = req.body;

  try {
    const riskRes = await axios.post("http://localhost:8000/risk-score", {
      zone,
    });

    const riskScore = riskRes.data.risk_score;
    const baseRate = 50;
    const coverageFactor = 1.2;

    const premium = baseRate * riskScore * coverageFactor;

    res.json({ premium: premium.toFixed(2) });
  } catch (err) {
    res.status(500).json({ error: "AI service error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));