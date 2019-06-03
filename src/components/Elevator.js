
import React,{Component} from 'react'
import {ElevatorWrapper} from '../StyledComponents/Elevator/ElevatorWrapper'
import {connect} from 'react-redux'


const Elevator = (props)=>{
    const {animateElevator,floor,stopElevator}= props    
    return(
        <ElevatorWrapper
            stopElevator={stopElevator}
            floorToGo={floor}
            animateElevator={animateElevator}>
        </ElevatorWrapper>
    )        
                
}

const mapStateToProps = state=>{
    return {
        animateElevator:state.mainReducer.startElevator,
        floor:state.mainReducer.floorToGo,
        stopElevator:state.mainReducer.stopElevator
    }
}


export default connect(mapStateToProps)(Elevator)