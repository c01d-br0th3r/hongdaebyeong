import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Dropmenu from "./Dropmenu";

const Container = styled.div`
  font-family: "Poor Story", cursive;
  width: 100vw;
  height: 120px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  .qna {
    margin-right: auto;
  }
`;

const SLink = styled(Link)`
  margin-right: 25px;
  height: 50%;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    margin-right: 60px;
  }
`;

const Item = styled.div`
  padding: 10px 0px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(.logo) {
    border-bottom: 3px solid
      ${(props) => (props.current ? "#00b894" : "transparent")};
  }
  transition: all 0.25s linear;
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  &:hover {
    font-size: 25px;
    color: #00b894;
  }
  transition: all 0.2s linear;
`;

const Logo = styled.div`
  font-family: D2Coding, sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Container>
      <SLink className="logo" to="/">
        <Logo>logo Image</Logo>
      </SLink>
      <SLink to="/">
        <Item current={pathname === "/"}>트렌드</Item>
      </SLink>
      <SLink className="qna" to="/qna">
        <Item current={pathname === "/qna"}>Q&A</Item>
      </SLink>
      <SLink to="/settings">
        <Item current={pathname === "/settings"}>설정</Item>
      </SLink>
      <Dropmenu />
    </Container>
  );
});
