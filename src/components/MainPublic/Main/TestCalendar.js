import React from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import Listings from './Listings'


const now = new Date();
const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

class TestCalendar extends React.Component{

    

    constructor(){
        super()
        this.state = {
            units: [],
            value: [yesterdayBegin, todayEnd]
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value){
        this.setState({value})
        this.setState({units : [{
            name: 'Marta'
        }]})
    }
    render(){
        console.log(this.state)
        const {value, units} = this.state
        return(
            <div>
                <DateRangePicker
                calendarAriaLabel="Toggle calendar"
                clearAriaLabel="Clear value"
                dayAriaLabel="Day"
                monthAriaLabel="Month"
                nativeInputAriaLabel="Date"
                onChange={this.handleChange}
                value={value}
                yearAriaLabel="Year"
                />
                {units.map(unit => {
                    return <p>{unit.name && <Listings/>}</p>
                })}
                
            </div>
        )
    }
}

export default TestCalendar