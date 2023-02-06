import React, { useState } from 'react'
import { format, formatDistance, min, subHours } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useStopwatch } from 'react-timer-hook';
import { TimerProps } from '../../types/types'
import s from './timer.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { removeItem } from '../../store/slices/timerSlice'
const Timer: React.FC<TimerProps> = ({ title, time, color, id }) => {
    const [inProgress, setInProgress] = useState(false);
    const [isHover, setIsHover] = useState(false);

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


        return (
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '25px' }}>
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                <button className={`${s.controlTimerOption} ${s.start}`} onClick={start}>Start</button>
                <button className={`${s.controlTimerOption} ${s.pause}`} onClick={pause}>Pause</button>
                <button className={`${s.controlTimerOption} ${s.stop}`} onClick={() => {
                    reset(undefined)
                    pause()
                    console.log(hours, minutes, seconds)
                }
                }>reset</button>

            </div>
        );
    }

    return (
        <div className={s.timer} style={{ backgroundColor: color }}>
            <div className={s.wrapper}>
                <div className={s.titleAndFn}>   <span className={s.titleOfTimer}>{title}</span>


                </div>
                <span className={s.timeOfTimer}>{time}hrs</span>
                <span className={s.statForPer}>Last Week  - {time}hrs</span>
                <MyStopwatch />
                {/* {isHover && <div onClick={() => removeTimer(id)} className={s.deleteTimer}>x</div>} */}
            </div>

        </div >
    )
}

export { Timer }