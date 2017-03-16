import React, {PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Button, Checkbox, Form, Input, Message,Menu } from 'semantic-ui-react';



function User(props){
    return(
        <div className="App-body">
            {props.login?
                <div className="App-sections" onFocus={props.handleLogin}>
                    
                    <Menu compact>
                      <Menu.Item active>
                        <Login/>
                      </Menu.Item>

                      <Menu.Item active>
                         <Button onClick={props.switch} value="RegForm" primary>Register</Button> 
                      </Menu.Item>
                    </Menu>
                        
                               
                </div>:
                <div className="App-sections" onFocus={props.handleRegister}>      
                    <Menu compact>
                        <Menu.Item active>
                            <Register />
                        </Menu.Item>
                        <Menu.Item active>
                            <Button onClick={props.switch} value="LoginForm" secondary>Back</Button>
                        </Menu.Item>
                    </Menu>            
                    
                    
                    
                </div>
            }
        </div>
    );
}

User.PropTypes = {
    login: PropTypes.bool.isRequired,
    switch: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}

export default User;
