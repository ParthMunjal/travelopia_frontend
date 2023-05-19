# Travelopia

- This is full stack application which allows users to submit a form and store it in a mongodb database. It also allows them to view all the submissions. 

## Pre-requisites
Before setting up the project, ensure that you have the following prerequisites installed on your local machine:
- Node.JS
- npm
- git
- MongoDB atlas database (for accessing the database)

## Creating MongoDB atlas account and database
- Go to the MongoDB Atlas website (https://www.mongodb.com/cloud/atlas) and sign in or create a new account.

- Once logged in, click on the "Build a New Cluster" button.

- Choose your preferred cloud provider and region for hosting your MongoDB cluster. Select the options that best suit your requirements, such as the cloud provider, region, and cluster tier.

- Configure additional cluster settings like the cluster name, version, and any additional features you want to enable.

- Set up the network access for your cluster. You can choose to allow access from anywhere (0.0.0.0/0) or specify specific IP addresses or ranges. 

- Review your configuration and click on the "Create Cluster" button to start the cluster creation process. MongoDB Atlas will provision and set up your cluster.

- To connect to your cluster, click on the "Connect" button. 

- Select "Connect Your Application" to obtain the connection string that you will use in your application code to connect to the MongoDB Atlas cluster.

- Make note of the connection string.

## Installation and Setup

- Create a parent directory (example: travelopia) which will be the root folder of the project.

- Make two seperate directories named "frontend" and "backend" within the parent directory.

### Frontend setup
Move into the frontend directory and clone the frontend repository (travelopia_frontend) by running:
```
cd frontend
git clone https://github.com/ParthMunjal/travelopia_frontend.git
cd travelopia_frontend
```
Install the required dependencies mentioned in package.json by running:
```
npm install
```

### Backend Setup
Move into the backend directory and clone the backend repository (travelopia_backend) by running:
```
cd backend
git clone https://github.com/ParthMunjal/travelopia_backend.git
cd travelopia_backend
```
Install the required dependencies mentioned in package.json by running:
```
npm install
```
- Create a .env file in the backend directory.
 
- Copy the ATLAS_URI variable from the .env.example file and paste it in the .env file.
 
- Replace the value of ATLAS_URI with the URI (connection string) for your MongoDB database.

- Replace username and password in the variable with your own mongodb username and password.
```
 ATLAS_URI = mongodb+srv://<username>:<password>@cluster0.i6aj898.mongodb.net/?retryWrites=true&w=majority
 ```
 ### Running the application
 You will need to open two seperate terminals to run both the frontend and backend server
  
 1. Start the backend server in the first terminal:
  ```
  cd backend
  cd travelopia_backend
  ```
  Install nodemon. with nodemon we do need to restart our server everytime we make a change
  ```
  npm install nodemon
  ```
  Start the server
  ```
  nodemon server
  ```
 - This will start the backend server on `http://localhost:5000`.
 - The server starts at port 5000 and displays if the connection to mongodb database has been created successfully
  
  2. Start the frontend server in the second terminal:
  Navigate to the root directory of the frontend project 
  ```
  cd frontend
  cd travelopia_frontend
  npm start
  ```
  This will start the frontend server and open the application in your default browser at `http://localhost:3000`.
  
## Usage

- On the homepage, you will find a form where you can enter your travel details, including your name, email address, desired destination, number of travelers, and budget per person.

- Click the "Submit" button to submit the form. If the form submission is successful, you will see a success message.

- To view the list of all form submissions, navigate to the "Submissions" page by clicking "view all submissions" button.
  
## Troubleshooting

If you encounter any issues or errors while setting up or running the application, please check the following:

- Ensure that you have provided the correct MongoDB URI in the `.env` file.

- Make sure that MongoDB is running and accessible on the specified URI.

- Verify that the required software and tools are installed and up to date.
  
- If there is an error while starting the backend server where your IP address is not able to access the database, then you can configure the network access settings for the database to "allow access from anywhere" temporarily or add the specific IP addresses


