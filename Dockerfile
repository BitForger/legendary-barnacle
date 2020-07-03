FROM node:12 as build
WORKDIR /home/node/app
ARG REACT_APP_GITHUB_AUTH_TOKEN
ARG REACT_APP_GITHUB_URI

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install

COPY src /home/node/app/src
COPY scripts /home/node/app/scripts
COPY public /home/node/app/public
COPY config /home/node/app/config

RUN yarn build

FROM nginx:alpine
WORKDIR /var/www/app

ADD nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /home/node/app/build /var/www/app

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
