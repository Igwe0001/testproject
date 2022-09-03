import React from 'react'


const Options = (props) => {
  return (
    <div className="my-4">
          <span className="text-ash my-4 block">{props.span}</span>
          <React.Fragment>{props.children}</React.Fragment>
    </div>
  );
}

export default Options