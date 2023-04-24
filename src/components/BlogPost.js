import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";


//parent component
function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."   isPublished={true}
      minutesToRead={1}
 />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Comment commentText="Put more time in coding React js"/>
    </div>
  );
}

export default BlogPost;
