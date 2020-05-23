FROM node:12
WORKDIR /home/app
ENV PATH /home/app/node_modules/.bin:$PATH

COPY package* ./
COPY tsconfig.json .

RUN yarn install

COPY . ./

CMD ["yarn","start"]
