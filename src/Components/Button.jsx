import React from 'react'
import './Button.css'

export default props => 
<button
    onClick = {()=> props.click(props.label)}
    className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    ${props.spOp ? 'spOp' : ''}
`}>
    {props.label}
</button>