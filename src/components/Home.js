import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];

  useEffect(() => {
    onSnapshot(query(collection(db, "movies")), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          default:
            console.log("this is default");
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
        })
      );
      recommends = [];
      newDisney = [];
    });
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    content: "";
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
