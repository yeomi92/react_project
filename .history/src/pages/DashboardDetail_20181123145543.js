import React, {Component} from 'react';
import qeuryString from 'query-string';

class DashboardDetail extends Component {
    constructor(props){
        super(props);
        this.qeuryString=this.props.location.search;
        this.match= this.props.match.params;
        this.qeury=qeuryString.parse(this.qeuryString);
    }
    render(){
        return (
            <div>Dashboard {this.match.num}</div>
        );
    }
}

export default Dashboard;