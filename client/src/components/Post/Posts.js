import { useSelector } from "react-redux";
import { usePagination } from "hook/usePagination";
import { Post } from "./Post";
import { LoaderComponent } from "components/Loader";

export function Posts({ setCurrentId }) {
  let body;
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  const { filteredData, currentPage, buttonPage1, buttonPage2 } = usePagination(
    posts,
    2
  );

  const Emoji = () => (
    <img src="./sadFace.svg" alt="Icon" className="w-10 h-10" />
  );

  if (isLoading) {
    body = (
      <div className="flex flex-col items-center justify-center w-full h-full mt-4 lg:mt-0">
        <LoaderComponent />
      </div>
    );
  } else if (error) {
    body = (
      <div className="flex flex-col items-center justify-center w-full h-full mt-4 lg:mt-0">
        <p className="font-medium">
          The request could not be processed. Please try again later.
        </p>
        <Emoji />
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <div className="flex flex-col items-center justify-center w-full h-full mt-4 lg:mt-0">
        <h1 className="text-3xl font-medium">No memories</h1>
        <Emoji />
      </div>
    );
  } else {
    body = (
      <section className="flex flex-col w-full">
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-5 md:gap-y-10 md:mt-10 lg:mt-0 h-full">
          {filteredData().map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-3">
          <h1 className="text-2xl mb-5 md:mb-0">Pages: {currentPage}</h1>

          <div className=" flex space-x-5">
            <button
              onClick={buttonPage1}
              className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
            >
              Prev
            </button>
            <div className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl">
              {currentPage}
            </div>
            <button
              onClick={buttonPage2}
              className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
            >
              Next
            </button>
          </div>

          <div></div>
        </div>
      </section>
    );
  }
  return body;
}
