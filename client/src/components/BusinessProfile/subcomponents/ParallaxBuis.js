import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxBuis = props => (
  <div style={{ width: '100% '}}>
     <Parallax
      blur={{ min: -10, max: -10 }}
      bgImage={props.bgImage}
      bgImageAlt="profile pic"
      strength={200}
      style={{ width: '100%', height: '250px' }}
    >
      <Container>
        <Image src={props.src} size={props.size} centered />
        <h1 style={{ textAlign: 'center', paddingTop: '80px', color: 'white', left: '-40%' }}>{props.title}</h1>
        <p style={{ textAlign: 'center', paddingBottom: '80px', color: 'white', left: '-40%' }}>{props.text}</p>
        <div style={{ textAlign: 'center' }}>{ props.search }</div>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxBuis;
