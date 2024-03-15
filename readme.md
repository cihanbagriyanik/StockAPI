# Stock API

### ERD:

![ERD](./erdStockAPI.png)

### Folder/File Structure:

```
    logs/
    src/
        configs/
            dbConnection.js
            swagger.json
        controllers/
            auth.js
            token.js
            user.js
        helpers/
            dateToLocaleString.js
            passwordEncrypt.js
            sendMail.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
        models/
            token.js
            user.js
        routes/
            auth.js
            document.js
            token.js
            user.js
    .env
    .gitignore
    index.js
    package-lock.json
    package.json
    readme.md
    swaggerAutogen.js

```
