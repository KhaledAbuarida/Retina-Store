import express, { Request, Response } from 'express';
import orderModel, { IOrderItem } from '../models/orderModel';

const router = express.Router();

// get all orders
router.get('/', async (req: Request, res: Response) => {
    try {
        const orders = await orderModel.find();
        res.json(orders);
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
});

// create new order
router.post('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const totalPrice = req.body.totalPrice;
    const items = req.body.items;
    const dummyItems =
    {
        cartItemId: '65d7e4b5161bbe26b0b45192',
        name: 'item1',
        quantity: 2,
        unitPrice: 20
    }

    try {
        const newOrder = await orderModel.create({ items: dummyItems, totalPrice: 200, userId });

        res.status(201).json(newOrder);

    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
})

export default router;