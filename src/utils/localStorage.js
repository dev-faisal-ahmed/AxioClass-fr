export const setUser = (id) => {
  localStorage.setItem("user-id", id);
};

export const getUser = (id) => {
  const userId = localStorage.getItem("user-id");
  return userId;
};
