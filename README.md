
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