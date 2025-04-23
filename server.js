import express from "express";
import dotenv from "dotenv";
import menuRouter from "./routes/menu.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Endpoint to check if the server is running
// Example: GET /
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Mount the menu routes
app.use("/menus", menuRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});