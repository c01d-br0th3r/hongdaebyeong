import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poor Story", cursive;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  padding-left: 20px;
`;

const SLink = styled(Link)`
  margin-right: 50px;
  height: 50%;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    margin-right: 50px;
  }
`;

const Item = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(.logo) {
    border-bottom: 3px solid
      ${(props) => (props.current ? "#00b894" : "transparent")};
    border-radius: 3px;
  }
  transition: all 0.25s linear;
  font-size: 24px;
`;

const Logo = styled.div`
  font-family: D2Coding, sans-serif;
  font-size: 40px;
  font-weight: 700;
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Container>
      <SLink className="logo" to="/main">
        <Logo>logo Image</Logo>
      </SLink>
      <SLink to="/main">
        <Item current={pathname === "/main"}>트렌드</Item>
      </SLink>
      <SLink to="/qna">
        <Item current={pathname === "/qna"}>Q&A</Item>
      </SLink>
      <SLink to="/settings">
        <Item current={pathname === "/settings"}>설정</Item>
      </SLink>
    </Container>
  );
});
