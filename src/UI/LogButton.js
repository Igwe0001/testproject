import React from 'react'

const LogButton = (props) => {
    const classes = 'rounded-lg ' + props.className;
    return (
      <button className={classes}>{props.children}</button>
  )
}

export default LogButton