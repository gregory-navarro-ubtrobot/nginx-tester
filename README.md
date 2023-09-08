1. Starting the gateway server

First, build the docker image:
```
docker build -f ./Dockerfile -t nginx-tester .
```

Then, run the docker image:
```
docker run -p 80:80 -p 443:443 -v $(pwd)/conf:/etc/nginx/conf.d -v $(pwd)/certs/:/usr/share/certs/ nginx-tester
```