import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  padding: 44px 0;
  line-height: 25px;
`;

const StyledHeading = styled.h1`
  font-size: 25px;
  color: #000;
  font-weight: bold;
  margin-right: 20px;
  display: inline;
`;

const Intro = styled.h2`
  font-size: 20px;
  color: #666;
  display: inline;
`;

export default function HeadLine({ headingName, headingIntro }) {
  return (
    <StyledHeader>
      <StyledHeading>
        {headingName}
      </StyledHeading>
      <Intro>
        {headingIntro}
      </Intro>
    </StyledHeader>
  );
}

HeadLine.propTypes = {
  headingName: PropTypes.string.isRequired,
  headingIntro: PropTypes.string.isRequired,
};
