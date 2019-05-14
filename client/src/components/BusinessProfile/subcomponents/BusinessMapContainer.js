import React, { Component } from "react";
import { Embed } from 'semantic-ui-react';
import keys from '../../config-client/keys';
import { ConsoleReporter } from "jasmine";

class BusinessMapContainer extends Component {
  render() {
    const { googleAPIKey } = keys;
    const { address } = this.props;
    console.log('newkey: ', keys.googleAPIKey)
    let googleUrl = `https://www.google.com/maps/embed/v1/place?key=${googleAPIKey}&q=${address}`;
    return <div>
        <Embed active url={googleUrl} />
      </div>;
  }
}

export default BusinessMapContainer;