
import React, {Component} from 'react'
// import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {moveElevator} from '../actions/index'
import {Button} from '../StyledComponents/FloorsButtons/Button'


class ButtonComponent extends Component {
    
    moveElevatorMethod(){
        const {floor} = this.props
        this.props.startElevator(floor)
    }
    render(){
        const {floor} = this.props
        
        return(
            <div style={btn}>
                <Button 
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



export default connect(null,mapDispatchToProps) (ButtonComponent)