export const openModal = (payload = null) => {
  return { type: "OPEN_MODAL", payload };
};

export const closeModal = (payload = null) => {
  return { type: "CLOSE_MODAL", payload };
};
