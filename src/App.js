import React, { Component } from 'react'
import Ninjas from './Ninjas';
 class App extends Component {
   state ={
     ninjas:[
      {name:"Sobha",age:"30",belt:"green",id:1},
      {name:"Ryu",age:"20",belt:"black",id:2},
      {name:"Ryu",age:"35",belt:"black",id:3}
    ]
   }
  render() {
    return (
      <div>
        Welcome
        <Ninjas ninjas={this.state.ninjas}/>
        
      </div>
    )
  }
}
export default App