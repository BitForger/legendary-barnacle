FROM node:alpine as build
WORKDIR /home/node/app
ARG REACT_APP_GITHUB_AUTH_TOKEN
ARG REACT_APP_GITHUB_URI

COPY . /home/node/app
RUN yarn install

RUN yarn build

FROM nginx:alpine
WORKDIR /var/www/app

ADD nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /home/node/app/build /var/www/app

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
