import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState("Hero");

  const getUsers = () => {
    return user;
  };

  const setProfile = (userName) => {
    setUser(userName);
  };

  return (
    <></>
  );
};

export { UserProfile };
