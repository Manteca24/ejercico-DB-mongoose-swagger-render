const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./docs');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));



app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));