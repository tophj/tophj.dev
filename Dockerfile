# to build
# docker build -t tophj-dev -f Dockerfile .
#
# docker run -d -p 3000:3000 tophj-dev


FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
	git \
	nginx \
	nodejs \
	npm

# install npm dependencies
RUN npm install express \
	serve-favicon

COPY . /tophj.dev
COPY nginx/default /etc/nginx/sites-enabled/default

EXPOSE 3000
WORKDIR /tophj.dev
RUN nginx

# start the server and queue container multi-process hate
ENTRYPOINT ["nodejs", "server.js"]

