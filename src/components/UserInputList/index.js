import UserInputCard from '../UserInputCard'
import './index.css'

const UserInputList = props => {
  const {inputList} = props
  const inputsLength = inputList.length < 1
  return (
    <div className="user-input-list-container">
      <div className="user-input-list-heading-container">
        <h1 className="user-input-list-heading">
          Count the characters like a Boss...
        </h1>
      </div>
      {inputsLength ? (
        <div className="no-user-input">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-user-input-image"
          />
        </div>
      ) : (
        <ul className="user-input-list">
          {inputList.map(eachInput => (
            <UserInputCard key={eachInput.id} inputDetails={eachInput} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserInputList
