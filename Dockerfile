# Use slim to decrease image size
FROM node:current-slim
LABEL authors="Brandon Paulsen"

RUN apt update
# Need to pipe yes since using slim requires dependencies to be installed
RUN yes | apt install curl
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies first to take advantage of Docker caching
COPY package*.json .
RUN npm install

# Copy rest of project
COPY . /app

RUN npm ci --only=production

EXPOSE 8008

CMD ["npm", "start"]
