# Use Nginx for static frontend hosting
FROM nginx:alpine

# Remove default Nginx web content
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend files
COPY . /usr/share/nginx/html

# Expose frontend port
EXPOSE 80
