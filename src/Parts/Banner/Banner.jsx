

const Banner = () => {

  return (
    <div className="bg-bg-primary-clr">
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className=" mx-auto p-5">
          <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
  
          <div className="flex mt-8">
            <input
              type="text"
              className="w-3/4 h-12 pl-4 rounded-l-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Search here..."
            />
  
            <button
              className="w-1/4 h-12 bg-[#FF444A] text-white rounded-r-lg hover:bg-red-600 transition duration-300"
              onClick={() => {
                // logic hobe search er
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>  
);
}

export default Banner
