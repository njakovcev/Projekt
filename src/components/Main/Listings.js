import React from 'react'
import './Listing.css'

const listing = {
    imgSrc: 'https://www.nordicchoicehotels.com/globalassets/global/hotel-pictures/clarion-hotel/clarion-hotel-copenhagen-airport/rooms/room-clarion-hotel-copenhagen-airport.jpg?t=SmartScale%7c1024x570',
    name: 'Hotel Nova',
    city: 'Zadar',
    ratings: '4.5',
    unitType: 'Double room'
}

class Listings extends React.Component {
    render(){
        return(
            <div className='listing'>
                <div className='imgContainer'>
                    <img src='https://www.nordicchoicehotels.com/globalassets/global/hotel-pictures/clarion-hotel/clarion-hotel-copenhagen-airport/rooms/room-clarion-hotel-copenhagen-airport.jpg?t=SmartScale%7c1024x570' alt=''/>
                </div>
                <h2>{listing.name}</h2>
                <div className='listingInformation'>
                    <p>City: {listing.city}</p>
                    <p>Rating: {listing.ratings}</p>
                    <p>Room type: {listing.unitType}</p>
                    
                </div>

            </div>
        )

        
    }
}

export default Listings