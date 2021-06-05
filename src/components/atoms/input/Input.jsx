import React from 'react'
import './style.scss'

function Input({labelName, ...rest }) {
    return (
        <div className='form-group'>
            <label htmlFor={labelName}>{labelName}</label>
            <input className='form-control form-input' {...rest}/>
        </div>
    )
}

export default Input
