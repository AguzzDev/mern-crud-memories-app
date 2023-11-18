import React from "react";
import FileBase from "react-file-base64";
import { useForm } from "hook/useForm";
import Tippy from "@tippyjs/react";
import { useLocalStorage } from "hook/useLocalStorage";

export const Form = ({ currentId, setCurrentId }) => {
  const { handleSubmit, postData, setPostData } = useForm({
    currentId,
    setCurrentId,
  });
  const { user } = useLocalStorage();

  return (
    <div className="pb-3 flex flex-col rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-md">
      {user ? (
        <>
          <h1 className="text-xl py-1 font-bold text-center">
            {currentId ? "Update" : "Write"} your Memories
          </h1>
          <form className="px-5" onSubmit={handleSubmit}>
            <label className="text-sm font-bold my-1">Title</label>
            <input
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              className="px-4 bg-white bg-opacity-40 rounded-xl w-full py-1 outline-none"
            ></input>
            <label className="text-sm font-bold  my-1">Message</label>
            <textarea
              rows="3"
              maxLength="255"
              style={{ resize: "none" }}
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
              className="px-4 bg-white bg-opacity-40 rounded-xl w-full py-1 outline-none"
            ></textarea>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-bold  my-1">Tags</label>
              <Tippy
                placement="right"
                content={`Write the tags between " , " and without separating`}
              >
                <img
                  src="/interrogation.svg"
                  alt="Icon"
                  className="w-4 cursor-pointer"
                />
              </Tippy>
            </div>
            <input
              onChange={(e) =>
                setPostData({
                  ...postData,
                  tags: e.target.value ? e.target.value.split(",") : null,
                })
              }
              value={postData.tags}
              className="px-4 bg-white bg-opacity-40  rounded-xl w-full py-1 outline-none mb-3"
            ></input>
            <div className="text-lg overflow-hidden">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
            <button
              onClick={handleSubmit}
              className="flex font-semibold  mx-auto py-3 px-5 bg-white bg-opacity-50 rounded-xl mt-3 hover:bg-opacity-70"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full text-center p-5">
          <h1>Create or access a your account for writing your memories</h1>
        </div>
      )}
    </div>
  );
};
