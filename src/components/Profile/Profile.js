import React from "react";
import "./Profile.css";
import { useStateProvider } from "../../StateProvider";

function Profile() {
  const [{ user }, dispatch] = useStateProvider();
  const { displayName, email, photoURL } = user;
  console.log(user);
  console.log(photoURL);
  return (
    <div className="profile">
      <div className="profile__details">
        <img src={photoURL} alt="" />
        <span>{displayName}</span>
        <span>{email}</span>
        <span>Your Membership</span>
      </div>
    </div>
  );
}

export default Profile;
