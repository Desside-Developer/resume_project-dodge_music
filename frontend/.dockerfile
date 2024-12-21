FROM node:20-alpine AS build
WORKDIR /application/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY frontend.conf /etc/nginx/nginx.conf
COPY --from=build /application/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
