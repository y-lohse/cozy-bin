/* global cozy */
import React from 'react'
import Content from './Content'

class Public extends React.Component {
  state = {
    content: null
  };

  componentWillMount = async () => {
    const params = new URL(window.location).searchParams
    const id = params.get('bin')
    const doc = await cozy.client.data.find('io.cozy.bin', id)
    this.setState({ content: doc.content })
  };

  render () {
    const { content } = this.state
    return (
      <div className='app-wrapper c-layout'>
        <main className='app-content'>
          <Content text={content} />
        </main>
      </div>
    )
  }
}

export default Public
