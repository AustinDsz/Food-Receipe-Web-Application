import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

const FoodDetailsCard = ({ foodId, url}) => {
  const [showFood, setFood] = useState([]);
  
  if (url || foodId){
    //do nothing....   
  }else{
    url="random.php"
    foodId=""
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const req = await fetch(`${BASE_URL}${url}${foodId}`);
        const data = await req.json();
        setFood(data.meals);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchdata();
  }, [foodId, url]);

  console.log(showFood)

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push({
          ingredient: meal[`strIngredient${i}`],
          measure: meal[`strMeasure${i}`],
        });
      }
    }
    return ingredients;
  };

  return (
    <>
      <div className='flex flex-row flex-wrap'>
        {showFood.map(meal => {
          const ingredients = getIngredients(meal);
          return (
            <div key={meal.idMeal} className="m-5">
              <h2 className="flex card-title text-center text-orange-500 text-2xl m-10">{meal.strMeal}</h2>
              <figure className="mx-10">
                <img className="rounded" src={`${meal.strMealThumb}`} alt={meal.strMeal} width={300} height={300} />
              </figure>
              <h3 className="m-10 text-xl underline text-amber-700">Ingredients:</h3>
              <ul className="m-10 list-disc list-inside">
                {ingredients.map((item, index) => (
                  <li key={index} className="text-amber-950">
                    {item.measure} {item.ingredient}
                  </li>
                ))}
              </ul>
              <h1 className="m-10 text-xl underline text-amber-700">Instructions:</h1>
              <p className="text-amber-950 m-10">
                {meal.strInstructions}
              </p>
              <a href={`${meal.strSource}`} className="m-10 text-amber-700 underline" target="_blank">Source</a>
              <a href={`${meal.strYoutube}`} className="m-10 text-amber-700 underline" target="_blank">YouTube</a>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

FoodDetailsCard.propTypes = {
  foodId: PropTypes.isRequired,
  url: PropTypes.string.isRequired,
};

export default FoodDetailsCard;


//  <div className="card w-96 bg-amber-400 hover:bg-amber-700 border-solid border-2 border-red-400 shadow-xl p-5 mx-auto  my-5" key={showFood.idMeal}>
                //     <h2 className="flex card-title text-center text-white text-2xl p-5">{meal.strMeal}</h2>
                //      <figure><img className="rounded" src={`${meal.strMealThumb}`} alt="Shoes" width={200} height={200} /></figure>
                //      <div className="card-body">
                //        <h3 className="card-title text-left ... text-white">
                //        {meal.strInstructions}
                //        </h3>
                //      </div>
                //  </div>