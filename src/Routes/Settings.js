import React from "react";
import allActions from "../Store/Actions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 200px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 24px;
  width: 80%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.borderBottom};
`;

const Btn = styled.div`
  cursor: pointer;
  font-size: 24px;
`;

const Square = styled.div`
  width: 35px;
  height: 15px;
  background-color: ${({ theme }) => theme.toggleBox};
  position: relative;
  border-radius: 10px;
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.circleColor};
  position: relative;
  top: -2.5px;
  left: ${({ theme }) => theme.togglePosition};
  transition: all 0.2s linear;
`;

const Settings = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      dispatch(allActions.themeActions.changeDark());
    } else {
      window.localStorage.setItem("theme", "light");
      dispatch(allActions.themeActions.changeLight());
    }
  };

  return (
    <Container>
      <Content>
        <div>{theme === "light" ? "Dark" : "Light"} 모드 활성화</div>
        <Btn onClick={handleClick}>
          <Square>
            <Circle />
          </Square>
        </Btn>
      </Content>
    </Container>
  );
};

export default Settings;
