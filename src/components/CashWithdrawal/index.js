// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickDeduct = id => {
    console.log(id)
    const {amount} = this.state
    if (id === 1 && amount >= 50) {
      this.setState(prevState => ({
        amount: prevState.amount - 50,
      }))
    } else if (id === 2 && amount >= 100) {
      this.setState(prevState => ({
        amount: prevState.amount - 100,
      }))
    } else if (id === 3 && amount >= 200) {
      this.setState(prevState => ({
        amount: prevState.amount - 200,
      }))
    } else if (id === 4 && amount >= 500) {
      this.setState(prevState => ({
        amount: prevState.amount - 500,
      }))
    } else {
      alert('Insufficient funds')
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <img
              src="https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg"
              alt="profile"
              className="image"
            />
            <h1 className="name-heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-description">Your Balance</p>
            <div className="balance-style-container">
              <p className="balance-style">{amount}</p>
              <p className="balance-description-style">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-style">Withdraw</p>
          <p className="withdraw-description-style">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                onClickDeduct={this.onClickDeduct}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
