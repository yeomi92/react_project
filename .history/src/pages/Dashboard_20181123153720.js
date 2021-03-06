import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import qeuryString from 'query-string';
import DashboardDetail from './DashboardDetail';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.qeuryString=this.props.location.search;
        this.match= this.props.match;
        this.qeury=qeuryString.parse(this.qeuryString);
    }
    render(){
        console.log(this.match);
        return (
            <div>
                <div>Dashboard</div>
                <div>
                    <ul>
                        <li><Link to={`${this.match.url}/1`}>Detail 1</Link></li>
                        <li><Link to={`${this.match.url}/2`}>Detail 2</Link></li>
                    </ul>

                    <ul>
                            <li><Link to={`${this.match.url}/1`}>Post #1</Link></li>
                            <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                            <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                            <li><Link to={`${match.url}/4`}>Post #4</Link></li>
                    </ul>
                </div>
                <Route exact path={`${this.match.url}`} render={()=><div>고르시오</div>}/>
                <Route path={`${this.match.url}/:num`} component={DashboardDetail}/>
            </div>

        );
    }
}

export default Dashboard;