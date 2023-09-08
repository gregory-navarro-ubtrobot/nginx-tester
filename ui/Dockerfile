FROM python:3

WORKDIR /usr/src/app

# copp all files in ui folder to /usr/src/app
COPY . .

EXPOSE 5500

CMD [ "python", "-m", "http.server", "5500" ]