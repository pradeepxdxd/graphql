import React from 'react';
import LazyLoad from 'react-lazyload';
import './Loading.css'

const LazyImage = ({ src, alt }) => (
  <div className='loading'>
    <LazyLoad style={{height:'25px'}} offset={100}>
      <img src={src} alt={alt} />
    </LazyLoad>
  </div>
);

export default LazyImage;