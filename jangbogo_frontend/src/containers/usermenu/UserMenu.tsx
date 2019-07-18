import * as React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import './usermenu.scss'; 

export default class UserMenu extends React.Component {
  render() {
    return (
      <div className="usermenu-container"> 
        <ul className="list">
          <li className="item">
            <NavLink 
              to="/" 
              activeClassName="menu-active">
              <div className="item-container">
                <div><i className="fas fa-home icon"></i></div>
                <div>메인</div>
              </div>
            </NavLink>
          </li>
          <li className="item">
            <div className="item-container">
              <div><i className="fas fa-bullhorn icon"></i></div>
              <div>알림</div>
            </div>
          </li>
          <li className="item">
            <div className="item-container">
              <div><i className="fas fa-question-circle icon"></i></div>
              <div>고객센터</div>
            </div>  
          </li>
          <li className="item">
            <div className="item-container">
              <div><i className="fas fa-user-circle icon"></i></div>
              <div>마이페이지</div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}