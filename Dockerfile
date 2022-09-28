FROM node:14

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 1234

CMD ["node", "index.js"]


