import React, {PropTypes} from 'react';
import '../components/App.css';
import { Button, Segment } from 'semantic-ui-react';

import Loading from './loading';



const ToDos=(props)=>{
    return (
        
                <li> <p style={{textDecoration:(props.item.isCompleted?'line-through':'none')}}>{props.item.name}
                   
                <Segment inverted>
                    <Button  icon='checkmark' color='green' onClick={(e)=>{
                                            e.preventDefault()
                                            props.onComplete(props.item, props.index);
                                        }}/>
                    <Button  icon= 'remove'  color='red' onClick={(e)=>{
                                            e.preventDefault()
                                            props.OnDelete(props.item, props.index);
                                        }}/>
                    </Segment>
                </p>

                </li>
            
    );
}
ToDos.propTypes = {
    item: PropTypes.object.isRequired
    
}
export default ToDos;
