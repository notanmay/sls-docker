FROM node:14.16-alpine

COPY . .

RUN yarn install

WORKDIR ./src/express

CMD ["node", "app.js"]
