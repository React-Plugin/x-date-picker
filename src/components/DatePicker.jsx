/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-date-picker
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'antd/lib/date-picker';  // 加载 JS
import 'antd/lib/date-picker/style/css';        // 加载 CSS
// import Calendar from 'rc-calendar';
// import 'rc-calendar/assets/index.css';
import moment from 'moment';

const BindValue = (WrappedComponnet)=>class extends WrappedComponnet{
    constructor(props){
        super(props);
        let defaultValue = this.props.value;
        this.state={defaultValue,value:defaultValue}
    }
    componentWillReceiveProps(newState){
        if(typeof newState.value != 'undefined' && newState.value !=this.state.value){
            this.setState({value:newState.value});
        }
    }
    // render(){
    //     let props = Object.assign({},this.props);
    //     props.defaultValue = props.value;
    //     props.value = this.state.value;
    //     return <WrappedComponnet {...props}></WrappedComponnet>
    // }
}
console.log(DatePicker)
console.log(BindValue(DatePicker))
// export default DatePicker;
export default BindValue(DatePicker);
// import DatePicker from 'rc-calendar/lib/Picker';
// import RangePicker from 'rc-calendar/lib/range-calendar';
// module.exports = { Calendar, DatePicker };

