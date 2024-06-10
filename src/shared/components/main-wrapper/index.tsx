import React, { ReactNode } from "react";
import { StyledMainWrapper } from "./styles";

interface IProps {
  children: ReactNode;
}

const MainWrapper = (props: IProps) => {
  const { children } = props;
  return <StyledMainWrapper>{children}</StyledMainWrapper>;
};

export default MainWrapper;
