import React, {PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Button, Checkbox, Form, Input, Message } from 'semantic-ui-react';



function User(props){
    return(
        <div>
            {props.login?
                <div className="App-section" onFocus={props.handleLogin}>
                    <div>
                        <Login/>   
                        <br/>
                        <Button onClick={props.switch} value="RegForm" primary>Register</Button> 
                    </div>              
                </div>:
                <div className="App-section" onFocus={props.handleRegister}>                  
                    <Register />
                    <br/>
                    <Button onClick={props.switch} value="LoginForm" secondary>Back</Button>
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
