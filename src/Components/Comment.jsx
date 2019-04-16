import React from "react";
const Comment = props => {
  return (
    <div className="mt-3">
      <div className="card-block">
        <h3>
          <i class=" fas fa-user " />
          {props.head}
        </h3>
        <p>{props.body}</p>
        {props.delete && (
          <button className="btn-delete" onClick={props.deleteComment}>
            Izbriši komentar <i className=" far fa-trash-alt" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
