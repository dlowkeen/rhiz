import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ParallaxImage from "../common/ParallaxImage";
import FeaturedCarousel from "./FeaturedCarousel";
import FeaturedCarousel2 from "./FeaturedCarousel2";
import SearchBar from "./SearchBar";
import VerticalCard from "../common/VerticalCard";
import featuredLandscaping from "../../constants/featuredLandscaping";
import featuredInteriorDesign from "../../constants/featuredInteriorDesign";
import escapeRegExp from "escape-string-regexp";
import "./home.css";

class Home extends Component {
  state = {
    featuredLandscaping: featuredLandscaping,
    featuredInteriorDesign: featuredInteriorDesign,
    searchFor: "",
    searchLocation: "",
    jobUrgency: ""
  };

  updateSearchFor = value => {
    this.setState({
      searchFor: value
    });
  };

  updateSearchLocation = value => {
    this.setState({
      searchLocation: value
    });
  };

  updateJobUrgency = value => {
    this.setState({
      jobUrgency: value
    });
  };

  render() {
    // Destructure the state values
    // use spread to prevent mutations
    let { featuredLandscaping, featuredInteriorDesign, searchFor } = this.state;
    const match = new RegExp(escapeRegExp(searchFor), "i");
    searchFor
      ? (featuredLandscaping = featuredLandscaping.filter(fls =>
          match.test(fls.name)
        ))
      : featuredLandscaping;
    return (
      <div>
        <ParallaxImage
          bgImage={
            "https://res.cloudinary.com/rhiz/image/upload/b_rgb:000,o_60,c_fill,g_center,h_601,w_1920,y_0/v1558071139/Home%20Page/Search_Background_-_50_Black_Overlay_kwe1nc.jpg"
          }
          height={{ height: "225px" }}
          title="Let's Get Started!"
          alt="parallaximg"
          search={
            <SearchBar
              searchFor={this.state.searchFor}
              updateSearchFor={this.updateSearchFor}
            />
          }
        />
        <div style={{ height: "55px" }} />
        <Container>
          <div className="listingsHeader">
            <h1 className="title">Featured Landscaping Listings</h1>
            <a href="/">
              <h2 className="view-all-link">View All</h2>
            </a>
          </div>
          <FeaturedCarousel featuredLandscaping={featuredLandscaping} />
          <div className="listingsHeader">
            <h1 className="title">Featured Interior Design Listings</h1>
            <a href="/">
              <h2 className="view-all-link">View All</h2>
            </a>
          </div>
          <FeaturedCarousel2 featuredInteriorDesign={featuredInteriorDesign} />
        </Container>
      </div>
    );
  }
}

export default Home;
