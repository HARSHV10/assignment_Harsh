# Excel-to-MongoDB Data Importer

Welcome to the Excel-to-MongoDB Data Importer repository! This project aims to provide a simple application that reads data from an Excel file and inserts it into a MongoDB database using Node.js as the backend and React as the frontend.

## Folder Structure

The repository consists of two main folders:

1. `frontend`: This folder contains the React frontend application that allows users to interact with the data importer.

2. `backend`: This folder contains the Node.js backend application responsible for handling data importing and managing the MongoDB database.

## Technology Stack

- **Frontend**: The frontend is built using React, a popular JavaScript library for building user interfaces.

- **Backend**: The backend is implemented in Node.js, a JavaScript runtime, and it utilizes MongoDB as the database to store the imported data. MongoDB Atlas is used as the cloud-based database service.

## Backend Structure

The backend folder further consists of the following subfolders:

1. `database`: This folder contains the logic for establishing a connection to the MongoDB database, utilizing the MongoDB Node.js driver.

2. `model`: The model folder contains the database schema and data models necessary for representing the data being imported from the Excel file.

3. `controller`: The controller folder holds the implementation of the data importing process using `async.eachSeries` to iterate through the data and efficiently insert it into the database.

## How to Use

To run the application, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone <https://github.com/HARSHV10/assignment_Harsh.git>
```

2. Navigate to the `frontend` folder and install the required dependencies by running:

```
cd frontend
npm install
```

3. Start the frontend application:

```
npm start
```

4. Now, navigate to the `backend` folder and install the backend dependencies:

```
cd ../backend
npm install
```

5. Run the backend application:

```
npm start
```

6. Ensure that you have MongoDB set up and running, and you have the appropriate connection URI configured in the `database` folder to connect to your MongoDB Atlas cluster.

7. Once both the frontend and backend applications are running, open your web browser and access the frontend application at `http://localhost:3000`. From here, you can upload an Excel file containing the data you wish to import into the MongoDB database.

## Contributions

Contributions to this repository are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

We hope you find this application useful for your data importing needs! Happy coding!