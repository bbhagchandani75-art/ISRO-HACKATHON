# ISRO-HACKATHON
An AI-powered Space Weather Decision Support System combining Markov Chain probabilistic modeling with AI-based X-ray fusion of SoLEXS and HEL1OS data to provide accurate, explainable, and actionable solar flare forecasts with infrastructure impact assessment.
 Solar Flare Forecast Dashboard

AI-Based Space Weather Prediction using Markov Chain Model

Overview

The Solar Flare Forecast Dashboard is a prototype developed for the ISRO Hackathon to demonstrate how Artificial Intelligence can assist in forecasting and nowcasting solar flares using observations from the Aditya-L1 mission.

The dashboard provides an interactive interface where users can upload solar observation data, run a Markov Chain-based prediction, visualize flare probability, and monitor simulated space weather conditions.

---

Problem Statement

Solar flares are sudden bursts of energy released from the Sun that can significantly impact:

- Satellite operations
- GPS navigation
- Radio communication
- Aviation systems
- Electrical power grids

An early-warning system can help reduce these risks by providing timely predictions.

---

Objectives

- Predict the probability of upcoming solar flares.
- Demonstrate a Markov Chain-based forecasting approach.
- Provide an intuitive dashboard for space weather monitoring.
- Visualize prediction results using interactive charts.

---

Data Source

The prototype is designed to work with data collected by Aditya-L1 instruments:

- SoLEXS (Solar Low Energy X-ray Spectrometer)
- HEL1OS (High Energy L1 Orbiting X-ray Spectrometer)

For demonstration purposes, sample CSV data is included in this project.

---

Features

- Upload solar observation CSV files
- Markov Chain prediction simulation
- Solar flare probability graph
- Risk level indicator
- Plasma temperature display
- Recent solar activity log
- Responsive dark-themed dashboard
- Interactive user interface

---

Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript
- Chart.js
- Font Awesome

Machine Learning

- Markov Chain Model (Prototype)

Future Backend

- Python
- Flask / FastAPI
- NumPy
- Pandas
- Scikit-learn

---

Project Structure

SolarFlareDashboard/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── images/
    ├── icons/
    └── data/

---

Workflow

1. Upload solar observation data.
2. Select the forecasting horizon.
3. Execute the Markov Chain prediction.
4. Calculate flare probability.
5. Display predicted flare class and risk level.
6. Visualize the probability trend.
7. Update the activity log.

---

Future Enhancements

- Real-time integration with Aditya-L1 datasets
- Advanced Deep Learning models (LSTM, Transformer)
- Live X-ray data streaming
- Space weather alert notifications
- Interactive world impact visualization
- Automatic report generation
- REST API integration

---

Disclaimer

This project is a demonstration prototype developed for the ISRO Hackathon.

The current implementation simulates prediction results for user interface demonstration. The complete system will integrate real Aditya-L1 observations and a fully implemented Markov Chain prediction model.

---

Authors

Developed as part of the ISRO Hackathon Project.

---

License

This project is intended for educational and research purposes.
