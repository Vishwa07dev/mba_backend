# MBA - Movie Booking Application  Backend [ Session 7]
## _Learning the development of RESTful APIs for backend_ 

This code base contains logic/structure  for creating the Restful APIs for the MBA app
## Features
1. Set up data model for booking and transaction
2. Authenticated APIs for allowing authenticated customers to perform booking
3. Ability to cancel the booking 
4. Ability to complete payment within a given time frame 


## How is the code organized in this repo ?
The whole repo is divided into multiple branches. Each branch contains code for a specific concept. For example _session1_ has the code base for movie CRUD APIs . Each branch is built on the top of the previous branch

## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Mongo DB locally installed and running

## Tech
- Node.js
- Mongodb


## Installation

this app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd mba
npm install
npm run devStart
```


## Rest endpoints
#### 1. Create a booking 

```sh
POST /mba/api/v1/bookings/
Headers :
x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTY5NzEyNywiZXhwIjoxNjQ5Njk3MjQ3fQ.hFSMQjWUYOL8HTuYOGprzA7tVk168PooOo8qUSapPAo
Sample request body :
{
    "theatreId":"62546161476bcd5e3ff6e1b3",
    "movieId" : "62546161476bcd5e3ff6e1a8",
    "timing" : "4/10/2022 4 PM",
    "noOfSeats" :5
}

Sample response body :
{
    "theatreId": "62546161476bcd5e3ff6e1b3",
    "movieId": "62546161476bcd5e3ff6e1a8",
    "userId": "62546165476bcd5e3ff6e1c5",
    "timing": "4/10/2022 4 PM",
    "status": "IN_PROGRESS",
    "noOfSeats": 5,
    "totalCost": 750,
    "_id": "62546194476bcd5e3ff6e1cb",
    "createdAt": "2022-04-11T17:12:52.249Z",
    "updatedAt": "2022-04-11T17:12:52.249Z",
    "__v": 0
}
```


---
#### 2. Get all bookings

```sh
GET /mba/api/v1/bookings
Headers:
x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTY5ODk0NywiZXhwIjoxNjQ5Njk5MDY3fQ.tBgrZ2U-EpfGQJR53CbcTEw67Ww5gjLiyEeRv6vs190

Sample response body :
[
{
    "_id": "62546194476bcd5e3ff6e1cb",
    "theatreId": "62546161476bcd5e3ff6e1b3",
    "movieId": "62546161476bcd5e3ff6e1a8",
    "userId": "62546165476bcd5e3ff6e1c5",
    "timing": "4/10/2022 4 PM",
    "status": "EXPIRED",
    "noOfSeats": 5,
    "totalCost": 750,
    "createdAt": "2022-04-11T17:12:52.249Z",
    "updatedAt": "2022-04-11T17:12:52.249Z",
    "__v": 0
}
]

```
---
#### 3. Get booking based on id
```sh
GET /mba/api/v1/bookings/62546194476bcd5e3ff6e1cb

Headers :
x-access-token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTE0OTA0MCwiZXhwIjoxNjQ5MTQ5MTYwfQ.6kKDzImMvJ8qlGQQk6p3LUfifCjW4MRvlR2R5ELIRGc"


Sample response body :
{
    "_id": "62546194476bcd5e3ff6e1cb",
    "theatreId": "62546161476bcd5e3ff6e1b3",
    "movieId": "62546161476bcd5e3ff6e1a8",
    "userId": "62546165476bcd5e3ff6e1c5",
    "timing": "4/10/2022 4 PM",
    "status": "EXPIRED",
    "noOfSeats": 5,
    "totalCost": 750,
    "createdAt": "2022-04-11T17:12:52.249Z",
    "updatedAt": "2022-04-11T17:12:52.249Z",
    "__v": 0
}
```
---
#### 4. Create Payment
```sh
PUT /mba/api/v1/payments/
Headers :
x-access-token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTE0OTA0MCwiZXhwIjoxNjQ5MTQ5MTYwfQ.6kKDzImMvJ8qlGQQk6p3LUfifCjW4MRvlR2R5ELIRGc"

Sample Request body :
{
    "bookingId": "62546194476bcd5e3ff6e1cb", 
    "amount": 750
}
Sample response body :
{
    "bookingId": "625469a4347919f7f7b5ce86",
    "amount": 750,
    "status": "SUCCESS",
    "_id": "625469bb347919f7f7b5ce8a",
    "createdAt": "2022-04-11T17:47:39.089Z",
    "updatedAt": "2022-04-11T17:47:39.089Z",
    "__v": 0
}
```

---


POSTMAN collection [link](https://www.getpostman.com/collections/281573b2ce823fc6d2d9)


## Development

Want to improve? Great!
Make the changes and raise a PR. Reach out to me over kankvish@gmail.com


