# Stage 1: Build the application
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN echo "VITE_SERVER_URL=http://ec2-54-175-12-115.compute-1.amazonaws.com:3000" > .env
COPY . ./
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80