import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.1);
`;

const NavMiddler = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  line-height: 20px;
  font-size: 20px;
  display: block;
  padding: 30px 0;
  margin-right: 40px;
  cursor: pointer;
  color: #555;
  &.active {
    color: #000;
    font-weight: bold;
  }
`;

const links = [
  { path: '/team', text: '팀빌딩 신청' },
  { path: '/notice', text: '공지사항' },
  { path: '/score', text: '채점 기준' },
  { path: '/song', text: '노래 신청' },
];

export default function Navigation() {
  return (
    <NavContainer>
      <NavMiddler>
        <StyledNavLink to="/">
          <img src={logo} alt="highthon logo" />
        </StyledNavLink>
        {links.map(link => (
          <StyledNavLink
            to={link.path}
            key={`key-path:${link.path}`}
          >
            {link.text}
          </StyledNavLink>
        ))}
      </NavMiddler>
    </NavContainer>
  );
}
