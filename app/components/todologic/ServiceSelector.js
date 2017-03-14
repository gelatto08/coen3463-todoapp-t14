import React, {Component} from 'react';
import ServiceItem from './ServiceItem'
import './ServiceSelector.css';

class ServiceSelector extends Component {
  constructor(props) {
      super(props);
      this.state = {
        total: 0
      }
      this.handleItemClick = this.handleItemClick.bind(this)
  }
  

  handleItemClick(price,isActive){
    console.log(isActive,price);
    if(isActive){
      this.setState({
        total: this.state.total - price
      })
    } else{
      this.setState({
        total: this.state.total + price
      })
    }
  }
  render() {
    let services = [];
    this.props.items.forEach((item,index)=>{
      services.push(
         <ServiceItem name={item.name} price={item.price} onClick={this.handleItemClick}/>
        );
    })

    return (
      <div className='ServiceSelector'>
        <h3>Order Form</h3>
        {services}
        <h1>Total: ${this.state.total}</h1>
        <div className='Service-list'> </div>
        <div className='Service-total'>
        </div>
      </div>
      
    );
  }
}

export default ServiceSelector;