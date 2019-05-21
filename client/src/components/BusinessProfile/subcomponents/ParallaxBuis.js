import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxBuis = props => (
  <div>
     <Parallax
      blur={{ min: -10, max: -10 }}
      bgImage={props.bgImage}
      bgImageSizes={props.bgImageSizes}
      bgImageAlt="profile pic"
      strength={10}
      style={{ width: '200%' }}
    >
      <Container>
        <Image src={props.src} size={props.size} centered />
        <div style={{ fontSize: '26px', textAlign: 'center', marginBottom: '20%', marginRight: '20%', paddingTop: '80px', color: 'white', left: '-100%' }}>{props.title}</div>
        <div style={{ fontSize: '20px', textAlign: 'center', paddingBottom: '80px', color: 'white', left: '-100%' }}>{props.text}</div>
        <div style={{ textAlign: 'center' }}>{ props.search }</div>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxBuis;
