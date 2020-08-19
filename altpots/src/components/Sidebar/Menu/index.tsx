import React from "react";
import styled from "styled-components";
import Item from "../Menu/Item";

import IconDashboard from "../../Common/IconDashboard";
import IconOrders from "../../Common/IconOrders";
import IconSuppliers from "../../Common/IconSuppliers";

const itemsData = [
  {
    name: "Dashboard",
    icon: IconDashboard(),
    link: "/",
  },
  {
    name: "Orders",
    icon: IconOrders(),
    link: "/Orders",
  },
  {
    name: "Suppliers",
    icon: IconSuppliers(),
    link: "/Suppliers",
  },
];

interface IItemProps {
  name: string;
  icon: object | string;
  link: string;
}

const items = itemsData.map((item: IItemProps, idx: number): object => (
  <Item key={idx} {...item} />
));

const Menu = () => {
  return <Wrapper>{items}</Wrapper>;
};

export default Menu;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-top: 10px;
  }
`;
