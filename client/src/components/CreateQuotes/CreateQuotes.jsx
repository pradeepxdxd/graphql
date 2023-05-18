import React, { useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap';
import './CreateQuotes.css';
import { useMutation } from '@apollo/client';
import { CREATE_QUOTE } from '../../gql/mutations';
import Loading from '../Loading/Loading'

export default function CreateQuotes() {
  const [quote, setQuote] = useState('')
  const [createQuotes, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries : [
      'getAllQuotes',
      'myProfile'
    ]
  });

  if (loading) return <Loading />

  const handleChange = e => {
    setQuote(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    createQuotes({
      variables: {
        title: quote
      }
    })
  }

  return (<>
    <Container>
      <h2 className='head-quote'>Create Your Quote</h2>
      <form onSubmit={handleSubmit}>
        {error &&
          <Alert key='danger' variant='danger' className='alert-demo'>
            {error.message}
          </Alert>
        }
        {data &&
          <Alert key='success' variant='success' className='alert-demo'>
            Quote created successfully
          </Alert>
        }
        <input className='qoute-input' type='text' name='quote' placeholder='Write your qoutes' onChange={handleChange} />
        <Button className='btn-demo' type='submit' variant='outline-success'>Create</Button>
      </form>
    </Container>
  </>
  )
}
