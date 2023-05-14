import React from "react";
import { useDispatch } from "react-redux";
import { baseImgUrl } from "../../assets/data/data";
import { CardItemContainer } from "./card-item.styles";
import { openModal } from "../../redux/modalReducer/modal.actions";

const CardItem = ({ itemData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <CardItemContainer onClick={() => dispatch(openModal(itemData))}>
        <img src={baseImgUrl + itemData.backdrop_path} alt="img" />
      </CardItemContainer>
    </>
  );
};

export default CardItem;
