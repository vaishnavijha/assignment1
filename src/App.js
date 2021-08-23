

import './App.css';
import menu from './Databasic';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import { useState } from 'react';
const allCategories=["all",...new Set(menu.map((item)=>item.type))];
function App() {
  const [recipe, setrecipe] = useState(menu);
  const [categories,setCategories]=useState(allCategories);
  const filterItems=(category)=>{
    if(category==="all"){
    setrecipe(menu);
    return;
    }
    const newItems=menu.filter((m)=>m.type===category);
    setrecipe(newItems);

  }
  return (
    <>
   <h1>recipes list </h1>
   <RecipeList categories={categories} filterItems={filterItems} />
   <Recipe menu={recipe}  />
   
   </>
  );
}

export default App;
