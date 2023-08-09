import React, {useState} from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';


const LogsForm = (props) => {
    // let inputDate = '';
    // let inputDesc = '';
    // let inputTime = 0;

    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState('');

    const [formData, setFormData] = useState({
        inputDate:'',
        inputDesc:'',
        inputTime:''
    })

    const dateChangeHandler = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        // inputDate = e.target.value;
        // setInputDate(e.target.value);
        setFormData({...formData, inputDate: e.target.value})
    }
    const descChangeHandler = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value)
        // inputDesc = e.target.value;
        // setInputDesc(e.target.value);
        setFormData({...formData, inputDesc: e.target.value})
    }
    const timeChangeHandler = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        // inputTime = e.target.value;
        // setInputTime(e.target.value);

        setFormData({...formData, inputTime: e.target.value})
    }
    const formSubmitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        const newLog = {
            date:new Date(formData.inputDate),
            desc:formData.inputDesc,
            time: +formData.inputTime
        };
        console.log(newLog);

        // setInputDate('');
        // setInputDesc('');
        // setInputTime('');

        setFormData({
            inputDate:'',
            inputDesc: '',
            inputTime:''
        })

    }

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input onChange={dateChangeHandler} value={formData.inputDate} id="date" type="date"/>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input onChange={descChangeHandler} value={formData.inputDesc} id="desc" type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input onChange={timeChangeHandler} value={formData.inputTime} id="time" type="number"/>
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    )
};

export default LogsForm;