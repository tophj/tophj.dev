FROM nginx:1.19.1-alpine

RUN mkdir /usr/share/nginx/html/css
RUN mkdir /usr/share/nginx/html/js
COPY ./html/index.html /usr/share/nginx/html/index.html
COPY ./css/tophj-home.css /usr/share/nginx/html/css
COPY ./js/tophj-home.js /usr/share/nginx/html/js
COPY ./conf/tophj-dev.conf /etc/nginx/conf.d/tophj-dev.conf 
