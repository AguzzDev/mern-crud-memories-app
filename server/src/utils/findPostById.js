import Post from "../models/postModel.js";

export const findPostById = async (id) => {
  return await Post.findById(id);
};
