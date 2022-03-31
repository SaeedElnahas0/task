#### Setup Basic Express Server

- [] import express and assign to variable
- [] setup start port variable (5000) and start function

#### Connect To DB

- [] get connection string
- [] setup .env with MONGO_URL variable and assign the value
- [] import 'dotenv' and setup package
- [] import connect() and invoke in the starter
- [] restart the server
- [] mongoose V6 

#### Basic Routes and Middleware

- [] setup express.json() middleware

#### Task Model

- [] create models folder and Task.js file
- [] create schema with Data and x as object
- [] export mongoose model

#### Task Controller

- [] add Task.js file from Model
- [] create task
- [] send response with entire task 

#### Task Routes Structure

- [] add taskController file
- [] export createTask functions
- [] import controller
- [] import userRoutes as userRouter in the app.js
- [] setup app.use('/api/v1/users', userRouter)
