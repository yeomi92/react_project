import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props)
        return (
        <div>
            <div>login</div>
            <div>
                <span>{this.props.match.params.name}</span>
                <input></input>
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