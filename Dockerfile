# to build
# docker build -t tophj-us -f Dockerfile .
#
# docker run -d -p 3000:3000 tophj-us


FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
	git \
	nginx \
	nodejs \
	npm

# install npm dependencies
RUN npm install express \
	serve-favicon

# pull down repo and replace nginx html with my html
#RUN git clone https://github.com/tophj/tophj.us \
#	&& cd tophj.us \
#	&& git checkout dev \
#	&& cp nginx/default /etc/nginx/sites-enabled/default

COPY . /
COPY nginx/default /etc/nginx/sites-enabled/default

EXPOSE 3000
WORKDIR tophj.us
RUN nginx

# start the server and queue container multi-process hate
ENTRYPOINT ["nodejs", "server.js"]

