# Restaurant Menu API

A simple REST API for managing restaurant menus, built with Express.js. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on restaurant menus. It includes manual test cases for testing the endpoints.

## Features
- Create a new menu for a restaurant (`POST /menus`)
- Retrieve all menus (`GET /menus`)
- Retrieve a specific menu by ID (`GET /menus/:id`)
- Update an existing menu (`PUT /menus/:id`)
- Delete a menu by ID (`DELETE /menus/:id`)
- Basic validation (e.g., ensuring required fields are provided)
- Organized code structure with routes in a separate `routes/` directory

## Tech Stack
- **Node.js** and **Express.js** for building the API
- **JavaScript (ESM)** for modern syntax
- **Postman** for manual testing (test cases provided)

## Prerequisites
- Node.js (v16 or higher) installed on your machine
- Postman (or any API testing tool) for manual testing
- Git (to clone the repository)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/restaurant-menu-api.git
   cd restaurant-menu-api
