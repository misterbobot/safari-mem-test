FROM nginx:1.13.3-alpine

RUN rm /usr/share/nginx/html/index.html

RUN chown nginx:nginx /usr/share/nginx/html/*