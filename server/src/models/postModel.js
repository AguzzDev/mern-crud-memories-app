import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String },
    tags: { type: Array },
    selectedFile: { type: String },
    likes: { type: Array },
    by: {
      id: { type: String },
      name: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
