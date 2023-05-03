import './index.css'

const UserInputCard = props => {
  const {inputDetails} = props
  const {userInput} = inputDetails
  const count = userInput.length
  return (
    <li className="input-card">
      <p className="input-text">
        {userInput}: {count}
      </p>
    </li>
  )
}

export default UserInputCard
