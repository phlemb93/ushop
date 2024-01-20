
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react";


function StripeComponent() {

    const [errorMsg, setErrorMsg] = useState(null)
    const [processing, setProcessing] = useState(false)

    const stripe = useStripe();
    const elements = useElements();


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
            setErrorMsg(result.error.message);
            console.log(result.error.message);
          } 
          setProcessing(false)
    }

    return (
        <div style={{ 
            marginTop: 20,
            marginBottom: 10
         }}>
            <form onSubmit={handleSubmit}>
                <PaymentElement />
                <button 
                className="btn" 
                disabled={processing}
                style={{ 
                    marginTop: 10,
                    width: '100%',
                    padding: 14
                 }}
                >
                    <p>Pay</p>
                </button>
            </form>
        </div>
    )
}

export default StripeComponent;