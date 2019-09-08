FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/follow-through-api
WORKDIR /srv/app/follow-through-api

COPY package.json /srv/app/follow-through-api
COPY package-lock.json /srv/app/follow-through-api

RUN npm install

COPY . /srv/app/follow-through-api

CMD ["npm", "run", "server"]
