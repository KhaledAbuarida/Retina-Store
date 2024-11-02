import express, { Response } from "express";
import {
  addCartItem,
  clearCart,
  getCartForUser,
  removeCartItem,
  updateCartItemQuantity,
} from "../services/cartServices";
import validateJWT from "../middleware/validateJWT";
import { ExtendedRequest } from "../types/generalTypes";

const router = express.Router();

// POST: --- /cart/add --- add item into the cart
router.post(
  "/add",
  validateJWT,
  async (req: ExtendedRequest, res: Response) => {
    const { productId, unitPrice } = req.body;
    const userId = req.user._id;
    try {
      // add new item into cart
      const { data, statusCode } = await addCartItem({
        userId,
        productId,
        unitPrice,
      });

      // if product doesn't added to the cart
      if (201 !== statusCode) {
        res.status(statusCode).json(data);
        return;
      }

      res.status(statusCode).json(data);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }
);

// DELETE: --- /cart/items/:productId --- delete item from user cart
router.delete(
  "/items/:productId",
  validateJWT,
  async (req: ExtendedRequest, res: Response) => {
    const { productId } = req.params;
    const userId = req.user._id;
    try {
      const { data, statusCode } = await removeCartItem({ userId, productId });

      if (200 !== statusCode) {
        res.status(statusCode).json(data);
        return;
      }

      res.status(statusCode).json(data);
    } catch (err: any) {
      res.status(500).json(err);
    }
  }
);

// DELETE: --- /cart --- clear all cart items
router.delete("/", validateJWT, async (req: ExtendedRequest, res: Response) => {
  const userId = req.user._id;
  try {
    const { data, statusCode } = await clearCart({ userId });

    if (200 !== statusCode) {
      res.status(statusCode).json(data);
      return;
    }

    res.status(statusCode).json(data);
  } catch (err: any) {
    res.status(500).json(err);
  }
});

// GET: --- /cart --- retrieve all cart items for user
router.get("/", validateJWT, async (req: ExtendedRequest, res: Response) => {
  const userId = req.user._id;
  try {
    const cart = await getCartForUser({
      userId,
      populatedItems: true,
    });

    res.status(200).json(cart);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// POST: --- /cart --- update cart item quantity
router.put("/", validateJWT, async (req: ExtendedRequest, res: Response) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;
  try {
    const { data, statusCode } = await updateCartItemQuantity({
      userId,
      productId,
      quantity,
    });

    if (200 !== statusCode) {
      res.status(statusCode).json(data);
      return;
    }

    res.status(statusCode).json(data);
  } catch (err: any) {
    res.status(500).json(err);
  }
});

// router.post("/checkout", async (req: Request, res: Response) => {
//   const userId = req.body.userId;

//   try {
// const cart: any = await populateCartItems(userId);

// cart.items.forEach((item: any) => {
//   if (item.product.stock < item.quantity) {
//     return res
//       .status(400)
//       .json({ message: `item of id ${item.product.name} is out of stock` });
//   }
// });

// const orderItems = await Promise
//   .all
//   cart.items.map(
//     async (item: any) =>
//       await orderItemModel.create({
//         image: item.product.image,
//         unitPrice: item.product.price,
//         quantity: item.quantity,
//         name: item.product.name,
//       })
//   )
//   ();

// const order = await orderModel.create({ userId, cartId: cart._id, items: orderItems, totalPrice: cart.totalAmount });

// await order.save();

//     res.status(200).json("cart");
//   } catch (err: any) {
//     res.status(500).json({ error: err });
//   }
// });

export default router;
