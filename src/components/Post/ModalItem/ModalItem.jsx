/** @format */

import React, { useState } from "react";
import "./ModalItem.scss";
import { useDispatch } from "react-redux";
import { updateDisplayNameAsync } from "../../../redux/extraReducer";
const ModalItem = ({ setUserSetting }) => {
  // this is func too
  const [newDisplayName, setDisplayName] = useState("");
  var dispatch = useDispatch();
  // this is func too
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(newDisplayName);

    // this is func too
    dispatch(updateDisplayNameAsync(newDisplayName));

    // this is func too
    // alert("Done");
  };
  return (
    <>
      <div className='seting-user'>
        <span className='close-btn' onClick={() => setUserSetting(false)}>
          x
        </span>
        {/* this is good */}
        <form className='update-user-container' onSubmit={handleUpdate}>
          <input
          // this is good
            type='text'
            placeholder='UserName'
            id=''
            onChange={(e) => setDisplayName(e.target.value)}
          />
          {/* this is good */}
          <input type='text' name='' placeholder='email' id='' />
          <input type='text' name='' placeholder='Password' id='' />
          <button className='btn' type='submit'>
          {/* this is good */}
            Submit
          </button>
        </form>
      </div>
      <div className='w-screen'></div>
    </>
  );
};

export default ModalItem;
