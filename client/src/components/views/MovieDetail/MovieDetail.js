import React from 'react'
import { useEffect } from 'react'
import { API_URL, API_KEY } from '../../Config'

function MovieDetail( props ) {
  const id = props.match.params.id
  useEffect( () => {
    const endpoint = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`

    fetch( endpoint )
      .then( response => response.json() )
      .then( response => {

        console.log( response );
      } )


  }, [] )
  return (
    <div>
      test
    </div>
  )
}

export default MovieDetail
