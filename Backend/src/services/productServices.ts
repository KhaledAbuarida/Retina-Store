import productModel, { IProduct } from "../models/productModel";
import { servicesReturnTypes } from "../types/generalTypes";

// retrieve all products
export const getAllProducts = async (): Promise<servicesReturnTypes> => {
  try {
    const products: IProduct[] = await productModel.find();

    return { data: products, statusCode: 200 };
  } catch (err: any) {
    console.error(err);
    return {
      data: "an error occurred while getting the product list",
      statusCode: 500,
    };
  }
};

// add new product
export const addNewProduct = async (newProduct: IProduct) => {
  try {
    const product: IProduct = await productModel.create(newProduct);

    const savedProduct = await product.save();

    // Something went wrong while saving the document
    if (!savedProduct) {
      return {
        data: "Something Went Wrong, Can't Add This Product Right Now!",
        statusCode: 400,
      };
    }

    return { data: savedProduct, statusCode: 201 };
  } catch (err: any) {
    console.error(err);
    return {
      data: "an error occurred while adding new product",
      statusCode: 500,
    };
  }
};
