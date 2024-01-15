import React from 'react'
import "./IncidenceImage.scss"
import { Image } from 'antd';

const IncidenceImage = (params) => {
  if (!params.src) {
    return (
        <Image className='img' src='src/assets/Images/humedadg.jpeg' width={params.width} height={params.height} />
    )
}
return (
    <>
        <Image src={params.src} width={params.width} height={params.height} style={{preview:false}} />
    </>
)
}

export default IncidenceImage