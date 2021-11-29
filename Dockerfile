FROM node:16

WORKDIR /hashiwokakero-back/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
