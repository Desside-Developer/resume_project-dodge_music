FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli
COPY . .
RUN npm run build
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
EXPOSE 80
CMD ["node", "dist/main"]
