import { useEffect } from "react";
import { useState } from "react";


const Clock = () => {

    const [time, setTime] = useState(new Date());
    

    useEffect(() => {
        const Interval = setInterval(() => {
            setTime(new Date());
        }, 1000);


        return  () => {
            clearInterval(Interval);
            console.log("Interval Cleared");
        }
    },[])

    return  <>
        <span>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</span>
    </>
}

export default Clock;