import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail( props ) {
  const id = props.match.params.id

  const [Movie, setMovie] = useState( [] )

  useEffect( () => {
    const endpointCrew = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
    const endpointInfo = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`

    fetch( endpointInfo )
      .then( response => response.json() )
      .then( response => {
        setMovie( response )
      } )


  }, [] )
  return (
    <div>
      {/* header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} title={Movie.original_title} description={Movie.overview}
      ></MainImage>

      <MovieInfo movie={Movie}></MovieInfo>

      {/* body */}
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <br />
        {/* actore grid */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
          <button>Toggle Actor View</button>
        </div>


      </div>

    </div>
  )
}

export default MovieDetail
