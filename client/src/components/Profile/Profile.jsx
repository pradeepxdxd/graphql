import React from "react";
import { Container } from "react-bootstrap";
import "./Profile.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../../gql/queries";
import Loading from "../Loading/Loading";
import { AiFillDelete } from "react-icons/ai";
import { DELETE_QUOTE } from "../../gql/mutations";
import { Link } from "react-router-dom";

export default function Profile() {
  const { data, loading } = useQuery(GET_MY_PROFILE);
  const [deleteQuote] = useMutation(DELETE_QUOTE, {
    refetchQueries: ["myProfile"],
  });

  if (loading) return <Loading />;

  const handleDeleteQuote = (id) => {
    deleteQuote({
      variables: {
        id,
      },
    });
  };

  let i = 0;
  return (
    <>
      <Container>
        <div className="profile-head">
          <div className="head-content">
            <img
              src={`https://robohash.org/${data.myProfile.firstName}.png`}
              alt="error"
            />
            <div className="headings">
              <h2>{`${data.myProfile.firstName} ${data.myProfile.lastName}`}</h2>
              <h4>{data.myProfile.email}</h4>
            </div>
          </div>
          <div className="list-quotes">
            <div className="mt-4">
              {data.myProfile.qoutes.length === 0 && (
                <div>
                  <h1 className="link-quotes">No Quotes Created </h1>
                  <Link className="link-to-quotes" to="/create-quotes">
                    Create here for create quotes
                  </Link>
                </div>
              )}
              {data.myProfile.qoutes?.map((item) => (
                <>
                  <div
                    className="d-flex"
                    key={i + 1}
                    style={{
                      backgroundColor: "#f9f9f9",
                      borderLeft: "4px solid #ff7f50",
                      padding: "10px 20px",
                      margin: "20px 0",
                      justifyContent: "space-between",
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
                    <div>
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleDeleteQuote(item._id)}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
