import React from "react";
import { Tabs } from "antd";
import UserProfile from "./UserProfile";
import Histry from "./History";
import Record from "./Record";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Profile",
    children: <UserProfile />,
  },
  {
    key: "2",
    label: "Histry",
    children: <Histry />,
  },
  {
    key: "3",
    label: "Record",
    children: <Record />,
  },
];

const Profile = () => {
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Profile;