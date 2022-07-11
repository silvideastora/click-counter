import React from 'react';
import { Button } from './Button.styled';

export default function Boton({text, handlerClick, primary}) {
    return (
        <Button
        primary={primary}
        onClick={handlerClick}>
            {text}
        </Button>
    )
}
