const UserModel = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;

const createNewUser = async (name, email, password, role) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  const newUser = await UserModel.create({
    name: name,
    email: email,
    password: secPass,
    role: role,
  });

  return newUser;
};

const newUser = async (req, res) => {
  const { email, password, name, role } = req.body;

  const user = await UserModel.findOne({ email: email });
  console.log(user);

  if (user) {
    return res.status(400).json({
      success: false,
      message: "User Already Exist",
    });
  } else {
    const create_user = await createNewUser(name, email, password, role);
    const data = {
      id: create_user.id,
      name: create_user.name,
      email: create_user.email,
      role: create_user.role,
    };
    const token = jwt.sign(data, secret_key);

    return res.status(200).json({
      success: true,
      message: "User created Successfully",
      token: token,
    });
  }
};

module.exports = newUser;
