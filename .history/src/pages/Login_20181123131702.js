import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div>login</div>
            <div>
                <span>ID</span>
                <input>{this.props.name}</input>
                <span>PW</span>
                <input></input>
            </div>
            <div>
            <button>로그인</button>
            </div>
        </div>
        );
    }
}

export default Login;