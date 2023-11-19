FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.production .env

EXPOSE 8080
CMD [ "npm", "start" ]