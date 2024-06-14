import './App.css'
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import CatgFoods from './components/CatgFoods';
import FoodDetail from './components/FoodDetail';
import SearchDetails from './utils/SearchDetails';
import FoodDetailsCard from './utils/FoodDetailsCard';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="cat" element={<Categories />} />
          <Route path='cat/:id' element={<CatgFoods/>}/>
          <Route path='cat/:id/:foodid' element={<FoodDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchDetails/>}/>
          <Route path='/random' element={<FoodDetailsCard/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App
