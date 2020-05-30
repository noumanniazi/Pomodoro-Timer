import React, { useState, useEffect } from 'react';
// @ts-ignore
import alarm from '../../assets/alarm.mp3';
import './Timer.scss';

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(1500);
    const [active, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState(1); //values will be 1,2,3 for focus, shortbreak and long break respectively
    // const { reset } = props;
    useEffect(() => {

        if (active && seconds !== 0) {
            let interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);

            return () => clearInterval(interval)
        }
        if (seconds === 0) {
            //beeper
            let audio = new Audio(alarm);
            audio.play();
        }
    }, [seconds, active]);
    const handleTimerChange = (link: number) => {
        if (activeLink !== link) {
            setActiveLink(link);
            setSeconds(link === 1 ? 1500 : link === 2 ? 300 : 600);
        }
    }
    return (
        <div className="content-body">
            <ul className="timer-links">
                <li onClick={() => { handleTimerChange(1) }} className={`link-item ${activeLink === 1 ? 'active' : ''}`}>Focus</li>
                <li onClick={() => { handleTimerChange(2) }} className={`link-item ${activeLink === 2 ? 'active' : ''}`}>Short Break</li>
                <li onClick={() => { handleTimerChange(3) }} className={`link-item ${activeLink === 3 ? 'active' : ''}`}>Long Break</li>
            </ul>
            <div className="timer">
                <div className='time'>
                    {Math.floor(seconds / 60) < 10 ? `0${Math.floor(seconds / 60)}` : Math.floor(seconds / 60)}:{(seconds - (Math.floor(seconds / 60) * 60)) < 10 ? `0${seconds - (Math.floor(seconds / 60) * 60)}` : seconds - (Math.floor(seconds / 60) * 60)}
                </div>
                <div>
                    <button className={`btn start ${active === true ? 'active' : ''}`} onClick={() => {
                        setActive(true);
                    }}>Start</button>
                    <button className={`btn stop ${active === false ? 'active' : ''}`} onClick={() => {
                        setActive(false)
                    }}>Stop</button>
                    <button className='btn reset' onClick={() => {
                        setActive(false);
                        setSeconds(activeLink === 1 ? 1500 : activeLink === 2 ? 300 : 600);
                    }}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
