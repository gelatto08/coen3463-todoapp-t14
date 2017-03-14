import React, {
    Component
} from 'react';

class SearchBox extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        query: '',
      }
      this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange(event){
    this.setState({
      query:event.target.value
    })
  }
 

  render() {
    let librarycomponents = [];
    this.props.items.forEach((item,index) => {
      if(item.name.toLowerCase().indexOf(this.state.query) > -1){
      librarycomponents.push(
          <li key={item.index}>{this.props.items[index].name} <a href={this.props.items[index].url}>{this.props.items[index].url}</a></li>
        );
  }
    })


    return (
      <div>
        <h3>Instant Search</h3>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Type here"
        />

        <ul>
          {librarycomponents}

        </ul>
        
      </div>
    );
  }
}

export default SearchBox;