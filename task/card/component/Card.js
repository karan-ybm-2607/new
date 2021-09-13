import React, { Component } from 'react'
import Styles from './card.module.css'

const Card = (props) => {
    return (
        <div>
        <div  className="card" >
          <img src="/img/img.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.url}</p>
            <p className="card-text">{props.thumbnailUrl}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
    )
}

export default Card
