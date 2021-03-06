# MERN-auth

This is a simple MERN boilerplate to get a project up and running quickly with authentication built in. For anyone trying to get a quick project started with Node, Express and Mongo DB on the back end and React/Redux on the front end.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

To run this project you will need to install docker. There are two Dockerfiles one for the API and one for the Client. At the root of the project is a docker-compose file to run these simultaneously. 

### Installing

Pull down project and add a .env file at the root and in the api directory with the following variables:

```
/.env
API_HOST="http://localhost:5000/"
APP_SERVER_PORT=5000
REACT_APP_PORT=3000
```

```
/api/.env
DB_CONNECTION_STRING={YOUR CONNECTION STRING}
```

I created a free mongo db on https://www.mongodb.com/. You can follow the instructions there.

Run the following command at the root directory of the project:

```
docker-compose build
```

This will build the two container for the project to run.

When this complets run:

```
docker-compose up -d
```

This will run both containers simultaneously
