import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ForumScreen from './ForumScreen';
import UnreadCount from './UnreadCount';

const defaultState = {
  unreadCounter: 0,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'CLEAR_UNREAD_COUNTER':
      return Object.assign({}, state, {
        unreadCounter: 0,
      });
    case 'INCREMENT_UNREAD_COUNTER':
      return Object.assign({}, state, {
        unreadCounter: state.unreadCounter + 1,
      });
    default:
      return state
  }  
}

const store = createStore(reducer);

function clearUnreadCounter() {
  store.dispatch({ type: 'CLEAR_UNREAD_COUNTER' });
}

function incrementUnreadCounter() {
  store.dispatch({ type: 'INCREMENT_UNREAD_COUNTER' });
}

function showForumScreen(targetId) {
  ReactDOM.render(
    <Provider store={store}>
      <ForumScreen
        clearUnreadCounter={clearUnreadCounter}
        incrementUnreadCounter={incrementUnreadCounter}
      />
    </Provider>,
    document.getElementById(targetId)
  );
}

function showUnreadCount(targetId) {
  ReactDOM.render(
    <Provider store={store}>
      <UnreadCount clearUnreadCounter={clearUnreadCounter}/>
    </Provider>,
    document.getElementById(targetId)
  );
}

function test() {
  alert('The forum is here!');
}

global.Forum = {
  showForumScreen,
  showUnreadCount,
  test,
};
