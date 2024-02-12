import { useState } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, baseImgUrl } from "../../assets/data/data";
import { closeModal } from "../../redux/modalReducer/modal.reducer";

import NetflixLogo from "../../assets/images/netflix.svg";

import {
  Modal,
  ModalInfo,
  ModalBanner,
  TrailerVideo,
  ModalContainer,
  TitleAndControl,
} from "./pop-up-modal.styles";

const PopUpModal = ({ modalData }) => {
  const modalDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {
    backdrop_path,
    media_type,
    title,
    original_title,
    name,
    overview,
    id,
  } = modalData;

  async function fetchVideo(id, media) {
    const getFetch = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${API_KEY}`
    );

    const { results } = await getFetch.json();

    return results[0];
  }

  const { isLoading, data } = useQuery({
    queryKey: ["video"],
    queryFn: () => fetchVideo(id, media_type),
  });

  return (
    <ModalContainer>
      <Modal>
        <ModalBanner>
          <div className="img">
            <img src={baseImgUrl + backdrop_path} alt="img" />
          </div>
          <button
            className="close_btn"
            onClick={() => modalDispatch(closeModal(null))}
          >
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>

          <TitleAndControl playBtn={isOpen}>
            <div className="is_movie_or_series">
              <img src={NetflixLogo} alt="netflix" />
              <h2>{media_type === "tv" ? "Series" : "Movie"}</h2>
            </div>
            <h1>{title || original_title || name}</h1>
            <div className="btn-container">
              <button id="play-btn" onClick={() => setIsOpen(true)}>
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
      {isOpen ? (
        isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <TrailerVideo>
            <iframe
              src={`https://www.youtube.com/embed/${data.key}`}
              title="LADKA LADKI AUR WOH | CARRYMINATI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <button onClick={() => setIsOpen(false)}>
              <i className="fa-sharp fa-solid fa-xmark"></i>
            </button>
          </TrailerVideo>
        )
      ) : null}
    </ModalContainer>
  );
};

export default PopUpModal;
