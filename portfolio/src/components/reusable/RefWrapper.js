import React from 'react';

function RefWrapper(props) {
  const { nodeRef } = props
  const child = React.Children.only(props.children);
  return React.cloneElement(child, {
    nodeRef: nodeRef
  });
}

export default RefWrapper;
