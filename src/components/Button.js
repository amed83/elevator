
import React, {Component} from 'react'

import {connect} from 'react-redux'
import {moveElevator} from '../actions/index'
import {Button} from '../StyledComponents/FloorsButtons/Button'


class ButtonComponent extends Component {
    
    moveElevatorMethod(){
        const {floor} = this.props
        this.props.startElevator(floor)
    }
    render(){
        const {floor,whereIsElevator} = this.props
        let selectButton=false
        if(whereIsElevator[0]===floor){
            selectButton = true
        }
        
        return(
            <div style={btn}>
                <Button 
                    selectFloor= {selectButton}
                    onClick={()=>this.moveElevatorMethod()}
                    variant="contained"
                    color='primary'>
                    <p>{floor}</p>
                </Button>
            </div>
        )
    }
    
}


const btn ={
    display:'flex',
    width:'100%',
    flexDirection:'column',
}

const mapDispatchToProps = dispatch=>{
    return{
        startElevator:(floor)=>dispatch(moveElevator(floor))
    }
}

const mapStateToProps = state =>{
    return{
        whereIsElevator:state.mainReducer.whereIsElevator
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (ButtonComponent)