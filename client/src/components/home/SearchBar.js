import React, { Component } from "react";
import { Input, Icon, Grid, Button } from "semantic-ui-react";

class SearchBar extends Component {
  render() {
    const { searchFor, updateSearchFor } = this.props;
    return (
      <div>
        <div className="home-search-bar">
          <Input
            className="search-input-term"
            placeholder="Sustainable Landscaping"
            value={searchFor}
            onChange={event => updateSearchFor(event.target.value)}
          />
          <Input
            className="search-input-urgency"
            placeholder="Ready To Go"
            label={
            <Button icon>
            <Icon name='map marker alternate'/>
          </Button>}
          labelPosition='right'
          />
          <Input
            className="search-input-location"
            placeholder="90291"
            label={
            <Button icon className="search button">
            <Icon name='search'/>
          </Button>}
          labelPosition='right'
          />
          
        </div>
      </div>
    );
  }
}

export default SearchBar;
