# AI-Parametric-Gig-Insurance 
🛡 AI-Powered Parametric Income Protection for Gig  Workers                                                                   
                                 ** 📌 Problem Statement ** 
India’s grocery and Q-commerce delivery partners (Zepto/Blinkit-type workers) earn on a daily and weekly basis depending on completed deliveries. Their income is highly dependent on external environmental and social conditions.

Extreme weather conditions such as heavy rain, extreme heat, and severe pollution can significantly reduce deliveries or make outdoor work unsafe. Sudden zone closures or curfews can also completely stop operations. 

During such disruptions, delivery partners can lose 20–30% of their weekly income. Currently, there is no structured income protection mechanism for gig workers against uncontrollable external disruptions. 

This project proposes an AI-powered parametric insurance platform that provides affordable weekly income protection and automatically triggers payouts when predefined disruption conditions are met.

                                   **👤 Persona: Grocery / Q-Commerce Delivery Partner** 


Age: 24+ 
Work Type: Full-time delivery partner 
Income Model: Paid per delivery 
Average Weekly Income: ₹2,500 – ₹3,500 
Works 6–7 days per week


Key Challenges :-
Income instability 
Weather-dependent earnings 
No guaranteed minimum income 
No protection against income loss 
Weekly financial commitments (rent, groceries, EMIs) 
Insurance Need Affordable weekly premium Simple onboarding Automatic payout No paperwork Fast claim settlement 

                                          **💰 Weekly Pricing Model** 

Why Weekly? 
Gig workers operate on weekly earnings. 
Aligns with their cash flow cycle. 
Affordable and flexible. 
Assumptions Average Weekly Income = ₹3,000 
Coverage = 40% income protection 
Base Premium Rate = ₹50 

Risk Score (AI-Based) Each delivery zone receives a Risk Score (0–1) based on: 
Rainfall frequency 
Temperature trends 
AQI levels 
Past disruption events 

Premium Formula Weekly Premium = Base Rate × Risk Score × Coverage Factor 
Example: 
Base Rate = ₹50 
Risk Score = 0.6 
Coverage Factor = 1.2 
Premium = ₹36 per week 

                                            **⚡ Parametric Triggers**

A parametric trigger is a predefined measurable condition. When the threshold is crossed, payout is automatically activated without manual claim filing. 
1️⃣ Heavy Rain Trigger Condition: 
Rainfall > 70mm within 6 hours Impact: Unsafe roads and reduced delivery activity 
Action: System assumes 3 hours of income loss and auto-generates payout 

2️⃣ Extreme Heat Trigger Condition: Temperature > 44°C for 3 consecutive hours 
Impact: Unsafe outdoor working conditions Action: System assumes 2 hours of income loss and triggers payout 

3️⃣ Severe Pollution Trigger Condition: AQI > 350 (Hazardous level) 
Impact: Reduced outdoor activity Action: System assumes 2 hours of income loss and auto-payout 

                                    **🤖 AI & Fraud Detection Integration** 

1️⃣ AI for Risk Assessment Predicts disruption probability Generates zone-based Risk Score Enables dynamic weekly premium calculation Uses regression or ML-based prediction models

2️⃣ AI for Predictive Disruption Modeling Forecasts upcoming week risk Adjusts pricing dynamically Estimates claim volume

3️⃣ Fraud Detection Mechanisms Location Validation GPS compared with disruption zone Weather Data Cross-Verification Claim validated with official weather API Activity Check Ensure no deliveries completed during claimed hours Duplicate Claim Detection Prevent repeated payouts for same event AI-Based Anomaly Detection Isolation Forest Outlier detection Fraud Risk Score (Low/Medium/High) 

                                      **🔄 Application Workflow**

1️⃣ User Registration OTP verification Enter delivery zone & income 

2️⃣ Risk Profiling AI calculates Risk Score Weekly premium displayed

3️⃣ Policy Activation User pays weekly premium Policy active for 7 days

4️⃣ Real-Time Monitoring System monitors weather, AQI, zone APIs 

5️⃣ Automatic Claim Trigger If threshold crossed → Claim auto-generated 

6️⃣ Fraud Detection Location validation Activity check Anomaly detection

7️⃣ Instant Payout Mock UPI / Razorpay sandbox User notified of credited amount 

8️⃣ Dashboards Worker Dashboard: Active coverage Premium paid Claims history Payout summary Admin Dashboard: Total workers Premium collected Payout statistics Fraud alerts Predictive analytics

                                 **📊 Financial Sustainability Model** 
 
Insurance must be profitable and sustainable.

Example Scenario: 
1000 workers enrolled Average weekly premium = ₹40 
Total Weekly Premium Pool = ₹40,000 
Expected weekly payouts (based on historical probability) = ₹25,000 
Reserve & operational margin = ₹15,000 
Risk pool model ensures: Claims covered through collective premiums Surplus retained for reserves Dynamic pricing prevents systemic loss This demonstrates actuarial thinking and scalability viability.

                                          **🚀 Innovation Highlights**
 
First weekly-priced micro parametric insurance model for Indian gig workers AI-powered dynamic zone-based risk pricing No manual claim filing Event-driven automated payout system Integrated fraud detection using ML Micro-pricing engine Real-time trigger monitoring 

                                         **📈 Why This Project Stands Out Technically** 

This project combines: Full-stack development (MERN) AI micro-pricing engine Regression-based disruption modeling Isolation Forest anomaly detection Event-driven payout architecture Risk pool financial modeling Real-time external API integration This is not just a dashboard — it is a working insuretech system simulation.

                                        **🌍 Scalability Vision** 
 
Future Expansion: Ride-hailing drivers Construction daily wage workers Agricultural laborers Street vendors Hyperlocal service workers Long-term vision: A nationwide gig-worker parametric protection platform 

                                             **🛠 Tech Stack** 

Frontend: React.js Chart library (Recharts / D3.js) 
Backend: Node.js Express.js MongoDB 
AI Service: Python Scikit-learn FastAPI 
APIs: Weather API (real or mock) AQI API (real or mock) Mock zone status API Payment gateway (Razorpay test mode / sandbox) 

                                    ** 📅 6-Week Development Plan**

 Phase 1 – Ideation & Foundation Define persona Finalize pricing model Define parametric triggers Design architecture Create GitHub repository 

 Phase 2 – Automation & Protection Build registration system Implement dynamic premium calculation Integrate trigger monitoring Auto-claim generation 

 Phase 3 – Scale & Optimize Implement fraud detection Integrate mock payout system Build dashboards Add predictive analytics Final demo video and pitch deck
 
                                          **🎯 Project Objective** 
  
To create a scalable, AI-powered, weekly-priced parametric insurance platform that protects gig workers from income loss due to uncontrollable external disruptions, while ensuring automation, transparency, and fraud prevention.

                                         ** 🏗 System Architecture**
Delivery Worker Web Application
            │
            ▼
Frontend Layer (React.js Dashboard)
            │
            ▼
Backend API Layer (Node.js + Express)
            │
            ├───────────────┬──────────────────┬─────────────────┐
            │               │                  │                 │
            ▼               ▼                  ▼                 ▼
        MongoDB        AI Microservice     External APIs     Payment Service
     (User/Policy      (Python +           Weather API       Razorpay Sandbox
      Claims Data)      FastAPI)           AQI API
                         │                 Zone Status API
                         │
                         ▼
                 Risk Prediction Engine
                         │
                         ▼
                Parametric Trigger Engine
                         │
                         ▼
                 Fraud Detection System
                  (Isolation Forest)
                         │
                         ▼
                 Trust Score Engine
                         │
                         ▼
                   Claim Processor
                         │
                         ▼
                    Auto Payout

                                    **🔐 Gig Worker Trust Score System **

To further strengthen fraud prevention and create a fair ecosystem, the platform introduces a Gig Worker Trust Score.

The Trust Score acts as a reputation and reliability metric for delivery partners, similar to a financial credibility score.

It helps the system determine:

claim reliability

fraud probability

premium benefits

eligibility for faster payouts

This score evolves dynamically as the worker continues using the platform.

Trust Score Range
Score	Category
85 – 100	Highly Trusted
70 – 84	Reliable
50 – 69	Moderate Risk
Below 50	High Risk
Trust Score Factors

The Trust Score is calculated using multiple behavioral and system signals:

1️⃣ Delivery Activity Consistency

Workers with consistent work patterns and regular delivery activity receive higher scores.

2️⃣ Location Accuracy

GPS location is compared with the worker’s registered delivery zone.

Frequent mismatches may reduce trust score.

3️⃣ Claim History

Workers with legitimate claim history and no suspicious claims maintain higher trust scores.

4️⃣ Policy Participation

Workers who maintain continuous weekly coverage without irregular behavior gain higher reliability scores.

5️⃣ Fraud Detection Signals

AI models evaluate anomalies such as:

repeated claims from the same trigger

abnormal location patterns

sudden inactivity during claim periods

⚙️ Trust Score Usage in the System

The Trust Score directly impacts several system decisions.

1️⃣ Premium Incentives

Workers with higher trust scores receive premium benefits.

Example:

Trust Score	Premium Benefit
85+	15% premium discount
70–84	Standard premium
50–69	Slight risk loading

This encourages honest participation and system trust.

2️⃣ Faster Claim Settlement

Trust Score enables tiered claim processing.

Trust Score	Claim Processing
85+	Instant payout
70–84	Automated verification
<70	Additional fraud checks

This balances speed and fraud prevention.

3️⃣ Fraud Risk Layer

The Trust Score is integrated with the fraud detection AI model.

Workers flagged by anomaly detection algorithms will see temporary trust score reductions, triggering stronger verification mechanisms.

4️⃣ Future Financial Services

In future expansions, the Trust Score could enable:

micro-credit access

emergency financial support

partner platform verification

This transforms the platform into a financial identity system for gig workers.

                         ** 🛡️ Adversarial Defense & Anti-Spoofing Strategy **

The Differentiation:

Our system uses behavioral intelligence modeling.
Genuine workers show natural movement patterns, delivery history consistency, and platform activity.
Fraudsters using spoofed GPS show unnatural stationary-device patterns, sudden extreme zone jumps, and inconsistent app interaction signals.

The Data:

1️⃣ Device Sensor Data

Accelerometer (Is vehicle moving naturally?)
Gyroscope (Real road turns vs static phone)
Step counter patterns

2️⃣ Network Intelligence

Mobile tower triangulation
Network switching patterns
Latency anomalies during bad weather

3️⃣ Platform Behavior Signals

Delivery acceptance rate
Order completion consistency
App foreground activity
Battery drain patterns

4️⃣ Environmental Cross-Verification

Real-time traffic API
Other nearby workers’ movement
Weather severity heatmaps

5️⃣ Swarm Fraud Detection

AI detects suspicious clusters
Multiple users claiming from same fake zone
Telegram-coordinated timing pattern detection

UX Balance:

🟢 Tier 1 — Trusted Workers

High trust score
Instant payouts
No friction

🟡 Tier 2 — Suspicious Signals

Soft verification
Simple selfie/video proof
Quick manual review
Payout not blocked, just delayed slightly

🔴 Tier 3 — High Fraud Probability

Claim temporarily paused
Human audit
Pattern investigation

Our system assumes honesty-first design and uses minimal-friction verification before any punitive action.