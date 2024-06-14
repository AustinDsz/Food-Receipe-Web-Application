import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";


const Navbar = () => {
  const [searchTerm, setsearchTerm] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit =(e)=>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

    }
  };


  return (
    <div className="navbar bg-orange-300">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost text-xl text-white italic">
            <img alt="Tailwind CSS Navbar component" src="/food-japan-svg.svg" width={40} />FindRecipe
          </a>
        </Link>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black">
          <li><Link to={`/cat`}>Categories</Link></li>

          <li><Link to={`/random`}>Randomize</Link></li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-semibold">
          <li><Link to={`/cat`}>Categories</Link></li>

          <li><Link to={`/random`}>Randomize</Link></li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input 
          type="text" 
          placeholder="Search" 
          className="input input-bordered w-24 md:w-auto bg-white" 
          value={searchTerm} 
          onChange={(e)=>setsearchTerm(e.target.value)} 
          onKeyDown={(e)=>{
            if(e.key==='Enter'){
              handleSubmit(e);
              }
              }}
          />

        </div>
      </div>
    </div>
  )
}

export default Navbar