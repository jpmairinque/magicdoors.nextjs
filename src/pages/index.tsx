import { useState } from 'react'

import Door from '../components/Door/Door'
import Gift from '../components/Gift/Gift'
import DoorModel from '../model/door'

export default function Home() {

  const [d1, setD1] = useState(new DoorModel(1, false,true))

  return (
    < >
      <Door door={d1}/>
         
      
    </>
  )
}
