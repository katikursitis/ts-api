# ts-api
### Simple api with type script

#### The project is running with docker </br>
#### For running this project you need docker and docker-compose to be installed on you pc </br>
To build docker image use command </br>
* `sudo docker build -t ts-api:latest .` </br>
To up all services use command </br>
* `sudo docker-compose up` </br>
To stop services use ctrl + c </br>
To down all services (recomended at the end) </br>
* `sudo docker compose down` </br>

The project has to http routes </br>
    `"http://localhost:3000/login"` </br>
    `"http://localhost:3000/validate"` </br>


Project include integration tests with mock data </br>
`username: David` </br>
`password: test` </br>

After the all services is running with docker you can check requests manually with postman and also you can see logs and test results in terminal</br>


