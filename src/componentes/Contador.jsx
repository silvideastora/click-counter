import React from 'react'
import { ContadorWrapper } from './Contador.styled';

export default function Contador({ numClicks }) {
    return (
        <ContadorWrapper>
            {numClicks}
        </ContadorWrapper>
    )
}
