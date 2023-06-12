export const removeUser = () => {
  localStorage.removeItem("loggedUserId");
  localStorage.removeItem("loggedUserRole");
  localStorage.removeItem("loggedUserImage");
};
