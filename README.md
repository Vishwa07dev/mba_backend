# MBA - Movie Booking Application  Backend [ Session 6]
## _Learning the development of RESTful APIs for backend_ 

This code base contains logic/structure  for creating the Restful APIs for the MBA app
## Features
Add authentication in theater APIs
Add authentication and authorization on admin APIs-
  1. Admins can Create/Update/Delete any movies.
  2. Admins can Create/Update/Delete any movies in any theater
  3. Admins can Create/Update/Delete any theaters
  4. Admin can update the details of any type of users.

Only authenticated user should be allowed to use any other API


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

---
## Changes done in this branch
Every API will require user to provide the access token

```sh
Headers :
x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvc2gwNyIsImlhdCI6MTY0OTU4OTcwMSwiZXhwIjoxNjQ5NTg5ODIxfQ.vkfb0G43B-Rv4-b9UzUSYDTX13972gqBWV_qhSaJmVs

GET calls will require the normal role, whereas as PUT/POST/DELETE will need admin priviledge
```



## Development

Want to improve? Great!
Make the changes and raise a PR. Reach out to me over kankvish@gmail.com

