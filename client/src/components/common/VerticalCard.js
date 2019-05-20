import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";



const VerticalCard = props => (
  <Card>
    <Image src={props.src} alt="img" />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.location}</Card.Meta>
      <br />
      <Card.Meta className="bio">{props.bio}</Card.Meta>
      <Card.Description>
      - {props.firstSpecialty}
      </Card.Description>
      <Card.Description>
      - {props.secondSpecialty}
      </Card.Description>
      <Card.Description>
      - {props.thirdSpecialty}
      </Card.Description>
      <div>
        <div className="card-icons">
          <img
            style={{ height: "20px", width: "20px" }}
            src={require("../../assets/images/facebook.png")}
            alt="facebook"
          />
          <img
            style={{ height: "20px", width: "20px" }}
            src={require("../../assets/images/instagram.png")}
            alt="instagram"
          />
          <Icon name="dollar" />
          <Icon name="dollar" />
          <Icon name="dollar" />
          <Icon name="dollar sign" />
          <Icon name="dollar sign" />
        </div>
      </div>
      <div className="ui two buttons">
        <Button href={props.website} positive>
          View Listing
        </Button>
      </div>
    </Card.Content>
  </Card>
  
);



export default VerticalCard;

