# tophj.us

## Installing on a new droplet

These are the steps for running this site on a new DigitalOcean droplet.

1.) Create a new droplet with the application: MEAN stack, and add an ssh key using this [guide][DO-ssh-guide]. (Don't forget step six!)

2.) ssh into the droplet, and clone the repo:
```sh
$ ssh root@'droplet_ip_addr'
$ git clone 'repo_link'
```

3.) npm install all the depencies required by ~/tophj.us/server.js. These are the common ones:

```sh
$ npm install express
$ npm install mongoose
```

4.) Start up a new screen, and run:
```sh
$ node server.js
```

5.) Install nginx, which will be used to create a proxy route between the domain and the localhost:
```sh
$ sudo apt-get install nginx
```

6.) Copy over ~/tophj.us/nginx/default to /etc/nginx/sites-enabled (Ubuntu). Then restart nginx.
```sh
$ cp ~/tophj.us/nginx/default /etc/nginx/sites-enabled/default
$ nginx -s reload
```

7.) Navigate to http://tophj.us and hopefully it should appear


   [DO-ssh-guide]: <https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets>
  
   







