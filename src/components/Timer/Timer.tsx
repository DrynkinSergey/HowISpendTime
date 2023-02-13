import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeItem, setTime } from '../../store/slices/timerSlice';
import { TimerProps } from '../../types/types';
import s from './timer.module.scss';



const Timer: React.FC<TimerProps> = ({ title, color, id, time }) => {

    const [inProgress, setInProgress] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const { timers } = useAppSelector(state => state.timer);
    let btnsClasses;

    const dispatch = useAppDispatch();
    const removeTimer = (id: number) => {
        dispatch(removeItem(id))
    }

    function MyStopwatch() {
        const {
            seconds,
            minutes,
            hours,
            isRunning,
            start,
            pause,
            reset,
        } = useStopwatch({ autoStart: false });
        btnsClasses = isRunning ? `${s.controlTimerOption} ${s.timerControl} ${s.active}` : `${s.controlTimerOption} ${s.timerControl} `;


        return (
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '25px' }}>
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                <button disabled={isRunning} className={btnsClasses} onClick={start}>Start</button>
                <button className={btnsClasses} onClick={pause}>Pause</button>
                <button className={btnsClasses} onClick={() => {
                    reset(undefined)
                    pause()
                    dispatch(setTime({ seconds, hours, minutes, id }))
                }}>Stop</button>
            </div >
        );
    }

    return (
        <div className={s.timer} style={{ backgroundColor: color }}>
            <div className={s.wrapper}>
                <div className={s.titleAndFn}>   <span className={s.titleOfTimer}>{title}</span>
                </div>
                <div className={s.currentTime}><span className={s.timeOfTimer}>{time.hours} hrs</span>
                    <span className={s.timeOfTimer}>{time.minutes} mins</span>
                    <span className={s.timeOfTimer}>{time.seconds} secs</span></div>
                <span className={s.statForPer}>Last Week  - {time.hours}hrs</span>
                <MyStopwatch />
            </div>

        </div >
    )
}

export { Timer };

