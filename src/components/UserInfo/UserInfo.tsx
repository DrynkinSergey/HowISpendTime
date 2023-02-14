import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setName, setSurname } from '../../store/slices/userSlice'
import Modal from '../Modal'
import s from './userInfo.module.scss'
const UserInfo = () => {
  const statPeriod = ['Daily', 'Weekly', 'Monthly']
  const { name, surname, photoUrl } = useAppSelector(state => state.user.userInfo)
  const dispatch = useAppDispatch();


  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={s.userInfo}>
      <div className={s.userBlockInfo}>
        <div className={s.userPhoto}>
          <img src={photoUrl} alt="userPhoto" />
        </div>
        <div>
          <button onClick={() => setIsOpen(true)}>
            changeUser
          </button>
          {isOpen &&
            <Modal setIsOpen={setIsOpen}
              title='ChangeUser'>
              <label htmlFor="name">name</label>
              <input type="text" name='name' onChange={(e) => dispatch(setName(e.currentTarget.value))} />
              <label htmlFor="surname">surname</label>
              <input type="text" name='surname' onChange={(e) => dispatch(setSurname(e.currentTarget.value))} />
            </Modal>}
          <h2 >{name} </h2>
          <h2>{surname}</h2>
        </div>
      </div>

      <div className={s.statPeriod}>
        <ul>
          {
            statPeriod.map(period => <li key={period}>{period}</li>)
          }
        </ul>

      </div>
    </div >
  )
}

export { UserInfo }

