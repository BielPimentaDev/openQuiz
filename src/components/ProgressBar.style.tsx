import styled from "styled-components"

export interface Props{
    percentual: number
}


export const ProgressBar = styled.div<Props>`

    height: 100%;
    border-radius: 8px;
    width: ${props => props.percentual}%;
    background-color: #FFC42C
`