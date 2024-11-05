

function Card({image}) {
  return (
    <>
      <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
        <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src={image.webformatURL}
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-1 text-xl font-semibold text-slate-800">
            Photo by {image.user}
          </h4>
          {/* <p className="text-sm font-semibold text-slate-500 uppercase">
            Product Manager
          </p> */}
          <p className="text-base text-slate-600 mt-4 font-bold ">
            Views: {image.views}
          </p>
          <p className="text-base text-slate-600 mt-4 font-bold ">
            Likes: {image.likes}
          </p>
          <p className="text-base text-slate-600 mt-4 font-bold ">
            Comments: {image.comments}
          </p>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7">
          <button
            className="min-w-15  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Follow
          </button>
          <button
            className="min-w-15  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Follow
          </button>
          <button
            className="min-w-15  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Follow
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
