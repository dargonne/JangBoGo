import * as React from "react"; 
import * as queryString from "query-string"; 

export default class Auth extends React.Component {

  AUTH_CODE: string; 

  constructor(props) {
    super(props); 

    this.AUTH_CODE = props.location.search;     
    console.log('props', props.location.hash); 
  }

  componentDidMount() {
    console.log('auth', this.AUTH_CODE); 
  }
  
  render() {
    return (
      <div>
        Auth!; 
      </div>
    )
  }
}