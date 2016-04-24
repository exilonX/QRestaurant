#!/usr/bin/env bash
# stop all running docker containers
docker stop $(docker ps -a -q)
docker rm $(docker ps -aq)

# run container with mongo expose 27017 to localhost
docker run -v /home/ubuntu/data/mongo/db/:/data/db/ -p 27017:27017 --name mongo-dev --restart=always -d devnest/mongo-cfg:latest

# run container with redis
docker run -v /home/ubuntu/data/redis/:/data -p 6379:6379 --name redis-dev  --restart=always -d redis redis-server --appendonly yes