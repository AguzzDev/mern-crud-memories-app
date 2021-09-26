import { useSelector } from 'react-redux'
import usePagination from '../../hook/usePagination'
import { LoaderComponent } from '../Loader'
import { Post } from './Post'

export function Posts({ setCurrentId }) {
  const allPosts = useSelector((state) => state.posts)
  const { prevPage, nextPage, finalPage, filteredData, initialPage, currentPage } = usePagination(allPosts, 2)

  return (
    <div className="w-full lg:pr-4">
      {!allPosts.length ? <LoaderComponent /> : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 mr-10 mt-10 lg:mt-0 w-full">
            {filteredData().map(post => (
              <div key={post._id} className="flex flex-col rounded-2xl w-full overflow-hidden shadow-md bg-white bg-opacity-10" style={{ height: "500px" }}>
                <Post post={post} setCurrentId={setCurrentId} />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-3">
            <h1 className="text-2xl mb-5 md:mb-0">Pagina: {currentPage}</h1>

            <div className=" flex space-x-5">
              < button
                onClick={initialPage}
                className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
              > Initial Page
              </button >
              < button
                onClick={prevPage}
                className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
              > Prev
              </button >
              <button
                onClick={nextPage}
                className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
              >Next
              </button>
              < button
                onClick={finalPage}
                className=" font-semibold py-3 px-5 bg-white bg-opacity-50  hover:bg-opacity-70 rounded-xl"
              > Final Page
              </button >
            </div>

            <div></div>
          </div>
        </>
      )}
    </div>

  )
}
