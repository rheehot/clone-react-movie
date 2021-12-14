import React, { useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from "../../Config"
import { useState } from 'react';




function LandingPage() {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const [movies, setMovies] = useState( [] )

    useEffect( () => {
        fetch( endpoint )
            .then( response => response.json() )
            .then( response => {
                let copy = response.results
                setMovies( copy )
            } )
    }, [] )
    console.log( movies );


    return (

        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1erm auto' }}>
                <h2>
                    Movies by latest
                </h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>Load More</button>
            </div>
        </div>

    )
}

export default LandingPage
