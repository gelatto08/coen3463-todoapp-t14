import React, {Component} from 'react';

class ServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.onAdd = this.onAdd.bind(this)
  }
  
  handleClick(event){
    this.props.onClick(this.props.price,this.state.active)

    this.setState({
      active: !this.state.active
    })
      }
  onAdd(){

    
  }
  render() {

    return (
      // <p  onClick={this.props.onHandleClick(this.props.price,this.props.isActive)} className={this.state.active? 'active': ''}>
      <p  onClick={this.handleClick} className={this.state.active? 'active': ''}>
        {this.props.name} <b>${this.props.price.toFixed(2)}</b>
      </p>
    );
  }
}

export default ServiceItem;