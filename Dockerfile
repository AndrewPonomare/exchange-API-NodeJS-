FROM node:latest

WORKDIR /exchange-API

COPY package*.json /exchange-API

RUN npm install

COPY . .