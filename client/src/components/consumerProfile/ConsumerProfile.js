import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ParallaxConsumer from "./ParallaxConsumer";
import Reviews from "../BusinessProfile/subcomponents/Reviews";
import HorizontalCard from "../common/HorizontalCard";
import hero1 from "../../assets/images/consumerProfile/hero.jpg";
import ale from "../../assets/images/consumerProfile/alessandra.jpg";
import fav1 from "../../assets/images/bizThumbs/bladesGloryThumb.jpg";
import fav2 from "../../assets/images/bizThumbs/coolBreezeThumb.jpg";
import fav3 from "../../assets/images/bizThumbs/gardenEvaThumb.jpg";
import fav4 from "../../assets/images/bizThumbs/greenGardensThumb.jpg";
import fav5 from "../../assets/images/bizThumbs/binfordThumb.jpg";
import consumer from "../../assets/images/consumerProfile/alessandra.jpf";
import escapeRegExp from "escape-string-regexp";
import "./consumerProfile.css";

import { reviews } from './Reviews';

class ConsumerProfile extends Component {
  state = {
    consumerProfile: [
      {
        name: "Alessandra McClane",
        date: "2019",
        location: "Mar Vista, California",
        bio: "Thank you for considering me for your project. I started Blades of Glory after pursuing my Hollywood comedy career and realizing I love creating living legacis like gardens, and prefer individual relationships I can build with customers. I take pride in my work and enjoy lighthearted conversations as well. *I still do standup... see me at Tao Comedy Studio!"
      }
    ]
  }

  render() {

    return (
      <div>
        <ParallaxConsumer
          bgImage={hero1}
          height={{ height: "100px" }}
          title=""
          text=""
          alt="parallaximg"

        />
        <div style={{ height: "55px" }} />
        <Container>
          <div class="ui centered equal width grid">
            <div class="sixteen wide column consumerImg" style={{ height: "3px" }} ><img src={ale} alt="ale" /></div>
            <div class="seven wide column">
              <h1 className="title">Alessandra McClane</h1>
            </div>
            <div class="six wide column">
              <h3>Member since 2019</h3>
            </div>
            <div class="three wide column connect">
              <button class="ui-button">Connect</button>
            </div>
            <div class="sixteen wide column">
              <h3>Mar Vista, California</h3>
            </div>
            <div class="sixteen wide column">
              <h2>Thank you for considering me for your project. I started Blades of Glory after pursuing my Hollywood comedy career and realizing I love creating living legacis like gardens, and prefer individual relationships I can build with customers. I take pride in my work and enjoy lighthearted conversations as well. *I still do standup... see me at Tao Comedy Studio!</h2>
            </div>
            <div class="ui five column grid">
              <div class="row">
                <div class="column">
                  <h2 className="title bold">My Lists (1)</h2>
                </div>
                <div class="column">
                <h2 className="title bold green">See All</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <h3>Alessandra McClanes Personal Favorites</h3>
              </div>
            </div>

            <div class="eight column row faves">
              <div class="column"><img src={fav1} alt="fav1" /></div>
              <div class="column"><img src={fav2} alt="fav2" /></div>
              <div class="column"><img src={fav3} alt="fav3" /></div>
              <div class="column"><img src={fav4} alt="fav4" /></div>
              <div class="column"><img src={fav5} alt="fav5" /></div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>
            </div>

            <div class="sixteen wide column">
              <h2 className="title bold">My Business</h2>
            </div>

            {/* ** INSERT HORIZONTAL CARD w Business.js details ** */}

            {/* Added this div below for where business card will go so could add the margin */}
            <div className="business card" style={{ marginBottom: "4%" }}></div>
            {/*
              <div class="ui three column grid">
                <div class="row">
                  <div class="column">
                    REVIEW 1
                  </div>
                  <div class="column">
                  REVIEW 2
                  </div>
                </div>
                <div class="row">
                  <div class="column">
                  REVIEW 3
                  </div>
                  <div class="column">
                  REVIEW 4
                  </div>
                </div>
              </div>
            */}



            {/* <div class="row">
              <div class="column">
                <button class="ui-button">Load More</button>
              </div>
            </div> */}
          </div>

        </Container>
        {/* <div style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Karla, sans-serif",
          marginTop: "5%",
          alignContent: "center"
        }}> */}
          {/* <div class="sixteen wide column">
                <h2 className="title">61 Reviews</h2>
              </div> */}
          <Container>

          <Reviews 
            reviews={reviews}
            reviewCount={61}
          >
            <div class="ui four column grid" style={{ marginBottom: "3%" }}>
              <div class="row">
                <div class="column">
                  <h3> From Consumers (57)</h3>
                </div>
                <div class="column">
                  <h3 class="green"> From Businesses (4)</h3>
                </div>
              </div>
            </div>
          </Reviews>
          <div class="row">
            <div class="column">
              <button class="ui-button">Load More</button>
            </div>
          </div>
          </Container>
        {/* </div> */}
         

      </div>
    );
  }
}

export default ConsumerProfile;
