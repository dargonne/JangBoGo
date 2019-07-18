import * as React from 'react'; 
import { Link } from 'react-router-dom'; 

import './header.scss'; 


export default () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img id="logo" src="https://firebasestorage.googleapis.com/v0/b/iamdevbang.appspot.com/o/common%2Flogo.png?alt=media&token=bdd39f82-f3ae-4792-8847-c4a3f2b8b0c1" />
      </Link>
    </div> 
  )
}