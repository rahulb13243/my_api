ARG NODE_VERSION=20.8.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm" , "start" , "dev" ]

