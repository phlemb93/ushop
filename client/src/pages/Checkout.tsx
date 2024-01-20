import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import StripeComponent from "../components/StripeComponent";


const Checkout = () => {

  const [clientSecret, setClientSecret] = useState('')
  const [stripePromise, setStripePromise] = useState(null)
  const { state } = useLocation();


  useEffect(() => {
    const makeRequest = async () => {
        const { data } = await axios.get('http://localhost:5000/api/checkout/request-key');

        setStripePromise(loadStripe(data.clientPK))
    }

    makeRequest();

}, [])

useEffect(() => {
    const makeRequest = async () => {
        const { data } = await axios.post('http://localhost:5000/api/checkout/create-payment-intent', {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setClientSecret(data.clientSecret)
    }

    makeRequest();

}, [])


  return (
    <div
    style={{ 
      border: '1px solid red',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}
      >
        <h2>{ `Total Sum: ${state.total}`}</h2>
        <div>
            { stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <StripeComponent />
              </Elements>  
          )}
        </div>
    </div>
  )
}

export default Checkout