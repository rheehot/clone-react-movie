import React, { useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config"
import { useState } from 'react';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';




function LandingPage() {
    const [Page, setPage] = useState( 1 )
    const [Movies, setMovies] = useState( [] )
    const [MainMovieImage, setMainMovieImage] = useState( null )
    useEffect( () => {
        fatchMovies()

    }, [] )


    const fatchMovies = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${Page}`


        fetch( endpoint )
            .then( response => response.json() )
            .then( response => {
                setMovies( [...Movies, ...response.results] )
                setMainMovieImage( response.results[0] )
            } )
    }
    const loadMoreItem = () => {
        let page = Page
        page++
        setPage( page )
        fatchMovies()
    }



    return (

        <div style={{ width: '100%', margin: '0' }}>
            {MainMovieImage && <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.
                backdrop_path}`} title={MainMovieImage.original_title} description={MainMovieImage.overview}></MainImage>}
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>
                    Movies by latest
                </h2>
                <hr />
                <Row gutter={[16, 16]}>
                    {
                        Movies.map( ( movie, index ) => (
                            <React.Fragment key={index} >
                                <GridCards id={movie.id} name={movie.title} img={movie.backdrop_path} />
                            </React.Fragment>
                        )
                        )
                    }
                </Row>
            </div>




            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={loadMoreItem}>Load More</button>
            </div>
        </div>

    )



}

export default LandingPage
