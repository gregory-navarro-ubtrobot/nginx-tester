# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the server script from the current directory to the container
COPY ./server.js /app/server.js

# Install any dependencies
COPY ./package*.json ./
RUN npm install

# Expose any necessary ports (if your Python script listens on a specific port)
EXPOSE 8765

# Define the command to run your script
CMD ["node", "server.js"]
