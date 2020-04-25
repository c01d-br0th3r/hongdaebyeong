import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";
import Cards from "../Components/Cards";
import styled from "styled-components";
import "./Main.css";

const Container = styled.div`
  padding: 0 30px;
  padding-bottom: 20px;
  max-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: centerl;
`;

const Main = () => {
  // Unsplash data = SNS shopping mall Data
  // 여기서 데이터를 받아서 Cards 컴포넌트에 props로 넘긴다.
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(0);

  const handleScroll = () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    if (clientHeight + scrollTop === scrollHeight) {
      setFlag((flag) => flag + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      dispatch(allActions.imagesActions.cleanupImages());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(allActions.imagesActions.fetchImages());
  }, [flag]);

  return (
    <Container>
      {images.loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid">
          {images.images.map((image) => (
            <Cards
              key={image.id}
              id={image.id}
              width={image.width}
              height={image.height}
              url={image.urls.small}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Main;
