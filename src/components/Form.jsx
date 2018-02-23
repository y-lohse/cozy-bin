import React from 'react'
import { Button, Textarea } from 'cozy-ui/react'

class Form extends React.Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit({
      content: e.target.content.value
    })
  };

  render () {
    return (
      <form onSubmit={this.onSubmit} className='submit-form'>
        <label for='content'>Content</label>
        <Textarea name='content' id='content' className='textarea' autofocus />
        <Button>Create bin</Button>
      </form>
    )
  }
}

export default Form
