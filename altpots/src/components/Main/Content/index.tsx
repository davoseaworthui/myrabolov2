import React from "react";
import styled from "styled-components";
import Chart from "../../Chart/index";

const Content = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <div>
          <Username>Hi Admin,</Username>
          <WelcomeText>here’s what we have for today</WelcomeText>
          <DateToday>April 29, 2020 1129+GST</DateToday>
        </div>
      </HeaderContent>
      <div>
        <Chart />
      </div>
    </Wrapper>
  );
};
export default Content;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 20px;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Username = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
  @media (max-width: 450px) {
    width: 100%;
    font-size: 1.7rem;
  }
`;
const WelcomeText = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;
const DateToday = styled.p`
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;
