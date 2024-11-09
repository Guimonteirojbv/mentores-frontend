import { colors } from "@/styles/theme";
import styled from "styled-components";


export const Button = styled.button<{textColor?: string}> `
    color: ${props => props.textColor === 'red' ? colors.red[500] : colors.gray[700]};
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 20px;

    background-color: transparent;
    border-radius: 6px;

    border: 2px solid ${colors.gray[500]};

    &:last-child {
        margin-top: 20px;
    }
`