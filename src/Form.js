import React, { Children } from "react";

function Form(props) {
  return (
    <div className="card card-white bg-white p-4 shadow-md border rounded-lg">
      <div className="card-header bg-info-700 p-2 rounded">
        <h2 className="text-lg font-semibold">{props.title}</h2>
      </div>
      <div className="card-body text-gray-600 bg-gray-100 mt-5 p-5">
        <form>{Children.toArray(props.children)}</form>
      </div>
    </div>
  );
}

export default Form;
