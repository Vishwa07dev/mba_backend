# MBA - Movie Booking Application  Backend [ Session 3]
## _Learning the development of RESTful APIs for backend_ 

This code base contains logic/structure  for creating the Restful APIs for the MBA app
## Features
  1. Add the movies inside a theatre
  2. Remove the movie inside the theatre
  2. Get the list of heatres in which a movie is running.
  3. Search if a movie is running in any theatres
  4. Search if a movie is running in any specific theatres



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
#### 1. Add the movies inside a theatre 

```sh
PUT /mba/api/v1/theatres/624980220a3824f6d42e1a37/movies
Sample request body :
{
    "movieIds" : ["624980220a3824f6d42e1a2e", "624980220a3824f6d42e1a2c"],
    "insert" :true
   
}

Sample response body :
{
    "_id": "6249881beff18ca71e384bd3",
    "name": "FunCinemas",
    "description": "Top class theatre",
    "city": "Bangalore",
    "pinCode": 560052,
    "movies": [
        "6249881beff18ca71e384bc8",
        "6249881beff18ca71e384bca",
        "6249881beff18ca71e384bcc",
        "624980220a3824f6d42e1a2e",
        "624980220a3824f6d42e1a2c"
    ],
    "createdAt": "2022-04-03T11:42:19.839Z",
    "updatedAt": "2022-04-03T11:42:19.839Z",
    "__v": 1
}
```


---
#### 2. Remove the movies inside a theatre

```sh
PUT /mba/api/v1/theatres/624980220a3824f6d42e1a37/movies
Sample request body :
{
    "movieIds" : ["624980220a3824f6d42e1a2e", "624980220a3824f6d42e1a2c"],
    "insert" :false
   
}

Sample response body :
{
    "_id": "624980220a3824f6d42e1a37",
    "name": "FunCinemas",
    "description": "Top class theatre",
    "city": "Bangalore",
    "pinCode": 560052,
    "movies": [],
    "createdAt": "2022-04-03T11:08:18.168Z",
    "updatedAt": "2022-04-03T11:08:18.168Z",
    "__v": 4
}

```
---
#### 3. Get the list of theatres in which a movie is running
```sh
GET /mba/api/v1/theatres?movieId=6249881beff18ca71e384bc8

Sample response body :
[
    {
        "_id": "6249881beff18ca71e384bd3",
        "name": "FunCinemas",
        "description": "Top class theatre",
        "city": "Bangalore",
        "pinCode": 560052,
        "movies": [
            "6249881beff18ca71e384bc8",
            "6249881beff18ca71e384bca",
            "6249881beff18ca71e384bcc",
            "624980220a3824f6d42e1a2e",
            "624980220a3824f6d42e1a2c"
        ],
        "createdAt": "2022-04-03T11:42:19.839Z",
        "updatedAt": "2022-04-03T11:42:19.839Z",
        "__v": 1
    },
    {
        "_id": "6249881beff18ca71e384bd5",
        "name": "PVR Cinemas - Kormangala",
        "description": "PVR franchise theatre",
        "city": "Bangalore",
        "pinCode": 560095,
        "movies": [
            "6249881beff18ca71e384bc8",
            "6249881beff18ca71e384bca",
            "6249881beff18ca71e384bce"
        ],
        "createdAt": "2022-04-03T11:42:19.882Z",
        "updatedAt": "2022-04-03T11:42:19.882Z",
        "__v": 0
    },
    {
        "_id": "6249881beff18ca71e384bd7",
        "name": "IMax",
        "description": "IMax franchise theatre",
        "city": "Bangalore",
        "pinCode": 560095,
        "movies": [
            "6249881beff18ca71e384bc8",
            "6249881beff18ca71e384bce"
        ],
        "createdAt": "2022-04-03T11:42:19.885Z",
        "updatedAt": "2022-04-03T11:42:19.885Z",
        "__v": 0
    }
]
```
---
#### 4. Search if a movie is running in any specific theatre
```sh
GET /mba/api/v1/theatres/6249881beff18ca71e384bd3/movies/6249881beff18ca71e384bc8

Sample response body :
{
    "message": "Movie is present"
}
```

---


POSTMAN collection [link](https://www.getpostman.com/collections/281573b2ce823fc6d2d9)


## Development

Want to improve? Great!
Make the changes and raise a PR. Reach out to me over kankvish@gmail.com

