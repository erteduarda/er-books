FROM node:18
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENTRYPOINT npm start
