import React, { Component } from 'react';
import { Icon, Input, Image, Dropdown } from 'semantic-ui-react';

import './style/index.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.dropDownOptions = this.dropDownOptions.bind(this);
  }

  dropDownOptions =() => {
    const trigger = (
      <span className="profileImage">
        <Image avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/_ragzor/128.jpg" size="mini" className="userAvatar" />
        <Icon name="angle down" />
      </span>
    );

    const options = [
      { key: 'user', text: 'Account', icon: 'user' },
      { key: 'settings', text: 'Settings', icon: 'settings' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ];

    return <Dropdown trigger={trigger} options={options} pointing="top left" icon={null} />;
  }

  render() {
    return (
      <div className="myHeader">
        <span className="logo">LOGO</span>
        <div className="headerActions">
          <Input icon placeholder="Search..." className="searchField">
            <input />
            <Icon name="search" className="searchIcon" />
          </Input>
          {this.dropDownOptions()}
          <Icon name="shopping cart" size="big" className="cartIcon" />
          <span className="cartCount"> 0 </span>
        </div>
      </div>
    );
  }
}

export default Header;
