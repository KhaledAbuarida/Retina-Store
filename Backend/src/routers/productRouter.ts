import express, { Request, Response } from "express";
import { IProduct } from "../models/productModel";
import { addNewProduct, getAllProducts } from "../services/productServices";

const router = express.Router();

// GET: --- /products --- get all products
router.get("/items", async (req: Request, res: Response) => {
  try {
    const { data, statusCode } = await getAllProducts();

    res.status(statusCode).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

// TODO: admin only can add products
// POST: --- /products/add --- add new product
router.post("/add", async (req: Request, res: Response) => {
  const newProduct: IProduct = req.body;
  try {
    // const product: IProduct = await new productModel(req.body);
    const { data, statusCode } = await addNewProduct(newProduct);

    if (201 !== statusCode) {
      res.status(statusCode).json(data);
      return;
    }

    res.status(statusCode).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

export default router;
