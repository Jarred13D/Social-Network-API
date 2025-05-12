# Social Network API

A robust RESTful API for a social network web application, built with Node.js, Express, and MongoDB. This API allows users to share thoughts, react to friends’ thoughts, and manage a list of friends. It is designed for backend use and can be tested with tools like Insomnia or Postman.

## Features

- **User Management:** Create, read, update, and delete users.
- **Thoughts:** Users can create, view, update, and delete thoughts.
- **Reactions:** Add and remove reactions to thoughts.
- **Friendships:** Add and remove friends from a user's friend list.
- **MongoDB Integration:** Data is stored and managed using MongoDB and Mongoose.

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JavaScript (ES Modules)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/social-network-api.git
   cd social-network-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start MongoDB:**  
   Make sure your MongoDB server is running locally.

4. **Start the application:**

   ```bash
   npm run start
   ```

   The server will run on `http://localhost:3001` by default.

## API Endpoints

### Users

- `GET /api/users` — Get all users
- `GET /api/users/:userId` — Get a single user by ID
- `POST /api/users` — Create a new user  
  **Body Example:**
  ```json
  {
    "username": "sampleUser",
    "email": "sample@email.com"
  }
  ```
- `PUT /api/users/:userId` — Update a user
- `DELETE /api/users/:userId` — Delete a user
- `POST /api/users/:userId/friends/:friendId` — Add a friend
- `DELETE /api/users/:userId/friends/:friendId` — Remove a friend

### Thoughts

- `GET /api/thoughts` — Get all thoughts
- `GET /api/thoughts/:thoughtId` — Get a single thought by ID
- `POST /api/thoughts` — Create a new thought  
  **Body Example:**
  ```json
  {
    "thoughtText": "This is a thought!",
    "username": "sampleUser"
  }
  ```
- `PUT /api/thoughts/:thoughtId` — Update a thought
- `DELETE /api/thoughts/:thoughtId` — Delete a thought

### Reactions

- `POST /api/thoughts/:thoughtId/reactions` — Add a reaction  
  **Body Example:**
  ```json
  {
    "reactionBody": "Great thought!",
    "username": "sampleUser"
  }
  ```
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` — Remove a reaction

## Testing

Use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API endpoints.  
Make sure to create a user before creating thoughts or reactions.

## Walkthrough

https://app.screencastify.com/v3/watch/AzV5EkonizhbRmdYGgF8

## License

This project is licensed under the MIT License.

## Author

- [Your Name](https://github.com/Jarred13D)

---

_This project was developed as part of a coding bootcamp assignment to demonstrate proficiency in building RESTful APIs with Node.js, Express, and MongoDB._
