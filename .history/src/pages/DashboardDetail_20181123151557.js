import React, {Component} from 'react';
import qeuryString from 'query-string';

class DashboardDetail extends Component {
    constructor(props){
        super(props);
        this.qeuryString=this.props.location.search;
        this.match= this.props.match;
        this.qeury=qeuryString.parse(this.qeuryString);
    }
    render(){
        console.log(this.match)
        return (
            <div>Dashboard {this.match.params.num}</div>
        );
    }
}

export default DashboardDetail;