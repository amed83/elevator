
import React,{Component} from 'react'
import {ElevatorWrapper} from '../StyledComponents/Elevator/ElevatorWrapper'
import {connect} from 'react-redux'
import Door from './Door'
import Button from '@material-ui/core/Button';
import {openDoor} from '../actions/index'

class Elevator extends Component{

    openTheDoor(){
        this.props.open()
    }

    render(){
        const {animateElevator,floor,stopElevator,restartElevator}= this.props    
            return(
                <div>
                    <ElevatorWrapper
                        stopElevator={stopElevator}
                        restartElevator={restartElevator}
                        floorToGo={floor}
                        animateElevator={animateElevator}>
                        <Door/>
                    </ElevatorWrapper>
                    <Button onClick={()=>this.openTheDoor()}
                     style={btn}>Open Port</Button>
                </div>
                
            ) 
    }
}
           
                

const btn = {
    border:'solid black 1px',
    position:'absolute',
    left:'75%'
}

const mapStateToProps = state=>{
    return {
        animateElevator:state.mainReducer.startElevator,
        floor:state.mainReducer.floorToGo,
        stopElevator:state.mainReducer.stopElevator,
        restartElevator:state.mainReducer.restartElevator,
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        open:()=>dispatch(openDoor())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Elevator)