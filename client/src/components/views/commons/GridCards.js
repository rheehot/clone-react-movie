import React from 'react'
import { Col } from 'antd'
import { IMAGE_BASE_URL } from '../../Config';

function GridCards( props ) {
  // console.log( props )
  const imgSrc = `${IMAGE_BASE_URL}w500${props.img}`

  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: 'relative' }}>
        <a href={`/movie/${props.id}`}>
          {props.img ? <img style={{ width: '100%' }} src={imgSrc} alt={props.name} /> : <div> 이미지 없다</div>}
        </a>
      </div>
    </Col >
  )
}

export default GridCards
