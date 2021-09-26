import React, { useEffect, useState } from 'react'
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { createPost, updatePost } from "../actions/posts"

export const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch()
  const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null)
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  })

  useEffect(() => {
    post &&
      setPostData(post)
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'New Memory added'
    })

    currentId
      ? dispatch(updatePost(currentId, postData))
      : dispatch(createPost(postData))
    clear()
  }

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    })
    setCurrentId(null)
  }

  return (
    <div className="flex flex-col items-center rounded-xl lg:w-4/12 bg-white bg-opacity-10  backdrop-filter backdrop-blur-md  shadow-md" style={{ height: "500px" }}>
      <h1 className="text-xl py-1 font-bold ">{currentId ? "Update" : "Write"} your Memories</h1>

      <form
        className="text-lg p-5 w-full"
        onSubmit={handleSubmit}
      >

        <h1 className="text-lg font-bold  my-1">Creator</h1>
        <input
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })}
          className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none"></input>

        <h1 className="text-lg font-bold  my-1">Title</h1>
        <input
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
          className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none"></input>

        <h1 className="text-lg font-bold  my-1">Message</h1>
        <textarea
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
          className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none"></textarea>

        <h1 className="text-lg font-bold  my-1">Tags</h1>
        <input
          onChange={e => setPostData({ ...postData, tags: e.target.value.split(",") })}
          value={postData.tags}
          className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none mb-3"></input>

        <div className="text-lg overflow-hidden">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="flex font-semibold  mx-auto py-3 px-5 bg-white bg-opacity-50 rounded-xl mt-3 hover:bg-opacity-70"
        >Submit
        </button>
      </form>
    </div>
  )
}
