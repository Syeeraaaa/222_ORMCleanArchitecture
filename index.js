require('dotenv').config();
const express = require('express');
const conectDatabase = require('./config/db');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', require('./routes/komikRoutes'));

async function startServer() {
    await conectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}

startServer();