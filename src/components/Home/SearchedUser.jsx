/** @format */

import React from "react";
import '../Likes/Comment.scss'
import "./SearchedUser.scss";
const SearchedUser = ({ data }) => {
  return (
    <div className='sorch-modal'>
    {/* this is Search modal comment */}
      <div className='card'>
      {/* this is Search modal comment */}
        {data?.map((el) => (
          <>
            <div class='user-image-container-search'>
              <img class='card-header-img' src={el.userPhoto} alt='' />
              {/* this is Search modal comment */}
              <h3>{el.userName}</h3>
            </div>
          </>
        ))}
      </div>
      {/* this is Search modal comment */}
    </div>
  );
};

export default SearchedUser;
