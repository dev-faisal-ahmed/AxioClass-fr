export const putReq = (body) => {
  return {
    method: "PUT",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
