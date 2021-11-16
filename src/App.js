import React, { Component } from 'react'
import Counter from './Counter'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show:true
    }
  }
  onBtnClick=()=>
  {
    this.setState({show:!this.state.show})
  }
  
  render() {
    return (
      <div>
        {this.state.show?<Counter/>:null}
        <button onClick={this.onBtnClick}>Toggle Counter</button>
      </div>
    )
  }
}

