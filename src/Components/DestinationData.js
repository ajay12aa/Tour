import React from 'react'
import "./DestinationStyles.css"
//import Mountaine1 from "../assets/1.jpg"
//import Mountaine4 from "../assets/4.jpg"
//import Mountaine3 from "../assets/3.jpg"
//import Mountaine2 from "../assets/2.jpg"

function DestinationData(props) {
    return (
        <div className={props.className}>
            <div className='first-text'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className='image'>
                <img src={props.image1} alt='' />
                <img src={props.image2} alt='' />
            </div>
        </div>
    )
}

export default DestinationData

//One of the most iconic views in Lunzon,Mt.Taal boasta a volcano inside a lake an island.If 
//you fancy a closer look,the k=hike up the craters is a mrer 45 minutes and is easy enough 
//for begginers Guides wikk assit you most of the way ans you'll see the peculiar environment 
//found on an active volcano ,including volcanic rocks and steam vents.
//The hike can be dusty and hot,so plan for an early morning trip,and them unwind with some 
//bulalo before heading bak Hom