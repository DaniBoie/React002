import React from 'react'

const gifCard = props => {
  return (
    <div className="card col-md-4" style={{ display: "inline-block" }}>
      <img src={props.gif.img_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.gif.title}</h5>
        <p className="card-text">{'Searched For: ' + props.gif.keyword}</p>
      </div>
    </div>
  )
}

export default gifCard