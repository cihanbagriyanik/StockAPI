# Stock Management API

This project is a Node.js-based REST API server designed to handle stock management-related operations.

## Backend Documentation:

[Stock Management API Documentation](https://stockapi-5xmh.onrender.com/)

### ERD:

![ERD](./erdStockAPI.png)

### Stock App Frontend (Stock App Management)

[Frontend](#frontend)

### Folder/File Structure:

```
Stock Management API

├── src
|    ├── configs
|    │   ├── dbConnection.js
|    │   └── swagger.json
|    ├── controllers
|    │   ├── auth.js
|    │   ├── brand.js
|    │   ├── category.js
|    │   ├── firm.js
|    │   ├── product.js
|    │   ├── purchase.js
|    │   ├── sale.js
|    │   ├── token.js
|    │   └── user.js
|    ├── helpers
|    │   ├── dateToLocaleString.js
|    │   ├── passwordEncrypt.js
|    │   ├── sendMail.js
|    │   └── sync.js
|    ├── middlewares
|    │   ├── authentication.js
|    │   ├── errorHandler.js
|    │   ├── findSearchSortPage.js
|    │   ├── logger.js
|    │   ├── permissions.js
|    │   └── upload.js
|    ├── models
|    │   ├── brand.js
|    │   ├── category.js
|    │   ├── firm.js
|    │   ├── product.js
|    │   ├── purchase.js
|    │   ├── sale.js
|    │   ├── token.js
|    │   └── user.js
|    ├── routes
|    │   ├── auth.js
|    │   ├── brand.js
|    │   ├── category.js
|    │   ├── document.js
|    │   ├── firm.js
|    │   ├── index.js
|    │   ├── product.js
|    │   ├── purchase.js
|    │   ├── sale.js
|    │   ├── token.js
|    │   └── user.js
├── index.js
├── pacgake-lock.json
├── pacgake.json
├── readme.md
└── swaggerAutogen.js
```

## Frontend:

[Stock Management App GitHub](https://github.com/cihanbagriyanik/Stock_Management_App_react-redux-formik-yup?tab=readme-ov-file#backend)

[Stock Management App (Frontend)](https://stock-management-app-cihan.vercel.app/)

## Technologies Used

- **Express.js**: A fast and minimal web framework used for API routing and handling HTTP request/response operations in this project.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB used to create models and simplify database operations.
- **JWT (JSON Web Token)**: Used for user authentication and authorization, allowing users to authenticate and make authorized API requests.
- **Swagger UI Express**: Utilized to automatically generate and visualize API documentation, enabling users to easily view the API endpoints.
- **Cors**: Employed to solve Cross-Origin Resource Sharing (CORS) issues, allowing requests from different origins to access the API.
- **Dotenv**: Used to load and utilize environment variables, especially for storing sensitive data such as database connection information.
- **Nodemailer**: Utilized for sending emails, particularly for sending verification emails to users after registration.

## How to Use?

1. Clone the project to your computer: `git clone https://github.com/cihanbagriyanik/StockAPI.git`
2. Navigate to the project directory: `cd StockAPI`
3. Install the necessary dependencies: `npm install`
4. Connect your database or set up your local database. Update the `.env` file with the required environment variables, such as `MONGODB_URI` for MongoDB connection."
5. Start the application: `npm run start`
6. You can access the API at `http://localhost:PORT`.

## API Documentation(local)

For more information about all the endpoints and how to use them, you can access the [Swagger UI](http://localhost:PORT/api-docs).

## Contribution

Contributions to this project are welcome! If you find a bug or want to add a feature, please open a pull request or create an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
