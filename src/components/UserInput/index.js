import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import UserInputList from '../UserInputList'

import './index.css'

class UserInput extends Component {
  state = {
    inputList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onSubmitUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newList = {
      id: uuidv4(),
      userInput,
    }

    this.setState(prevState => ({
      inputList: [...prevState.inputList, newList],
      userInput: '',
    }))
  }

  render() {
    const {inputList, userInput} = this.state
    console.log(inputList)
    return (
      <div className="container">
        <div className="counter-main-container">
          <UserInputList inputList={inputList} />
          <div className="user-input-container">
            <h1 className="character-heading">Character Counter</h1>
            <form
              className="input-and-add-button"
              onSubmit={this.onSubmitUserInput}
            >
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input-box"
                onChange={this.onChangeUserInput}
                value={userInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInput
