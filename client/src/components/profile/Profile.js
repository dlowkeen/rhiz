import React, { Component } from 'react';
import ParallaxImage from "../common/ParallaxImage";
import landscape1 from "../../assets/images/landscape1.jpeg";
import donovan from '../../assets/images/donovan.jpg';

class Profile extends Component {
  render() {
    return (
      <div>
        <ParallaxImage 
          src={donovan}
          size='small'
          height={{ height: "15px" }}
          bgImage={landscape1} 
          title="Donovan Lowkeen" 
          text="lorem ipsum Ea consequat sunt ut sunt esse veniam qui incididunt laborum exercitation. Incididunt ipsum sint do esse anim reprehenderit sit ipsum sint minim incididunt laborum commodo sint. Nulla elit occaecat est Lorem voluptate proident quis est elit nulla nisi exercitation. Aliqua nisi sunt reprehenderit nulla consequat ad voluptate mollit esse et in aliqua dolor." 
          alt="parallaximg" />
      </div>
    );
  }
}

export default Profile;