FROM nginx:latest 
WORKDIR /usr
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./output/footer /usr/share/nginx/html
WORKDIR /usr/share/nginx/html