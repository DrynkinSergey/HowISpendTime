import { useEffect, useId } from "react"
import { Timers } from "./components/Timers"
import { UserInfo } from "./components/UserInfo/UserInfo"

import './scss/main.scss'
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { addTimer, setTimers } from "./store/slices/timerSlice"


const App = () => {
  const id = useId()
  const dispatch = useAppDispatch();
  const { timers } = useAppSelector(state => state.timer)
  const newTimer = () => {
    let timer = {
      id,
      title: 'Typescript',
      time: '59',
      color: '#FD8368'
    }
    dispatch(addTimer(timer))
  }
  useEffect(() => {
    const data = localStorage.getItem('timers');
    if (data) dispatch(setTimers(JSON.parse(data)))
  }, [])
  useEffect(() => {
    window.localStorage.setItem('timers', JSON.stringify(timers))
  }, [timers])

  return (
    <div className="app">
      <div className="container">
        <UserInfo />
        <div className="timerList">
          <Timers />
        </div>
        {/* <div style={{ width: '40px', height: '40px', backgroundColor: 'red' }} onClick={newTimer}>
          +
        </div> */}
      </div>
    </div>

  )
}

export default App
