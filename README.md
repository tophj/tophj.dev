# tophj.dev

## Deploying

1.) Build the dockerfile using docker / buildkit / etc.
```sh
$ docker build -t tophj-dev -f Dockerfile .
```

2.) Run the container, forwarding the node.js port
```sh
docker run -d -p 3000:3000 tophj-dev
```
