# DHL API Service
[![Build Status](https://skydropx.semaphoreci.com/badges/dhl-api-service/branches/master.svg?style=shields&key=deb774a9-73b9-41bc-82cb-d28507df2431)](https://skydropx.semaphoreci.com/projects/dhl-api-service)
[![codecov](https://codecov.io/gh/Skydropx/dhl-api-service/branch/master/graph/badge.svg?token=R3IHP0XWN2)](undefined)

External Dhl microservice.

- Node >= v14.0.0
- npm  >=  v6.0.0
- pm2  >=  2.6.1

To start the server:

* Install dependencies with `npm install`
* Start NodeJS autorestart mode `npm run watch`
* Start test `npm run test`

```bash
cp test/credentials.example.js test/credentials.js
```

* Start using ecosystem.yml `pm2 start ecosystem.yml --env development`
* Short mode `npm run dev`

Server run in http://localhost:3000.


```bash
cp ecosystem.yml ecosystem.production.yml
```

* Start using ecosystem.yml with production env `pm2 start ecosystem.production.yml --env production`
* Short comand `npm run prod`


Production url http://ec2-34-211-1-34.us-west-2.compute.amazonaws.com:3000

## How to fix "node-gyp errors"
FIx npm/node-gyp Error: not found: make on Ubuntu
```
sudo apt-get install build-essential
```

## PM2 Logs

Displaying logs of a specified process or of all processes in real-time.
```
pm2 logs
pm2 monit
```
Logs path
```
/home/{USER}/.pm2/logs| //LOGS PATH

ls -l --block-size=M

cat| /home/ubuntu/.pm2/logs/{name}-out-0.log | grep -i -C 30 "500"
```

This will delete all log entries from every managed process.
```
pm2 flush
```

## API v1

``` shell
POST api/v1/label/create  LabelControllers/label#create
POST api/v1/pickup/create PickupControllers/pickup#create
GET  api/v1/mydhl/commodity-code DhlControllers/pickup#getAll
```

| Method | Route                        | Description     |
|--------|------------------------------|-----------------|
| POST   | api/v1/label/create          | create new label|
| POST   | api/v1/mydhl/commodity-code  | commodity codes |
| POST   | api/v1/pickup/create         | create pickup order|

### /api/v1/label/create

Create new label

### /api/v1/pickup/create

Create new pickup order