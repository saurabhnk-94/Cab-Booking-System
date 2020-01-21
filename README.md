# Cab Allocation System

This application serves like a real time rides just like a customer can book a cab, available drivers can accept the rides and here only the customer can end the ride.

 Further Functionalities and Assumptions:

1. Each Customer can request only one cab at a time.
2. Each driver can accept only one ride at a time.
3. Every ride has 3 status : REQUESTED, ACCEPTED and DONE.
4. Customers and Drivers have unique names.


### Prerequisites 

You need to install the following packages for backend:

```
asgiref==3.2.3
Django==3.0.2
django-cors-headers==3.2.1
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
sqlparse==0.3.0

```
### Installing

Clone the repository

```
https://github.com/saurabhnk-94/cabAllocationSystem.git
```
Setting up your virtual environment:

```
python3 -m venv .env
```
Activate the Virtual Environment:
```
source .env/bin/activate
```

After all these steps go to the backend directory(cabAllocationSystem/backend) and there you can find a file called requirement.txt and then type the following code in your terminal:
```
pip install requirements.txt
```
Then to run the server, go to the directory 'cabAllocationSystem/backend/cabSystem/' and type the following code in terminal :
```
python3 manage.py runserver
```
Your server is set up with all the APIs active.

For Frontend which is ReactJS, Dependencies are: 
```
"axios": "^0.19.1",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-redux": "^7.1.3",
"react-router": "^5.1.2",
"react-router-dom": "^5.1.2",
"react-scripts": "0.9.5",
"redux": "^4.0.5",
"redux-thunk": "^2.3.0"
```
Kindly note redux is not implemented.

Go to 'cabAllocationSystem/frontend/caballocationsystem/' and type the following code in the terminal:
```
npm install
```

Then to run the server, type the code in terminal:
```
npm start
```
The server has been set up and you are up to work on the application.
    
To make this project following Languages and Libraries have been used:
#### Frontend : React Js;
#### Backend : Python/Django;
#### Database : PostgreSQL;


P.S:The aesthetics of the page is at the most basic level. Some more work could be put in to beautify the UI. The project has been completed keeping the sole aim as working completion rather than aesthetically pleasing.




