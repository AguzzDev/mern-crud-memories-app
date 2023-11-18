import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { existUserByEmail } from "../utils/existUserByEmail.js";

export const login = async (req, res) => {
  const values = req.body;

  try {
    const existingUser = await existUserByEmail(values.email);

    if (!existingUser) return res.status(400).json("User not exists");

    const isPasswordCorrect = bcrypt.compare(
      values.password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json("Wrong password");

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const { email, password: p, ...others } = existingUser._doc;
    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const register = async (req, res) => {
  const values = req.body;
  try {
    const existingUserByEmail = await existUserByEmail(values.email);
    if (existingUserByEmail) return res.status(400).json("Email already taken");

    if (values.password !== values.confirmPassword)
      return res.status(400).json("Passwords don't match");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(values.password, salt);

    const userValues = {
      ...values,
      password: hashPassword,
    };

    const { confirmpassword, ...restValues } = userValues;
    const result = await User.create(restValues);

    const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const { email, password, ...others } = result._doc;
    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
