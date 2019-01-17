import React from 'react'
import axios from 'axios'
import PostList from './PostList'
import Form from './Form'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  updatePost = (post) => {
    console.log('Calling update post')
    const postWithId = {
      id: this.state.posts.length+1,
      ...post
    }

    this.setState({
      posts: [postWithId, ...this.state.posts]
    })
  }

  getPosts = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    this.setState({
      posts: result.data
    })
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    return (
      <div>
        <Form updatePost={ this.updatePost }/>
        <PostList posts={ this.state.posts }/>
      </div>
    )
  }
}

export default App

