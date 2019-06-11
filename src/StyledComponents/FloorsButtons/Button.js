import styled from 'styled-components'

export const Button = styled.div`
    width:100px;
    height:100px;
    border-radius:50%;
    background-color:#D4D2D2;
   
    box-shadow:inset 0px 0px 2px 1px grey, 
        inset 0px -3px 4px rgba(0, 0, 0, 0.3), 
        inset 0px 3px 4px rgba(255, 255, 255, 0.6), 
        0px -2px 3px rgba(0, 0, 0, 0.6), 
        0px 1px 2px rgba(255, 255, 255, 0.7), 
        0px 0px 1px 1px black, 
        0px 0px 0px 5px grey, 
        0px 0px 1px 6px black;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:40px;
    p{
        font-size:22px;
        font-weight:700;
    }
    border:${props=> props.selectFloor ? 'solid 2px green':'solid #C0BFBF 2px;'};
`