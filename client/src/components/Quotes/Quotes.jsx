import React from 'react'
import './Quotes.css'
import { Container } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { GET_ALL_QUOTES } from '../../gql/queries'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'

export default function Quotes() {
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_ALL_QUOTES);

  let i = 0;

  if (loading) return <Loading />

  const handleOtherUser = (id) => {
    navigate(`/profile/${id}`);
  }

  return (
    <>
      <Container>
        <h1 className='head-quoter'>QU😀TES </h1>
        <div className='mt-4'>
          { data.quotes.length === 0 && <h3>No Quotes Yet</h3> }
          {data.quotes?.map(item =>
            <div key={i++} style={{ backgroundColor: '#f9f9f9', borderLeft: '4px solid #ff7f50', padding: '10px 20px', margin: '20px 0' }}
            >
              <p style={{ fontFamily: 'Helvetica, sans-serif', fontSize: '16px', lineHeight: '1.5', color: '#333333' }}
              >
                {item.title}
              </p>
              <p onClick={() => handleOtherUser(item.id._id)} className='quote-maker' style={{ fontFamily: 'inherit', fontSize: '14px', fontWeight: 'bold', color: '#777777', marginTop: '10px' }}
            >
              {item.id.firstName}
            </p>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  )
}
