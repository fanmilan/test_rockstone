import {Screen} from "../Screen/Screen";
import {useState, useEffect} from "react";
import './TimeScreen.scss';

export function TimeScreen({handleClick}) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);




    return <Screen id={'time'}>
        <div className={'time'} onClick={handleClick}>
            {date.toLocaleTimeString()}
        </div>
    </Screen>
}