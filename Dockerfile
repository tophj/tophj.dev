FROM ubuntu:16.04

RUN apt-get update && apt-get install -y git \
	nginx \
	nodejs \
	npm

# install npm dependencies
RUN npm install express
RUN npm install mongoose

# pull down repo and replace nginx html with my html
RUN git clone https://github.com/tophj/tophj.us \
	&& cd tophj.us \
	&& cp nginx/default /etc/nginx/sites-enabled/default \
	&& nginx -s reload

# start the server
RUN cd tophj.us \
	&& node server.js

