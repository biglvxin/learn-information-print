import Card from "../UI/Card/Card";
import LogItem from "./LogItem/LogItem";
import './Logs.css';

const Logs = () => {
    
    const logsData = [
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
    ];
    const logItemData =  logsData.map(item => {
        return  <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>
    });
    return <Card className="logs">
            {
                logItemData
            }  
    </Card>
    // return <div className="logs">
    //     <LogItem date={new Date(2021,7,20,19,0)} desc={"学习前端"} time={"50"}/>
    //     <LogItem date={new Date(2022,5,22,5,30)} desc={"学习React"} time={"30"}/>
    // </div>
};
export default Logs;