const productModel = require("../Models/productModel");

const createProduct = async (req, res) => {
  try {
    const newProduct = new productModel({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
    });

    const product = await newProduct.save();
    res
      .status(200)
      .json({ succes: true, message: "product created successfuly", product });
  } catch (error) {
    res.status(400).json({ succes: false, message: error.message });
  }
};

const getProduct = async (req, res) => {
  const product = await productModel.find();
  res
    .status(200)
    .json({ succes: true, message: "produst list", data: product });
};

const getbyidProduct = async (req, res) => {
  const product = await productModel.findById({ _id: req.params.id });
  res
    .status(200)
    .json({ succes: true, message: "produst list", data: product });
};

const deleteProduct = async (req, res) => {
  const product = await productModel.deleteOne({ _id: req.params.id });
  res.status(200).json({
    succes: true,
    message: "produst delete successfuly",
    data: product,
  });
};

const updateProduct = async (req, res) => {
  const result = await productModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.status(200).json({
    succes: true,
    message: " product update successfuly",
    data: result,
  });
};

const searchProduct = async (req, res) => {
  const result = await productModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { description: { $regex: req.params.key } },
    ],
  });
  res.status(200).json(result);
};

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getbyidProduct,
  searchProduct,
};


