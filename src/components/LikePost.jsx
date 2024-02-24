import React from 'react';
import Holder from './Holder';

function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  );
}

export default Holder(LikePost);
