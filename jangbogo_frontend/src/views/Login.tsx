import * as React from "react"; 
import './styles/Login.scss'; 

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-big-wrapper">
        <div className="login-wrapper">
          <div className="login-container">
            <h3>로그인</h3>
          </div>
          <div className="login-container">
            <p>서비스를 이용하시려면 로그인 하셔야 합니다</p>
          </div>
          <div className="login-container">
            <input type="text" name="id" placeholder="아이디(이메일)" /> 
            <input type="password" name="password" placeholder="비밀번호" /> 
            <button id="login-email">로그인</button>
          </div>
          <div className="login-container">
            <button id="login-naver">네이버 아이디로 로그인</button>
            <button id="login-kakao">카카오 계정으로 로그인</button>
          </div>
        </div>
        <div className="login-wrapper">
          <div className="login-info-container">
            <div className="login-info-what">계정이 없으시다면?</div>
            <div className="login-info-how">회원가입</div>
          </div>
          <div className="login-info-container">
            <div className="login-info-what">계정정보를 잊어버리셨다면?</div>
            <div className="login-info-how">계정찾기</div>
          </div>
        </div>
      </div>
    )
  }
}