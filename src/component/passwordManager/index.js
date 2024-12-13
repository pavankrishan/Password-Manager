import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../passwordItem'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    isPassShow: false,
    userName: '',
    website: '',
    password: '',
    searchInput: '',
  }

  onAddPassword = event => {
    event.preventDefault()
    const {userName, password, website} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      userName: '',
      password: '',
      website: '',
    }))
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  deleteItem = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(each => each.id !== id),
    }))
  }

  passShow = () => {
    this.setState(prevState => ({isPassShow: !prevState.isPassShow}))
  }
  onSearch = event => {
    const {website, searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isPassShow, searchInput, passwordList, website, userName, password} =
      this.state

    const filteredPasswords = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-manager-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />

        <div className="add-password-section">
          <h1>Add New Password</h1>
          <form onSubmit={this.onAddPassword} className="form-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                value={website}
                onChange={this.onChangeWebsite}
                placeholder="Enter Website"
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                value={userName}
                onChange={this.onChangeUsername}
                placeholder="Enter Username"
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Enter Password"
              />
            </div>

            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div>
            <img
              className="passwordManager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
            />
          </div>
        </div>

        <div className="passwords-section">
          <h1>Your Passwords</h1>
          <p className="password-count">{passwordList.length}</p>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input
              onChange={this.onSearch}
              type="search"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <hr />

          <div className="show-password-container">
            <input id="showPass" type="checkbox" onChange={this.passShow} />
            <label htmlFor="showPass">Show Passwords</label>
          </div>

          <ul className="password-list">
            {filteredPasswords.length > 0 ? (
              filteredPasswords.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  passwordDetails={eachItem}
                  deleteItem={this.deleteItem}
                  passwordShow={isPassShow}
                />
              ))
            ) : (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
