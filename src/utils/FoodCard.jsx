import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';




const FoodCard = ({id}) => {
    const [showFoods, setFoods] = useState([]);
        
        useEffect(()=>{
            const fetchdata = async()=>{
                
                const req = await fetch(`${BASE_URL}${id}`)
                const data = await req.json();
                setFoods(data.meals)
            };
            fetchdata();
        },[id])

        // console.log(showFoods)
  return (
    <>
    
    <div className='flex flex-row flex-wrap'>
               {showFoods.map(meal => (
                <div className="card w-96 bg-amber-400 hover:bg-amber-700 border-solid border-2 border-red-400 shadow-xl p-5 mx-auto  my-5" key={meal.idMeal}>
                  <Link to={`/cat/${id}/${meal.idMeal}`}>
                    
                    <figure><img className="rounded" src={`${meal.strMealThumb}`} alt="Shoes" width={200} height={200} /></figure>
                    
                    <div className="card-body">
                      <h2 className="card-title text-center ... text-white">
                        {meal.strMeal}
                      </h2>
                    </div>
                  </Link>
                </div>
    
              ))}
            </div>
    </>
  )
}

FoodCard.propTypes = {
    id: PropTypes.isRequired
  };

export default FoodCard