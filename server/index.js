const express = require("express");
const cors = require("cors");
const { success, error } = require("consola");
const bp = require("body-parser");
const { connect } = require("mongoose");

// app constants
const { DB, PORT } = require("./config");

// init app
const app = express();

// middlewares
app.use(cors())
app.use(bp.json());

const startApp = async() => {
    // connect Database
    try {
        await connect(DB, {
            useUnifiedTopology: true,
            useFindAndModify: true,
            useNewUrlParser: true,
        });
        success({
            message: `Successfully connected with the Database 🍻 \n ${DB}`,
            badge: true,
        });
        // Start listening to the server
        app.listen(PORT, () => {
            success({ message: `Server Running On Port ${PORT} 🚀🚀`, badge: true });
        });
    } catch (err) {
        error({
            message: `Something went wrong while connecting the database 🚑 \n ${err}`,
            badge: true,
        });
        startApp();
    }
};

startApp();