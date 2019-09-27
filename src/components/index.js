import React,{Component} from 'react';
import Button from './common/Button.js';
import {Link} from 'react-router-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
			data: [
				{name: '张三',age: '12',sex: '男',birth: '1991-01-01',id: '2'},
				{name: '李四',age: '13',sex: '男',birth: '1991-01-01',id: '3'},
				{name: '王二',age: '14',sex: '男',birth: '1991-01-01',id: '4'},
				{name: '麻子',age: '15',sex: '男',birth: '1991-01-01',id: '5'},
			],
			columns: [
				{key: 'name',title: '姓名'},
				{key: 'age',title: '年龄'},
				{key: 'sex',title: '性别'},
				{key: 'birth',title: '生日'},
			]
		};
    };
	renderTable(columns,data){
		let butName = `点击`
		return (
			<div class='table-div'>
			<Button onClick={()=>{this.changeTableHead()}}>{`${butName}`}</Button>
			<Link to='/person'>跳转</Link>
			<table>
			<thead>
				<tr>
				{
					columns.map(function(val,index){
						return <td class='table-td'>{val.title}</td>
					})
				}
				</tr>
			</thead>
			<tbody>
			{
				data.map(function(value){
					return (
						<tr>
						{
							columns.map(function(val,index){
								return <td class='table-td'>{value[val.key]}</td>
							})
						}
						</tr>
					)
				})
			}
			</tbody></table></div>
		)
	};
	changeTableHead(){
		let data = [
			{name: 'tom',age: '21',sex: 'man',birth: '1991-01-01',id: '2'},
			{name: 'jerry',age: '35',sex: 'woman',birth: '1991-01-01',id: '3'},
			{name: 'lily',age: '28',sex: '保密',birth: '1991-01-01',id: '4'},
		]
		this.setState({data:data});
	};
    render() {
        return (
            <div id={`reactExample`}>
			{
				(()=>{
					return this.renderTable(this.state.columns,this.state.data);
				})()
			}
            </div>
        );
    }
}