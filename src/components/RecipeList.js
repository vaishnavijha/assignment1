import React from 'react'

export default function RecipeList({categories,filterItems}) {
    return (
        <div>
            
         {categories.map((category,index)=>{
             return <button key={index} onClick={()=>filterItems(category)}>{category}</button>
         })}
        </div>
    )
};
