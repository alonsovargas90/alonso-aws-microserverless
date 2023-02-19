# alonso-aws-microserverless
A Tecnical challenge for interview

This is a sample app using serverless microservices. As Db we are using mongodb and docker to initialize and consume the data.

Also Im using serverless framework with serverless plugin offline to run it locally

Due to lack of time I didn't configure the aws conection and deployment to ECS or lamba

Also The unit test remaing broken due to the lack of time(given more time I would have finish those)

# Docker
Run the following command to start the Docker containers:
  docker-compose up

To test that the docker image runned without issues
  docker ps -a 

#Mongo Connection String
  mongodb://root:password@localhost:6000/?authMechanism=DEFAULT

# Prerequisites and running commands
 docker-compose build
  docker-compose up

  npm install -g serverless
  npm install
  npm run build
  serverless offline start

