[![Node.js CI](https://github.com/Nanit-eu/docker-react-boilerplate/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Nanit-eu/docker-react-boilerplate/actions/workflows/node.js.yml)


Create app
```
npx create-react-app my-app --template cra-template-pwa  
yarn 
```

Dev
=
Run dev server :
```
yarn run start
```

Docker
=
Docker:
```
yarn build
docker build -t pwa_1 .
docker run --name some-nginx -d -p8004:80 pwa_1 
```
http://localhost:8004/