import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import GridCards from '../commons/GridCards';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import { Row } from 'antd';

function MovieDetail( props ) {
  const id = props.match.params.id

  const [Movie, setMovie] = useState( [] )
  const [Cast, setCast] = useState( [] )

  useEffect( () => {
    const endpointCast = `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    const endpointInfo = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`



    fetch( endpointInfo )
      .then( response => response.json() )
      .then( response => {
        setMovie( response )
      }
      )


    fetch( endpointCast )
      .then( response => response.json() )
      .then( response => {
        console.log( response );
        setCast( response.cast )
      }
      )



  }, []
  )






  return (
    <div>
      {/* header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} title={Movie.original_title} description={Movie.overview}
      ></MainImage>
      {/* body */}
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <MovieInfo movie={Movie}></MovieInfo>
        <br />
        {/* actore grid */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
          <Row gutter={[16, 16]}>
            {
              Cast.map( ( cast, index ) => (
                <React.Fragment key={index}>
                  < GridCards id={cast.id} img={cast.profile_path} name={cast.name} ></GridCards>
                </React.Fragment>
              ) )
            }
          </Row>
        </div>

        <button>Toggle Actor View</button>

      </div>

    </div>
  )
}

export default MovieDetail
