import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxImage = props => (
  <div>
    <Parallax
      bgImage={props.bgImage}
      bgImageAlt="profile pic"
      strength={100}
    >
      <Container>
        <Image src={props.src} size={props.size} centered />
        <h1 className="homepage-title">{props.title}</h1>
        <div style={{ textAlign: 'center' }}>{ props.search }</div>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxImage;
