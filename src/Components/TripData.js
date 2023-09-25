import React from 'react'
import "./TripStyles.css"
function TripData(props) {
    console.log(props.image);
    console.log(props.heading);
    console.log(props.text);
  return (
    <div className='t-card'>

        <div className='t-image'>

            <img src={props.image} alt=''/>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>


        </div>


    </div>
  )
}

export default TripData