const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
  res.status(200).json([
    { _id: '1', name: 'Category 1', description: 'Category 1 description' },
    { _id: '2', name: 'Category 2', description: 'Category 2 description' },
    { _id: '3', name: 'Category 3', description: 'Category 3 description' },
  ]);
});

router.post('/categories', (req, res) => {
  const category = {
    _id: '4',
    name: req.body.name,
    description: req.body.description,
  };
  res.status(201).json(category);
});

router.patch('/categories', (req, res) => {
  const updatedCategory = {
    _id: req.body.categoryId,
    name: req.body.category.name,
    description: req.body.category.description,
  };
  res.status(201).json(updatedCategory);
});

router.delete('/categories', (req, res) => {
  res.status(200).json({});
});

module.exports = router;