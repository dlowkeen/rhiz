import React, { Component } from "react";
import { Embed } from 'semantic-ui-react';
import keys from '../../../config-client/keys';
import { ConsoleReporter } from "jasmine";
import axios from 'axios';

class BusinessMapContainer extends Component {
  state = {
    mapKey: ''
  }

  // get map apikey
  componentDidMount = () => {
    axios.get('http://localhost:3000/api/keys/mapKey')
      .then((key) => {
        console.log(key)
        this.setState({
          mapKey: key.data
        });
      });
  
  };

  //need address in format of 'address+city+state+zip'
  alterAddress = (address) => {
    return address.split(', ').join(' ').split(' ').join('+');
  }
  render() {
    const address = this.alterAddress(this.props.address);
    const { mapKey } = this.state;
    
    let googleUrl = `https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${address}`;
    return <div style={{ width: '75%' }}>
        <Embed active url={googleUrl} />
      </div>;
  }
}


export default BusinessMapContainer;