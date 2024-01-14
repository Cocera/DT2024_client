import React from 'react'
import './StoreFrontIcon.scss'

const StoreFrontIcon = ({width, height, fill, isActive }) => {
  return ( 
    <div className={`storefront-icon-container ${isActive ? 'active' : ''}`}>
    <svg width={width || "25"} height={height || "24"} viewBox="0 0 25 24" fill={fill || "none"} xmlns="http://www.w3.org/2000/svg">
    <g id="shop_outline_24px">
    <path id="icon" d="M8.78942 11.001L10.7894 5.00098M16.7894 11.001L14.7894 5.00098M5.78941 11.001H19.7894V19.001C19.7894 20.1055 18.894 21.001 17.7894 21.001H7.78941C6.68485 21.001 5.78941 20.1055 5.78941 19.001V11.001ZM15.2894 21.001V17.501C15.2894 16.1203 14.1701 15.001 12.7894 15.001C11.4087 15.001 10.2894 16.1203 10.2894 17.501V21.001H15.2894ZM7.3246 5.00098H18.2542C18.5886 5.00098 18.9008 5.16808 19.0863 5.44628L21.753 9.44628C22.196 10.1108 21.7196 11.001 20.9209 11.001H4.65793C3.85924 11.001 3.38284 10.1108 3.82588 9.44628L6.49255 5.44628C6.67801 5.16808 6.99025 5.00098 7.3246 5.00098Z" stroke="white" stroke-width="1.5"/>
    </g>
    </svg>
    </div>
  )
}

export default StoreFrontIcon
