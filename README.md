1. Starting the gateway server

First, build the docker image:
```
docker build -f ./Dockerfile -t nginx-tester .
```

Then, run the docker image:
```
docker run -p 80:80 -p 443:443 -v $(pwd)/conf:/etc/nginx/conf.d -v $(pwd)/certs/:/usr/share/certs/ nginx-tester
```

2. To run the web server, run the following command:
```
python3 -m http.server 5500
```

3. To run the websocket server, run the following command:
```
node server.js
``` 

