import React from 'react'
import Rating from '@mui/material/Rating';
import '../Card/Card.scss'
function Card(props) {
  return (
    <div className="card">
      <div className="card-top">
          <img src='https://www.colorbook.io/imagecreator.php?hex=FF6900&width=1920&height=1080' />
        <h1>{props.item.name}</h1>
      </div>
      <div className="stars">
      <Rating name="size-small" defaultValue={5} size="small" />
      </div>
      <div className="review-content">
        <p>{props.item.review}</p>
      </div>
    </div>
  )
}

export default Card
