import React, { Component } from 'react';
import styled from 'styled-components';
import HeadLine from '../components/HeadLine';
import Button from '../components/Button';

const color1 = '#e6e6e8';
const color2 = '#555';

const TeamApplyContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  line-height: 70px;
  margin-top: 30px;
  display: block;
`;

const SubtextLabel = styled.span`
  font-size: 16px;
  color: #555;
  margin-left: 20px;
`;

const MemberInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const StyledInputText = styled.input`
  width: 580px;
  height: 53px;
  border-radius: 5px;
  background-color: ${color1};
  color: ${color2};
  font-size: 20px;
  padding: 0 19px;
`;

const StyledInputName = styled(StyledInputText)`
  width: 380px;
  margin-left: 20px;
`;

const AddButton = styled(Button)`
  width: 80px;
`;

const DeleteButton = styled(AddButton)`
  background-color: ${color1};
  color: ${color2};
  margin-left: 20px;
`;

const SubmitButton = styled(Button)`
  margin: 50px auto 0;
  display: block;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class TeamApply extends Component {
  render() {
    return (
      <TeamApplyContainer>
        <HeadLine
          headingName="팀빌딩신청"
          headingIntro="팀빌딩 완료 시 구성원을 운영진에게 알려주세요! 팀장 한분만 대표로 신청해주시면 감사하겠습니다."
        />
        <StyledLabel>
          팀명을 입력해주세요.
        </StyledLabel>
        <StyledInputText />
        <StyledLabel>
          팀 구성원의 소속 학교와 이름을 입력해주세요.
          <SubtextLabel>오타에 유의해주세요.</SubtextLabel>
        </StyledLabel>
        <MemberInputContainer>
          <StyledInputText placeholder="학교명" />
          <StyledInputName placeholder="이름" />
          <DeleteButton>삭제</DeleteButton>
        </MemberInputContainer>
        <SubmitButton>
          제출하기
        </SubmitButton>
      </TeamApplyContainer>
    );
  }
}
