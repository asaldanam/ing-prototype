/*
 * state
 */
const initialState = {
  menuOpen: false,
  user: {
    selectedAccount: 'all',
    accounts: [
      'ES7921000813610123456789',
      'ES9832030534462438007171'
    ]
  }
};

/*
 * action types
 */
const ACTION = {
  MENU_STATE_CHANGE: 'MENU_STATE_CHANGE',
  USER_ACCOUNT_SELECT: 'USER_ACCOUNT_SELECT'
}

/*
 * action creators
 */

export const menuStateChange = menuOpen => ({
  type: ACTION.MENU_STATE_CHANGE, payload: menuOpen
})

export const userAccountSelect = account => ({
  type: ACTION.USER_ACCOUNT_SELECT, payload: account
})

/*
 * reducers
 */
const rootReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION.MENU_STATE_CHANGE:
      return {
        ...prevState,
        menuOpen: action.payload
      }
    case ACTION.USER_ACCOUNT_SELECT:
      return {
        ...prevState,
        user: {
          ...prevState.user,
          selectedAccount: action.payload
        }
      }
    default:
      return prevState;
  }
};

export default rootReducer;