import React, {Component} from 'react';

class Login extends Component {
    console.log(this.props)
    render(){
        return (
        <div>
            <div>login</div>
            <div>
                <span>ID</span>
                <input/>{this.props.match.params.name}
                <span>PW</span>
                <input/>
            </div>
            <div>
            <button>로그인</button>
            </div>
        </div>
        );
    }
}

export default Login;