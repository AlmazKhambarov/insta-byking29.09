/** @format */

import React, { useState } from "react";
import "./CreatePost.scss";
import { Label } from "@mui/icons-material";
import { publishPosts } from "../../../redux/extraReducer";
import { useDispatch, useSelector } from "react-redux";
const CreatePost = ({ setModalState, user }) => {
  const { postLoading } = useSelector((state) => state.posts);
  var dispatch = useDispatch();
  // this is func
  const [data, setData] = useState({
    // this is func
    user: user,
    title: "title",
    imageUpload: "",
    description: "",
    // this is func
  });
  const [selected, setSelected] = useState();
  const [selectedImg, setSelectedImg] = useState(false);
  const handleFileChange = (event) => {
    // this is func
    setData((prev) => ({ ...prev, imageUpload: event.target.files[0] }));
    setSelected(true);
    const file = event.target.files[0];
    const reader = new FileReader();
    // this is func
    reader.onload = (e) => {
      setSelectedImg(e.target.result);
    };
    // this is func
    reader.readAsDataURL(file);
  };

  const publishPost = () => {
    if (data.title != null) {
      dispatch(publishPosts(data));
    }
  };
  return (
    <>
      {postLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="modal-container">
            {selected ? (
              <button className="btn " onClick={publishPost}>
                Publish
              </button>
            ) : null}
            <div>
              {selected ? (
                <>
                  <div className="selected__img__container">
                    {/* this is create modal for insta */}
                    {/* this issss */}
                    <img src={selectedImg} alt="" />
                  </div>
                  <form>
                    <label>title</label>
                    <input
                      placeholder="title"
                      type="text"
                      // this is create modal for insta
                      className="form-controller"
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, title: e.target.value }))
                      }
                    />
                    <label>Description</label>
                    <input
                      placeholder="Description"
                      type="text"
                      className="form-controller"
                      // this issss
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                  </form>
                  <button
                    className="btn"
                    style={{ background: "red" }}
                    // this issss
                    onClick={() => setModalState(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <label htmlFor="">Select from compyter</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    // this issss
                    accept="image/*"
                  />
                </>
              )}
            </div>
          </div>
          <div className="w-screen"></div>
        </>
      )}
    </>
  );
};

export default CreatePost;
