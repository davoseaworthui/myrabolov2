import React from "react";
import styled from "styled-components";
import Menu from "../Sidebar/Menu";

const Sidebar = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 350px;
  height: 92vh;
  min-height: 640px;
  box-shadow: 10px 10px 8px #888888;
`;
