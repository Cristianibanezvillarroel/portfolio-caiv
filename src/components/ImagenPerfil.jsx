import React from 'react'
import AboutCEOImg from '/public/aboutCEO.jpg'

export const ImagenPerfil = () => {
    return (
        <div className='about-ceo-data'>
            <img className='about-img-ceo' src={AboutCEOImg} />
        </div>
    )
}
