import React, {Component} from 'react';
import qeuryString from 'query-string';

class DashboardDetail extends Component {
    render(){
        console.log(this.match)
        return (
            <div>Dashboard {this.props.match.params.num}</div>
        );
    }
}

export default DashboardDetail;