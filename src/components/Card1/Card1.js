import React from 'react' 

const Card1 = props => {
  console.log(props)
  return (
    <div className="card col-md-4" style={{display: "inline-block"}}>
      <img src={props.song.poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.song.title}</h5>
  <p className="card-text">{props.song.artist}</p>
      </div>
    </div>
  )
}

export default Card1