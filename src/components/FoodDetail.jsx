import { useParams } from "react-router-dom"
import FoodDetailsCard from "../utils/FoodDetailsCard"

const FoodDetail = () => {
    const {foodid} = useParams()
  return (
    <>
        <FoodDetailsCard foodId={foodid} url="lookup.php?i="/>
    </>
  )
}

export default FoodDetail