// Write your code here

import './index.css'

const DenominationItem = props => {
  const {eachItem, onClickDeduct} = props
  const {id, value} = eachItem

  const deductAmount = () => {
    onClickDeduct(id)
  }
  return (
    <li className="list-style">
      <button className="button" type="button" onClick={deductAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
