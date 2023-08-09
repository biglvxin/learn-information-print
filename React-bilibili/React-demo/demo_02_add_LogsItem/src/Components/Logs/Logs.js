import Card from "../UI/Card/Card";
import LogItem from "./LogItem/LogItem";
import './Logs.css';

const Logs = (props) => {
    console.log(props)

    let logItemData =  props.logsData.map((item, index) => {
        return  <LogItem 
                        key={item.id} 
                        date={item.date} 
                        desc={item.desc} 
                        time={item.time}
                        onDelLog={() => props.onDelLog(index)}
                        >
                </LogItem>
    });

    if(!logItemData.length) {
        logItemData = <p className="no-logs">没要找到日志！</p>;
    }
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