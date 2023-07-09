const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
const categoryData = await Category.findAll({
  include: [{ model: Product }],
});
  // be sure to include its associated Products
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
  const categoryData = await Category.findByPk(req.params.id);
  // be sure to include its associated Products
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);
  return res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(
    {
      id: req.body.id,
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.body.id,
    },
  });
  return res.json(categoryData);
});

module.exports = router;
