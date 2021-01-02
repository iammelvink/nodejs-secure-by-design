# nodejs-secure-by-design

## Repository for my nodejs-secure-by-design project

Find out how to secure your app. Author Melvin Kisten tackles CRUD functions and connects the system to a database of MongoDB (Document database). Created a bare backend to demonstrate authentication and JWT using JavaScript. The backend was created using NodeJS, Express, MongoDB. I also used Postman to test my end points. 

1. Methodologies/Project Management:

   - Agile

2. Coding Practices:

   - OOP (Object Oriented Programming)

3. Programming Languages/Frameworks:
   - JavaScript
   - NodeJS
   - Express
   - MongoDB
   - Postman

## Instructions

1. Make sure you have these installed

   - [NodeJS](https://nodejs.org/en/download/ "NodeJS")
      - I used LTS node version 14.15.3 and npm version 6.14.9 at time of creation
   - [MongoDB](https://www.mongodb.com/try/download/community "MongoDB")
      - I used mongo version 4.4.2 at time of creation
   - [Postman](https://www.postman.com/downloads/ "Postman")
      - I used postman version 7.36.1 at time of creation

2. Clone this repository into your local machine using the terminal (mac) or [Gitbash (PC)](https://git-scm.com/download/win "Gitbash (PC)")

   ```
   > git clone https://github.com/iammelvink/nodejs-secure-by-design.git
   ```

3. Start MongoDB

   ```
   > mongod
   ```

4. Setup (running on port 8080)

   ```
   > cd nodejs-secure-by-design
   ```

   ```
   > npm i
   ```

5. Compiles and hot-reloads for development

   ```
   > npm run server
   ```

6. Enjoy!

## Exploring app using Postman

1. Register: Open Postman then go to Body > raw > JSON

   - http://localhost:8000/auth/register (POST request)
     - Paste:

        ```
            {
            "username": "any_name",
            "email": "any_email@email.com",
            "password": "any_password"
            }
        ```

2. Login: Open Postman then go to Body > raw > JSON

   - http://localhost:8000/auth/login (POST request)
     - Paste (same info as when you've registered):

        ```
            {
            "username": "any_name",
            "email": "any_email@email.com",
            "password": "any_password"
            }
        ```

3. Now copy JWT in Body

   ```
    {
    "token": "<your-token>"
    }
   ```

4. Now go to Headers

    - Paste for key
        ```
        Authorization
        ```
    - Paste for  value
        ```
        JWT <your-token>
        ```

5. Now try to perform basic CRUD operations as follows:

   - **Create** new contact: Open Postman then go to Body > raw > JSON
   - http://localhost:8000/api/contacts (POST request)
     - Paste:

        ```
            {
            "firstName": "any_name",
            "lastName": "any_name"
            }
        ```

   - **Read** all contacts: Open Postman then go to Body > raw > JSON
   - http://localhost:8000/api/contacts (GET request)
     - Paste:

        ```
            {
            "firstName": "any_name",
            "lastName": "any_name"
            }
        ```

   - **Read** contact by id: Open Postman then go to Body > raw > JSON
   - Copy '_id' field
   - http://localhost:8000/api/contact/\<_id> (GET request)

   - **Update** contact by id: Open Postman then go to Body > raw > JSON
   - Copy '_id' field
   - http://localhost:8000/api/contact/\<_id> (PUT request)
     - Paste:

        ```
            {
            "firstName": "any_name",
            "lastName": "any_name"
            }
        ```

   - **Delete** contact by id: go to Body > raw > JSON
   - Copy '_id' field
   - http://localhost:8000/api/contact/\<_id> (DELETE request)

6. Enjoy!


## More Stuff

Check out some other stuff on [Melvin K](https://github.com/iammelvink "Melvin K GitHub page"). Read about JSON Web Token [https://jwt.io/introduction](https://jwt.io/introduction). Find out what's inside your token here [https://jwt.io](https://jwt.io)