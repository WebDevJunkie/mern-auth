FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/mern-auth-client
WORKDIR /srv/app/mern-auth-client

COPY package.json /srv/app/mern-auth-client
COPY package-lock.json /srv/app/mern-auth-client

RUN npm install

COPY . /srv/app/mern-auth-client

CMD ["npm", "start"]
