import React from "react";
import styled from "styled-components";
import MyLogo from "../../assets/pots-logo-4-27-20-01.svg";

const Image = () => {
  return (
    <div className="app-logo">
      <AppLogo src={MyLogo} alt="app logo" />
    </div>
  );
};

export default Image;

const AppLogo = styled.img`
  width: 100px;
`;
