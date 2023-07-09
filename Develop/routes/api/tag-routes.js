const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tagRoute = await Tag.findAll({
    include: [{ model: Product }],
  });

  res.status(200).json(tagRoute);
}
 catch (err) {
  res.status(500).json(err);
}
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagRoute = await Tag.findByPk(req.params.id);
    // be sure to include its associated Products
    res.status(200).json(tagRoute);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagRoute = await Category.create(req.body);
  return res.json(tagRoute);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagRoute = await Tag.update(
    {
      id: req.body.id,
      tag_name: req.body.tag_name,
    },
    {
      where: {
        tag_name: req.body.tag_name,
      },
    }
  );
  return res.json(tagRoute);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagRoute = await Tag.destroy({
    where: {
      id: req.body.id,
    },
  });
  return res.json(tagRoute);
});

module.exports = router;
