import React, {Component} from 'react';
import queryString from 'query-string'

class Login extends Component {
    constructor(props){
        super(props);
        this.query = queryString.parse(this.props.location.search);
    }
    
    render(){
        console.log(this.query)
        return (
        <div>
            <div>login</div>
            <div>
                <span>ID</span>
                <input placeholder="아이디"/>
                <span>PW</span>
                <input placeholder="비밀번호"/>
            </div>
            <div>
                <button className="btn btn-primary">로그인</button>
            </div>
        </div>
        );
    }
}

export default Login;