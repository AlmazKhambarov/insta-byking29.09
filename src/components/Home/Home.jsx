/** @format */

import React, { useEffect, useState } from "react";
import "./Home.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CreatePost from "../Post/CreatePost/CreatePost";
import Likes from "../Likes/Likes";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestore } from "../../Api/firebase";
import { useSelector } from "react-redux";
import Comment from "../Likes/Comment";
import SearchedUser from "./SearchedUser";
const Home = ({ user }) => {
  const { postLoading } = useSelector((state) => state.posts);
  const [modalState, setModalState] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [article, setArticles] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState(users);

  useEffect(() => {
    const articleRef = collection(firestore, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);
  useEffect(() => {
    const userRef = collection(firestore, "Users");
    const q = query(userRef, orderBy("userPhoto", "asc"));
    onSnapshot(q, (snapshot) => {
      const usersR = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersR);
    });
  }, []);
  console.log(typeof searchTerm);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Filter the data based on the search term
    const filteredResults = users.filter((item) =>
      item.userName.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };
  return (
    <>
      <div className="home">
        <header class="grid this-head">
          <div class="conta-flex header-container">
            <span class="logo logo-nav headoItem">Instagram</span>

            <div class="headoItem bartheSearch ">
              <label for="bartheSearch ">
                <div class="conta-flex position-relative">
                  <div class="conta-searchicon">
                    <svg
                      class="search-nav-icon"
                      viewBox="0 0 512 512"
                      width="100"
                      title="search"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                    </svg>
                  </div>

                  <input
                    id="bartheSearch"
                    type="text"
                    class="bartheSearch-input"
                    placeholder="Search..."
                    onChange={handleInputChange}
                  />
                  {searchTerm ? <SearchedUser data={filteredData} /> : null}
                </div>
              </label>
            </div>
            <nav class="headoItem main-nav">
              <ul class="navbar conta-flex">
                <li class="theitemnavbar">
                  <a href="/home">
                    <TelegramIcon sx={{ fontSize: 30 }} />
                  </a>
                </li>
                <li
                  class="theitemnavbar"
                  onClick={() => setModalState(!modalState)}
                >
                  <AddBoxIcon sx={{ fontSize: 30 }} />
                </li>
                <li class="theitemnavbar">
                  <a href="/home">
                    <FavoriteIcon sx={{ fontSize: 30 }} />
                  </a>
                </li>
                <li class="theitemnavbar no-hover">
                  <a href="/profile">
                    <img src={user?.photoURL} alt="" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section class="non-main-cont grid">
          <div class="main-gallery-wrapper conta-flex">
            <div class="mop-wrapper conta-flex">
              <span class="mop conta-flex">
                <div class="mop-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                    class="mop-img"
                  />
                </div>
                <p class="mop-text">Lorem.</p>
              </span>

              <span class="mop conta-flex">
                <div class="mop-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    alt=""
                    class="mop-img"
                  />
                </div>
                <p class="mop-text">Lorem.</p>
              </span>
              <span class="mop conta-flex">
                <div class="mop-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    class="mop-img"
                  />
                </div>
                <p class="mop-text">Lorem.</p>
                {/* this is Home and this do everiy think */}
              </span>
              <span class="mop conta-flex">
                <div class="mop-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    class="mop-img"
                  />
                </div>
                <p class="mop-text">Lorem.</p>
              </span>
              <span class="mop conta-flex">
                {/* this is Home and this do everiy think */}
                <div class="mop-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    // this is Home and this do everiy think
                    class="mop-img"
                  />
                </div>
                <p class="mop-text">Lorem.</p>
                {/* this is Home and this do everiy think */}
              </span>
              <span class="mop conta-flex">
                <div class="mop-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1657003963857-ec800f2cce43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80"
                    alt=""
                    class="mop-img"
                  />
                </div>
                <p class="mop-text">Lorem.</p>
              </span>
            </div>
            {article?.map((el) => (
              <div key={el.id} class="card-wrapper conta-flex">
                <div class="card-header grid">
                  <div class="header-img-container conta-flex">
                    {/* this is Home and this do everiy think */}
                    <img
                      class="card-header-img"
                      src={el.createdUserPhoto}
                      alt=""
                    />
                  </div>
                  <span class="card-title">{el.createdBy}</span>

                  {/* this is Home and this do everiy think */}
                  <span class="card-subtitle">{el.title}</span>
                  <div class="card-opt-btn conta-flex">
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
                <div class="card-img-container">
                  <img src={el.imageUrl} class="card-img" alt="" />
                  {/* this is Home and this do everiy think */}
                </div>
                <div class="card-data conta-flex">
                  <div class="card-icons conta-flex">
                    <span class="card-icon card-icon-left">
                      <Likes id={el.id} likes={el.likes} />
                    </span>
                    {/* this is Home and this do everiy think */}
                    <span class="card-icon card-icon-left">
                      <i class="bi bi-chat"></i>
                    </span>
                    {/* this is Home and this do everiy think */}
                    <span class="card-icon card-icon-left">
                      <i class="bi bi-send"></i>
                    </span>
                    <span class="card-icon card-icon-right">
                      <i class="bi bi-bookmark"></i>
                      {/* this is Home and this do everiy think */}
                    </span>
                  </div>
                  <span class="bold card-text">{} Likes</span>
                  <span class="card-text">
                    <span class="bold title-margin">{el.createdBy}</span>
                    {el.description}
                  </span>
                  <span
                    // this is Home and this do everiy think
                    class="card-text comments-btn"
                    onClick={() => setCommentModal(el.id)}
                  >
                    See more comments
                  </span>
                  {/* this is Home and this do everiy think */}
                  {commentModal == el.id ? (
                    <Comment
                      id={el.id}
                      postImg={el.imageUrl}
                      setCommentModal={setCommentModal}
                      createdUserPhoto={el.createdUserPhoto}
                    />
                  ) : null}
                  <span class="card-time"></span>
                  <div class="add-comment-container conta-flex">
                    <span class="card-icon">
                      <i class="bi bi-emoji-smile"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* this is Home and this do everiy think */}
          </div>
          <div class="sidebar">
            <div class="sidebar-menu-container">
              <div class="sidebar-card sidebar-header grid">
                <img
                  // this is Home and this do everiy think
                  src={user?.photoURL}
                  alt=""
                  class="sidebar-img sidebar-hd-img"
                />
                <span class="sidebar-title card-title">
                  {user ? user?.displayName : null}
                  {/* this is Home and this do everiy think */}
                </span>
                <span class="card-subtitle sidebar-subtitle">
                  {" "}
                  {user ? user?.email : null}
                </span>
                <span class="sidebar-btn">Change</span>
                {/* this is Home and this do everiy think */}
              </div>
              <div class="suggestions-header grid">
                <span class="suggestions-text">Suggestions for you</span>
                <span class="sidebar-btn-alt">See all</span>
              </div>
              {users.map((el) => (
                <div class="sidebar-card sidebar-card-alt grid">
                  <img
                    src={el.userPhoto}
                    // this is Home and this do everiy think
                    alt=""
                    class="sidebar-img side-bar-img-alt"
                  />
                  <span class="sidebar-title card-title">{el.userName}</span>
                  <span class="card-subtitle sidebar-subtitle sidebar-subtitle-alt">
                    {/* this is Home and this do everiy think */}
                    Lorem.
                  </span>
                  <span class="sidebar-btn">Follow</span>
                  {/* this is Home and this do everiy think */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {modalState ? (
        <CreatePost user={user} setModalState={setModalState} />
      ) : null}
    </>
  );
};

export default Home;
