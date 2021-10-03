// Packages
import styled from "styled-components";

// Types
import { ITagProps } from './types'



export const Container = styled.li `
    background-color: ${props => props.theme.colors.tertiary};

    list-style: none;
    border-radius: 10px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      
        padding-left: 10px;
    }

    > div span {
        margin-bottom: 2px;
        font-size: 18px;
        font-weight: bold;
    }
`

export const Tag = styled.div<ITagProps> `
    width: 12px;
    height: 60%;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`