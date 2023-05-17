export const setUser = (payload = null) => {
  return { type: "SET_USER", payload };
};

export const removeUser = (payload = null) => {
  return { type: "REMOVE_USER", payload };
};
