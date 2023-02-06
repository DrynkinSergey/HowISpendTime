import React from 'react'
import s from './userInfo.module.scss'
const UserInfo = () => {
  const statPeriod = ['Daily', 'Weekly', 'Monthly']
  return (
    <div className={s.userInfo}>
      <div className={s.userBlockInfo}>
        <div className={s.userPhoto}>
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="userPhoto" />
        </div>
        <div>
          <h1>Sergey D.</h1></div>
      </div>

      <div className={s.statPeriod}>
        <ul>
          {
            statPeriod.map(period => <li key={period}>{period}</li>)
          }
        </ul>

      </div>
    </div>
  )
}

export { UserInfo }