import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deletePost, likePost } from "actions/posts";
import { useLocalStorage } from "hook/useLocalStorage";

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const { user } = useLocalStorage();
  const { title, by, createdAt, likes, message, selectedFile, tags } = post;

  const mePost = by.id === user._id;

  const deleteAction = () => {
    Swal.fire({
      text: "Are you sure you want to erase the memory?",
      icon: "question",
      confirmButtonColor: "rgb(66 66 66)",
      cancelButtonColor: "rgb(66 66 66)",
      showCancelButton: true,
      showConfirmButton: true,
      allowOutsideClick: false,
      confirmButtonText: "Yes",
    }).then((result) => {
      result.isConfirmed && dispatch(deletePost(post._id));
    });
  };

  return (
    <article className="flex flex-col rounded-2xl shadow-md overflow-hidden bg-white bg-opacity-10">
      <div className="h-20">
        <img
          src={selectedFile || "./noSelectedFile.png"}
          className="w-full h-full object-cover"
          alt="images"
        />
      </div>

      <div className="pt-3 flex flex-col space-y-3 px-5 bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur-md h-full">
        <div
          className="flex items-center justify-between w-full"
          style={{ height: "15%" }}
        >
          <div className="flex flex-col w-10/12">
            <div className="flex mt-2 text-xs overflow-hidden whitespace-nowrap">
              {tags
                ? tags.map((tag, i) => (
                    <div
                      key={i}
                      className="cursor-pointer hover:underline"
                    >{`#${tag}  `}</div>
                  ))
                : null}
            </div>
            <h1 className="font-medium text-lg">{by.name}</h1>
            <p className="text-sm">{moment(createdAt).fromNow()}</p>
          </div>

          <div className="flex justify-end w-2/12">
            {mePost ? (
              <button className="w-6" onClick={() => setCurrentId(post._id)}>
                <img src="./pencil.svg" alt="Edit" />
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <h1 className="text-xl underline mb-2">{title}</h1>
          <p className="break-words h-20 overflow-ellipsis">{message}</p>
        </div>

        <div className="pb-5 flex justify-between items-end h-full">
          <button onClick={() => dispatch(likePost(post._id))}>
            <div className="flex items-center">
              <img
                src={
                  !likes.includes(user._id) ? "./like.svg" : "./likeActive.svg"
                }
                alt="Like"
                className="w-8 mr-2"
              />
              {likes.length} {likes.length > 2 ? "Likes" : "Like"}
            </div>
          </button>

          {mePost ? (
            <button onClick={deleteAction}>
              <img src="./delete.svg" alt="Delete" className="w-8" />
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
};
