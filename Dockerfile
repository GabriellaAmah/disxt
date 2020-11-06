FROM node:12-alpine AS base

WORKDIR /usr/src/app

FROM base AS build

COPY package*.json .babelrc ./
RUN npm install
COPY ./src ./src
RUN npm run build
RUN npm prune --production
ENV DB_URL_LOCAL=mongodb://mongo:27017/disxt
ENV JWT_SECRET=SomerandomSecret

FROM base AS release

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
USER node
EXPOSE 4000

CMD [ "node", "./dist/server/server.js" ]