import {useParams } from "react-router-dom"
import FoodCard from "../utils/FoodCard";


const CatgFoods = () => {
    const {id} = useParams();
  return (
    <>
    <h1 className="text-4xl my-5 text-center text-orange-400 font-semibold">{id} items</h1>
      <FoodCard id={id}/>
    </>
  )
}

export default CatgFoods