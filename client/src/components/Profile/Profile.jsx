import React from "react";
import { Container } from "react-bootstrap";
import "./Profile.css";
import { useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../../gql/queries";
import Loading from '../Loading/Loading'

export default function Profile() {
  const { data, loading } = useQuery(GET_MY_PROFILE);

  if (loading) return <Loading />

  let i = 0;
  return (
    <>
      <Container>
        <div className="profile-head">
          <div className="head-content">
            <img src={`https://robohash.org/${data.myProfile.firstName}.png`} alt="error" />
            <div className="headings">
              <h2>{`${data.myProfile.firstName} ${data.myProfile.lastName}`}</h2>
              <h4>{data.myProfile.email}</h4>
            </div>
          </div>
          <div className="list-quotes">
            <div className="mt-4">
              {data.myProfile.qoutes?.map((item) => (
                <div
                  key={i + 1}
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
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
