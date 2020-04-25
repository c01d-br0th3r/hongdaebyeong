import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1.5px solid ${({ theme }) => theme.borderColor};
  border-radius: 3px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.cardBody};
  i {
    margin-bottom: 15px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
  transition: all 0.2s linear;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Img = styled.img`
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-family: "D2Coding", sans-serif;
  line-height: 20px;
`;

const IconContainer = styled.div`
  i {
    margin-right: 5px;
  }
`;

const HashtagContainer = styled.div`
  display: flex;
`;

const Hashtag = styled.span`
  color: #00a8ff;
  margin-right: 5px;
  margin-top: 10px;
  font-size: 15px;
`;

const Cards = ({ id, width, height, url }) => {
  return (
    <Container className={`cards-${Math.ceil(height / width)} cards`}>
      <Name>{id}</Name>
      <Img className={`card-${Math.ceil(height / width)}`} src={url} />
      <IconContainer>
        <i className="xi-heart-o xi-2x" />
        <i className="xi-comment-o xi-2x" />
      </IconContainer>
      {Math.ceil(height / width) === 1 ? (
        <Desc>
          모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와
          국민은 환경보전을 위하여 노력하여야 한다. 국가안전보장회의의
          조직·직무범위 기타 필요한 사항은 법률로 정한다.
        </Desc>
      ) : (
        <Desc>
          모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와
          국민은 환경보전을 위하여 노력하여야 한다. 국가안전보장회의의
          조직·직무범위 기타 필요한 사항은 법률로 정한다. 정당은 그 목적·조직과
          활동이 민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한
          조직을 가진다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을
          권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지모든 국민은
          건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은
          환경보전을 위하여 노력하여야 한다.
        </Desc>
      )}
      <HashtagContainer>
        <Hashtag>#React</Hashtag>
        <Hashtag>#Web</Hashtag>
        <Hashtag>#Programming</Hashtag>
      </HashtagContainer>
    </Container>
  );
};

export default Cards;
