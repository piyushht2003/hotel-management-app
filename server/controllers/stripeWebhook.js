import stripe from 'stripe';
import Booking from '../models/Booking.js';

// API to handle the Stripe webhooks

export const stripeWebhooks = async (request, response) => {
    // Stripe gateway initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_KEY)
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`)
    }

    // Handle the event
    if(event.type === "payment_intent.succeeded"){
        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;
        
        // getting session
        const session  = await stripeInstance.checkout.sessions.list({
            payment_intent: paymentIntentId,
        });
        const {bookingId} = session.data[0].metadata;

        // Mark payment as paid
        await Booking.findByIdAndUpdate(bookingId, {isPaid: true, paymentMethod: "Stripe"})
    }else{
        console.log("Unhandled envent type :", event.type);
    }
    response.json({recieved: true});
}