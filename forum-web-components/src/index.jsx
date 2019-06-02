import React from 'react';
import ReactDOM from 'react-dom';

function showForumScreen(targetId) {
  ReactDOM.render(
    <div>
      I am the forum, I am eternal!
    </div>,
    document.getElementById(targetId)
  );
}

function test() {
  alert('The forum is here!');
}

global.Forum = {
  showForumScreen,
  test,
};
