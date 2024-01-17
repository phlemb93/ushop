import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect, useState } from "react";


const CheckoutForm = () => {

const [errorMsg, setErrorMsg] = useState(null)
const [processing, setProcessing] = useState(false)

    const stripe = useStripe();
    const elements = useElements();

    const total = 2000;

    useEffect(() => console.log(window.location.origin), [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
          }

          setProcessing(true)
      
          const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
              return_url: 'http://localhost:5173/payment-confirmed',
            },
          });
      
          if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            setErrorMsg(result.error.message)
            console.log(result.error.message);
          } 
          setProcessing(false)
    }


  return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button 
            className="btn" 
            disabled={processing}
            style={{
                display: 'block',
                backgroundColor: total > 0 ? '#481449' : 'gray',
                cursor: !processing ? 'pointer' : 'not-allowed',
                }}
            >
                <LockOutlinedIcon />
                <p>Secure Checkout</p>
            </button>
        </form>
  )
}

export default CheckoutForm