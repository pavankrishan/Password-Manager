const PasswordItem = props => {
  const {passwordDetails, deleteItem, passwordShow} = props
  const {id, userName, password, website} = passwordDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="password-item">
      <div className="initial-container">
        <h1 className="initial">{website[0].toUpperCase()}</h1>
      </div>
      <div className="details-container">
        <p className="website">{website}</p>
        <p className="username">{userName}</p>
        {passwordShow ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
