# Use Nginx to serve the static site
FROM nginx:alpine

# Copy custom nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app to the Nginx directory
COPY /dist/web-pad/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]