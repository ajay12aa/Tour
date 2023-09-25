import TripData from "./TripData"
import "./TripStyles.css"
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/6.jpg'
import Trip3 from '../assets/8.jpg'
import React from 'react'

function Trip() {
  return (
    <div className="trip">

        <h2>Recent Trips</h2>
        <p>
            You can disciver 
            unique destination using Google Maps.
        </p>

        <div className="tripcard" >
        <TripData
        image={Trip1}
        heading="Trip in Indonasia"
        text="Indonesia,officially the 
        Republic of Indonesia,is a country
         in Southeast Asia and Oceania between 
         the Indian and Pacific oceans.It
          containes of over 17,000 islands 
          including Sumatra Java,Sulawesi,and
           parts of Borneo and New guinea."
        />
        <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Malaysia is a Southeast 
        Asian country occupying parts 
        of the Malay Penisula and the 
        islands of Borneo.It's known for
         its eaches,rainforests and mix of Malay,Chinese
         Indian and European cultural infulences."
        />
        <TripData
        image={Trip3}
        heading="Trip in France"
        text="France,is Westren Europe,
        encompasses medieval cities alpine 
        villages and Mediterranena beaches.
         Paris,its capital ,is famed for its
          fashion houses,classical art mesem 
          including the Lourve 
        and monuments like the Eiffel Tower."
        />


        </div>

        


    </div>



  )
}

export default Trip