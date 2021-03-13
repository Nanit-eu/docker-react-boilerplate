docker stop  some-nginx
docker rm  some-nginx
docker build -t pwa_1 .
docker run --name some-nginx -d -p8004:80 pwa_1
