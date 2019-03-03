import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import css from '../styles/c-account-selector.module.scss';
import { connect } from "react-redux";
import { userAccountSelect } from '../redux';

//images
import ic16WhiteArrowdown from '../assets/icons/ic-16-white-arrowdown.svg'

//components
import { Menu, Dropdown } from 'antd';

const mapState = state => ({ 
  accounts: state.user.accounts,
  selectedAccount: state.user.selectedAccount
 });

const mapDispatch = dispatch => ({
  userAccountSelect: account => dispatch( userAccountSelect(account) ),
})

class AccountSelector extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleMenuItemClick(item) {
    this.props.userAccountSelect(item)
  }

  getAccountLiteral = (account) => {
    if ( account === 'all') {
      return 'Saldo global'
    } else {
      return `Cuenta ... ${account.slice(-4)}`
    }
  }

  renderMenuDropdown() {
    const accounts = this.props.accounts;
    const selectedAccount = this.props.selectedAccount
    const all = 'all';
    return (
      <Menu selectedKeys={[selectedAccount]}>
        <Menu.Item key={all} onClick={() => this.handleMenuItemClick(all)}>
          {this.getAccountLiteral('all')}
        </Menu.Item>
        {accounts.map(item =>        
          <Menu.Item onClick={() => this.handleMenuItemClick(item)} key={item}>
            {this.getAccountLiteral(item)}
          </Menu.Item>
        )}
      </Menu>
    )
  }

  render() { 
    return (
      <div className={css.wrapper}>
        <div className={css.user}>
          {this.props.name}
        </div>
        <Dropdown overlay={this.renderMenuDropdown()} trigger={['click']}>
          <div className={css.selector}>
            <div>{this.getAccountLiteral(this.props.selectedAccount)}</div>
            <img src={ic16WhiteArrowdown} alt=""/>
          </div>
        </Dropdown>
      </div>
    );
  }

}

AccountSelector.propTypes = {
  user: PropTypes.string,
  account: PropTypes.string,
  selectedAccount: PropTypes.string
}

export default connect(mapState, mapDispatch)(AccountSelector);