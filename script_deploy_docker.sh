# stop all running docker containers
docker stop $(docker ps -a -q)

# run container with mongo expose 27017 to localhost
docker run -v /home/ubuntu/data/mongo/db/:/data/db/ -p 27017:27017 --name mongo-dev --restart=always -d devnest/mongo-cfg:latest
