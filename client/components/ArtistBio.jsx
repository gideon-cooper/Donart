import React from 'react'

function ArtistBio() {
    const ben = {
        id: 6,
        username: "ben",
        hash: "benHash",
        email: "ben@gmail.com",
        name: "ben",
        profile_picture: "https://www.badaboom.co.nz/images/profile-photos/ben.jpg/@@images/ef47f76b-4091-471a-a51a-e8044620ecb1.jpeg",
        about: "Ben Sarten Imagery is a video and photography production company operating out of THE BONE ZONE/Te iwi Koiwi Creative Space, in St Johns, Auckland. Prioritising the documentation and visibility of environmental and social/human rights activism and the New Zealand arts scene, with collaboration and community as its kaupapa.",
      }
    
    const styles = {
        backgroundImage: `url(${ben.profile_picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        height: '20em'
      }
    return (
        <div>
            <div className="card-flex-item card" style={{ margin: '20px' }}>
            <h4 className="has-text-centered mt-3">{ben.name}</h4>
                <div className="mt-4 mb-6 mx-6" style={styles}></div>
                    <p>
                        {ben.about}
                    </p>
            </div>
        </div>
    )
}

export default ArtistBio
