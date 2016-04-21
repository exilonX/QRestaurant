# QRestaurant
QRestataurant - web application for easy ordering in a restaurant


========================================
Installing mongodb in docker:
  docker run --name mongo-dev -p 27017:27017 -v /opt/momgdb:/home/ubuntu/data/mongo -d mongo

  --name - the name of the docker container
  -p - specify this if you want to expose the port on localhost (if you don't do this you will have to access mongodb from the ip of the container - docker inspect container-name to find out the ip of the container)
  -v - mount a docker folder into a local folder to avoid data loss.
  -d the name of the container
========================================


0. Prerequisites:
  - Nodejs  >= 0.10 (tested with 0.12.7 and )
  - npm installed (usually comes with nodejs installation)
  - bower installed (npm install -g bower)
  - mongodb - installed and running




1. Running the server:
  - run npm install
  - run bower install
