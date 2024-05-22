#! /usr/bin/env sh
cd ./client

npm i
npm run build

cd ../server

npm i
npm run build

cd ..

docker compose build
