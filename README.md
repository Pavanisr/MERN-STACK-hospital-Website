Hospital Management System (MERN Stack) 🏥🚀

Project Overview

This project is a robust and scalable Hospital Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers comprehensive features for hospital operations management, integrating machine learning to recommend doctors based on patient symptoms. The system is designed for both users (patients) and administrators (hospital staff), with dual frontend interfaces for seamless interaction and management.

Key Features

1. Authentication & Authorization

Secure login and registration using JSON Web Tokens (JWT).

Role-based access control for users and admins.

Multi-token management for enhanced security.

2. Dual Frontends

User Frontend: A patient-friendly interface to manage appointments, view recommended doctors, and access personal health records.

Admin Frontend: A powerful dashboard for hospital administrators to manage doctors, patients, appointments, and medical records.

3. Machine Learning Integration

A machine learning model built using a Kaggle dataset to recommend doctors based on patient symptoms.

The model leverages patient input to suggest the most suitable doctors for consultation.

Provides accurate and personalized recommendations to enhance patient care.

4. Scalable Architecture

Modular design to handle future expansion.

Built with scalability and efficiency in mind to support a growing database of patients and hospital operations.


Technical Stack

1.Frontend

React.js with Redux for state management.
Responsive UI using Material-UI.

2.Backend

Node.js with Express.js for server-side logic.
RESTful APIs for communication between the frontends and the backend.

3.Database
MongoDB as the NoSQL database for storing patient and hospital data.

4.Machine Learning

A doctor recommendation model trained on a Kaggle dataset.

Python with libraries like scikit-learn and pandas.

Symptom-based recommendation system to ensure precision in doctor selection.


Project Architecture

The project follows a structured architecture:

1.Frontend: Two separate React applications for users and admins.

2.Backend: Node.js server with APIs for authentication, data retrieval, and interaction with the machine learning model.

3.Database: MongoDB collections for users, doctors, symptoms, appointments, and recommendations.

4.Machine Learning: Python-based Flask API for integrating the recommendation model with the backend.

Home Screen![front1](https://github.com/user-attachments/assets/0842f1b3-11f8-4cbb-a683-290395f68259)

Login page 
![front6](https://github.com/user-attachments/assets/7bcbf45a-42f0-4c6e-a83c-eee17a32dd02)

Register page![front7](https://github.com/user-attachments/assets/47bd7075-efdb-4d23-ad86-cdd180b699da)
Admin dashboard![front8](https://github.com/user-attachments/assets/0f902eea-0909-4bf7-9e8e-774ee4ad930b)
Doctor Recommendation system![front5](https://github.com/user-attachments/assets/355f3638-1d10-4995-8a77-e5f9314d7969)
