import express from 'express';
import { json, urlencoded } from 'body-parser';
import serverless from 'serverless-http';
import { connectToDatabase, disconnectFromDatabase } from './utils/db';
import CategoryController from './controllers/categoryController';
import ProductController from './controllers/productController';

const app = express();

// Connect to database
connectToDatabase();
// disconnect from the database when the Lambda function is about to exit
process.on('beforeExit', () => {
  disconnectFromDatabase();
});

app.use(json());
app.use(urlencoded({ extended: true }));

// define your routes here, using the appropriate controllers
app.use('/categories', CategoryController);
app.use('/products', ProductController);

// start the server
const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// export the serverless version of the app
export const handler = serverless(app);