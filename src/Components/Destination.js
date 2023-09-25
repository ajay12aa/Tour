import React from 'react'
import "./DestinationStyles.css"
import Mountaine1 from "../assets/1.jpg"
import Mountaine2 from "../assets/2.jpg"
import Mountaine3 from "../assets/3.jpg"
import Mountaine4 from "../assets/4.jpg"
import DestinationData from './DestinationData'
function Destination() {
    return (
        <div className='destination'>

            <h1>Popular destination</h1>

            <p>tours give you the opportunity to see a lot within a frame
            </p>



            <DestinationData
                title="Taal Volcano,Batangas"

                text="One of the most iconic views i
            n Lunzon,Mt.taal boasts a volcano inside a
             lake inside an island. if you fancy a closer
              look,the hike up to the crater is a mere 45 
              minutes,and is easy enough for begginers
              .Guides will assist you most of the way ,
              and you'll see the peculiar environment found on a
              n active volcano including volcanic
               rocks and steam vents.The hikes can
                be dusty and hot so plan for an 
                early morning trip, and then unwind with some
                 bulalo before heading back home!"


                image1={Mountaine1}
                image2={Mountaine2}

                className="first-des"



            />
            <DestinationData

                title="Mt. Daguldul,Batangas"

                text="If you are looking for a hike that's a
             little more challenging but still good for 
             a begginer mountainer,chek out Mt.Daguldul 
             in San Juan ,Batangas.You'll start your hike
             from the beach and pass through tropical forest,
             differen rock fromations ,and small streams.there's
              a small store halfway up the trail where you can take
               a break and drink buko juice,and though the summit
                itself may not have the best view,the breeze is
                 fantastic .Once you've made it back down,head
                 straight to the beach for a refreshing well-deserved swim."

                 image1={Mountaine3}

               image2={Mountaine4}
               className="first-des-reverse"




            />






        </div>
    )
}

export default Destination