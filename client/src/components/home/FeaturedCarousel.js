import React from "react";
import { Container } from "semantic-ui-react";
import VerticalCard from '../common/VerticalCard';
// import featuredLandscaping from '../../constants/featuredLandscaping';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


class FeaturedCarousel extends React.Component {

  renderVerticalCards() {
    const featuredLandscaping = this.props.featuredLandscaping;
    const verticalCards = featuredLandscaping.map(featuredLandscaping => {
      return (
        <div key={featuredLandscaping.name}>
          <VerticalCard
            name={featuredLandscaping.name}
            bio={featuredLandscaping.bio}
            src={featuredLandscaping.src}
            location={featuredLandscaping.location}
            description={featuredLandscaping.description}
            firstSpecialty={featuredLandscaping.firstSpecialty}
            secondSpecialty={featuredLandscaping.secondSpecialty}
            thirdSpecialty={featuredLandscaping.thirdSpecialty}
            facebook={featuredLandscaping.facebook}
            instagram={featuredLandscaping.instagram}
            pricing={featuredLandscaping.pricing}
            website={featuredLandscaping.website}
          />
        </div>
      );
    });
    return verticalCards;
  }

  render() {
    return <Container>
          {this.renderVerticalCards()}
      </Container>;
  }
}

export default FeaturedCarousel;
