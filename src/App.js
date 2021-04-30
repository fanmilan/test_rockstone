import './App.css';
import {TimeScreen} from "./components/TimeScreen/TimeScreen";
import {useState} from "react";
import {ChatScreen} from "./components/ChatScreen/ChatScreen";
import {useSwipeable} from "react-swipeable";


export default function App() {
    const [activeScreen, setActiveScreen] = useState(0);

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            switch (eventData.dir) {
                case 'Left':
                    setActiveScreen(1);
                    break;
                case 'Right':
                    setActiveScreen(0);
                    break;
                default:
                    break;
            }
        },
        trackMouse: true,
    });

    const style = {
        transform: `translate(${-100 * activeScreen}%)`
    }

    function changeScreen(newScreen) {
        setActiveScreen(newScreen);
    }


    return (
        <div className="App">
            <div {...handlers} className="screens" style={style}>
                <ChatScreen handleClick={changeScreen.bind(null, 1)}/>
                <TimeScreen handleClick={changeScreen.bind(null, 0)}/>
            </div>
        </div>
    );
}

