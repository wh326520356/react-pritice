import React,{Component} from 'react';

const LINE = [1,2,3,4,5,6];
const WEEK_NAME	 = [`日`,`一`,`二`,`三`,`四`,`五`,`六`];
export default class DatePicker extends Component{
	constructor(props){
		super(props);
		this.state = {
		    month: 0,
            year: 0,
            currentDate: new Date()
        }
	};
	getMonthSum(boolLeap,month){
	    switch(month){
            case 1: return 31;
            case 2: return boolLeap?29:28;
            case 3: return 31;
            case 4: return 30;
            case 5: return 31;
            case 6: return 30;
            case 7: return 31;
            case 8: return 31;
            case 9: return 30;
            case 10: return 31;
            case 11: return 30;
            case 12: return 31;
        }
    };
	boolLeapYear(year){
	    return year%4==0&&year%100!=0||year%400==0;
    };
	getDayText(line,weekIndex,weekDay,monthDays){
        let number = line*7+weekIndex-weekDay+1;
        if(number<=0||number>monthDays){
            return <span>&nbsp;</span>
        }
        return number;
    };
	getWeeksByFirstDay(year,month){
	    var date = this.getDateByYearMonth(year,month);
	    return date.getDay();
    };
	getDateByYearMonth(year,month,day=1){
	    var date = new Date();
	    date.setFullYear(year);
	    date.setMonth(month,day);
	    return date;
    }
	initDate(){
	    let date = new Date();
	    let year = date.getFullYear();
	    let month = date.getMonth();
	    let day = date.getDate();
	    let week = date.getDay()
        let monthDays = this.getMonthSum(year,month)
        let weekDay = this.getWeeksByFirstDay(year,month);
		return (
		    <table class="date-picker-table">
                <thead>
                {
                    <tr>
                        {
                            WEEK_NAME.map((val)=>{
                                return <td class="date-picker-td">{val}</td>
                            })
                        }
                    </tr>
                }
                </thead>
                <tbody>
                {
                    LINE.map((l,key)=>{
                        return (
                            <tr>
                                {
                                    WEEK_NAME.map((week,index)=>{
                                        return <td class="date-picker-td">{this.getDayText(key,index,weekDay,monthDays)}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
	};
	render(){
		return (
			<div id='date-picker'>
                {
					(()=>{
						return this.initDate();
					})()
                }
			</div>
		)
	}
}