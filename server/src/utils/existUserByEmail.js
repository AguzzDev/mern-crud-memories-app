import User from "../models/userModel.js";

export const existUserByEmail = async (value) =>
  await User.findOne({ email: value });
