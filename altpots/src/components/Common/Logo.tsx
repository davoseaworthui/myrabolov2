import React from "react";
import styled from "styled-components";
import LogoImage from "./LogoImage";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ILogoProps {
  image: {
    size: number;
  };
}

const Logo = (props: ILogoProps) => {
  const { image } = props;

  return (
    <Section>
      <LogoImage />
    </Section>
  );
};

export default Logo;
