import React from 'react'
import { TimerProps } from '../../types/types'
import s from './timer.module.scss'
const Timer: React.FC<TimerProps> = ({ title, time, color }) => {
    return (
        <div className={s.timer} style={{ backgroundColor: color }}>
            <div className={s.wrapper}>
                <span className={s.titleOfTimer}>{title}</span>
                <span className={s.timeOfTimer}>{time}hrs</span>
                <span className={s.statForPer}>Last Week  - {time}hrs</span>
            </div>

        </div>
    )
}

export { Timer }