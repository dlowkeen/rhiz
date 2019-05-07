import React, { Component } from "react";
import { Embed } from 'semantic-ui-react';
import keys from '../../config-client/keys';
import { ConsoleReporter } from "jasmine";

class MapContainer extends Component {
  render() {
    console.log('newkey: ', keys.googleAPIKey)
    let googleUrl = "https://www.google.com/maps/embed/v1/place?key=" + keys.googleAPIKey + "&q=Eiffel+Tower,Paris+France";
    return <div>
        <Embed active url={googleUrl} />
      </div>;
  }
}


export default MapContainer;