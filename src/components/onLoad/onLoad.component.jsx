import React from "react";
import { OnLoadContainer } from "./onLoad.styles";

const OnLoad = ({ home }) => {
  return (
    <OnLoadContainer isHome={home}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </OnLoadContainer>
  );
};

export default OnLoad;
