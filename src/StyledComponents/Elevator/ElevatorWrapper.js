
import styled from 'styled-components'

function getFloor(floor){
    
    if(floor>0){
        let distance = floor*(-120)
        return distance
    }
}


export const ElevatorWrapper = styled.div`
    width:85px;
    height:95px;
    background-color:white;
    border:solid black 5px;
    border-top:solid black 8px;
    /* border-radius:4px; */
    margin:auto;
    margin-top:-15px;
    transform:${props=>props.animateElevator || props.restartElevator ?
            `translateY(${getFloor(props.floorToGo)}px)`
        : ''};
    transition:${props=>props.animateElevator ? 'transform 3s': ''}
    
`


