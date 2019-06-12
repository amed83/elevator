
import React ,{Component} from 'react'
import DoorWrapper from '../StyledComponents/DoorUI/Door'
import {connect} from 'react-redux'

class Door extends Component{

    render(){
        return(
            <DoorWrapper
                isOpen={this.props.open}>
               
            </DoorWrapper>
        )
    }

}

const mapStateToProps = state =>{
    return{
         open:state.mainReducer.doorOpen
    }
   
}

export default connect(mapStateToProps) (Door)