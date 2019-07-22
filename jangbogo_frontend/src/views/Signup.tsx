import * as React from "react"; 

import './styles/Signup.scss'; 

export default class Signup extends React.Component {
  render() {
    return (
      <div className="register-wrapper">
        <div className="register-container">
          <h3>회원가입</h3>
        </div>
        <div className="register-container">
          <p>본 페이지는 이메일 회원가입용 페이지 입니다<br/>소셜 계정(네이버, 카카오)로 회원가입 하실 고객님은 로그인 메뉴에서 진행해 주세요</p>
        </div>
        <div className="register-container">
          <input type="text" name="email" placeholder="이메일(아이디)" /> 
          <span className="register-warning">* 이미 가입된 이메일입니다</span>
          <input type="text" name="name" placeholder="성함" />
          <span className="register-warning">* 성함을 입력해 주세요</span>
          <input type="password" name="password" placeholder="비밀번호" /> 
          <span className="register-warning">* 비밀번호를 입력해 주세요</span>
          <input type="password" name="repeat-password" placeholder="비밀번호 재입력" /> 
          <span className="register-warning">* 비밀번호를 다시 입력해 주세요</span>
        </div>
        <div className="register-container">
          <div className="register-agreement">
            <input type="checkbox" id="agr-service" name="service" value="agreement" /> 
            <label htmlFor="agr-service">서비스 이용 약관에 동의합니다 (필수) </label>
          </div>
          <div className="register-agreement">
            <input type="checkbox" id="agr-info" name="info" value="agreement" /> 
            <label htmlFor="agr-info">개인정보 수집 및 활용 약관에 동의합니다 (필수) </label>
          </div>
          <div className="register-agreement">
            <input type="checkbox" id="agr-location" name="location" value="agreement" /> 
            <label htmlFor="agr-location">위치정보 수집 및 활용에 동의합니다</label>
          </div>
        </div>
        <div className="register-container">
          <button id="btn-signup">회원가입</button>
        </div>
      </div>
    )
  }
}