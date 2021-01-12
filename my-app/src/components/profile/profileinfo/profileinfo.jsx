import React from "react";
import proinfo from "./profileinfo.module.css";

const Profileinfo = () => {
  return (
    <div className={proinfo.proInfo}>
      <img src='https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg' alt='' />
      <div className='profile-info'>
        <div>ava + dicrip</div>
      </div>
    </div>
  );
};

export default Profileinfo;
