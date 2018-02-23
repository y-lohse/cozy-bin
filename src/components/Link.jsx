import React from 'react'
import { Button, Input } from 'cozy-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'

class Link extends React.Component {
  state = {
    copied: false
  };

  render ({ url }) {
    const { copied } = this.state
    const theme = copied ? 'highlight' : null

    return (
      <div>
        <Input type='text' value={url} className={'copy-input'} readonly />
        <CopyToClipboard
          text={url}
          onCopy={() => this.setState({ copied: true })}
        >
          <Button theme={theme}>{copied ? 'copied' : 'copy'}</Button>
        </CopyToClipboard>
      </div>
    )
  }
}

export default Link
