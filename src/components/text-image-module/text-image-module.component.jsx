import React from 'react';

import { TextImageContainer, TextContainer } from './text-image-module.styles';

const TextImageModule = ({ image, title, content }) => (
  <TextImageContainer>
    <img src={ `${image}` } alt="" />
    <TextContainer>
      <h1>{ title }</h1>
      <p>{ content }</p>
    </TextContainer>
  </TextImageContainer>
);

export default TextImageModule;