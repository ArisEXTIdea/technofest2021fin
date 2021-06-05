import React from 'react'
import './style.scss'

function Button({title, addStyle, ...rest}) {
    return (
        <div>
            <button className={`btn btn-default button-style ${addStyle}`} {...rest}>{title}</button>
        </div>
    )
}

export default Button
