[![Node.js CI](https://github.com/Nanit-eu/docker-react-boilerplate/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Nanit-eu/docker-react-boilerplate/actions/workflows/node.js.yml)


Dev
=
Run dev server :
```
yarn start

 or
 
HTTPS=true yarn start
```
Testing & coverage :
```
yarn test

yarn coverage

SCREENSHOT_MODE=local jest -c jest.screenshot.config.js 
yarn test --watchAll
ps aux |grep Chromium|grep puppeteer| awk {'print $2'}| xargs -n 1 kill -9

```

Docker
=
Docker:
```
./docker_run.sh

or

yarn build
docker build -t pwa_1 .
docker run --name some-nginx -d -p8004:80 pwa_1 
```
http://localhost:8004/