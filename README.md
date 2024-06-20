# BatiKu REST API 
This repository contains a backend REST API service that provides information about batik, including batik list, batik details, and batik details based on detection results.

## Features
- **List Batik**: Get a list of all the batiks 
- **Batik Details**: Get batik details based on ID
- **Batik Details Based on Prediction Results**: Get batik details based on the detected name

## Technology Used
- Node.js
- Express.js
- Prisma
- MySQL

## Installation
Follow the steps below to install and run this project locally.

### Prerequisite
Make sure you have installed:
- Node.js
- npm 
- MySQL

### Installation Steps
1. Clone this repository

    ```sh
    git clone https://github.com/username/batik-api.git
    cd batik-api
    ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Configure Environment Variables

    Create a `.env` file at the root of the project and add the following environment variables:

    ```env
    PORT=3000
    DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"
    ```

4. Set up a database with Prisma

    ```sh
    npx prisma migrate dev --name init
    ```

5. Run the server

    ```sh
    npm start
    ```

## Using

This API provides the following endpoints:

### Get a List of All Batik

- **Endpoint**: `/api`
- **Method**: GET
- **Description**: Returns a list of all batiks.
- **Sample Response**:
    ```json
    [
      {
        "batik_id": 1,
        "image": "url_gambar",
        "batik_name": "Batik Parang",
        "batik_history": "Sejarah Batik Parang"
      },
      ...
    ]
    ```

### Get Batik Details Based on ID

- **Endpoint**: `/api/:id`
- **Method**: GET
- **Description**: Mengembalikan detail batik berdasarkan ID.
- **Sample Response**:
    ```json
    {
      "image": "url_gambar",
      "batik_name": "Batik Parang",
      "batik_origin": "Yogyakarta",
      "batik_meaning": "Makna Batik Parang",
      "batik_history": "Sejarah Batik Parang"
    }
    ```

### Get Batik Details Based on the Detected Name

- **Endpoint**: `/api/predict/:name`
- **Method**: GET
- **Description**: Mengembalikan detail batik berdasarkan nama yang terdeteksi.
- **Sample Response**:
    ```json
    {
      "image": "url_gambar",
      "batik_name": "Batik Parang",
      "batik_origin": "Yogyakarta",
      "batik_meaning": "Makna Batik Parang",
      "batik_history": "Sejarah Batik Parang"
    }
    ```