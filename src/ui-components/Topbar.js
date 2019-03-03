import React, { PureComponent } from 'react';
import css from '../styles/c-topbar.module.scss';
import { connect } from "react-redux";
import { menuStateChange } from '../redux';

//images
import ic24WhiteBack from '../assets/icons/ic-24-white-back.svg';
import ic24SecBack from '../assets/icons/ic-24-sec-back.svg';
import logoWhite from '../assets/images/logo-white.svg';
import logo from '../assets/images/logo.svg';

//components
import IconButton from '../ui-elements/IconButton';
import MenuButton from '../ui-elements/MenuButton';

const mapState = state => ({ 
  menuOpen: state.menuOpen,
 });

const mapDispatch = dispatch => ({
  menuStateChange: isOpen => dispatch( menuStateChange(isOpen) ),
});

class Topbar extends PureComponent {

  actionTypes = {
    back: 'back',
    menu: 'menu'
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleIconClick(actionType) {
    switch (actionType) {
      case actionType === this.actionTypes.back:

        break;
      case actionType === this.actionTypes.menu:
      
        break;
      default:
    };
  }

  handleMenuClick() {
    this.props.menuStateChange(!this.props.menuOpen)
  }

  render() { 
    return (
      <div className={css.wrapper}>
        <IconButton 
          src={this.props.inverse ? ic24WhiteBack : ic24SecBack} 
          onClick={() => this.handleIconClick(this.actionTypes.back)}
        />
        <div className={css.logoContainer}>
          <img className={css.logo} src={this.props.inverse ? logoWhite : logo} alt={'test'} />
        </div>
        <MenuButton
          isOpen={this.props.menuOpen}
          onClick={() => this.handleMenuClick()}
        />
      </div>
    );
  }

}

export default connect(mapState, mapDispatch)(Topbar);
