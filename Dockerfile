FROM node:12 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/public /usr/share/nginx/html
COPY nginx-spa.conf /etc/nginx/conf.d/nginx-spa.conf
CMD ["nginx", "-g", "daemon off;"]
