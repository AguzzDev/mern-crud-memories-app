import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";

import { Form } from "components/Form";
import { Posts } from "components/Post/Posts";
import { Header } from "components/Header";
import { getPostsBySearch, getPosts } from "actions/posts";
import { Layout } from "components/Layout";

const MemoriesScreen = () => {
  const [currentId, setCurrentId] = useState(null);
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/"
      ? dispatch(getPosts())
      : dispatch(getPostsBySearch(location.search.replace("?q=", "")));
  }, [dispatch, location]);

  return (
    <Layout>
      <Header />
      <section className="flex flex-col-reverse lg:flex-row justify-between lg:space-x-5 overflow-y-scroll lg:overflow-hidden h-full">
        <Posts setCurrentId={setCurrentId} />

        <div className="flex flex-col-reverse lg:flex-col lg:w-4/12 lg:space-y-2">
          <div className="flex bg-white bg-opacity-60 px-5 rounded-xl py-2 mt-5 lg:mt-0 w-3/4 lg:w-full">
            <img className="w-4 mr-3" src="./search.svg" alt="Search Icon" />
            <input
              className="bg-transparent outline-none w-full"
              type="text"
              autoFocus
              ref={searchInputRef}
              onChange={(e) => {
                dispatch(getPostsBySearch(searchInputRef.current.value));
                history.push(
                  searchInputRef.current.value === ""
                    ? "/"
                    : `/search?q=${searchInputRef.current.value}`
                );
              }}
              placeholder="Search memories"
            />
          </div>

          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </section>
    </Layout>
  );
};
export default MemoriesScreen;
