/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 94px;
  height: 125px;
  margin: 50px auto;
  object-fit: contain;
`;

export default () => (
  <Img
    src={require('./logo.png')}
    srcSet={`${require('./logo@2x.png')} 2x, ${require('./logo@3x.png')} 3x`}
    alt=""
  />
);
