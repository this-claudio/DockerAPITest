FROM node:current-slim

WORKDIR /appjs

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm" ,"start"]
