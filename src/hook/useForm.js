import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { createPost, updatePost } from "actions/posts"

export function useForm({ currentId, setCurrentId }) {
  const dispatch = useDispatch()
  const post = useSelector(state => currentId ? state.posts.posts.find(p => p._id === currentId) : null)
  const user = JSON.parse(localStorage.getItem("profile"))

  const [postData, setPostData] = useState({
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
      title: currentId ? 'Memory Update' : 'New Memory Created'
    })

    currentId
      ? dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, userId: user?.result?._id }))
      : dispatch(createPost({ ...postData, name: user?.result?.name, userId: user?.result?._id }))
    clear()
  }

  const clear = () => {
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    })
    setCurrentId(null)
  }

  return { postData, setPostData, handleSubmit }
}
