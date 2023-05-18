import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { GET_OTHERS_PROFILE } from '../../gql/queries'
import { useQuery } from '@apollo/client';
import Loading from '../Loading/Loading'

export default function OtherUserProfile() {
  const { userId } = useParams();
  const { data, error, loading } = useQuery(GET_OTHERS_PROFILE, {
    variables: {
      userID: userId
    }
  });

  let i = 0;

  if (loading) return <Loading />

  return (
    <>
      <Container>
        <div className="profile-head">
          <div className="head-content">
            <img src="https://robohash.org/pradeep.png" alt="error" />
            <div className="headings">
              <h2>{`${data.user.firstName} ${data.user.lastName}`}</h2>
              <h4>{data.user.email}</h4>
            </div>
          </div>
          <div className="list-quotes">
            {data.user.qoutes?.map(item =>
              <div key={i++} className="mt-4">
                <div
                  style={{
                    backgroundColor: "#f9f9f9",
                    borderLeft: "4px solid #ff7f50",
                    padding: "10px 20px",
                    margin: "20px 0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#333333",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}
