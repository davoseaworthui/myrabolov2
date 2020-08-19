import React from "react";
import styled from "styled-components";

import PotsOrders from "../../assets/pots-orders.svg";

const IconSettings = () => {
  return (
    <div>
      <LogoHolder src={PotsOrders} alt="Pots Dash Icon" />
    </div>
  );
};

export default IconSettings;
const LogoHolder = styled.img`
  margin-top: 2px;
  width: 1.75rem;
`;
