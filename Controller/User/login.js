const UserModel = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await UserModel.findOne({ email: email.toLowerCase() });
  console.log(user);

  try {
    if (user) {
      // verify password
      const check = await bcrypt.compare(password, user.password);
      if (check) {
        const data = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
        const token = jwt.sign(data, secret_key);
        return res.send({
          success: true,
          status: 200,
          message: "User Logged In Successfully",
          token: token,
        });
      } else {
        return res.send({
          status: 400,
          success: false,
          message: "Wrong Credentials",
        });
      }
    } else {
      return res.json({
        status: 400,
        success: false,
        message: "User doesn't exist",
      });
    }
  } catch (err) {
    return res.json({
      status: 400,
      success: false,
      message: "Error Form Server",
    });
  }
};

module.exports = login;
