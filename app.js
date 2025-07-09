// Imports
import express from "express";
import routes from "./source/routes/route.js"

// Consts
const PORT = 8008;      // 3000 in use for project
const HOST = "0.0.0.0";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extend: true}));

// Set up routes
routes(app);

// Set up app
app.listen(PORT, HOST, () => console.log(`Server started on htt0://${HOST}:${PORT}`));
