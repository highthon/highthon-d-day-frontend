import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const StyledLink = styled(Link)`
  line-height: 20px;
  font-size: 20px;
  display: block;
  padding: 30px 0;
  margin-right: 40px;
  cursor: pointer;
  color: ${props => (props.selected ? '#000' : '#555')};
`;

const links = [
  { path: '/team', text: '팀빌딩 신청' },
  { path: '/notice', text: '공지사항' },
  { path: '/score', text: '채점 기준' },
  { path: '/song', text: '노래 신청' },
];

export default class Navigation extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const { currentPage } = this.props;
    return (
      <NavContainer>
        <NavMiddler>
          <StyledLink selected={currentPage} to="/" exact="true"><img src={logo} alt="highthon logo" /></StyledLink>
          {links.map(link => (
            <StyledLink
              selected={currentPage === link.path}
              to={link.path}
              key={`key-path:${link.path}`}
            >
              {link.text}
            </StyledLink>
          ))}
        </NavMiddler>
      </NavContainer>
    );
  }
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
