FROM node:14.16-alpine

COPY . .

RUN yarn install

CMD echo 'Hello World!'
