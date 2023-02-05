import { Timers } from "./components/Timers"
import { UserInfo } from "./components/UserInfo/UserInfo"

import './scss/main.scss'

const App = () => {

  return (
    <div className="app">
      <div className="container">
        <UserInfo />
        <div className="timerList">
          <Timers />
        </div>
      </div>
    </div>

  )
}

export default App
