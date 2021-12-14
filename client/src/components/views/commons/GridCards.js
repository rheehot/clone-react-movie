import React from 'react'
import { Col } from 'antd'
import { IMAGE_BASE_URL } from '../../Config';

function GridCards( props ) {
  // console.log( props );

  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: 'relative' }}>
        <a href={`/movie/${props.id}`}>
          <img style={{ width: '100%' }} src={`${IMAGE_BASE_URL}w500${props.img}`} alt={props.name} />
        </a>
      </div>
    </Col >
  )
}

export default GridCards
