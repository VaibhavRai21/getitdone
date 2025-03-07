# Use an official Nginx image as the base
FROM nginx:latest  

# Copy local project files into the container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80  

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
