FROM node:lts-bullseye AS build

WORKDIR /app
COPY package*.json .
RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build
RUN npm prune --production

FROM node:lts-bullseye AS run

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/start.sh ./start.sh
RUN chmod +x ./start.sh

EXPOSE 3000
ENTRYPOINT ["node", "build"]