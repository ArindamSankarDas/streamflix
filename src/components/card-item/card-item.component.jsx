import React from "react";
import { CardItemContainer } from "./card-item.styles";

const CardItem = ({ imagePath }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <CardItemContainer>
      <img src={baseImgUrl + imagePath} alt="img" />
    </CardItemContainer>
  );
};

export default CardItem;
