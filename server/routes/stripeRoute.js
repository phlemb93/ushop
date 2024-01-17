const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SK_KEY);

//GET PUBLISHABLE KEY TO THE FRONTEND
router.get('/request-key', async (req, res) => {

    res.status(200).json({ clientPK: process.env.STRIPE_PK_KEY })
    
})


//POST CREATE PAYMENT
router.post('/create-payment-intent', async (req, res) => {

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'gbp',
            amount: 1000,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });

    } catch (error) {

        return res.status(400).json({ 
            error: { 
                message: error.message, 
            }
        })
    }
    
})

module.exports = router;