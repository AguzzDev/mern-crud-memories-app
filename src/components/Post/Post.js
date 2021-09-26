import React from 'react'
import moment from "moment"
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deletePost, likePost } from '../../actions/posts'

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  const { title, creator, createdAt, likeCount, message, selectedFile, tags } = post

  const deleteAction = () => {
    Swal.fire({
      text: 'Are you sure you want to erase the memory?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: "Sure"
    })
    dispatch(deletePost(post._id))
  }

  const likeAction = () => {
    dispatch(likePost(post._id))
  }

  return (
    <>
      <div className="h-1/4">
        <img
          src={selectedFile}
          className="w-full h-full object-cover"
          alt="images"
        />
      </div>

      <div className="flex flex-col space-y-3  px-5 bg-gray-300 bg-opacity-10  backdrop-filter backdrop-blur-md  h-3/4 overflow-hidden">

        <div className="flex items-center justify-between w-full" style={{ height: "15%" }}>
          <div className="flex flex-col w-10/12">
            <p className="mt-2 text-xs overflow-hidden whitespace-nowrap">{tags.map(tag => `#${tag} `)}</p>
            <h1 className="font-medium text-lg">{creator}</h1>
            <p className="text-sm">{moment(createdAt).fromNow()}</p>
          </div>

          <div className="flex justify-end w-2/12">
            <button
              className="w-6"
              onClick={() => setCurrentId(post._id)}>
              <img src="./pencil.svg" alt="Edit" />
            </button>
          </div>
        </div>

        <div style={{ height: "70%" }}>
          <h1 className="text-xl underline mb-2">{title}</h1>
          <p className="break-words" style={{ height: "30%" }}>{message}</p>
        </div>

        <div className="pb-5 flex justify-between items-end h-full">

          <div className="flex">
            <button
              className="cursor-pointer"
              onClick={likeAction}
            >
              <img src="./like.svg" alt="Like" className="w-8" />
            </button>
            <span className="ml-3">{likeCount}</span>
          </div>

          <button
            onClick={deleteAction}>
            <img src="./delete.svg" alt="Delete" className="w-8" />
          </button>
        </div>

      </div>
    </>
  )
}
