import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
    
    <div className="relative isolate overflow-hidden min-h-screen flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8 bg-orange-200">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl p-3">
        
        <h1 className="mx-auto max-w-2xl lg:max-w-4xl text-5xl text-center sm:leading-9 font-black text-orange-500 ">Discover Delicious Recipes from Around the World</h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-amber-900 sm:text-2xl sm:leading-9">
            <p>
            Explore a diverse collection of recipes from different cuisines, each bringing unique flavors and traditions to your table.
            </p>
          </blockquote>
          <figcaption className="flex mt-10 items-center">
          <button className="mx-auto btn bg-yellow-300 hover:bg-yellow-500 text-white hover:text-white border-0"><Link to={`/cat`}>See Categories &gt;</Link></button>
            
          </figcaption>
        </figure>
      </div>
    </div>
    </>
  )
}

export default HomePage