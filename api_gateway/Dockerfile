FROM node:carbon-slim

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE 8001
ENTRYPOINT ["sh", "./entrypoint.sh"]