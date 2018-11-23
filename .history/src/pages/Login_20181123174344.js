import React, {Component} from 'react';
import queryString from 'query-string'

class Login extends Component {
    query = queryString.parse(this.props.location.search);
    render(){
        console.log(query)
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
            {query.login && 
                <button className="btn btn-primary">로그인</button>}
            </div>
        </div>
        );
    }
}

export default Login;