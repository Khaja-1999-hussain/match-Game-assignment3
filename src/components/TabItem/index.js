import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
