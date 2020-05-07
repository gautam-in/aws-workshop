FROM node:12-alpine AS builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build && yarn --production

# And then copy over node_modules, etc from that stage to the smaller base image
FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
