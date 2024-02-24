import React, { useState } from 'react'
function LikeImageRender(props) {

  return (
    <div>
      <button onClick={props.Count}>Like Image {props.counter}</button>
    </div>
  )
}
export default LikeImageRender;