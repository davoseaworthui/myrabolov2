import React from "react";
import styled from "styled-components";

import PotsDash from "../../assets/pots-dash.svg";

const IconSettings = () => {
  return (
    <div>
      <LogoHolder src={PotsDash} alt="Pots Dash Icon" />
    </div>
  );
};

export default IconSettings;
const LogoHolder = styled.img`
  margin-top: 2px;
  width: 1.75rem;
`;
