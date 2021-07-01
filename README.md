# Mounty Assignment Problem Statment 

  Create a Node.js App to build REST APIs for managing data of Users.

# Database Used 
  MongoDb

## Dependencies Used And Their Versions 

   "express": "~4.16.1"
   "mongoose": "^5.11.0",
   "nodemon": "^2.0.6"

## Cloning The Repo


## Installing dependencies
   npm install

## Running the application
   node app.js

## Endpoints: 

## - Create a new User
'http://localhost:3000/users
 
 Example Input 
 {
"name":"Siva",
"mobile":"9700315214",
"email":"Siva@gmail.com",
"street":"Hills",
"locality":"County",
"city":"Suncity",
"state":"Telstate",
"pincode":"500018",
"coordinatesType":"Point",
"coordinates":"79.019302,18.112436"
}

## - Update an Existing User
http://localhost:3000/users/update

Example Input 
{
"name":"Siva",
"mobile":"9700315214",
"email":"Siva@gmail.com",
"street":"Hills",
"locality":"County",
"city":"Suncity",
"state":"Telstate",
"pincode":"500018",
"coordinatesType":"Point",
"coordinates":"79.019302,18.112436"
}

## - Delete an User
http://localhost:3000/users/delete

Example Input
{ 
"mobile":"9700315210"
}

## --- Get all Users sorted by createdAt timestamp with Pagination
http://localhost:3000/users?sortBy=created&pageNumber=1

## --- Get all Users sorted by their distance from coordinates passed in the query param of the Endpoint. 
http://localhost:3000/users?sortBy=distance&pageNumber=1&lat=17.4399&lng=78.4983

