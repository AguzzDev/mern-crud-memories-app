import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "actions/posts";
import { useLocalStorage } from "./useLocalStorage";

export function useForm({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const { user } = useLocalStorage();

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: null,
    selectedFile: "",
  });

  useEffect(() => {
    post && setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    currentId
      ? dispatch(updatePost(currentId, postData))
      : dispatch(createPost(postData));

    clear();
  };

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };

  return { postData, setPostData, handleSubmit };
}
