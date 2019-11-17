FROM node:9.11.1

RUN mkdir /ts-api

WORKDIR /ts-api

COPY package.json .

RUN npm install

ADD . .

RUN npm run build

CMD ["node", "./lib/index.js"]