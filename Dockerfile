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

# Production stage - ใช้ nginx serve static files
FROM nginx:alpine

# Copy built app ไปยัง nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config (ถ้ามี)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]