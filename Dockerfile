# Step 1: Build the React app
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Build the React app
RUN npm run build

FROM httpd:2.4
WORKDIR /usr/local/apache2/htdocs/

RUN rm -rf /usr/local/apache2/htdocs/*

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]