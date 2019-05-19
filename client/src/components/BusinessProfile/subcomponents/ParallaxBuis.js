import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxBuis = props => (
  <div>
    <Parallax
      blur={{ min: -10, max: -10 }}
      bgImage={props.bgImage}
      bgImageAlt="business banner"
      strength={200}
    >
      <Container>
        <Image src={props.src} style={props.size} centered />
        <h1 style={{ textAlign: 'center', paddingTop: '80px', color: 'white' }}>{props.title}</h1>
        <p style={{ textAlign: 'center', paddingBottom: '80px', color: 'white' }}>{props.text}</p>
        <div style={{ textAlign: 'center' }}>{ props.search }</div>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxBuis;
