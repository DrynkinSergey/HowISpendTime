import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './../store/store'

import { Timer } from './Timer/Timer'
const Timers = () => {
  const timers = useSelector((state: RootState) => state.timer.timers)
  return (<>
    {
      timers.map(timer => <Timer key={timer.id} {...timer} />)
    }

  </>
  )

}

export { Timers }