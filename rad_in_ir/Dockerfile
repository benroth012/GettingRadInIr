FROM node:19-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install -g serve

COPY public ./public
COPY src ./src

RUN npm run build

EXPOSE 80/tcp

ENTRYPOINT ["serve", "-s", "build" ]
