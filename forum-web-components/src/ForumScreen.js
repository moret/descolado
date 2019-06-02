import React from 'react';
import { connect } from 'react-redux'

class ForumScreen extends React.PureComponent {
  render() {
    const {
      clearUnreadCounter,
      incrementUnreadCounter,
      unreadCounter,
    } = this.props;
    return (
      <div style={{ backgroundColor: '#deffde' }}>
        <h3>I am the forum, I am eternal!</h3>
        <div>you have {unreadCounter} unread notifications</div>
        <div><button onClick={incrementUnreadCounter}>create new notification</button></div>
        <div><button onClick={clearUnreadCounter}>clear unread notifications counter</button></div>
      </div>
    );
  }
}

export default connect(
  state => ({
    unreadCounter: state.unreadCounter
  }),
)(ForumScreen);
