import React,{Component} from 'react';
import DatePicker from '../common/date.js'

export default class PersonPage extends Component{
	constructor(props){
		super(props);
		this.state = {}
	};
	render(){
		return (
			<div id='person-person'>
				<DatePicker></DatePicker>
			</div>
		)
	}
}