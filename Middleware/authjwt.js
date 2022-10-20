const jwt = require("jsonwebtoken");
const key = "e-comm-r-n";

const verifyToken = (id) => {
  return jwt.sign({ id }, key, { expiresIn: "40d" });
};

module.exports = verifyToken;
