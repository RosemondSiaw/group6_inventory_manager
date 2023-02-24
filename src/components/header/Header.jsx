import React, { useContext } from 'react'
import './css/Header.scss'

// import scripts from scripts folder
import DateTime from '../../scripts/DateTime'
import Greetings from '../../scripts/Greetings'

//import Language context
import { Context } from "../language-wrapper/Wrapper"

const Header = () => {
  const context = useContext(Context);

  return (
    <div className="header">
      <div className="header-left">
        <div class="userProfile"> <img alt="" /> </div>
        <div>
          <p> <Greetings /> <span>Admin</span>! </p>
          <div>
            <DateTime />
          </div>
        </div>
      </div>
      <div className="header-middle">
        <form action="" method="post">
          <button type="submit"> { } </button>
          <input type="text" placeholder="Search record, contact, task, etc" />
        </form>
      </div>
      <div className="header-right">
        <div className="language_shift">
          { }
          <select value={context.locale} onChange={context.selectLang}>
            <option value="en-US">English</option>
            <option value="fr-FR">French</option>
          </select>
        </div>
        <div className="notification_container">{ }</div>
      </div>
    </div>
  )
}

export default Header