import express from 'express';
import { ProductModel } from '../models/product';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await ProductModel.find().exec();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error getting products' });
    }
});

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        res.status(400).json({ message: 'Name and description are required' });
        return;
    }

    try {
        const product = new ProductModel({ name, description });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product' });
    }
});

router.patch('/', async (req, res) => {
    try {
        const { productId, product } = req.body;
        const { name, description, images, price, category} = product;

        if (!productId || !name || !description || !price || !category) {
            res.status(400).json({ message: 'productId and Name and description are required' });
            return;
        }
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            productId,
            { name, images, description, price, category },
            { new: true }
        );
        if (!updatedProduct) {
            throw new Error(`Product with ID ${productId} not found`);
        }
        res.status(201).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
});

router.delete('/', async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) {
            res.status(400).json({ message: 'productId are required' });
            return;
        }
        const result = await ProductModel.findByIdAndDelete(productId).exec();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while deleting the product');
    }
});

export default router;