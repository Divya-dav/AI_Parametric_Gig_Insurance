🛡 AI-Powered Parametric Income Protection for Gig Workers
📌 Problem Statement

India’s grocery and Q-commerce delivery partners (Zepto/Blinkit-type workers) earn on a daily and weekly basis depending on completed deliveries. Their income is highly dependent on external environmental and social conditions.

Extreme weather conditions such as heavy rain, extreme heat, and severe pollution can significantly reduce deliveries or make outdoor work unsafe. Sudden zone closures or curfews can also completely stop operations.

During such disruptions, delivery partners can lose 20–30% of their weekly income. Currently, there is no structured income protection mechanism for gig workers against uncontrollable external disruptions.

This project proposes an AI-powered parametric insurance platform that provides affordable weekly income protection and automatically triggers payouts when predefined disruption conditions are met.

👤 Persona: Grocery / Q-Commerce Delivery Partner

Age: 22–35 years

Work Type: Full-time delivery partner

Income Model: Paid per delivery

Average Weekly Income: ₹2,500 – ₹3,500

Works 6–7 days per week

Key Challenges

Income instability

Weather-dependent earnings

No guaranteed minimum income

No protection against income loss

Weekly financial commitments (rent, groceries, EMIs)

Insurance Need

Affordable weekly premium

Simple onboarding

Automatic payout

No paperwork

Fast claim settlement

💰 Weekly Pricing Model
Why Weekly?

Gig workers operate on weekly earnings.

Aligns with their cash flow cycle.

Affordable and flexible.

Assumptions

Average Weekly Income = ₹3,000

Coverage = 40% income protection

Base Premium Rate = ₹50

Risk Score (AI-Based)

Each delivery zone receives a Risk Score (0–1) based on:

Rainfall frequency

Temperature trends

AQI levels

Past disruption events

Premium Formula

Weekly Premium = Base Rate × Risk Score × Coverage Factor

Example:

Base Rate = ₹50
Risk Score = 0.6
Coverage Factor = 1.2

Premium = ₹36 per week

⚡ Parametric Triggers

A parametric trigger is a predefined measurable condition. When the threshold is crossed, payout is automatically activated without manual claim filing.

1️⃣ Heavy Rain Trigger

Condition:
Rainfall > 70mm within 6 hours

Impact:
Unsafe roads and reduced delivery activity

Action:
System assumes 3 hours of income loss and auto-generates payout

2️⃣ Extreme Heat Trigger

Condition:
Temperature > 44°C for 3 consecutive hours

Impact:
Unsafe outdoor working conditions

Action:
System assumes 2 hours of income loss and triggers payout

3️⃣ Severe Pollution Trigger

Condition:
AQI > 350 (Hazardous level)

Impact:
Reduced outdoor activity

Action:
System assumes 2 hours of income loss and auto-payout

🤖 AI & Fraud Detection Integration
1️⃣ AI for Risk Assessment

Predicts disruption probability

Generates zone-based Risk Score

Enables dynamic weekly premium calculation

Uses regression or ML-based prediction models

2️⃣ AI for Predictive Disruption Modeling

Forecasts upcoming week risk

Adjusts pricing dynamically

Estimates claim volume

3️⃣ Fraud Detection Mechanisms
Location Validation

GPS compared with disruption zone

Weather Data Cross-Verification

Claim validated with official weather API

Activity Check

Ensure no deliveries completed during claimed hours

Duplicate Claim Detection

Prevent repeated payouts for same event

AI-Based Anomaly Detection

Isolation Forest

Outlier detection

Fraud Risk Score (Low/Medium/High)

🔄 Application Workflow

1️⃣ User Registration

OTP verification

Enter delivery zone & income

2️⃣ Risk Profiling

AI calculates Risk Score

Weekly premium displayed

3️⃣ Policy Activation

User pays weekly premium

Policy active for 7 days

4️⃣ Real-Time Monitoring

System monitors weather, AQI, zone APIs

5️⃣ Automatic Claim Trigger

If threshold crossed → Claim auto-generated

6️⃣ Fraud Detection

Location validation

Activity check

Anomaly detection

7️⃣ Instant Payout

Mock UPI / Razorpay sandbox

User notified of credited amount

8️⃣ Dashboards

Worker Dashboard:

Active coverage

Premium paid

Claims history

Payout summary

Admin Dashboard:

Total workers

Premium collected

Payout statistics

Fraud alerts

Predictive analytics

🛠 Tech Stack

Frontend:

React.js

Chart library (Recharts / D3.js)

Backend:

Node.js

Express.js

MongoDB

AI Service:

Python

Scikit-learn

FastAPI

APIs:

Weather API (real or mock)

AQI API (real or mock)

Mock zone status API

Payment gateway (Razorpay test mode / sandbox)

📅 6-Week Development Plan
Phase 1 – Ideation & Foundation

Define persona

Finalize pricing model

Define parametric triggers

Design architecture

Create GitHub repository

Phase 2 – Automation & Protection

Build registration system

Implement dynamic premium calculation

Integrate trigger monitoring

Auto-claim generation

Phase 3 – Scale & Optimize

Implement fraud detection

Integrate mock payout system

Build dashboards

Add predictive analytics

Final demo video and pitch deck

🎯 Project Objective

To create a scalable, AI-powered, weekly-priced parametric insurance platform that protects gig workers from income loss due to uncontrollable external disruptions, while ensuring automation, transparency, and fraud prevention