import React,{Component} from 'react';

export default class DatePicker extends Component{
	constructor(props){
		super(props);
		this.state = {}
	};
	render(){
		return (
			<div id='date-picker'>
				<input type='date'></input>
			</div>
		)
	}
}