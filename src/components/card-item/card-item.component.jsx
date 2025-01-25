import React from "react";
import { baseImgUrl } from "../../assets/data/data";
import { CardItemContainer } from "./card-item.styles";

const CardItem = ({ itemData, handleClick }) => {
  return (
    <>
      <CardItemContainer onClick={handleClick}>
        <img src={baseImgUrl + itemData.backdrop_path} alt='img' />
      </CardItemContainer>
    </>
  );
};

export default CardItem;
