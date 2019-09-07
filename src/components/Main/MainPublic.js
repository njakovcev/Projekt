import React from 'react'
import Listings from './Listings';
import SearchBar from './SearchBar'

class MainPublic extends React.Component{


    render(){
        return(
            <div className='Main'>
                <SearchBar />
                <Listings />
            </div>
        )
    }
}


export default MainPublic