FROM eu.gcr.io/fs-acc-test-cluster-1/devops/base-images-npm-base-image:latest as deps

WORKDIR /app

COPY ./package*.json ./
RUN npm install

FROM node:lts-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:lts-alpine AS runner

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "./build/index.js"]

