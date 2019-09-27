import React,{Component} from 'react';
import ReactDom from 'react-dom';

export default class Button extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	};
	render(){
		let {className='buttonClass',children} = this.props;
		return (
			<button class={className} onClick={this.props.onClick}>{children}</button>
		)
	}
}