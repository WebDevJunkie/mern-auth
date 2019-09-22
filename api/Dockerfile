FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/mern-auth
WORKDIR /srv/app/mern-auth

COPY package.json /srv/app/mern-auth
COPY package-lock.json /srv/app/mern-auth

RUN npm install

COPY . /srv/app/mern-auth

CMD ["npm", "run", "server"]
