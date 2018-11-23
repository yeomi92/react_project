import React, {Component} from 'react';
import queryString from 'query-string'

class Login extends Component {
    constructor(props){
        super(props);
        this.query = queryString.parse(this.props.location.search);
        this.id = this.props.match.params.id;
    }
    
    render(){
        console.log(this.query)
        return (
        <div>
            <div>login</div>
            <div>
                <span>ID</span>
                <input placeholder={this.props.match.params.id}/>
                <span>PW</span>
                <input/>
            </div>
            <div>
            {this.query.login && 
                <button className="btn btn-primary">로그인</button>}
            </div>
        </div>
        );
    }
}

export default Login;