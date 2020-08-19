import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PotsLogo from "../Common/LogoImage";
import NotificationButton from "../Header/NotificationButton";

// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <PotsLogo />
        </Link>
      </LogoWrapper>
      <ItemsWrapper>
        {/* <NotificationsNoneIcon /> */}
        <NotificationButton />
        <ExitToAppIcon />
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1600px;
  margin: 0 auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`;
const LogoWrapper = styled.div`
  margin-left: 15px;
  a {
    text-decoration: none;
  }
`;
const ItemsWrapper = styled.div`
  margin-right: 25px;
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    justify-items: end;
`;
