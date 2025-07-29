# Hotel Booking App

This is a full-stack hotel booking application consisting of a React frontend and a Node.js/Express backend.

## Project Structure

- `client/`: React frontend built with Vite, using Tailwind CSS and Clerk for authentication.
- `server/`: Node.js backend using Express, MongoDB (via Mongoose), Stripe for payments, Cloudinary for image uploads, and Clerk for user management.

---

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- Stripe account for payment processing
- Cloudinary account for image hosting
- Clerk account for authentication

---

## Environment Variables

Create a `.env` file in the `server/` directory with the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLERK_API_KEY=your_clerk_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

Adjust values as per your setup.

---

## Client Setup

Navigate to the `client/` directory and install dependencies:

```bash
cd client
npm install
```

Available scripts:

- `npm run dev`: Start the development server with hot reload.
- `npm run build`: Build the production-ready static files.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check code quality.

To start the client in development mode:

```bash
npm run dev
```

---

## Server Setup

Navigate to the `server/` directory and install dependencies:

```bash
cd server
npm install
```

Available scripts:

- `npm run server`: Start the server with nodemon for development.
- `npm start`: Start the server normally.

To start the server in development mode:

```bash
npm run server
```

The server will listen on the port specified in `.env` or default to 3000.

---

## API Endpoints Overview

- `GET /`: Basic health check endpoint.
- `/api/user`: User-related routes.
- `/api/hotels`: Hotel-related routes.
- `/api/rooms`: Room-related routes.
- `/api/bookings`: Booking-related routes.
- `/api/stripe`: Stripe webhook endpoint.
- `/api/clerk`: Clerk webhook endpoint.

---

## Technologies Used

- Frontend: React, Vite, Tailwind CSS, Clerk, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, Stripe, Cloudinary, Clerk

---

## License

This project is licensed under the ISC License.

---
