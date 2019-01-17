import React from 'react'
import { map } from 'lodash'

const renderList = (posts) => {
  return map(posts, (post) => {
    return (
      <div key={ post.id } className='item'>
        <i className="large middle aligned stack overflow icon" />
        <div className="content">
        <div className="description">
          <h2> { post.title } </h2>
          <p> { post.body } </p>
      </div>
    </div>

    </div>
    )
  })
}

const PostList = ({ posts }) => {
  return <div className='ui relaxed divided list'> { renderList(posts) } </div>
}

export default PostList
