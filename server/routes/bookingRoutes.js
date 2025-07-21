import express from "express";
import { checkAvailablityAPI } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { createBooking, getHotelBokkings, getUserBookings } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post('/checkAvailability', checkAvailablityAPI);
bookingRouter.post('/book', protect, createBooking);
bookingRouter.get('/user', protect, getUserBookings);
bookingRouter.get('/hotel', protect, getHotelBokkings);

export default bookingRouter;