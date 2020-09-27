import React, { useState, useEffect } from 'react'

import { getArtist } from '../api'

function ArtistBio(props) {
    // const ben = {
    //     id: 6,
    //     username: "ben",
    //     hash: "benHash",
    //     email: "ben@gmail.com",
    //     name: "ben",
    //     profile_picture: "https://www.badaboom.co.nz/images/profile-photos/ben.jpg/@@images/ef47f76b-4091-471a-a51a-e8044620ecb1.jpeg",
    //     about: "Ben Sarten Imagery is a video and photography production company operating out of THE BONE ZONE/Te iwi Koiwi Creative Space, in St Johns, Auckland. Prioritising the documentation and visibility of environmental and social/human rights activism and the New Zealand arts scene, with collaboration and community as its kaupapa.",
    //   }

    const [artist, setArtist] = useState({
        artist: {}
    })
    useEffect(() => {
        getArtist(props.match.params.id)
        .then((res) => {
            setArtist(res)
        })
        .catch((error) => {
            console.log('error: ', error.message)
        })
    }, [])
    console.log('artist: ', artist)
    
    const styles = {
        backgroundImage: `url(${artist.profilePicture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        height: '20em'
      }

    return (
        <div>
            <div className="card-flex-item card" style={{ margin: '20px' }}>
            <h4 className="has-text-centered mt-3">{artist.name}</h4>
                <div className="mt-4 mb-6 mx-6" style={styles}></div>
                    <p>
                        {artist.about}
                    </p>      
            </div>
        </div>
    )
}

export default ArtistBio
