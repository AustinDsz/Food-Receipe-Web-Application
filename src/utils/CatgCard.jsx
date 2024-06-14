import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const cat = 'categories.php';

export function CatgCard() {
    
        const [showSelectedCategory, setCategory] = useState([]);
        
        useEffect(()=>{
            const fetchdata = async()=>{
                
                const req = await fetch(`${BASE_URL}/${cat}`)
                const data = await req.json();
                setCategory(data.categories)
            };
            fetchdata();
        },[])
    
        // console.log(showSelectedCategory);

    return(
        <>
        <div className='flex flex-row flex-wrap'>
              {showSelectedCategory.map(catego => (
                <div className="card w-96 bg-amber-400 hover:bg-amber-700 border-solid border-2 border-red-400 shadow-xl p-5 mx-auto  my-5" key={catego.idCategory}>
                  <Link to={`/cat/${catego.strCategory}`}>
                    <figure><img className="rounded" src={`${catego.strCategoryThumb}`} alt="Shoes" width={200} height={200} /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-center ... text-white">
                        {catego.strCategory}
                      </h2>
                      <p className='truncate-multiline text-left text-white'>
                        {catego.strCategoryDescription}
                      </p>
                    </div>
                  </Link>
                </div>
    
              ))}
            </div>
            
        </>
    )

}

export default CatgCard;