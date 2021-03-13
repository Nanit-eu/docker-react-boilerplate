FROM node:10.15.1-alpine

WORKDIR /home/nodeapp
RUN yarn global add serve
RUN yarn add express morgan body-parser cors

COPY ./server /home/nodeapp
COPY build /home/nodeapp


EXPOSE 80

CMD node server.js