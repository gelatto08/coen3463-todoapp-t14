import React, {PropTypes} from 'react';
import '../components/App.css';
import ToDos from '../components/ToDos.js';
import Loading from './loading';
import TodoApi from '../api/TodoApi';
import { Segment, Menu, Input, Form, List, Button, Divider } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

var moment = require('moment-timezone');

class Todo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
        }
        this.onAddTodo = this.onAddTodo.bind(this);
    }
    onAddTodo(e) {
        e.preventDefault();
        var lastState = this.props.items; //get last state of item
        let toDo = { //create a todo object to be saved
            name: this.refs.todo.value,
            user: this.props.user,
            createDate: moment().tz("Asia/Manila").format('LLL'),
        }
        this.setState({ //update items
            items :[...lastState,Object.assign({},toDo)]
        });
        TodoApi.onAddTodo(toDo).then(res=>{
            //this.props.set(todo);
            console.log(res.data.response);
            if(res.data.success){
                this.props.setStateItem([...lastState,Object.assign({},res.data.response)]);
                this.props.setOriginalItems();
                // alert("Todo added");
                // this.setState({isLoadingItem:false});
                return;
            }
            //this.setState({isLoadingItem:false});
            // toastr.error(res.data.response);
        }).catch(err=>{
            // toastr.error('Ooops! Try again');
            console.log(err);
        }); 
    }
    
    render(){
    return(
        <div className="App-section">
                <div className="App-header">
                    <p style={{textAlign:'center'}}>Todo Application!</p>
                    
                </div>
                {this.props.isLoading? 
                <Loading text="Loading..." speed={300}/>
                :
                <Container>
                <Segment inverted>

                <Divider inverted />
                <Divider horizontal inverted><p>{this.props.name}</p></Divider>
                
                 <Divider horizontal inverted><p>{this.props.email}</p></Divider>
                </Segment>
               
                <div className="App-menu">
                <Menu inverted>
                  <Menu.Item name='List of Todo Items' active={this.props.activeItem === 'all'} onClick={this.props.todoAll} />
                  <Menu.Item name='On-Going Items' active={this.props.activeItem === 'open'} onClick={this.props.todoOpen} />
                  <Menu.Item name='Finished Items' active={this.props.activeItem === 'Completed'} onClick={this.props.todoCompleted} />
                  <Menu.Menu position='right'>
                    <Menu.Item name='Clear All Finished' onClick={this.props.DelAllComplete} />
                    <Menu.Item icon='power' onClick={this.props.onLogOut} />
                  </Menu.Menu>
                </Menu>
                <Form>
                <Form.Field>
                <Segment inverted>
                    <Input size="medium" inverted>
                        <input inverted placeholder="Add a new item." ref="todo"/>
                        <Button icon='add circle' onClick={this.onAddTodo} inverted/>
                    </Input>
                </Segment>
                </Form.Field>
                </Form>
                <Segment inverted>
                    <div className="App-menu">
                    {this.props.onUpdate? <Loading text="Just one second" speed={300}/>:
                    <div>{(this.props.originalitems - this.props.completedCount)=== 1?
                    <p>{this.props.originalitems - this.props.completedCount}/{this.props.originalitems} item left</p>:
                    <p>{this.props.originalitems - this.props.completedCount}/{this.props.originalitems} items left</p>
                    } 
                        {this.props.onUpdate? <Loading text="Loading" speed={300}/>:
                        <div>
                        <List verticalAlign='middle'>
                        {this.props.items.map((item, index)=>
                            <ToDos key={index}
                                    item={item}
                                    index={index}
                                    onComplete={this.props.onComplete}
                                    OnDelete={this.props.OnDelete}/>
                        )}
                        </List>
                        </div>
                        }
                        </div>
                    }
                    </div>
                </Segment>
                </div>
                </Container>
                }
        </div>
    )
}
}

Todo.PropTypes = {
    onLogOut: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    
}
export default Todo;
