import React from 'react'
import moment from "moment"
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deletePost, likePost } from 'actions/posts'
import { useLocalStorage } from 'hook/useLocalStorage'

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  const { title, name, createdAt, likes, message, selectedFile, tags, creator } = post
  console.log(name);
  console.log(post)
  const { user } = useLocalStorage()
  console.log(user)

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find(like => like === (user?.result?.GoogleId || user?.result?._id))
        ? (
          <div className="flex items-center">
            <img src="./likeActive.svg" alt="Like" className="w-8 mr-2" />{likes.length} {likes.length > 2 ? 'Likes' : 'Like'}
          </div>
        )
        : (
          <div className="flex items-center">
            <img src="./like.svg" alt="Like" className="w-8 mr-2" />{likes.length} {likes.length > 2 ? 'Likes' : 'Like'}
          </div>
        )
    }
    return <div className="flex items-center">
      <img src="./like.svg" alt="Like" className="w-8 mr-2" />Like
    </div>
  }

  const deleteAction = () => {
    Swal.fire({
      text: 'Are you sure you want to erase the memory?',
      icon: 'question',
      confirmButtonColor: 'rgb(66 66 66)',
      cancelButtonColor: 'rgb(66 66 66)',
      showCancelButton: true,
      showConfirmButton: true,
      allowOutsideClick: false,
      confirmButtonText: "Yes",
    }).then((result) => {
      result.isConfirmed &&
        Swal.fire({
          text: 'Memory erased',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        })
      dispatch(deletePost(post._id))
    })
  }

  return (
    <>
      <div style={{ height: "30%" }}>
        <img
          src={selectedFile || "./noSelectedFile.png"}
          className="w-full h-full object-cover"
          alt="images"
        />
      </div>

      <div className="pt-3 flex flex-col space-y-3  px-5 bg-gray-300 bg-opacity-10  backdrop-filter backdrop-blur-md  h-3/4 overflow-hidden">

        <div className="flex items-center justify-between w-full" style={{ height: "15%" }}>
          <div className="flex flex-col w-10/12">
            <div className="flex mt-2 text-xs overflow-hidden whitespace-nowrap">{tags.map(tag => <div className="cursor-pointer hover:underline">{`#${tag}  `}</div>)}</div>
            <h1 className="font-medium text-lg">{name}</h1>
            <p className="text-sm">{moment(createdAt).fromNow()}</p>
          </div>

          <div className="flex justify-end w-2/12">
            <button
              className={`${user?.result?.name === name || user?.result?._id === name ? "pointer-events-auto w-6" : "pointer-events-none w-6"}`}
              onClick={() => setCurrentId(post._id)}>
              <img src="./pencil.svg" alt="Edit" />
            </button>
          </div>
        </div>

        <div style={{ height: "55%" }}>
          <h1 className="text-xl underline mb-2">{title}</h1>
          <p className="break-words" style={{ height: "30%" }}>{message}</p>
        </div>

        <div className="pb-5 flex justify-between items-end h-full">

          <button
            className="cursor-pointer"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </button>

          <button
            onClick={deleteAction}
            className={`${user?.result?.name === name || user?.result?._id === name ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <img src="./delete.svg" alt="Delete" className="w-8" />
          </button>

        </div>

      </div>
    </>
  )
}
