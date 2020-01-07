import styled from 'styled-components'
import CustomButton from "../CustomButton/CustomButton";

export const CardDropdownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const CardDropdownItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const CardDrowdownEmpty = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CardDropdownButton = styled(CustomButton)`
  margin-top: auto;
`
