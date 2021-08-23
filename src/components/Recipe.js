import React from 'react'

export default function Recipe(props) {
    return (<div>
            {props.menu.map((m)=>{
                 const {list,type}=m;
                 return(
                     <>
                 {list.map((l)=>{
                      const {id,name}=l;
                      return(
                          <>
                          <h3>{name}</h3>
                          
                          </>
                      );
                 })}
                 </>
                 );
            })}
        </div>
    )
}
