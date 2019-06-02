import React from 'react';
import { connect } from 'react-redux'

class UnreadCount extends React.PureComponent {
  render() {
    const { clearUnreadCounter, unreadCounter } = this.props;
    return (
      <div style={{ backgroundColor: '#deffde' }}>
        unread notifications: { unreadCounter }
        <button onClick={clearUnreadCounter}>mark as read</button>
      </div >
    );
  }
}

export default connect(
  state => ({
    unreadCounter: state.unreadCounter
  }),
)(UnreadCount);
