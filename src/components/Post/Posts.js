import { useSelector } from 'react-redux'
import { usePagination } from 'hook/usePagination'
import { Post } from './Post'
import { LoaderComponent } from 'components/Loader'

export function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector(state => state.posts)
  const { filteredData, currentPage, buttonPage1, buttonPage2 } = usePagination(posts, 2)

  if (!posts.length && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full mt-4 lg:mt-0">
        <h1 className="text-3xl font-medium">No memories</h1>
        <img src="./sadFace.svg" alt="Icon" className="w-20 h-20" />
      </div>
    )
  }
  return (
    <div className="w-full lg:pr-4">

      {isLoading
        ? <LoaderComponent />
        : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 mr-10 mt-10 lg:mt-0 w-full">
              {filteredData().map(post => (
                <div key={post._id} className="flex flex-col rounded-2xl w-full overflow-hidden shadow-md bg-white bg-opacity-10" style={{ height: "500px" }}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </div>
              ))
              }
            </div>


            <div className="flex flex-col md:flex-row justify-between items-center mt-3">
              <h1 className="text-2xl mb-5 md:mb-0">Pages: {currentPage}</h1>

              <div className=" flex space-x-5">
                < button
                  onClick={buttonPage1}
                  className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
                > Prev
                </button >
                <div
                  className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
                >{currentPage}
                </div>
                < button
                  onClick={buttonPage2}
                  className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
                > Next
                </button >
              </div>

              <div></div>
            </div>
          </>
        )
      }
    </div>

  )
}