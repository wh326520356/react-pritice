import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from '../components/index.js';
import PersonPage from '../components/person/Person.js';

export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
				<Route path="/index" component={App}></Route>
				<Route path="/person" component={PersonPage}></Route>
            </Router>
        )
    }
}