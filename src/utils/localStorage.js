export const setLocalUser = ({ id, role, image, name }) => {
  localStorage.setItem("loggedUserId", id);
  localStorage.setItem("loggedUserRole", role);
  localStorage.setItem("loggedUserImage", image);
  localStorage.setItem("loggedUserName", name);
};

export const getLocalUser = () => {
  const id = localStorage.getItem("loggedUserId");
  const role = localStorage.getItem("loggedUserRole");
  const image = localStorage.getItem("loggedUserImage");
  const name = localStorage.getItem("loggedUserName");
  return { id, role, image, name };
};
