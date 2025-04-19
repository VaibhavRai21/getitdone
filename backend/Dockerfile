FROM node:18

WORKDIR /app

# Copy only dependency files first to leverage Docker cache
COPY package*.json ./

# Install all dependencies declared in package.json
RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 5000

CMD ["node", "server.mjs"]
