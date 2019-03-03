import React, { Component } from 'react';
import css from './styles/c-app.module.scss';
import './App.scss';


import Topbar from './ui-components/Topbar';
import AccountSelector from './ui-components/AccountSelector';

class App extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.header}>
          <Topbar inverse={true}/>
          <div className={css.info}>
            <AccountSelector name={'Abel Saldaña Martínez'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
