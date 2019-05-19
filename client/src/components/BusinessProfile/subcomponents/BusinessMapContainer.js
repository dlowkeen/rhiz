import React, { Component } from "react";
import { Embed } from 'semantic-ui-react';
import keys from '../../../config-client/keys';
import { ConsoleReporter } from "jasmine";

class BusinessMapContainer extends Component {
  //need address in format of 'address+city+state+zip'
  alterAddress = (address) => {
    return address.split(', ').join(' ').split(' ').join('+');
  }
  render() {
    const address = this.alterAddress(this.props.address);
    // const key = "AIzaSyBJh2fJjftRp3_BWRLe3VBcURw0BH926U8" 
    console.log('newkey: ', keys.googleAPIKey)
    let googleUrl = `https://www.google.com/maps/embed/v1/place?key=${keys.googleAPIKey}&q=${address}`;
    return <div style={{ width: '75%' }}>
        <Embed active url={googleUrl} />
      </div>;
  }
}


export default BusinessMapContainer;