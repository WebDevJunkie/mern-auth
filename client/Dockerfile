FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/follow-through-client
WORKDIR /srv/app/follow-through-client

COPY package.json /srv/app/follow-through-client
COPY package-lock.json /srv/app/follow-through-client

RUN npm install

COPY . /srv/app/follow-through-client

CMD ["npm", "start"]