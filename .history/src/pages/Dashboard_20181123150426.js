import React, {Component} from 'react';
import {Rout, Link} from 'react-router-dom'
import qeuryString from 'query-string';
import DashboardDetail from './DashboardDetail';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.qeuryString=this.props.location.search;
        this.match= this.props.match.params;
        this.qeury=qeuryString.parse(this.qeuryString);
    }
    render(){
        return (
            <div>
                <div>Dashboard</div>
                <div>
                    <ul>
                        <li><Link to={`${this.match.url}/1`}>Detail 1</Link></li>
                        <li><Link to={`${this.match.url}/2`}>Detail 2</Link></li>
                    </ul>
                </div>
                <Rout path={`${this.match.url}/:num`} component={DashboardDetail}></Rout>
            </div>

        );
    }
}

export default Dashboard;