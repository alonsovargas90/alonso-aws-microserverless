import serverless from 'serverless-http';
import app from './app';

// Export the app as a lambda function
export const handler = serverless(app);