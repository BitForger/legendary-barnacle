FROM node:12
WORKDIR /home/app
ENV PATH /home/app/node_modules/.bin:$PATH

COPY package* ./
COPY tsconfig.json .

RUN yarn install
RUN npm install -g react-scripts

COPY . ./

CMD ["yarn","start"]
