import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome, <span>{currentUser.username}</span> !
      </h1>
      <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #edeff2;
  user-select: none;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;
