# Task Management API

This is a simple RESTful API for managing tasks, built with Node.js and Express.

## Setup and Run

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd task-management
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the server:**
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:3000`.

## API Endpoints

* `GET /`
    * Description: Displays a welcome message for the API.
* `GET /health`
    * Description: Checks the server's health status and uptime.
* `GET /tasks`
    * Description: Returns a list of all tasks.
* `GET /task/:id`
    * Description: Returns a single task by its ID.
    * Returns `400 Bad Request` if the ID is not a valid number.
    * Returns `404 Not Found` if the task does not exist.