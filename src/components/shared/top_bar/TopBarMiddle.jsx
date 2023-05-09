import React from "react";
import { user } from "../../../fake_data/user";

export const TopBarMiddle = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-2">Hi, {user.userName} 👋</h1>
      <p className="text-sm text-gray-500">Department of {user.dept}</p>
    </div>
  );
};
