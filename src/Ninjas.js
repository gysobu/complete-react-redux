import React, { Component } from 'react'

 const Ninjas =(props)=> {
 
    const { ninjas } = props;
     const ninjaList=ninjas.map((ninja)=>{
    //  return(
    //   <div key ={ninja.id}>
    //   <div>Name:{ninja.name}</div>
    //   <div>Age: {ninja.age}</div> 
    //   <div>Belt:{ninja.belt}</div>
    //   </div>
    // ) 
    if (ninja.age >20 ){
      return (
      <div key ={ninja.id}>
      <div>Name:{ninja.name}</div>
       <div>Age: {ninja.age}</div> 
       <div>Belt:{ninja.belt}</div>
      </div>
      )
    }
    else {
      return null;
    }
     }) 
  //  return  ninja.age ?<div key ={ninja.id}>
  //      <div>Name:{ninja.name}</div>
  //      <div>Age: {ninja.age}</div> 
  //      <div>Belt:{ninja.belt}</div>
  //      </div> :null  
  //    })
        
    return(
      <div>
      {ninjaList}
      </div>
    );
       
}
export default Ninjas