import { ICartItem, cartModel } from "../models/cartModel";
import productModel from "../models/productModel";
import {
  addItemToCartProps,
  clearCartProps,
  deleteItemCartProps,
  getCartForUserProps,
  updateCartItemQuantityProps,
} from "../types/cartServicesProps";
import { servicesReturnTypes } from "../types/generalTypes";
import { calcCartTotalAmount, createCartForUser } from "../utils/cartUtils";

// add new product to the cart
export const addCartItem = async ({
  userId,
  productId,
  unitPrice,
}: addItemToCartProps) => {
  try {
    // check if user has an active cart or not, if not create a new one
    let cart = await getCartForUser({ userId });

    // check if the product is already exist in the cart
    const existingItem = cart.items.find(
      (item: ICartItem) => item.productId.toString() === productId
    );

    // if the product exist
    if (existingItem) {
      return { data: "Product is already exist in the cart", statusCode: 400 };
    }

    const newItem = { productId, unitPrice };
    cart.items.push(newItem);

    // update cartItems
    cart.totalAmount = await calcCartTotalAmount(cart.items);

    // Save the updated cart
    const savedCart = await cart.save();

    if (!savedCart) {
      return {
        data: "Something went wrong, can't add this product right now!",
        statusCode: 400,
      };
    }

    return {
      data: await getCartForUser({ userId, populatedItems: true }),
      statusCode: 201,
    };
  } catch (err: any) {
    console.error(err);
    return {
      data: "an error occurred while add item into cart",
      statusCode: 500,
    };
  }
};

// delete item from cart
export const removeCartItem = async ({
  userId,
  productId,
}: deleteItemCartProps) => {
  try {
    const cart = await getCartForUser({ userId });

    // get item to remove
    const itemToRemove = cart.items.find(
      (item: ICartItem) => item.productId.toString() === productId
    );

    // check if the product doesn't removed
    if (!itemToRemove) {
      return {
        data: "Something went wrong!, can't remove this product right now!",
        statusCode: 400,
      };
    }

    // remove item from cart
    const updatedItems = cart.items.filter(
      (item: ICartItem) => item.productId.toString() !== productId
    );

    // update cart items list
    cart.items = updatedItems;

    // update cart total amount
    const cartTotalAmount = await calcCartTotalAmount(cart.items);
    cart.totalAmount = cartTotalAmount;

    await cart.save();

    return {
      data: await getCartForUser({ userId, populatedItems: true }),
      statusCode: 200,
    };
  } catch (err: any) {
    console.error(err);
    return {
      data: "an error occurred while removing item from cart",
      statusCode: 500,
    };
  }
};

// clear all cart for user
export const clearCart = async ({ userId }: clearCartProps) => {
  try {
    const cart = await getCartForUser({ userId });

    cart.items = [];
    cart.totalAmount = 0;

    const updatedCart = await cart.save();
    return { data: updatedCart, statusCode: 200 };
  } catch (err: any) {
    console.error(err);
    return {
      data: "an error occurred while clearing the cart",
      statusCode: 500,
    };
  }
};

// get cart for User
export const getCartForUser = async ({
  userId,
  populatedItems,
}: getCartForUserProps) => {
  try {
    let cart;

    if (populatedItems) {
      cart = await cartModel
        .findOne({ userId, status: "active" })
        .populate("items.productId");
    } else {
      cart = await cartModel.findOne({ userId, status: "active" });
    }

    if (!cart) {
      cart = await createCartForUser(userId);
    }

    return cart;
  } catch (err: any) {
    console.error(err);
    return {
      data: "an error occurred while getting a cart for user",
      statusCode: 500,
    };
  }
};

// // update cart item quantity
export const updateCartItemQuantity = async ({
  userId,
  productId,
  quantity,
}: updateCartItemQuantityProps) => {
  try {
    // get populated cart for the user
    const cart = await getCartForUser({ userId });

    // get the product detailed
    const product = await productModel.findById(productId);

    // handle non-existing of product
    if (!product) {
      return {
        data: "can't update the product quantity right now!",
        statusCode: 400,
      };
    }

    // get existing item in cart
    const existingItem: ICartItem = await cart.items.find(
      (item: ICartItem) => item.productId.toString() === productId
    );

    // handle non-existing target item
    if (!existingItem) {
      return {
        data: "can't update the product quantity right now!",
        statusCode: 400,
      };
    }

    // check if the quantity suit the stock
    if (quantity > product.stock) {
      return { data: "Low stock for item", statusCode: 400 };
    }

    if (quantity <= 0) {
      return {
        data: "Can't set quantity by 0, try to remove the item from your cart",
        statusCode: 400,
      };
    }

    const updatedItems = cart.items.map((item: any) =>
      item.productId.toString() === productId
        ? { _id: item._id, unitPrice: item.unitPrice, quantity, productId }
        : item
    );

    // update cart items
    cart.items = updatedItems;

    // calculate cart total amount
    cart.totalAmount = await calcCartTotalAmount(updatedItems);

    // commit cart changes in DB
    await cart.save();

    return {
      data: await getCartForUser({ userId, populatedItems: true }),
      statusCode: 200,
    };
  } catch (err: any) {
    console.error(err);
    return {
      data: "An error occur while updating the the product quantity",
      statusCode: 500,
    };
  }
};
