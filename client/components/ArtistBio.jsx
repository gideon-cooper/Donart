import React, { useState, useEffect } from 'react'
import ArtistItem from './ArtworkItem'

import { getArtist } from '../api'
import ArtworkItem from './ArtworkItem'

function ArtistBio(props) {
    const [artist, setArtist] = useState({
        artist: {}
    })
    useEffect(() => {
        getArtist(props.match.params.id)
        .then((res) => {
            console.log("USE EFFECT" , res)
            setArtist(res)
        })
        .catch((error) => {
            console.log('error: ', error.message)
        })
    }, [])
    console.log('artist: ', artist)
    console.log('artist.artworks: ', artist.artworks)
    
    const styles = {
        backgroundImage: `url(${artist.profilePicture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        height: '20em'
      }

    //   const artStyles = {
    //     backgroundImage: `url(${artist.artworks[0].image})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'top center',
    //     height: '20em'
    //   }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <>
        <div className="columns">
            <div className="column">
                <div className="card-flex-item card pb-1" style={{ margin: '20px' }}>
                <h4 className="has-text-centered mt-3">{artist.artistName}</h4>
                    <div className="mt-6 mb-6 mx-6" style={styles}></div>
                </div>    
            </div>        
            <div className="column">
                <p>
                    {artist.about}
                </p>
            </div>
        </div>
        <div className="column">
            <h1 className="has-text-centered">Listings</h1>
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
            <div className="column card" style={{ margin: '20px' }}>
                <img src={artist.profilePicture}/>
            </div>
            <div className="column card m-6" style={{ margin: '20px' }}>
                <img src={artist.profilePicture}/>
            </div>
            <div className="column card m-6" style={{ margin: '20px' }}>
                <img src={artist.profilePicture}/>
            </div>
            {/* {artist.artworks.map((art) =>
            <ArtworkItem key={art.id} artwork={art}/>
            )} */}
        </div>
        </>
    )
}

export default ArtistBio