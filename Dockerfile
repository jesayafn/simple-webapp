FROM docker.io/library/node:14.17.0-alpine

RUN mkdir /simple_webapp && mkdir /simple_webapp/src

COPY src /simple_webapp/src

COPY package.json /simple_webapp

WORKDIR /simple_webapp

RUN npm i

EXPOSE 80

ENTRYPOINT [ "npm","run","start" ]
