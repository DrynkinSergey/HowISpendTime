import React, { ReactNode } from 'react'

import { Timer } from './Timer/Timer'
const Timers = () => {
  const timersArr = [
    {
      id: 1,
      title: 'Typescript',
      time: '59',
      color: '#FD8A68'
    },
    {
      id: 2,
      title: 'React',
      time: '38',
      color: '#59C3E4'
    },
    {
      id: 3,
      title: 'ReduxToolkit',
      time: '30',
      color: '#FD5E7D'
    },
    {
      id: 4,
      title: 'Javascript',
      time: '138',
      color: '#713DCD'
    }
  ];
  // const [state, useState] = React.useState(timersArr)

  return (<>
    {
      timersArr.map(timer => <Timer key={timer.id} {...timer} />)
    }

  </>
  )

}

export { Timers }