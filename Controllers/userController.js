require("../db/config");
const userModel = require("../Models/userModel");
const verifyToken = require("../Middleware/authjwt");

const createUser = async (req, res) => {
  try {
    const userexist = await userModel.findOne({ email: req.body.email });
    if (userexist) {
      res.status(400).json({ succes: false, message: "user already exist" });
    } else {
      const newUser = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      const user = await newUser.save();
      res.status(200).json({
        succes: true,
        message: "newuser created successfully",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({ succes: false, message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    if (req.body.password && req.body.email) {
      const userexist = await userModel.findOne(req.body).select("-password");
      if (userexist) {
        res.status(200).json({
          succes: true,
          message: "user login successfuly",
          data: {
            firstName: userexist.firstName,
            lastName: userexist.lastName,
            email: userexist.email,
            password: userexist.password,
            token: verifyToken(userexist._id),
          },
        });
      } else {
        res.status(400).json({ succes: false, message: "user not found" });
      }
    } else {
      
      res.status(400).json({
        succes: false,
        message: "please provide a email and password",
      });
    }
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

module.exports = { createUser, userLogin };
