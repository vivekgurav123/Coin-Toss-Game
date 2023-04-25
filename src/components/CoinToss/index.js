// Write your code here
import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {coinUrl: headImageUrl, countHeads: 0, countTails: 0}

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    // console.log(tossResult)
    if (tossResult % 2 === 0) {
      this.setState(prevState => ({
        coinUrl: headImageUrl,
        countHeads: prevState.countHeads + 1,
      }))
    } else {
      this.setState(prevState => ({
        coinUrl: tailImageUrl,
        countTails: prevState.countTails + 1,
      }))
    }
  }

  render() {
    const {coinUrl, countHeads, countTails} = this.state
    return (
      <div className="container">
        <div className="content">
          <div className="maindiv">
            <h1>Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            <img src={coinUrl} alt="toss result" />
            <div>
              <button type="button" onClick={this.onCoinToss}>
                Toss Coin
              </button>
            </div>
            <div className="counts">
              <p>
                Total: <span>{countHeads + countTails}</span>
              </p>
              <p>
                Heads: <span>{countHeads}</span>
              </p>
              <p>
                Tails: <span>{countTails}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
