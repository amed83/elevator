
import React,{Component} from 'react'
import {ElevatorWrapper} from '../StyledComponents/Elevator/ElevatorWrapper'
import {connect} from 'react-redux'


const Elevator = (props)=>{
    const {animateElevator,floor,stopElevator,restartElevator}= props    
    return(
        <ElevatorWrapper
            stopElevator={stopElevator}
            restartElevator={restartElevator}
            floorToGo={floor}
            animateElevator={animateElevator}>
        </ElevatorWrapper>
    )        
                
}

const mapStateToProps = state=>{
    return {
        animateElevator:state.mainReducer.startElevator,
        floor:state.mainReducer.floorToGo,
        stopElevator:state.mainReducer.stopElevator,
        restartElevator:state.mainReducer.restartElevator
    }
}


export default connect(mapStateToProps)(Elevator)