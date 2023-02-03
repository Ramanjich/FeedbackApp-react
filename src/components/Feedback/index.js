import {Component} from 'react'

import Emojiscon from '../Emojiscon'

import Responcecom from '../Responsecom'

import './index.css'

class Feedback extends Component {
  state = {showingRes: true}

  onRespone = () => {
    this.setState({showingRes: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {showingRes} = this.state
    return (
      <div className="container">
        {showingRes ? (
          <Emojiscon emojis={emojis} onRespone={this.onRespone} />
        ) : (
          <Responcecom imageUrl={loveEmojiUrl} />
        )}
      </div>
    )
  }
}

export default Feedback
