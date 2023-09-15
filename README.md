1. To build and run the project (consisting of three containers: ui, nginx, ws), use docker compose:
```docker compose -f docker-compose.yml up --remove-orphans```

2. To use the test interface, open the browser at https://localhost. 

3. The testing process is as follows:
- Open the js console in the browser.
- Make sure the console with the docker containers is open.
- Using the buttons on the test interface, try to establish a connection with the websockets server.
- Using both consoles and the test interface, observe the process of establishing a connection, and make necessary changes to the nginx configuration file. After making changes, exec into the nginx container and reload the nginx configuration file using the command ```nginx -s reload```.
- If a connection is established using an nginx reverse proxy, the colored circle will turn green. If a connection is established using ws://<host>:<port>, the circle will turn yellow. Otherwise, the circle will be red.

4. After testing is complete, stop the containers using the command ```docker compose down```.


