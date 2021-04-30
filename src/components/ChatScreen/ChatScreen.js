import {Screen} from "../Screen/Screen";
import './ChatScreen.scss';
import {useState, useEffect} from "react";


export function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [valueTextarea, setValueTextarea] = useState('');

    function sendMessage() {
        const newMessage = valueTextarea.trim();
        if (newMessage) {
            setMessages([...messages, {text : newMessage}]);
            setValueTextarea('');
        }
    }

    return <Screen id={'chat'}>
        <div className="chat">
            <div className="chat__form">
                <textarea className={'chat__textarea input'} placeholder={'Введите сообщение'} onChange={(e) => setValueTextarea( e.target.value)} value={valueTextarea}/>
                <button className={'chat__btn'} onClick={sendMessage}>Отправить</button>
            </div>
            <div className="chat__body">

                <div className="messages">
                    {
                        messages.map((item,index) => <Message key={index} text={item.text}/>)
                    }
                </div>

            </div>
        </div>

    </Screen>
}

function Message({text}) {
    const [currentText, setCurrentText] = useState('');
    const [inAnimation, setInAnimation] = useState(true);
    useEffect(() => {
        animateText(text).then(() => {
            setInAnimation(false);
        });
    }, []);

    async function animateText(text) {
        let textArr = text.split('');
        for (let index in textArr) {
            await new Promise((resolve) => setTimeout(() => {
                setCurrentText((prevState) => prevState +textArr[index]);
                resolve();
            }, 50));
        }
    }



    return <div className={'message'}><span  className={'message__text'}>{currentText}</span>
        {
            inAnimation && <span className={'message__typing'}>.</span>
        }
    </div>;
}
