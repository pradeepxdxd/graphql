import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Home.css'

export default function Home() {
  const token = localStorage.getItem('token');
  const ref = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/quotes');
    }
  }, []);

  return (
    <>
      <div>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(./moon2.jpg)`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(https://w.forfun.com/fetch/df/df65d76a3852125a6e063f9e84e2ec76.jpeg?h=900&r=0.5)`,
              backgroundSize: 'cover',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ textAlign: 'center' }}
          >
            <img src={'https://w.forfun.com/fetch/bc/bc6f66a4826a4a5e5a880e674563d2c0.jpeg?h=900&r=0.5'} alt='err' />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h2 style={{color:'wheat', fontFamily:'cursive', fontSize:'20px', marginLeft:'25px'}}>The way to get started is to quit talking and begin doing.</h2>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
          >
            <h2 style={{color:'wheat', fontFamily:'cursive', fontSize:'20px', marginLeft:'15px', marginTop:'12px'}}>ingeminate❤️</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
