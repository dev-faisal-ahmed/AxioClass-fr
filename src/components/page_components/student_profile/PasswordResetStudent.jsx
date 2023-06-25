import React, { useState } from "react";

const PasswordResetStudent = () => {
  const [confirmed, setConfirmed] = useState();
  return (
    <>
      {confirmed ? (
        ""
      ) : (
        <div>
          <h1> Are you sure?</h1>
          <button>Yes</button>
          <button>No</button>
        </div>
      )}
    </>
  );
};

export default PasswordResetStudent;
