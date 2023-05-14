import { useDispatch } from "react-redux";
import { baseImgUrl } from "../../assets/data/data";
import { closeModal } from "../../redux/modalReducer/modal.actions";

import NetflixLogo from "../../assets/images/netflix.svg";

import {
  Modal,
  ModalInfo,
  ModalBanner,
  ModalContainer,
  TitleAndControl,
} from "./pop-up-modal.styles";

const PopUpModal = ({ modalData }) => {
  const modalDispatch = useDispatch();
  const { backdrop_path, media_type, title, original_title, name, overview } =
    modalData;

  return (
    <ModalContainer>
      <Modal>
        <ModalBanner>
          <div className="img">
            <img src={baseImgUrl + backdrop_path} alt="img" />
          </div>
          <button
            className="close_btn"
            onClick={() => modalDispatch(closeModal())}
          >
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>

          <TitleAndControl>
            <div className="is_movie_or_series">
              <img src={NetflixLogo} alt="netflix" />
              <h2>{media_type === "tv" ? "Series" : "Movie"}</h2>
            </div>
            <h1>{title || original_title || name}</h1>
            <div className="btn-container">
              <button id="play-btn">
                <i className="fa-solid fa-play"></i>
                <span>Play</span>
              </button>
              <button className="btn">
                <i className="fa-regular fa-plus"></i>
              </button>
              <button className="btn">
                <i className="fa-regular fa-thumbs-up"></i>
              </button>
            </div>
          </TitleAndControl>
        </ModalBanner>
        <ModalInfo>
          <h1>Storyline: </h1>
          <p>{overview}</p>
        </ModalInfo>
      </Modal>
    </ModalContainer>
  );
};

export default PopUpModal;
