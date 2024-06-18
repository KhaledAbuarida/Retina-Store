import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter";
import orderRouter from "./routers/orderRouter";
import cartRouter from "./routers/cartRouter";
import userRouter from "./routers/userRouter";
import cors from "cors";

const app = express();
const port = 3001;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// DATABASE CONNECTION
mongoose
  .connect(process.env.DB_URL || "")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// ROUTERS
app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
