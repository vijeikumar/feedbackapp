import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <h1 className="hed">
          How Satisfied are you with our Customer Support Performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button className="btn" type="button" onClick={this.onClickEmoji}>
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThanksFeedback = () => {
    const {resources} = this.props
    const {loveEmoji} = resources
    return (
      <div className="thanks-container">
        <img
          src={loveEmoji.loveEmojiUrl}
          alt="love-emoji"
          className="emoji-love"
        />
        <h1 className="thank-you-text">Thank You</h1>
        <p className="desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="container">
        <div className="feedback-container">
          {isFeedbackSelected
            ? this.renderThanksFeedback()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
