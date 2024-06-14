import { useParams } from "react-router-dom";
import FoodDetailsCard from "./FoodDetailsCard";

const SearchDetails = () => {
    const {searchTerm} = useParams();
  return (
    <>
    <FoodDetailsCard foodId={searchTerm} url="search.php?s="/>
    </>
  )
}

export default SearchDetails