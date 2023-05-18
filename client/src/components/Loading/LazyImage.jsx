import React from 'react';
import LazyLoad from 'react-lazyload';
import './Loading.css'

const LazyImage = ({ src, alt }) => (
  <div className='loading'>
    <LazyLoad height={50} offset={100}>
      <img src={src} alt={alt} />
    </LazyLoad>
  </div>
);

export default LazyImage;