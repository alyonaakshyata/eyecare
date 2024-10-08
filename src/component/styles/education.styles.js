import styled from "styled-components";
import { COLORS,  } from "./app.styles";

export const GeneralDiv = styled.div`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${COLORS.color4};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius};
  overflow: ${(props) => props.overflow};
  height: 500px;
  box-shadow: ${(props) => (props.shadadow ? "none" : COLORS.shapdow)};
`;

export const IconCont = styled.div`
  display: inline;
  top: 2%;
  color: ${COLORS.color5};
  font-size: 32px;
  margin-right: 15px;
  cursor: pointer;
`;
