# Products API

A very simple REST CRUD API project made with Node.js, Express.js and MongoDB with Mongoose.
This was made as a small learning project to put theory into practice.
I put an effort to follow good coding practices, such as clean code, MVC architecture (without the views), error handling and factory functions.

## How to install:

1. Download the files onto your computer.
2. Create a **_config.env_** file inside the root folder.
3. Inside the config.env file put the following variables:
   - DATABASE=_your database connection string_
   - PORT=_your port of choice, default is 3000_
4. In the terminal run _npm install_.

I have included some mock data in the _data_ folder from [DummyJSON](https://dummyjson.com/). If you wish to import this data into your database, run the command _npm run import-data_. You can also delete all data in your database with the command _npm run delete-data_.

## How to use:

To start the app, run the command _npm run start_. If you wish to start the app in development mode to have a bit more detail when getting responses and errors, run the command _npm run start:dev_.

### GET All

To get all products you hit the **/api/v1/products** endpoint. You can add more query fields to specify your search:

#### Sorting

You can sort the products by a certain field. For example, **/api/v1/products?sort=price** will sort the products by price in a ascending order and **/api/v1/products/?sort=-price** will sort them in a descending order.

#### Fields

You can include only certain fields by naming them in the _fields_ part. For example, **/api/v1/products?fields=title,price** will only return the title and price for each product, while **/api/v1/products?fields=-title** will return everything but the title.

#### Pagination

By specifying the _page_ and _limit_ parameters you can limit the number of products per page. For example, **/api/v1/products?page=1&limit=10** will return the first 10 products.

#### Filtering

You can also filter the products by any of it's existing parameter. **/api/v1/products?brand=Samsung** will return only the Samsung products.

#### Top 10

You can get the top 10 highest rated products by going to **/api/v1/products/top-10**

### GET One

To get one product, specify the ID of the product at the end of the URL.
**api/v1/products/_id_**

### POST - Create new product

Send a POST request to **api/v1/products** with the product in the request body in JSON format.

### PATCH - Update product

Send a PATCH request to **api/v1/products/_id_** with the modified field in the request body in JSON format.

### DELETE One

Send a DELETE request to **api/v1/products/_id_**.
