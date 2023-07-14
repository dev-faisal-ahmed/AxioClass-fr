import React from "react";
import ProfileIcon from "../profile_icon/ProfileIcon";
import NotificationIcon from "./notification_icon/notificationIcon";
import Search from "./search/Search";
import { getLocalUser } from "../../../utils/localStorage";

const TopBarSide = () => {
  const { image } = getLocalUser();
  return (
    <div className="p-5 ml-auto flex items-center w-fit gap-5">
      <Search />
      <NotificationIcon />
      <div>
        <ProfileIcon size={"50px"} img={image} />
      </div>
      <div>
      </div>
    </div>
  );
};

export default TopBarSide;
