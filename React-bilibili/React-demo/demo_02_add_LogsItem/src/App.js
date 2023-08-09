import Logs from "./Components/Logs/Logs";
import { useState } from "react";
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css';

const App = () => {
    const [logsData, setLogsData] =  useState([
        {
            id: '001',
            date: new Date(2021, 1, 20, 18, 30),
            desc: '学习九阳神功',
            time: 30
        },
        {
            id: '002',
            date: new Date(2022, 2, 10, 12, 30),
            desc: '学习降龙十八掌',
            time: 20
        },
        {
            id: '003',
            date: new Date(2022, 2, 11, 11, 30),
            desc: '学习JavaScript',
            time: 40
        },
        {
            id: '004',
            date: new Date(2022, 2, 15, 10, 30),
            desc: '学习React',
            time: 80
        }
    ]);
    const saveLogHandler = (newLog) => {
        console.log(newLog);
        setLogsData([newLog, ...logsData]);
    }
    const onDelLog = (index) => {
        console.log(index);
        const newLog = [...logsData];
        newLog.splice(index, 1);
        setLogsData(newLog);
    }
    return <div className="app">
        <LogsForm onSaveLog={saveLogHandler}/>
        <Logs logsData={logsData} onDelLog={onDelLog}/>
    </div> 
}
export default App;