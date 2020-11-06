## API

### Test

To run tests, simply run the command `npm test`.

### Start up

Simply run `docker-compose up --build`.

# Auth Routes

## Login User

METHOD - `POST`
Route - `http://localhost:4000/api/auth`
The following properties are needed

- username
- password

The `login` route generates a `token` which can be used as the `x-auth-token` header for all `protected routes`.

## Get logged in User

Method - `GET`
Route - `http://localhost:4000/api/auth`

# User Route

## Create User

Method - `POST`
Route - `http://localhost:4000/api/v1/users`

To create a user, the following attributes are needed.

- username
- password - 8 characters long and must include one uppercase character, a number and a special symbol.
- name
- lastName
- age
- role
  The `role` can be either `admin` or `client`.

# Product routes

## Create Product

Method - `POST`
Route - `http://localhost:4000/api/v1/products`
header - `x-auth-token`

The following properties are required.

- name
- description
- price

### Get Product

Method - `GET`
Route - `http://localhost:4000/api/v1/product/`
header - `x-auth-token`
This returns all products in the database

### Get Product by Id

Method - `GET`
Route - `http://localhost:4000/api/v1/product/:id`
header - `x-auth-token`
Where `id` is the id of the respective product

### Patch Product

Method - `PATCH`
Route - `http://localhost:4000/api/v1/product/:id`
header - `x-auth-token`
Where `id` is the id of the respective product

### Patch Product

Method - `DELETE`
Route - `http://localhost:4000/api/v1/product/:id`
header - `x-auth-token`
Where `id` is the id of the respective product
