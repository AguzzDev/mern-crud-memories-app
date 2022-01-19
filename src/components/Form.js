import React from 'react'
import FileBase from "react-file-base64"
import { useForm } from 'hook/useForm'
import Tippy from '@tippyjs/react';
import { useLocalStorage } from 'hook/useLocalStorage';

export const Form = ({ currentId, setCurrentId }) => {
  const { handleSubmit, postData, setPostData } = useForm({ currentId, setCurrentId })
  const { user } = useLocalStorage()

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col items-center rounded-xl bg-white bg-opacity-10  backdrop-filter backdrop-blur-md  shadow-md" style={{ height: "500px" }}>
        {user
          ?
          <>
            <h1 className="text-xl py-1 font-bold ">{currentId ? "Update" : "Write"} your Memories</h1>
            <form
              className="p-5 w-full"
              onSubmit={handleSubmit}
            >
              <h1 className="text-lg font-bold  my-1">Title</h1>
              <input
                value={postData.title}
                onChange={e => setPostData({ ...postData, title: e.target.value })}
                className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none"></input>
              <h1 className="text-lg font-bold  my-1">Message</h1>
              <textarea
                rows="5"
                maxLength="255"
                style={{ resize: "none" }}
                value={postData.message}
                onChange={e => setPostData({ ...postData, message: e.target.value })}
                className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none"></textarea>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold  my-1">Tags</h1>
                <Tippy placement="right" content={`Write the tags between " , " and without separating`}>
                  <img src="/interrogation.svg" alt="Icon" className="w-4 cursor-pointer" />
                </Tippy>
              </div>
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
          </>
          :
          <div className="flex justify-center items-center w-full h-full text-center p-5">
            <h1>Create or access a your account for writing your memories</h1>
          </div>
        }
      </div>
    </div>
  )
}
