import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './components/Routes/routes'
import Navbar from './components/Navbar/Navbar';

export default function App() {
  const element = useRoutes(routes);

  return (
    <>
      <Navbar />
      {element}
    </>
  )
}
