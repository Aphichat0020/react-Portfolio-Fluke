# สร้าง React Portfolio App ด้วย Docker
FROM node:18-alpine AS build

# ตั้ง working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# List files to debug
RUN ls -la dist/

# Production stage - ใช้ nginx serve static files
FROM nginx:alpine

# Copy built app ไปยัง nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create nginx directories and set permissions
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]