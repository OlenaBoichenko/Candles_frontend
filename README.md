# Candles project

## Project Description

This is a pet project consisting of three main parts:
1. [Frontend](https://github.com/OlenaBoichenko/Candles_frontend) is responsible for the user interface.
2. [Backend](https://github.com/OlenaBoichenko/Candles_backend) - the server part for query processing and database management.
3. [Stripe](https://github.com/OlenaBoichenko/Candles_stripe) - the integration of a payment system for processing purchases.

The project is deployed using Netlify and includes both visual elements and full functionality for interacting with users and processing payments.

## Technologies

- Frontend: React, HTML, CSS, JavaScript
- Backend: Node.js, Express, MongoDB
- Stripe: Stripe API for payment processing

## Running a project locally

1. **Frontend**  
   1.1 Clone the frontend repository:  
       `git clone https://github.com/OlenaBoichenko/Candles_frontend`  
   1.2 Go to your project folder:  
       `cd candles_frontend`  
   1.3 Install dependencies:  
       `npm install`  
   1.4 Run the project:  
       `npm start`  
       
       The application will be available at http://localhost:3000.

2. **Backend**  
   2.1 Clone the backend repository:  
       `git clone https://github.com/OlenaBoichenko/Candles_backend`  
   2.2 Go to your project folder:  
       `cd candles_backend`  
   2.3 Install dependencies:  
       `npm install`  
   2.4 Set up your database connection in the `.env` file:  
       `MONGO_URI=your-url-for-connecting-to-the-database`  
   2.5 Run the server:  
       `npm start`  
       
       The server will be available at http://localhost:5000.

3. **Stripe**  
   3.1 Clone the Stripe repository:  
       `git clone https://github.com/OlenaBoichenko/Candles_stripe`  
   3.2 Go to your project folder:  
       `cd stripe`  
   3.3 Install dependencies:  
       `npm install`  
   3.4 Set up the `.env` file with your Stripe API key:  
       `STRIPE_SECRET_KEY=your-secret-key-stripe`  
   3.5 Run the server:  
       `npm start`

# NOTES


1. **Netlify и MongoDB:** The project uses free plans from Netlify for hosting and MongoDB for the database. Because of this, there may be delays in the operation of the backend and payment system Stripe. In some cases, especially when starting for the first time, loading may take up to 1 minute.
2. **Test credit card for Stripe verification.** To test the payment system, use the following test data:
   - Card number: 4242 4242 4242 4242
   - CVC: any three digits (for example, 123)
   - Card expiration date: any future month and year (for example, 12/25)

After entering this data, the payment will be successfully processed in test mode.

If you have questions or suggestions, you can contact me [via email](mailto:ol.boichenko.dev@gmail.com) 
