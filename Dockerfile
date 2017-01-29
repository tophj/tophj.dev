FROM ubuntu:16.04

RUN apt-get update && apt-get install -y git \
	nginx \
	nodejs \
	npm

# install npm dependencies
RUN npm install express \
	serve-favicon

# pull down repo and replace nginx html with my html
RUN git clone https://github.com/tophj/tophj.us \
	&& cd tophj.us \
	&& git checkout dev \
	&& cp nginx/default /etc/nginx/sites-enabled/default

# start the server
RUN cd tophj.us \
	&& nodejs server.js

