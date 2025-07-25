import express from "express";
import { checkAvailablityAPI, stripePayment } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { createBooking, getHotelBookings, getUserBookings } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post('/checkAvailability', checkAvailablityAPI);
bookingRouter.post('/book', protect, createBooking);
bookingRouter.get('/user', protect, getUserBookings);
bookingRouter.get('/hotels', protect, getHotelBookings);
bookingRouter.post('/stripe-payment', protect, stripePayment);

export default bookingRouter;