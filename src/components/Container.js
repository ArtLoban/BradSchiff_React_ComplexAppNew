import React from 'react';

function Container(props) {
  const classWide = (props.wide) ? '' : 'container--narrow';

  return (
    <div className={`container py-md-5 ${classWide}`}>
      {props.children}
    </div>
  )
}

export default Container;
