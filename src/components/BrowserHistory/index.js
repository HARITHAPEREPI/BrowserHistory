import './index.css'

const BrowserHistory = props => {
  const {browserHistoryDetails, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserHistoryDetails

  const onDeleteHistory = () => {
    deleteHistoryItem(id)
  }

  return (
    <div className="browser-history-items-container">
      <li className="item-card-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="logo-title">{title}</p>
        <p className="logo-url">{domainUrl}</p>
      </li>
      <div className="delete-logo-container">
        <button
          type="button"
          testId="delete"
          className="delete-button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </div>
  )
}

export default BrowserHistory
