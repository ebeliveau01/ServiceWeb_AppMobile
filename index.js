const express = require ('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT | 80;

app.use('/api', require('./src/routes/api.routes'));
app.use('/api/crud', require('./src/routes/crud.routes'));

app.listen(PORT, () => {
    console.log(`Serveur démarré ${PORT}`);
});