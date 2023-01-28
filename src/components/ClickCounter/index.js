// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrement = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">
            The button has been clicked{' '}
            <span className="number">{counter}</span> times
          </h1>
          <p className="description">Click the button to increase the count</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
