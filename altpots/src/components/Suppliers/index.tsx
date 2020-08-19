import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";
import Content from "../Main/Content";

const Suppliers = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </>
  );
};

export default Suppliers;

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`;
