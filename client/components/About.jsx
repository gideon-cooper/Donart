import React from 'react'

import Footer from './Footer'

export default function About() {
    const imageStyle = {
        borderRadius: "10px"
    }
    return (
        <div className="about">
            <div className="aboutPage">
                <hr />
                <h2>ABOUT</h2>
                <hr />
            </div>
            <p className="has-text-centered" style={{margin: '6rem'}}>
                Donart is a platform for donating art towards charity. Donart empowers artist's to contribute towards charities and causes they care about by using their skills rather than money. It also allows buyers to support their favourite kiwi artists and know that their money has gone to a good cause.
            </p>
            <div className="aboutPage">
                <hr />
                <h2>FOUNDERS</h2>
                <hr />
            </div>
            <div className="columns is-half" style={{marginLeft: "17%", marginRight: "4%"}}>
            <div className="column is-two-thirds pt-6 about-flex-wrapper mx-6">
                <div className="card-flex-item mx-3">
                    <img style={{borderRadius: "10px"}} src="https://ca.slack-edge.com/T02SQPVAC-U014C2L2QE9-37da37233d7a-512" />
                    <h2 className="has-text-centered">Marika Fiolitakis</h2>
                </div>
                <div className="card-flex-item mx-3">
                    <img style={{borderRadius: "10px"}} src="https://ca.slack-edge.com/T02SQPVAC-U015S11H4L8-e2ed66ddaf1a-512" />
                    <h2 className="has-text-centered">Gideon Cooper</h2>
                </div>
                <div className="card-flex-item mx-3">
                    <img style={{borderRadius: "10px"}} src="https://ca.slack-edge.com/T02SQPVAC-U015SV1D742-80ebe5b6b3e0-512" />
                    <h2 className="has-text-centered">Lewis Pakoti</h2>
                </div>
                <div className="card-flex-item mx-3">
                    <img style={{borderRadius: "10px"}} src="https://ca.slack-edge.com/T02SQPVAC-U0151317BDM-e8c24883182f-512" />
                    <h2 className="has-text-centered">Evelyn Coulson</h2>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
