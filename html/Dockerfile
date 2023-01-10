# Build
FROM node:16-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build

# Deploy
FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf_orig 
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ /var/www/html
EXPOSE 80
# COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
# CMD ["nginx", "-g", "daemon off;"]
