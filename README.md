# Docker-Compose with Node and Mongo Starter Pack
This is a starter pack for using docker-compose with a Node and MongoDB based application. 
It is not meant for production, but could easily be properly prepared for that purpose. 


### Prerequisites 
You will need docker and docker-compose installed to use this. 

You can test that each are installed on your machine by running 

```
$ docker -v
$ docker-compose -v
```

If both of those return versions instead of erroring out, you're ready to go. 

### Dive in
If you want to jump right into it, follow these steps 

```
$ cd src/app/ && npm install
```

Then, navigate back to the project root, where the `docker-compose.yml` file is located, 
and run 

```
$ docker-compose up
```

### Improvements to make
This is purposefully a very barebones container. Here's a list of improvements you should consider
making to solidify your docker knowledge: 

- Create your Mongo container with a user and password 
- Edit your connection string in `server.js` to connect with your user and password credentials 
- Serve assets with nginx instead of Express (nginx has tons of built in goodies and is much faster than Express) 
- Persist data on the host machine with a volume for the mongo container.

Note: DO NOT go to production without setting up a user and password for your mongo container. 
Having insecured data like that is both irresponsible and dangerous. DO NOT USE THIS IN PRODUCTION unless you 
have specified user credentials. 
