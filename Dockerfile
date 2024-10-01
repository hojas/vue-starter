FROM node:20.17.0-alpine AS builder

WORKDIR /opt/app
COPY package.json pnpm-lock.yaml /opt/app/
RUN corepack enable && pnpm i

COPY . .
RUN pnpm build


FROM nginx:1.27.1-alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /opt/app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
