FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install sqlite sqlite3

COPY . .

EXPOSE 5000
CMD ["node", "server.mjs"]