docker build -t my-python-app-test .

docker run -it --rm -p 5500:5500  --name my-running-app my-python-app-test