const express = require("express");
require("dotenv").config();
const path = require("path");

const testRoutes = require("./routes/testRoutes");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/tests", testRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
