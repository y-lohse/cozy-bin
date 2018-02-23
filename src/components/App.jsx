/* global cozy */
import React from 'react'
import Form from './Form'
import Link from './Link'

class App extends React.Component {
  state = {
    url: null
  }

  createBin = async data => {
    try {
      const doc = await cozy.client.data.create('io.cozy.bin', data)
      const { _id } = doc
      const sharingData = {
        data: {
          type: 'io.cozy.permissions',
          attributes: {
            source_id: 'io.cozy.apps/cozy-bin',
            permissions: {
              bin: {
                type: 'io.cozy.bin',
                verbs: ['GET'],
                values: [_id]
              }
            }
          }
        }
      }
      const resp = await cozy.client.fetchJSON('POST', '/permissions?codes=all', sharingData)
      const code = resp.attributes.codes.all
      const url = new URL(window.location)

      this.setState({
        url: `${url.origin}/bin?sharecode=${code}`
      })
    } catch (e) {
      console.warn(e)
    }
  }

  render () {
    const { url } = this.state

    return (
      <div className='app-wrapper c-layout'>
        <main className='app-content'>
          <div role="contentinfo">
            { url
              ? <Link url={url} />
              : <Form onSubmit={this.createBin} />
            }
          </div>
        </main>
      </div>
    )
  }
}

export default App
