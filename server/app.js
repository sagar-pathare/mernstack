import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import router from './routes/api/books.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/books', router)

// https://www.mongodb.com/atlas/database
// mongodb+srv://sagar_pathare:<password>@merncluster.5nusx6s.mongodb.net/

const CONNECTION_URL =
    "mongodb+srv://sagar_pathare:Sagar%40mongodb5055@merncluster.5nusx6s.mongodb.net/";

const PORT = process.env.PORT || 8080;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`************ Server Running on Port ${PORT} ************`)
        )
    )
    .catch((error) => console.log(error.message));


// *******************************************************************************

// import express from 'express'
// import connectDB from './config/db.js'
// const cors = require('cors')

// // routes
// const books = require('./routes/api/books')

// const app = express()

// // Connect Database
// connectDB();

// // cors
// app.use(cors({ origin: true, credentials: true }))

// // Init Middleware
// app.use(express.json({ extended: false }))

// app.get('/', (req, res) => res.send('Hello world!'))

// // use Routes
// app.use('/api/books', books)

// const port = process.env.PORT || 8080

// app.listen(port, () => console.log(`Server running on port ${port}`))