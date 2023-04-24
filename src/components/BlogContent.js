import React from "react";


//child component
function BlogContent(props) {

  console.log(props);

  if(!props.isPublished){
  //hide unpublished content
  //return null means  "dont display  dom elements here"



  }else
  return (
    <div>
    <h1>{props.articleText}</h1>
    <p>{props.minutesToRead}minutes to read</p>
    </div>
  );
}

export default BlogContent;
