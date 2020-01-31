FROM node:12-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY api/index.js .
CMD ["node", "api/index.js"]