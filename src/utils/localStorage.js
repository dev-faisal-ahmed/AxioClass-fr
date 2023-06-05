export const setLocalUser = ({ id, role }) => {
  localStorage.setItem("loggedUserId", id);
  localStorage.setItem("loggedUserRole", role);
};

export const getLocalUser = () => {
  const id = localStorage.getItem("loggedUserId");
  const role = localStorage.getItem("loggedUserRole");
  return { id, role };
};
