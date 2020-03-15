import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>First Name: {props.firstName}</h3>
      <h3>Last Name: {props.lastName}</h3>
      <h3>Date of birth: {props.dob}</h3>
    </div>
  );
}

export default UserDetail;
