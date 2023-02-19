# alonso-aws-microserverless
A Tecnical challenge for interview

This is a sample app using serverless microservices. As Db we are using mongodb and docker to initialize and consume the data.

Also Im using serverless framework with serverless plugin offline to run it locally

Due to lack of time I didn't configure the aws conection and deployment to ECS or lamba

Also The unit test remaing broken due to the lack of time(given more time I would have finish those)

# Docker
- Run the following command to start the Docker containers:
   ```
   $ docker-compose up

- To test that the docker image runned without issues
   ```
   $ docker ps -a 

- Mongo Connection To connect and check the data you can use como GUI like MongoDb Compass and the following conectiuon string
  mongodb://root:password@localhost:6000/?authMechanism=DEFAULT

# Prerequisites and running commands
  $ docker-compose up

- Node version: Im using node version v14.19.1 please install using either that version directly from node installer via brew or usng Node Version Manager nvm
   ```
   $ brew update
   $ brew install nvm
   $ mkdir ~/.nvm
   $ vim ~/.bash_profile

- Install this Node version
   ```
   $ nvm install 11.7.0
   $ nvm use 11.7.0

- Install Serverless framework globally
   ```
   $ npm install -g serverless

- Run Docker image and pre load the data on the mongoDb
   ```  
   $ docker-compose up

- Install packages and run the project
  ```
  $ npm install
  $ npm run build
  $ serverless offline start

- To run the unit test use
  ```
  $ npm run test 
  Please note that the unit test are not finish due to lack of time to compete the test

