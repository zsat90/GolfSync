# GolfSync

GolfSync is a MEAN stack application that allows users to explore golf courses, book tee times, and manage their golf experience. This application includes features such as a landing page, course listings, tee time bookings, and user profiles.

## Features

- **Landing Page**: Introduction to GolfSync with a call to action.
- **Course Listings**: View a list of golf courses.
- **Tee Time Bookings**: Book tee times for selected golf courses.
- **User Profiles**: User registration, login, and profile management.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js and Express
- **Database**: MongoDB
- **Styling**: Bootstrap

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 18.17.1 or higher)
- MongoDB (ensure MongoDB is running locally or provide a connection URI for a remote instance)
- Angular CLI

## Directory Structure

- **backend/**: Contains the server code, including routes, controllers, and models.
- **frontend/**: Contains the Angular application, including components, services, and styles.

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate a user and get a JWT token.

### Booking Routes

- **POST /api/bookings**: Create a new booking.

### Course Routes

- **GET /api/courses**: Get all courses.
- **POST /api/courses**: Add a new course.
- **PUT /api/courses/:id**: Update a course by ID.
- **DELETE /api/courses/:id**: Delete a course by ID.
- **GET /api/courses/:id**: Get a course by ID.
