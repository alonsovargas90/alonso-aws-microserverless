import express from 'express';
import { CategoryModel } from '../models/category';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await CategoryModel.find().exec();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error getting categories' });
    }
});

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        res.status(400).json({ message: 'Name and description are required' });
        return;
    }

    try {
        const category = new CategoryModel({ name, description });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error creating category' });
    }
});

router.patch('/', async (req, res) => {
    try {
        const { categoryId, category } = req.body;
        const { name, description, image } = category;

        if (!name || !description || !categoryId) {
            res.status(400).json({ message: 'CategoryId and Name and description are required' });
            return;
        }
        const updatedCategory = await CategoryModel.findByIdAndUpdate(
            categoryId,
            { name, image, description },
            { new: true }
        );
        if (!updatedCategory) {
            throw new Error(`Category with ID ${categoryId} not found`);
        }
        res.status(201).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating category' });
    }
});

router.delete('/', async (req, res) => {
    try {
        const { categoryId } = req.body;
        if (!categoryId) {
            res.status(400).json({ message: 'categoryId are required' });
            return;
        }
        const result = await CategoryModel.findByIdAndDelete(categoryId).exec();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while deleting the category');
    }
});

export default router;