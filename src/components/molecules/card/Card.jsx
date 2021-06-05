import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../..'
import './style.scss'

function Card({cardImg, cardContent, cardHeader, cardButtonLink}) {
    return (
        <div className="my-card">
            <img className="card-image" src={cardImg} alt="Card image cap" />
            <div className="my-card-body p-3">
                <h5>{cardHeader}</h5>
                {/* <p className="my-card-text">{cardContent}</p> */}
                <Link to={cardButtonLink}><Button title="Daftar" addStyle='btn-block'/></Link>
             </div>
             
        </div>
    )
}

export default Card

