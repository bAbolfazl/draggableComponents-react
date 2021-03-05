import styled from "styled-components";

export const PersonSingleStyled = styled.div`
    flex-basis: 50%;
    padding: 10px;
    
    position: relative;
    
    /* background-color: red; */

    .person-single__img {
        min-height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('${({ img }) => img ? img : ''}')
    }

    .person-single__name {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        & > div {
        background-color: rgba(0,0,0,.5);
        border-radius: 5px;
        color: white;
        padding: 0 3px;
        font-size: .7em;
        }
    }
`