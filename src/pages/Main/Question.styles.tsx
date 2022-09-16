import styled from 'styled-components'
import React from 'react'

type Props = {
    isFlipped : boolean,
    isTrue : boolean
}


export const Alternative = styled.div<Props>`
    text-transform: capitalize;
    width:80%;
    margin: auto;
    margin-bottom: 20px;
    padding:10px;
    color:black;
    border-radius: 15px;
    text-align: center;
    background-color: ${props => props.isFlipped ? (props.isTrue ? '#50F17D' : '#FF5C5C') : '#FBFBFB' };
    box-shadow: 0px 3.21839px 3.21839px rgba(0, 0, 0, 0.25);
    cursor: pointer

`