import React from "react";

// This Col component sets a  column's "size" prop instead of its className


function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return (
    <div className={size}>
      {props.children}
    </div>
  );
}

export default Col;
