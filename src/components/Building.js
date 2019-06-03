
import React, {Component} from 'react'
import MainWrapper from '../StyledComponents/BuildingUI/MainWrapper'
import Floor from './Floor'
import Elevator from './Elevator'
import Button from './Button'

const floors=[4,3,2,1,0]


const Building =()=>{
    
    const floorList = floors.map((floor,key)=>{
        return (
            <Floor key={key}>
            </Floor>
        )
    })
    const buttonsList = floors.map((button, key)=>{
        return(
            <Button
                floor={button}
                key = {key}>
                <p>{key}</p>
            </Button>
        )
    })
    
    return(
        <div>
            <MainWrapper>
                {floorList}
                <Elevator>
                </Elevator>
            </MainWrapper>
            <div style={btn_container}>
                {buttonsList}
            </div>
        </div>
    )
    
}

const btn_container = {
    margin:'auto',
    position:'absolute',
    left:'8%',
    top:'10%',
    width:'50%',
    display:'flex',
    flexDirection:'column'
}


export default Building