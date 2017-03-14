import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
  super(props);
    this.state={
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  // increment = () =>{
  //   let num = this.state.count;
  //   this.setState({
  //     count: num +1
  //   })
  // }
  increment(){
    let num = this.state.count;
    this.setState({
      count: num +1
    })
  }
  decrement(){
    let num = this.state.count;
    this.setState({
      count: num -1
    })
  }

  render() {
    return (
      <div className="counter">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}> Increment </button>
        <button onClick={this.decrement}> Decrement </button>
      </div>
    )
  }
}
export default Counter;
