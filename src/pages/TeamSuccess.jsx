import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import check from '../assets/check.png';

const TeamSuccessContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

const ContentCover = styled.div`
  width: 400px;
  margin: 265px auto 0;
  text-align: center;
`;

const CheckImage = styled.img`
  width: 67px;
`;

const TeamName = styled.div`
  color: #4285f4;
  font-size: 30px;
  line-height: 50px;
  font-weight: bold;
`;

const Member = styled.div`
  font-size: 20px;
  line-height: 30px;
`;

const AnnounceText = styled.div`
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  margin: 30px auto 0;
  width: fit-content;
  display: block;
`;

const dummyData = [
  { id: 1, content: 'schoolName memberName' },
  { id: 2, content: 'schoolName memberName' },
  { id: 3, content: 'schoolName memberName' },
  { id: 4, content: 'schoolName memberName' },
];

export default function TeamSuccess() {
  const renderedMembers = dummyData.map(member => (
    <Member key={member.id}>{member.content}</Member>
  ));
  return (
    <TeamSuccessContainer>
      <ContentCover>
        <CheckImage src={check} />
        <TeamName>
          TeamName 팀
        </TeamName>
        {renderedMembers}
        <AnnounceText>
          신청이 완료 되었습니다
        </AnnounceText>
        <StyledLink to="/">
          <Button>
            첫화면으로
          </Button>
        </StyledLink>
      </ContentCover>
    </TeamSuccessContainer>
  );
}
