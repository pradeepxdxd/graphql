import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/quotes');
    }
  }, []);

  return (
    <div>Home</div>
  )
}
