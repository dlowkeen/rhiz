import React from "react";
import { Parallax } from "react-parallax";
import { Image, Container } from 'semantic-ui-react';

const ParallaxBuis = props => (
  <div>
    <Parallax
      blur={{ min: -10, max: -10 }}
      bgImage={props.bgImage}
      bgImageAlt="profile pic"
      strength={10}
      
    >
      <Container>
        <Image src={props.src} style={{ height: '15%', width: '25.5%', marginBottom: '6%', marginTop: '-15%', marginLeft: '-26%', marginRight: '80%', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }} centered />
        <h1 style={{ textAlign: 'center', paddingTop: '80px' }}>{props.title}</h1>
        <p style={{ textAlign: 'center', paddingBottom: '80px' }}>{props.text}</p>
        <div style={{ textAlign: 'center' }}>{ props.search }</div>
        <div style={ props.height } />
      </Container>
    </Parallax>
  </div>
);
export default ParallaxBuis;
