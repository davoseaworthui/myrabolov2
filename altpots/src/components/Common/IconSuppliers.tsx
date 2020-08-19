import React from "react";
import styled from "styled-components";

import PotsSuppliers from "../../assets/pots-suppliers.svg";

const IconSettings = () => {
  return (
    <div>
      <LogoHolder src={PotsSuppliers} alt="Pots Dash Icon" />
    </div>
  );
};

export default IconSettings;
const LogoHolder = styled.img`
  margin-top: 2px;
  width: 1.75rem;
`;
