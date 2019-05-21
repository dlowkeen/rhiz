import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Menu, Image, Dropdown, Icon } from "semantic-ui-react";
import rhizImg from "../../assets/images/rhiz.png";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderLogin() {
    // console.log("this.props in HEADERRRRR", this.props);
    // if (!this.props.auth) {
    //   return (
    //     <Menu.Item
    //       name="Welcome, Alessandra McLane!"
    //       onClick={this.handleItemClick}
    //     />
    //   );
    // } else {
    return (
      <div>
        <Dropdown
          item
          text={"Welcome Alessandra McLane!"}
          icon={"chevron down"}
          className={"header login"}
        >
          <Dropdown.Menu>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="/settings">Settings</Dropdown.Item>
            <Dropdown.Item href="/auth/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  render() {
    return (
      <Menu secondary className="header">
        <Menu.Item name="home" href="/">
          <Image
            className="rhiz-header-logo"
            src={rhizImg}
            size="small"
            verticalAlign="middle"
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Icon disabled name="bell outline" size="medium" />
          {this.renderLogin()}
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
