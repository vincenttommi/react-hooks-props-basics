import React from "react";

//child component
function Comment(props) {
  return <div className="comment">{props.commentText}</div>;
}

export default Comment;
