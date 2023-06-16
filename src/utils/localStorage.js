export const setLocalUser = ({ id, role, image }) => {
  localStorage.setItem("loggedUserId", id);
  localStorage.setItem("loggedUserRole", role);
  localStorage.setItem("loggedUserImage", image);
};

export const getLocalUser = () => {
  const id = localStorage.getItem("loggedUserId");
  const role = localStorage.getItem("loggedUserRole");
  const image = localStorage.getItem("loggedUserImage");
  return { id, role, image };
};
