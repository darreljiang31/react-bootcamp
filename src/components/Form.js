import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      comment: ""
    }
  }

  titleChangeHandler = (event) => {
    this.setState({
      title : event.target.value
    })
  }

  commentChangeHandler = (event) => {
    this.setState({
      comment : event.target.value
    })
  }

  render() {
    return (
      <div className='container'>
        <form className="ui form">
          <div className="two fields">
            <div className="four wide field">
              <label>Title</label>
              <input onChange={ this.titleChangeHandler } value={this.state.title} type="text" name="title" placeholder="Title" />
            </div>
            <div className="twelve wide field">
              <label>Comment</label>
              <input onChange={ this.commentChangeHandler } value={this.state.comment} type="text" name="comment" placeholder="Comment"/ >
            </div>
          </div>
          <button type='button' onClick={ () => { this.props.updatePost( {title: this.state.title, body: this.state.comment } ) }} className="ui button">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
