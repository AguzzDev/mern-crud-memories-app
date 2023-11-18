import Post from "../models/postModel.js";
import { findPostById } from "../utils/findPostById.js";

export const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    return res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const fetchPostsBySearch = async (req, res) => {
  try {
    const posts = await Post.find({ title: new RegExp(req.query.q, "i") });

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const createPost = async (req, res) => {
  const values = req.body;

  try {
    const post = await Post.create({ ...values, by: req.me });

    res.status(201).json(post);
  } catch (error) {
    if (Object.values(values).every((value) => value === "")) {
      return res.status(400).json("Type something...");
    }

    res
      .status(400)
      .json(error.message.split(":")[2].substring(6).replace(/`/g, ""));
  }
};

export const updatePost = async (req, res) => {
  const values = req.body;

  try {
    if (req.me.id !== values.by.id) {
      return res.status(500);
    }

    const post = await Post.findByIdAndUpdate(values._id, values, {
      new: true,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const find = await findPostById(req.params.id);

    if (req.me.id !== find.by.id) {
      return res.status(500);
    }

    const post = await Post.findByIdAndDelete(req.params.id);

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const likePost = async (req, res) => {
  const values = req.body;

  try {
    const find = await Post.findById(values.id);

    if (find.by.id === req.me.id) {
      return res.status(400).json("Not allowed :/");
    }

    if (find.likes.includes(values.userId)) {
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { likes: values.userId },
        },
        { new: true }
      );
      return res.status(201).json(post);
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: { likes: values.userId },
      },
      { new: true }
    );

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
