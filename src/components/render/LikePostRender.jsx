import React, { useState } from 'react'
function LikePostRender(props) {

  return (
    <div>
      <button onClick={props.Count}>Like Post {props.counter}</button>
    </div>
  )
}
export default LikePostRender;