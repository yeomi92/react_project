import React, {Component} from 'react';
import queryString from 'query-string'

class Login extends Component {
    constructor(props){
        super(props);

        this.qeury = queryString.parse(this.props.location.search);
        
    }

    render(){
        console.log(qeury)
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