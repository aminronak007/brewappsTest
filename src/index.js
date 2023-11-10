const express = require("express");
const cors = require("cors");
const vars = require("./utils/vars.utils");
const app = express();
const dbConnection = require("./config/mongodb.config");
const globalVarsAndFuncs = require("./utils/global_vars_funcs.utils");

// ---- For passing data from frontend to server ----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Allowing other domain to access server ----
app.use(cors());

// ---- Importing routes to be used ----
const BookRoutes = require("./routes/books.routes");

// ---- Allowing routes to be used ----
app.use("/api/v1", BookRoutes);

dbConnection();
globalVarsAndFuncs();
app.listen(vars.port, () => {
  console.log(`Server listening on port ${vars.port}`);
});
