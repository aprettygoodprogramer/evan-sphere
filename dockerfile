# Step 1: Use an official Node.js image as the base
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use a lightweight web server to serve the built app (Nginx in this case)
FROM nginx:alpine

# Step 8: Copy the build folder from the build stage to the Nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port on which the app will run
EXPOSE 80

# Step 10: Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]