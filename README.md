# MBA - Movie Booking Application  Backend [ Session 4]
## _Learning the development of RESTful APIs for backend_ 

This code base contains logic/structure  for creating the Restful APIs for the MBA app
## Features
1. Set up data model for user 
2. User registration
3. Implementation and validation of JWT token
4. Login API
5. Update password
6. Registration of the system admin and the client


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
#### 1. Register a customer 

```sh
POST /mba/api/v1/auth/signup
Sample request body :
{
  "name" : "Roshan Kumar",
  "userId": "rosh07",
  "email": "rosh@gmail.com",
  "userType": "CUSTOMER",
  "password": "Welcome"

}

Sample response body :
{
    "name": "Roshan Kumar",
    "userId": "rosh07",
    "email": "rosh@gmail.com",
    "userTypes": "CUSTOMER",
    "userStatus": "APPROVED",
    "createdAt": "2022-04-05T08:56:52.080Z",
    "updatedAt": "2022-04-05T08:56:52.080Z"
}
```


---
#### 2. Login a customer

```sh
PUT /mba/api/v1/auth/signin
Sample request body :
{
    "userId" : "rosh07", 
    "password" : "Welcome"
}

Sample response body :
{
    "name": "Roshan Kumar",
    "userId": "rosh07",
    "email": "rosh@gmail.com",
    "userTypes": "CUSTOMER",
    "userStatus": "APPROVED",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTE0OTA0MCwiZXhwIjoxNjQ5MTQ5MTYwfQ.6kKDzImMvJ8qlGQQk6p3LUfifCjW4MRvlR2R5ELIRGc"
}

```
---
#### 3. Update the password for a logged in user
```sh
GET /crm/api/v1/users

Headers :
x-access-token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTE0OTA0MCwiZXhwIjoxNjQ5MTQ5MTYwfQ.6kKDzImMvJ8qlGQQk6p3LUfifCjW4MRvlR2R5ELIRGc"

Sample Request body :
{
    "password" : "welcome12345"
}

Sample response body :
{
    "message": "Unauthorized!"
}
```
---
#### 4. Adming approval for the client registration
```sh
PUT /crm/api/v1/users/rohit07
Headers :
x-access-token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTE0OTA0MCwiZXhwIjoxNjQ5MTQ5MTYwfQ.6kKDzImMvJ8qlGQQk6p3LUfifCjW4MRvlR2R5ELIRGc"

Sample Request body :
{
    "name": "Rohit Kumar",
    "userTypes": "CLIENT",
    "userStatus": "APPROVED"
}
Sample response body :
{
    "message": "User record has been updated successfully"
}
```

---


POSTMAN collection [link](https://www.getpostman.com/collections/281573b2ce823fc6d2d9)


## Development

Want to improve? Great!
Make the changes and raise a PR. Reach out to me over kankvish@gmail.com

