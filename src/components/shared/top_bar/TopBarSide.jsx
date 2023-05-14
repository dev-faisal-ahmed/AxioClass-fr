import React from "react";
import ProfileIcon from "../profile_icon/ProfileIcon";
import { user } from "../../../fake_data/user";
import NotificationIcon from "./notification_icon/notificationIcon";
import Search from "./search/Search";

const TopBarSide = () => {
  return (
    <div className="p-5 ml-auto flex items-center w-fit gap-5">
      <Search />
      <NotificationIcon />
      <div>
        <ProfileIcon size={"50px"} img={user.img} />
      </div>
    </div>
  );
};

export default TopBarSide;
