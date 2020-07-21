import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array
};
PostList.defaultProps = {
  posts: [],
}

function PostList(props) {
  const {posts} = props;
  return (
    <div>
      <ul>
        {
          posts.map((value, index) => (
            <li key={index}>{value.title}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default PostList;