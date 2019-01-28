import React, { Component } from 'react';
import HeadLine from '../components/HeadLine';

export default class TeamApply extends Component {
  render() {
    return (
      <div>
        <HeadLine
          headingName="공지사항"
          headingIntro="팀빌딩 완료 시 구성원을 운영진에게 알려주세요! 팀장 한분만 대표로 신청해주시면 감사하겠습니다."
        />
      </div>
    );
  }
}
