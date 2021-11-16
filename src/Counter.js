import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0,
             
        }
    }
    onIncrement=()=>
    {
        this.setState({counter:this.state.counter+1})
    }
    onDecrement=()=>
    {
        this.setState({counter:this.state.counter-1})
    }
    onAssign=()=>
    {
        this.setState({counter:this.state.counter})
    }
    
    componentDidMount=()=>
    {
        console.log("counter-componentDidMount")
    }
    componentWillUnmount=()=>
    {
        console.log("counter-componentWillUnmount")
    }
    shouldComponentUpdate=(newState,newProps)=>
    {
        console.log("shouldComponentUpdate")
        console.log(newState)
        console.log(this.state)
       if(this.state.counter==newState.counter)
       {
           return false
       }else
       {
           return true
       }
       
    }
    componentDidUpdate=()=>
    {
        console.log("componentDidUpdate")
    }
    render() {
        console.log("counter-render")
        return (
            <div>
                <h1>Counter:{this.state.counter}</h1>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                <button onClick={this.onAssign}>Assign Same</button>
            </div>
        )
    }
}
