import React, { useContext } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './css/Header.scss'
import Profile from '../../assets/profilePicture.svg'

// import scripts from scripts folder
import DateTime from '../../scripts/DateTime'
import Greetings from '../../scripts/Greetings'

//import Language context
import { Context } from "../language-wrapper/Wrapper"

//import Language translator jason files
//import { FormattedMessage } from "react-intl";

//import icons from Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const languageIcon = <FontAwesomeIcon className="iconHead" icon={faLanguage} />
const searchIcon = <FontAwesomeIcon className="iconHead" icon={faMagnifyingGlass} />

const Header = () => {
  const context = useContext(Context);

  const { currentUser } = useAuth()

  return (
    <div className="header">
      <div className="header-left">
        <div class="userProfile"> <img src={Profile} alt="" /> </div>
        <div>
          <p> <Greetings /> &nbsp; <span> {currentUser.email} </span>! </p>
          <div>
            <DateTime />
          </div>
        </div>
      </div>
      <div className="header-middle">
        <form action="" method="post">
          <button type="submit"> {searchIcon} </button>
          <input type="text"
            TODO
            placeholder="Search item, order, manufacturer, etc" />
        </form>
      </div>
      <div className="header-right">
        <div className="language_shift">
          {languageIcon}
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