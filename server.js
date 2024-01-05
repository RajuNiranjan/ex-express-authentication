const express = require("express");
const router = require("./router/contact.router.js");
const errorHandler = require("./middleware/error.js");

const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.use("/api/contacts", router);

app.listen(port, () => {
  console.log(`server is running at port number ${port}`);
});
