import React from 'react';
import Holder from './Holder';

function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  );
}

export default Holder(LikeImage);
