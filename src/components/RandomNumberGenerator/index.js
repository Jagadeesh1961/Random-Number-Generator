import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onRandomNumber = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="note">Generate a random number in the range 0 to 100</p>
          <button
            className="button"
            type="button"
            onClick={this.onRandomNumber}
          >
            Generate
          </button>
          <h1 className="random">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
